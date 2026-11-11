export const CAFE = {
  name: 'Energy Hub Cafe',
  siteUrl: 'https://www.energyhub.cafe/',
  addressLine1: 'Al Tayer Tower, G Floor, Shop 5',
  addressLine2: '19 Street, Al Nahda, Sharjah',
  phone: '06 742 3253',
  phoneHref: 'tel:+97167423253',
  whatsappUrl: 'https://wa.me/971507250627',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Energy+Hub+Cafe+Al+Tayer+Tower+Al+Nahda+Sharjah',
  noonUrl: 'https://food.noon.com/uae-en/outlet/NRGYHB5ASR/',
  keetaUrl: 'https://www.keeta.com',
  talabatUrl: 'https://www.talabat.com/uae',
  instagramUrl: 'https://www.instagram.com/energyhub_cafe',
  hours: 'Daily, 6:00 AM – 11:00 PM',
};

export interface MenuItem {
  name: string;
  price: string;
  note?: string;
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
  foot?: string;
}

export interface MenuSection {
  id: string;
  label: string;
  groups: MenuGroup[];
}

/** Prices in AED, transcribed from the cafe's printed menu boards (inclusive of 5% VAT). */
export const menu: MenuSection[] = [
  {
    id: 'protein',
    label: 'Protein meals',
    groups: [
      {
        title: 'High-protein meals',
        items: [
          { name: 'Chicken-egg protein matrix bowl', price: '33', note: '97 g protein · 840 kcal' },
          { name: 'Grilled chicken quinoa power bowl', price: '30', note: '71 g protein · 640 kcal' },
          { name: 'Avocado high-protein chicken salad', price: '32', note: '90 g protein · 650 kcal' },
          { name: 'Weight-gain protein meal', price: '28', note: '63 g protein · 795 kcal' },
          { name: 'Mediterranean tuna protein salad', price: '30', note: '70 g protein · 470 kcal' },
        ],
      },
      {
        title: 'Burgers',
        items: [
          { name: 'Double bunless patty burger', price: '18', note: '93 g protein' },
          { name: 'Avocado chicken bunless burger', price: '15' },
        ],
      },
      {
        title: 'Salads',
        items: [
          { name: 'Caesar salad, veg', price: '15' },
          { name: 'Caesar salad, chicken', price: '20' },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Shakes & juices',
    groups: [
      {
        title: 'Fresh juices',
        items: [
          { name: 'Avocado', price: '10 / 13' },
          { name: 'Grapes', price: '10 / 13' },
          { name: 'Orange', price: '10 / 13' },
          { name: 'Watermelon', price: '10 / 13' },
          { name: 'Apple', price: '10 / 13' },
          { name: 'Pomegranate', price: '10 / 13' },
          { name: 'Lemon mint', price: '10 / 13' },
        ],
        foot: 'Medium / large',
      },
      {
        title: 'Shakes & sports drinks',
        items: [
          { name: 'Protein shake (M)', price: '15' },
          { name: 'Muscle recovery (M)', price: '15' },
          { name: 'Pre-workout (M)', price: '8' },
          { name: 'Post-workout BCAA (M)', price: '8' },
          { name: 'Pre-workout & protein combo', price: '13', note: 'Gym members only' },
        ],
      },
      {
        title: 'Tea & coffee',
        items: [
          { name: 'Tea', price: '2' },
          { name: 'Coffee', price: '3' },
        ],
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    groups: [
      {
        title: 'Breakfast',
        items: [
          { name: 'Avocado toast', price: '20' },
          { name: 'Egg Benedict', price: '18' },
          { name: 'Classic French toast', price: '20' },
          { name: 'Vegetable momos', price: '15' },
          { name: 'Chicken momos', price: '18' },
          { name: 'Paneer momos', price: '18' },
        ],
      },
      {
        title: 'South Indian breakfast sets',
        items: [
          { name: 'Idly sambar set', price: '7', note: 'Two idly, sambar, chutney' },
          { name: 'Idiyappam set', price: '7', note: '4 idiyappam, egg roast' },
          { name: 'Puttu kadala set', price: '7', note: 'Puttu, small banana, kadala curry' },
        ],
        foot: 'South Indian snacks are also available, made to order.',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Pasta, pizza & more',
    groups: [
      {
        title: 'Pasta',
        items: [
          { name: 'Red pasta, veg', price: '18' },
          { name: 'Red pasta, chicken', price: '20' },
          { name: 'Pink pasta, veg', price: '18' },
          { name: 'Pink pasta, chicken', price: '20' },
          { name: 'White pasta, veg', price: '18' },
          { name: 'White pasta, chicken', price: '20' },
          { name: 'Mac & cheese, veg', price: '16' },
          { name: 'Mac & cheese, chicken', price: '18' },
        ],
      },
      {
        title: 'Pizza',
        items: [
          { name: 'Margherita pizza', price: '25' },
          { name: 'Veg pizza', price: '25' },
          { name: 'Chicken pizza', price: '30' },
          { name: 'Pepperoni pizza', price: '30' },
          { name: 'BBQ chicken pizza', price: '40' },
        ],
      },
      {
        title: 'Lasagne, risotto & noodles',
        items: [
          { name: 'Beef lasagne', price: '20' },
          { name: 'Butter chicken risotto', price: '25' },
          { name: 'Ramen Buldak noodles', price: '20' },
        ],
      },
    ],
  },
  {
    id: 'bites',
    label: 'Bites & fries',
    groups: [
      {
        title: 'Chicken & signature bites',
        items: [
          { name: 'BBQ chicken tenders', price: '20' },
          { name: 'Mango habanero chicken tenders', price: '20' },
          { name: 'Chicken tenders', price: '18' },
          { name: 'Chicken melt sandwich', price: '22' },
          { name: 'Chicken rainbow rice', price: '20' },
          { name: 'Chicken sandwich', price: '8' },
          { name: 'Chicken tacos', price: '22' },
          { name: 'Veg quesadilla', price: '18' },
          { name: 'Chicken quesadilla', price: '20' },
          { name: 'Veg burrito wrap', price: '15' },
          { name: 'Chicken burrito wrap', price: '18' },
          { name: 'Corn cup (M)', price: '15' },
          { name: 'Potato spring roll', price: '12' },
        ],
      },
      {
        title: 'Fries & wings',
        items: [
          { name: 'Potato fries', price: '13' },
          { name: 'Sweet potato fries', price: '15' },
          { name: 'Loaded fries, veg', price: '16' },
          { name: 'Loaded fries, chicken', price: '22' },
          { name: 'Mac & cheese loaded fries', price: '20' },
          { name: 'Mac & cheese loaded fries, chicken', price: '22' },
          { name: 'Chicken wings', price: '14' },
          { name: 'Chicken wings, spicy', price: '15' },
        ],
      },
      {
        title: 'Potato & chicken',
        items: [
          { name: 'Mashed potato with chicken', price: '22' },
          { name: 'Sweet potato mash with chicken', price: '24' },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Cakes',
    groups: [
      {
        title: 'Cakes & cheesecakes',
        items: [
          { name: 'Strawberry cheesecake', price: '20' },
          { name: 'Blueberry cheesecake', price: '20' },
          { name: 'Protein cake, chocolate', price: '15' },
          { name: 'San Sebastian cheesecake', price: '18' },
          { name: 'Tiramisu cake', price: '20' },
          { name: 'Chocolate cake', price: '14' },
        ],
        foot: 'Birthday cakes are made to pre-order. Ask on WhatsApp.',
      },
    ],
  },
];

export const boards = [
  { n: 1, alt: 'Menu board: breakfast, salads, pasta, breakfast sets, tea and coffee, South Indian snacks and birthday cakes' },
  { n: 2, alt: 'Menu board: high-protein meals, fresh juices, lasagne, risotto, pizza, noodles and Energy Hub favourites' },
  { n: 3, alt: 'Menu board: chicken bites, fries, burgers, cakes, protein shake, sports drinks and the pre-workout and protein combo' },
];
