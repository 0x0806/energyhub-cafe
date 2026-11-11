import { CAFE, menu } from './data';

const base = CAFE.siteUrl.replace(/\/$/, '');

const description =
  'Healthy high-protein meals, protein bowls, fresh juices, breakfast, pasta, pizza and cakes near New Life Style Way Gym in Al Nahda, Sharjah. Order on WhatsApp or by delivery. Open daily 5 AM to midnight.';

function offers(price: string) {
  const prices = price.split('/').map((p) => p.trim());
  const labels = prices.length === 2 ? ['Medium', 'Large'] : [''];
  return prices.map((p, i) => ({
    '@type': 'Offer',
    price: p,
    priceCurrency: 'AED',
    ...(labels[i] ? { name: labels[i] } : {}),
  }));
}

/** Structured data generated from src/data.ts at build time, so it cannot drift from the page. */
export function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CafeOrCoffeeShop',
        '@id': `${base}/#cafe`,
        name: CAFE.name,
        description,
        url: `${base}/`,
        image: `${base}/img/brand/og-image.jpg`,
        logo: `${base}/img/brand/logo-640.png`,
        servesCuisine: ['Healthy', 'High protein', 'Cafe', 'South Indian', 'Breakfast', 'Juices'],
        priceRange: 'AED 2 - AED 40',
        telephone: CAFE.phoneE164,
        hasDelivery: true,
        hasTakeout: true,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Al Tayer Tower, G Floor, Shop 5, 19 Street',
          addressLocality: 'Al Nahda',
          addressRegion: 'Sharjah',
          addressCountry: 'AE',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '05:00',
            closes: '00:00',
          },
        ],
        sameAs: [CAFE.noonUrl, CAFE.instagramUrl],
        hasMenu: {
          '@type': 'Menu',
          name: `${CAFE.name} menu`,
          inLanguage: 'en',
          hasMenuSection: menu.flatMap((section) =>
            section.groups.map((g) => ({
              '@type': 'MenuSection',
              name: g.title,
              hasMenuItem: g.items.map((it) => ({
                '@type': 'MenuItem',
                name: it.name,
                ...(it.note ? { description: it.note } : {}),
                offers: offers(it.price),
              })),
            })),
          ),
        },
        potentialAction: {
          '@type': 'OrderAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: CAFE.whatsappUrl,
            actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
          },
        },
      },
      { '@type': 'WebSite', '@id': `${base}/#website`, name: CAFE.name, url: `${base}/`, inLanguage: 'en' },
    ],
  };
}
