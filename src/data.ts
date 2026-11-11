export const CAFE = {
  name: 'Energy Hub Cafe',
  siteUrl: 'https://www.energyhub.cafe/',
  addressLine1: 'Al Tayer Tower, G Floor, Shop 5',
  addressLine2: '19 Street, Al Nahda, Sharjah',
  landmark: 'Near New Life Style Way Gym',
  phone: '+971 6 742 3253',
  phoneE164: '+97167423253',
  phoneHref: 'tel:+97167423253',
  whatsappNumber: '+971 50 725 0627',
  whatsappUrl: 'https://wa.me/971507250627',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Energy+Hub+Cafe+Al+Tayer+Tower+Al+Nahda+Sharjah',
  noonUrl: 'https://food.noon.com/uae-en/outlet/NRGYHB5ASR/',
  googleUrl: 'https://share.google/IfVIvfcdFDtPf23Gh',
  instagramUrl: 'https://www.instagram.com/energyhub.cafe',
  instagramHandle: '@energyhub.cafe',
  hours: 'Daily, 5:00 AM – 12:00 AM',
  hoursShort: '5:00 AM – 12:00 AM',
};

export interface MenuItem {
  name: string;
  price: string;
  note?: string;
  /** key into dish-manifest.json */
  img?: string;
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

/** Prices in AED, from the cafe's final printed menu (all items inclusive of 5% VAT). */
export const menu: MenuSection[] = [
  {
    id: 'protein',
    label: 'Protein meals',
    groups: [
      {
        title: 'High-protein meals',
        items: [
          { name: 'Chicken-egg protein matrix bowl', price: '33', note: '97 g protein · 840 kcal', img: 'matrix-bowl' },
          { name: 'Grilled chicken quinoa power bowl', price: '30', note: '71 g protein · 640 kcal', img: 'quinoa-bowl' },
          { name: 'Avocado high-protein chicken salad', price: '32', note: '90 g protein · 650 kcal', img: 'avocado-chicken-salad' },
          { name: 'Weight-gain protein meal', price: '28', note: '63 g protein · 795 kcal', img: 'weight-gain-meal' },
          { name: 'Mediterranean tuna protein salad', price: '30', note: '70 g protein · 470 kcal', img: 'tuna-salad' },
        ],
      },
      {
        title: 'Burgers',
        items: [
          { name: 'Double bunless patty burger', price: '18', img: 'double-burger' },
          { name: 'Avocado chicken bunless burger', price: '15', img: 'avocado-chicken-burger' },
        ],
      },
      {
        title: 'Salads',
        items: [
          { name: 'Caesar salad, veg', price: '15', img: 'caesar-veg' },
          { name: 'Caesar salad, chicken', price: '20', img: 'caesar-chicken' },
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
          { name: 'Avocado', price: '10 / 13', img: 'juice-avocado' },
          { name: 'Grapes', price: '10 / 13', img: 'juice-grapes' },
          { name: 'Orange', price: '10 / 13', img: 'juice-orange' },
          { name: 'Watermelon', price: '10 / 13', img: 'juice-watermelon' },
          { name: 'Apple', price: '10 / 13', img: 'juice-apple' },
          { name: 'Pomegranate', price: '10 / 13', img: 'juice-pomegranate' },
          { name: 'Lemon mint', price: '10 / 13', img: 'juice-lemon-mint' },
        ],
        foot: 'Medium / large',
      },
      {
        title: 'Shakes & sports drinks',
        items: [
          { name: 'Protein shake (M)', price: '15', img: 'protein-shake' },
          { name: 'Muscle recovery (M)', price: '15', img: 'muscle-recovery' },
          { name: 'Pre-workout (M)', price: '8', img: 'pre-workout' },
          { name: 'Post-workout BCAA (M)', price: '8', img: 'post-workout' },
          { name: 'Pre-workout & protein combo', price: '13', note: 'Gym members only' },
        ],
      },
      {
        title: 'Tea & coffee',
        items: [
          { name: 'Tea', price: '2', img: 'tea' },
          { name: 'Coffee', price: '3', img: 'coffee' },
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
          { name: 'Avocado toast', price: '20', img: 'avocado-toast' },
          { name: 'Egg Benedict', price: '18', img: 'egg-benedict' },
          { name: 'Classic French toast', price: '20', img: 'french-toast' },
          { name: 'Vegetable momos', price: '15', img: 'veg-momos' },
          { name: 'Chicken momos', price: '18', img: 'chicken-momos' },
          { name: 'Paneer momos', price: '18', img: 'paneer-momos' },
        ],
      },
      {
        title: 'South Indian breakfast sets',
        items: [
          { name: 'Idly sambar set', price: '7', note: 'Two idly, sambar, chutney', img: 'idly-sambar' },
          { name: 'Idiyappam set', price: '7', note: '4 idiyappam, egg roast', img: 'idiyappam' },
          { name: 'Puttu kadala set', price: '7', note: 'Puttu, small banana, kadala curry', img: 'puttu-kadala' },
        ],
        foot: 'South Indian snacks are made to order, perfect for sharing.',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Pasta & pizza',
    groups: [
      {
        title: 'Pasta',
        items: [
          { name: 'Red pasta, veg', price: '18', img: 'red-pasta-veg' },
          { name: 'Red pasta, chicken', price: '20', img: 'red-pasta-chicken' },
          { name: 'Pink pasta, veg', price: '18', img: 'pink-pasta-veg' },
          { name: 'Pink pasta, chicken', price: '20', img: 'pink-pasta-chicken' },
          { name: 'White pasta, veg', price: '18', img: 'white-pasta-veg' },
          { name: 'White pasta, chicken', price: '20', img: 'white-pasta-chicken' },
          { name: 'Mac & cheese, veg', price: '16', img: 'mac-veg' },
          { name: 'Mac & cheese, chicken', price: '18', img: 'mac-chicken' },
        ],
      },
      {
        title: 'Pizza',
        items: [
          { name: 'Margherita pizza', price: '25', img: 'pizza-margherita' },
          { name: 'Veg pizza', price: '25', img: 'pizza-veg' },
          { name: 'Chicken pizza', price: '30', img: 'pizza-chicken' },
          { name: 'Pepperoni pizza', price: '30', img: 'pizza-pepperoni' },
          { name: 'BBQ chicken pizza', price: '40', img: 'pizza-bbq' },
        ],
      },
      {
        title: 'Lasagne, risotto & noodles',
        items: [
          { name: 'Beef lasagne', price: '20', img: 'lasagne' },
          { name: 'Butter chicken risotto', price: '25', img: 'risotto' },
          { name: 'Ramen Buldak noodles', price: '20', img: 'ramen-noodles' },
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
          { name: 'BBQ chicken tenders', price: '20', img: 'bbq-tenders' },
          { name: 'Mango habanero chicken tenders', price: '20', img: 'habanero-tenders' },
          { name: 'Chicken tenders', price: '18' },
          { name: 'Chicken melt sandwich', price: '22', img: 'melt-sandwich' },
          { name: 'Chicken rainbow rice', price: '20', img: 'rainbow-rice' },
          { name: 'Chicken sandwich', price: '8', img: 'chicken-sandwich' },
          { name: 'Chicken tacos', price: '22', img: 'tacos' },
          { name: 'Veg quesadilla', price: '18', img: 'quesadilla-veg' },
          { name: 'Chicken quesadilla', price: '20', img: 'quesadilla-chicken' },
          { name: 'Veg burrito wrap', price: '15', img: 'burrito-veg' },
          { name: 'Chicken burrito wrap', price: '18', img: 'burrito-chicken' },
          { name: 'Corn cup (M)', price: '15', img: 'corn-cup' },
          { name: 'Potato spring roll', price: '12', img: 'spring-roll' },
        ],
      },
      {
        title: 'Fries & wings',
        items: [
          { name: 'Potato fries', price: '13', img: 'fries' },
          { name: 'Sweet potato fries', price: '15', img: 'sweet-potato-fries' },
          { name: 'Loaded fries, veg', price: '16', img: 'loaded-veg' },
          { name: 'Loaded fries, chicken', price: '22', img: 'loaded-chicken' },
          { name: 'Mac & cheese loaded fries', price: '20', img: 'mac-loaded' },
          { name: 'Mac & cheese loaded fries, chicken', price: '22', img: 'mac-loaded-chicken' },
          { name: 'Chicken wings', price: '14', img: 'wings' },
          { name: 'Chicken wings, spicy', price: '15', img: 'wings' },
        ],
      },
      {
        title: 'Potato & chicken',
        items: [
          { name: 'Mashed potato with chicken', price: '22', img: 'mashed-potato' },
          { name: 'Sweet potato mash with chicken', price: '24', img: 'sweet-potato-mash' },
        ],
      },
    ],
  },
  {
    id: 'cakes',
    label: 'Cakes',
    groups: [
      {
        title: 'Cakes & cheesecakes',
        items: [
          { name: 'Strawberry cheesecake', price: '20', img: 'strawberry-cheesecake' },
          { name: 'Blueberry cheesecake', price: '20', img: 'blueberry-cheesecake' },
          { name: 'Protein cake, chocolate', price: '15', img: 'protein-cake' },
          { name: 'San Sebastian cheesecake', price: '18', img: 'san-sebastian' },
          { name: 'Tiramisu cake', price: '20', img: 'tiramisu' },
          { name: 'Chocolate cake', price: '14', img: 'chocolate-cake' },
        ],
      },
    ],
  },
];

export const faq = [
  {
    q: 'How do I order?',
    a: 'Message us on WhatsApp at +971 50 725 0627 or call +971 6 742 3253. We also deliver through noon FOOD, Talabat and Keeta.',
  },
  {
    q: 'When are you open?',
    a: 'Every day, 5:00 AM – 12:00 AM.',
  },
  {
    q: 'Do the prices include VAT?',
    a: 'Yes. All menu prices are in AED and include 5% VAT.',
  },
  {
    q: 'Who is the pre-workout and protein combo for?',
    a: 'It is for gym members only, at AED 13.',
  },
  {
    q: 'Can I pre-order a birthday cake?',
    a: 'Yes. Birthday cakes are made to pre-order for your day. Message us on WhatsApp with the date and what you have in mind.',
  },
  {
    q: 'Do you cater for groups?',
    a: 'South Indian snacks are made to order and perfect for sharing. Ask us on WhatsApp about ordering for a group.',
  },
];

/** Verbatim guest reviews. Add only reviews the cafe has approved, exactly as written, with the name as shown. */
export interface Review {
  text: string;
  author: string;
  source: string;
  url: string;
}
export const reviews: Review[] = [];
