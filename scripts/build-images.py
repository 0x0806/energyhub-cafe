"""Build optimized dish images from the cafe's transparent studio cutouts.

Usage: python3 scripts/build-images.py "<MENU PICTURES dir>" "<Links dir>"
Writes public/img/dishes/<slug>-<256|720>.webp (alpha, trimmed) and src/dish-manifest.json.
"""
import json, os, re, sys
from PIL import Image

SRC, LINKS = sys.argv[1], sys.argv[2]
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'img', 'dishes')
MANIFEST = os.path.join(os.path.dirname(__file__), '..', 'src', 'dish-manifest.json')
import shutil
shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(OUT, exist_ok=True)

def slug(name):
    return re.sub(r'[^a-z0-9]+', '-', os.path.splitext(name)[0].lower()).strip('-')

# clean public slug -> source file name
FILES = {
  'matrix-bowl': 'CHICKEN EGG PROTEIN MATRIX BOWL.png', 'quinoa-bowl': 'GRILLED CHICKEN QUINA BOWL.png',
  'avocado-chicken-salad': 'AVOCADO HIGH PROTEIN  CHICKEN SALAD.png', 'weight-gain-meal': 'WEIGHT GAIN PROTEIN MEAL.png',
  'tuna-salad': 'MEDITERANNEAN TUNA PROTEIN SALAD.png', 'double-burger': 'Bunless Burger 39 G.png',
  'avocado-chicken-burger': 'Avocado chicken Burger.png', 'caesar-veg': 'Cesar Salad without Chicken.png',
  'caesar-chicken': 'CAESAR SALAD (CHKN) (1).png',
  'juice-avocado': 'Avocado juice.png', 'juice-grapes': 'Grapes Juice.png', 'juice-orange': 'Orange Juice.png',
  'juice-watermelon': 'Water melon Juice.png', 'juice-apple': 'Apple Juice.png', 'juice-pomegranate': 'Pomogranite Juice.png',
  'juice-lemon-mint': 'Lemon Mint.png', 'protein-shake': 'Protein Shaker.png', 'muscle-recovery': 'MUSCLE RECOVERY - (M).png',
  'pre-workout': 'PRE WORKOUT - (M).png', 'post-workout': 'POST WORKOUT BCAA-(M).png', 'coffee': 'COFFE.png',
  'avocado-toast': 'Avocado Toast.png', 'egg-benedict': 'EGG BENEDICT.png', 'french-toast': 'Classic French Toast (Must Try).png',
  'veg-momos': 'VEG MOMOS.png', 'chicken-momos': 'CHICKEN MOMOS.png', 'paneer-momos': 'Paneer Momos.png',
  'idly-sambar': 'Iddly Set.png', 'idiyappam': 'Noolappam and EggRoast.png', 'puttu-kadala': 'PUT Sett.png',
  'south-indian-snacks': 'South Indian Snacks.png',
  'red-pasta-veg': 'Red Pasta Veg.png', 'red-pasta-chicken': 'Pasta Chicken.png', 'pink-pasta-veg': 'Pink Pasta_.png',
  'pink-pasta-chicken': 'Pink Pasta_Chicken.png', 'white-pasta-veg': 'White Pasta_Veg.png', 'white-pasta-chicken': 'White Pasta_Chick.png',
  'mac-veg': 'Mac & Cheese Veg.png', 'mac-chicken': 'Mac & Cheese Chicken.png',
  'pizza-margherita': 'Margarita Pizza.png', 'pizza-veg': 'Veg Pizza.png', 'pizza-chicken': 'Chicken Pizza.png',
  'pizza-pepperoni': 'pepperoni Pizza_.png', 'pizza-bbq': 'BBQ Chicken Pizza.png',
  'lasagne': 'Beef Lasagne.png', 'risotto': 'Butter Chicken Risotto.png', 'ramen-noodles': 'Remen Buldek_.png',
  'bbq-tenders': 'BBQ_Chicken tenders.png', 'habanero-tenders': 'Mango herbano Chicken Tenders.png',
  'melt-sandwich': 'Chicken Melt Sandwich.png', 'rainbow-rice': 'Chicken Rainbow Rice.png', 'chicken-sandwich': 'CHICKEN SANDWICH.png',
  'tacos': 'Chicken Tacos.png', 'quesadilla-veg': 'Veg Quesadilla.png', 'quesadilla-chicken': 'Chicken Quesadilla.png',
  'burrito-veg': 'vegBurritoWrap.png', 'burrito-chicken': 'Chicken Berrito Wrap.png', 'corn-cup': 'Corn Cup.png',
  'spring-roll': 'Potoate Spring Fries.png',
  'fries': 'Normal Potato Fries.png', 'sweet-potato-fries': 'Sweet Potato Fries.png', 'loaded-veg': 'Loaded veg Fries.png',
  'loaded-chicken': 'Loaded fries with chicken.png', 'mac-loaded': 'Mac & cheese Loaded fries.png',
  'mac-loaded-chicken': 'Mac & Cheese Loaded fries with Chicken.png', 'wings': 'Chicken Wings normal and Spicy.png',
  'mashed-potato': 'MASHED POTATO.png', 'sweet-potato-mash': 'SWEET POTATO MASH with Chicken.png',
  'strawberry-cheesecake': 'STRAWBERRY CHEESECAKE.png', 'blueberry-cheesecake': 'Blueberry Cheescake.png',
  'protein-cake': 'Protein Cake.png', 'san-sebastian': 'San Sebastian Cheesecake.png', 'tiramisu': 'Tiramisu Cake.png',
  'chocolate-cake': 'Chocolate Cake_.png', 'all-cakes': 'All Cakes.png',
}
LINK_FILES = {  # only in the Links folder
  'tea': 'vecteezy_two-glass-of-masala-milk-tea_55688116.png',
  'birthday-cake': 'Cake with Table.png',
}
BIG = {'matrix-bowl', 'juice-avocado', 'juice-pomegranate', 'pizza-bbq', 'pizza-pepperoni', 'strawberry-cheesecake', 'birthday-cake'}  # 720px: hero, signatures, cakes

