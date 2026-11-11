import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Clock3, Instagram, MapPin, Menu as MenuIcon, MessageCircle, Phone, X } from 'lucide-react';
import BlurText from '@/components/BlurText';
import Magnet from '@/components/Magnet';
import SpotlightCard from '@/components/SpotlightCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CAFE, faq, menu, reviews } from './data';
import manifest from './dish-manifest.json';

type DishSize = '256' | '720';
const dims = manifest as unknown as Record<string, Partial<Record<DishSize, [number, number]>>>;

function Dish({ k, size, alt = '', eager = false, priority = false, className }: { k: string; size: DishSize; alt?: string; eager?: boolean; priority?: boolean; className?: string }) {
  const d = dims[k]?.[size];
  if (!d) return null;
  return (
    <img
      className={className}
      src={`/img/dishes/${k}-${size}.webp`}
      alt={alt}
      width={d[0]}
      height={d[1]}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : eager ? undefined : 'low'}
      decoding="async"
    />
  );
}

const waText = (text: string): string => `${CAFE.whatsappUrl}?text=${encodeURIComponent(text)}`;

const navLinks = [
  { href: '#signatures', label: 'Signatures' },
  { href: '#menu', label: 'Menu' },
  { href: '#visit', label: 'Visit' },
];

const signatures = [
  { id: 'bowls', title: 'Protein meals', line: 'From AED 28', img: 'matrix-bowl', alt: 'Chicken-egg protein matrix bowl', href: '#m-protein', wide: true },
  { id: 'juices', title: 'Fresh juices', line: 'AED 10 medium, 13 large', img: 'juice-pomegranate', alt: 'Pomegranate juice', href: '#m-drinks', wide: false },
  { id: 'pizza', title: 'Pizza', line: 'From AED 25', img: 'pizza-pepperoni', alt: 'Pepperoni pizza', href: '#m-mains', wide: false },
  { id: 'cakes', title: 'Cakes', line: 'From AED 14', img: 'strawberry-cheesecake', alt: 'Strawberry cheesecake', href: '#m-cakes', wide: true },
];

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return (): void => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap header-row">
          <a className="brand" href="#top" aria-label="Energy Hub Cafe, back to top">
            <img src="/img/brand/logo-256.webp" alt="" width={256} height={256} />
            <span>Energy Hub <i>Cafe</i></span>
          </a>
          <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link">{l.label}</a>
            ))}
            <a className="btn btn-gold" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Order on WhatsApp
            </a>
          </nav>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} aria-hidden="true" /> : <MenuIcon size={26} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 aria-label="Healthy high-protein food in Al Nahda, Sharjah">
                <BlurText as="span" srText={false} text="Healthy high-protein food" className="h1-line" delay={90} trigger="load" stepDuration={0.45} />{' '}
                <BlurText as="span" srText={false} text="in Al Nahda, Sharjah" className="h1-line h1-accent" delay={90} trigger="load" stepDuration={0.45} />
              </h1>
              <p className="lead">
                Protein meals, fresh juices, breakfast, pasta, pizza and cakes. {CAFE.landmark}.
              </p>
              <p className="fact"><strong>High-protein meals from AED 28.</strong> Open daily, {CAFE.hoursShort}.</p>
              <div className="actions">
                <Magnet padding={60} magnetStrength={4} maxOffset={10}>
                  <a className="btn btn-gold" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} aria-hidden="true" /> Order on WhatsApp
                  </a>
                </Magnet>
                <a className="btn btn-line" href="#menu">See the menu <ArrowRight size={18} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="stage" data-enter>
              <span className="halo" aria-hidden="true" />
              <Dish k="pizza-bbq" size="720" eager className="stage-pizza" />
              <Dish k="matrix-bowl" size="720" eager priority alt="Chicken-egg protein matrix bowl" className="stage-bowl" />
              <Dish k="juice-avocado" size="720" eager className="stage-juice" />
            </div>
          </div>
          <div className="partners">
            <div className="wrap partners-row" role="group" aria-labelledby="partners-h">
            <h2 id="partners-h">Also on</h2>
            <ul>
              <li><a className="partner" href={CAFE.noonUrl} target="_blank" rel="noopener noreferrer" aria-label="Order Energy Hub Cafe on noon FOOD"><img src="/img/partners/noon-food.webp" alt="" width={290} height={144} loading="lazy" /></a></li>
              <li><span className="partner"><img src="/img/partners/talabat.webp" alt="" width={290} height={144} loading="lazy" /></span><span className="sr-only">Talabat</span></li>
              <li><span className="partner"><img src="/img/partners/keeta.webp" alt="" width={144} height={144} loading="lazy" /></span><span className="sr-only">Keeta</span></li>
            </ul>
            </div>
          </div>
        </section>

        <section className="signatures" id="signatures" aria-labelledby="sig-h">
          <div className="wrap">
            <h2 id="sig-h">The <em>signature</em> plates</h2>
            <div className="sig-grid">
              {signatures.map((s) => (
                <SpotlightCard
                  key={s.id}
                  theme="dark"
                  spotlightColor="#c6a96b"
                  intensity={0.55}
                  spotlightSize={420}
                  className={`sig-card${s.wide ? ' is-wide' : ''}`}
                >
                  <a className="sig-link" href={s.href}>
                    <Dish k={s.img} size="720" alt={s.alt} />
                    <span className="sig-text">
                      <span className="sig-title">{s.title}</span>
                      <span className="sig-line">{s.line}</span>
                    </span>
                    <ArrowUpRight className="sig-arrow" size={22} aria-hidden="true" />
                  </a>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <section className="menu" id="menu" aria-labelledby="menu-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="menu-h">The <em>menu</em></h2>
              <p>All prices in AED, including 5% VAT.</p>
            </div>

            <nav className="menu-jump" aria-label="Menu sections">
              {menu.map((s) => (
                <a key={s.id} href={`#m-${s.id}`} className="chip">{s.label}</a>
              ))}
            </nav>

            {menu.map((section) => (
              <div className="menu-section" id={`m-${section.id}`} key={section.id}>
                <h3>{section.label}</h3>
                <div className="menu-groups">
                  {section.groups.map((g) => (
                    <div className="menu-group" key={g.title}>
                      <h4>{g.title}</h4>
                      <ul>
                        {g.items.map((it) => (
                          <li key={it.name}>
                            <span className="thumb">{it.img ? <Dish k={it.img} size="256" /> : null}</span>
                            <span className="item-name">
                              {it.name}
                              {it.note ? <small>{it.note}</small> : null}
                            </span>
                            <span className="item-price">{it.price}</span>
                          </li>
                        ))}
                      </ul>
                      {g.foot ? <p className="group-foot">{g.foot}</p> : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cakes" aria-labelledby="cakes-h">
          <div className="wrap cakes-grid">
            <div className="cakes-photo"><Dish k="birthday-cake" size="720" alt="Chocolate birthday cake with candles on a gold stand" /></div>
            <div className="cakes-copy">
              <h2 id="cakes-h">Birthday cakes, <em>made to pre-order</em></h2>
              <p className="lead">Freshly prepared for your special day. Tell us the date and we will take it from there.</p>
              <div className="actions">
                <a className="btn btn-gold" href={waText('Hi Energy Hub Cafe, I would like to pre-order a birthday cake.')} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} aria-hidden="true" /> Pre-order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews" aria-labelledby="reviews-h">
          <div className="wrap reviews-grid">
            <div>
              <h2 id="reviews-h">Guest <em>reviews</em></h2>
              <p className="lead">See what guests say about Energy Hub Cafe on Google, and add your own.</p>
              <div className="actions">
                <a className="btn btn-dark" href={CAFE.googleUrl} target="_blank" rel="noopener noreferrer">Read reviews on Google <ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </div>
            {reviews.length > 0 ? (
              <ul className="quotes">
                {reviews.map((r) => (
                  <li key={r.author + r.text.slice(0, 12)}>
                    <blockquote>{r.text}</blockquote>
                    <p>
                      {r.author}, <a className="text-link" href={r.url} target="_blank" rel="noopener noreferrer">{r.source}</a>
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        <section className="good" aria-labelledby="good-h">
          <div className="wrap good-grid">
            <h2 id="good-h">Good <em>to know</em></h2>
            <Accordion type="single" collapsible className="faq">
              {faq.map((f, i) => (
                <AccordionItem key={f.q} value={`q${i}`} className="faq-item">
                  <AccordionTrigger className="faq-trigger">{f.q}</AccordionTrigger>
                  <AccordionContent className="faq-content">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="visit" id="visit" aria-labelledby="visit-h">
          <div className="wrap visit-grid">
            <div>
              <h2 id="visit-h">Find us in <em>Al&nbsp;Nahda</em></h2>
              <p className="lead">{CAFE.landmark}, on the ground floor of Al Tayer Tower, Al Nahda.</p>
            </div>
            <div className="visit-details">
              <dl>
                <div>
                  <dt><MapPin size={18} aria-hidden="true" /> Address</dt>
                  <dd>{CAFE.addressLine1}<br />{CAFE.addressLine2}</dd>
                </div>
                <div>
                  <dt><Clock3 size={18} aria-hidden="true" /> Hours</dt>
                  <dd>{CAFE.hours}</dd>
                </div>
                <div>
                  <dt><Phone size={18} aria-hidden="true" /> Phone</dt>
                  <dd><a className="text-link" href={CAFE.phoneHref}>{CAFE.phone}</a></dd>
                </div>
                <div>
                  <dt><MessageCircle size={18} aria-hidden="true" /> WhatsApp</dt>
                  <dd><a className="text-link" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">{CAFE.whatsappNumber}</a></dd>
                </div>
              </dl>
              <div className="actions">
                <a className="btn btn-gold" href={CAFE.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a className="btn btn-line" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> Order on WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-row">
          <a className="brand" href="#top" aria-label="Energy Hub Cafe, back to top">
            <img src="/img/brand/logo-256.webp" alt="" width={256} height={256} loading="lazy" />
            <span>Energy Hub <i>Cafe</i></span>
          </a>
          <ul className="footer-links">
            <li><a className="nav-link" href="#signatures">Signatures</a></li>
            <li><a className="nav-link" href="#menu">Menu</a></li>
            <li><a className="nav-link" href="#visit">Visit</a></li>
            <li><a className="nav-link" href={CAFE.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden="true" /> {CAFE.instagramHandle}</a></li>
          </ul>
          <p>Good food, good energy. © {new Date().getFullYear()} Energy Hub Cafe, Al Nahda, Sharjah.</p>
        </div>
      </footer>

      <div className="action-bar">
        <a className="btn btn-gold" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> Order
        </a>
        <a className="btn btn-line" href={CAFE.phoneHref}><Phone size={18} aria-hidden="true" /> Call</a>
      </div>
    </>
  );
}

export default App;