def trim(im):
    bb = im.split()[3].point(lambda v: 255 if v > 8 else 0).getbbox()
    return im.crop(bb) if bb else im

manifest = {}
for key, fn in {**{k: (SRC, v) for k, v in FILES.items()}, **{k: (LINKS, v) for k, v in LINK_FILES.items()}}.items():
    folder, name = fn
    im = Image.open(os.path.join(folder, name)).convert('RGBA')
    if key == 'birthday-cake':  # keep the cake, stand and flowers; drop the table
        w, h = im.size
        im = im.crop((0, 0, w, int(h * 0.63)))
        # feather the cut edge of the tablecloth into the page background
        a = im.split()[3]
        fade = Image.new('L', im.size, 255)
        band = int(im.height * 0.13)
        for y in range(band):
            v = int(255 * (1 - y / band) ** 1.1)
            fade.paste(v, (0, im.height - band + y, im.width, im.height - band + y + 1))
        from PIL import ImageChops
        im.putalpha(ImageChops.multiply(a, fade))
    if key == 'tea':  # one glass is enough for a menu row
        w, h = im.size
        im = im.crop((0, 0, int(w * 0.5), h))
    im = trim(im)
    manifest[key] = {}
    for size in ((256, 720) if key in BIG else (256,)):
        c = im.copy(); c.thumbnail((size, size), Image.LANCZOS)
        c.save(os.path.join(OUT, f'{key}-{size}.webp'), 'WEBP', quality=72, alpha_quality=80, method=6)
        manifest[key][str(size)] = [c.width, c.height]
json.dump(manifest, open(MANIFEST, 'w'), indent=1, sort_keys=True)
print(len(manifest), 'dishes;', sum(len(v) for v in manifest.values()), 'files')
