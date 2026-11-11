import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Clock3, Instagram, MapPin, Menu as MenuIcon, MessageCircle, Phone, X } from 'lucide-react';
import { CAFE, boards, menu } from './data';

const food = (name: string): string => `/img/food/${name}.webp`;

const heroPhotos = ['bowl-chicken-egg', 'juice-avocado', 'pizza-bbq', 'cheesecake'];
const stripPhotos = ['bowl-quinoa', 'burger', 'loaded-fries', 'lasagna', 'juice-watermelon', 'tiramisu'];

const waText = (text: string): string => `${CAFE.whatsappUrl}?text=${encodeURIComponent(text)}`;

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#deals', label: 'Deals' },
  { href: '#visit', label: 'Visit' },
];

function Photo({ name, eager = false }: { name: string; eager?: boolean }) {
  return (
    <img
      src={food(name)}
      alt=""
      width={560}
      height={560}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

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
            <img src="/img/brand/logo-512.webp" alt="" width={512} height={512} />
            <span>Energy Hub <b>Cafe</b></span>
          </a>
          <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="link">{l.label}</a>
            ))}
            <a className="btn btn-primary" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
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
        <section className="hero" id="top" data-enter>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>Healthy high&#8209;protein food in <em>Al&nbsp;Nahda, Sharjah</em></h1>
              <p className="lead">
                Protein bowls, fresh juices, breakfast and café classics, inside New Life Style Way Gym.
                Dine in, take away or get it delivered.
              </p>
              <p className="fact"><strong>Protein bowls from AED 28.</strong> Open daily, 6 AM to 11 PM.</p>
              <div className="actions">
                <a className="btn btn-primary" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} aria-hidden="true" /> Order on WhatsApp
                </a>
                <a className="btn btn-secondary" href="#menu">See the menu <ArrowRight size={18} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-photos">
              {heroPhotos.map((p, i) => (
                <div className="tile" key={p} style={{ ['--i' as string]: i }}>
                  <Photo name={p} eager />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="delivery" aria-labelledby="delivery-h">
          <div className="wrap delivery-row">
            <h2 id="delivery-h">Delivered across Sharjah</h2>
            <ul className="delivery-logos">
              <li>
                <a className="logo-link" href={CAFE.noonUrl} target="_blank" rel="noopener noreferrer" aria-label="Order Energy Hub Cafe on noon food">
                  <img src="/img/brand/noon.png" alt="" width={52} height={52} loading="lazy" />
                  <span>noon food</span>
                </a>
              </li>
              <li>
                <a className="logo-link" href={CAFE.keetaUrl} target="_blank" rel="noopener noreferrer" aria-label="Find Energy Hub Cafe on Keeta">
                  <img src="/img/brand/keeta.png" alt="" width={52} height={52} loading="lazy" />
                  <span>Keeta</span>
                </a>
              </li>
              <li>
                <a className="logo-link" href={CAFE.talabatUrl} target="_blank" rel="noopener noreferrer" aria-label="Find Energy Hub Cafe on Talabat">
                  <img src="/img/brand/talabat.png" alt="" width={52} height={52} loading="lazy" />
                  <span>Talabat</span>
                </a>
              </li>
            </ul>
            <p>Or message us on WhatsApp and we will take your order directly.</p>
          </div>
        </section>

        <section className="menu" id="menu" aria-labelledby="menu-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="menu-h">The full menu, with prices</h2>
              <p>All prices in AED, including 5% VAT.</p>
            </div>

            <div className="strip" aria-hidden="true">
              {stripPhotos.map((p) => (
                <div className="tile" key={p}><Photo name={p} /></div>
              ))}
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

            <div className="boards">
              <h3>Prefer the printed boards?</h3>
              <ul>
                {boards.map((b) => (
                  <li key={b.n}>
                    <a className="board" href={`/img/boards/menu-${b.n}-full.webp`} target="_blank" rel="noopener noreferrer">
                      <img src={`/img/boards/menu-${b.n}.webp`} alt={b.alt} width={1000} height={727} loading="lazy" decoding="async" />
                      <span className="sr-only">(opens full size)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="deals" id="deals" aria-labelledby="deals-h">
          <div className="wrap">
            <h2 id="deals-h">Combos and cakes</h2>
            <div className="deal-grid">
              <a className="deal deal-big" href={waText('Hi Energy Hub Cafe, I would like to pre-order a birthday cake.')} target="_blank" rel="noopener noreferrer">
                <div className="deal-photo"><Photo name="birthday-cake" /></div>
                <div className="deal-text">
                  <h3>Birthday cakes, made to pre-order</h3>
                  <p>Custom cakes for your occasion. Tell us the day and we will plan it.</p>
                  <span className="more">Ask on WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
              </a>
              <a className="deal" href={waText('Hi Energy Hub Cafe, I would like the pre-workout and protein combo.')} target="_blank" rel="noopener noreferrer">
                <div className="deal-photo"><Photo name="shake" /></div>
                <div className="deal-text">
                  <h3>Pre-workout and protein combo</h3>
                  <p><strong>AED 13</strong>, for gym members only.</p>
                  <span className="more">Order on WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
              </a>
              <a className="deal" href={waText('Hi Energy Hub Cafe, I would like a South Indian breakfast set.')} target="_blank" rel="noopener noreferrer">
                <div className="deal-photo"><Photo name="idly-sambar" /></div>
                <div className="deal-text">
                  <h3>South Indian breakfast sets</h3>
                  <p><strong>AED 7</strong> for idly sambar, idiyappam or puttu kadala.</p>
                  <span className="more">Order on WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="visit" id="visit" aria-labelledby="visit-h">
          <div className="wrap visit-grid">
            <div>
              <h2 id="visit-h">Find us in Al&nbsp;Nahda</h2>
              <p className="visit-lead">On the ground floor of Al Tayer Tower, inside New Life Style Way Gym.</p>
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
                  <dd><a className="link" href={CAFE.phoneHref}>{CAFE.phone}</a></dd>
                </div>
              </dl>
              <div className="actions">
                <a className="btn btn-dark" href={CAFE.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={18} aria-hidden="true" /></a>
                <a className="btn btn-outline" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> Order on WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-row">
          <a className="brand" href="#top" aria-label="Energy Hub Cafe, back to top">
            <img src="/img/brand/logo-512.webp" alt="" width={512} height={512} loading="lazy" />
            <span>Energy Hub <b>Cafe</b></span>
          </a>
          <ul className="footer-links">
            <li><a className="link" href="#menu">Menu</a></li>
            <li><a className="link" href="#deals">Deals</a></li>
            <li><a className="link" href="#visit">Visit</a></li>
            <li><a className="link" href={CAFE.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} aria-hidden="true" /> Instagram</a></li>
          </ul>
          <p>© {new Date().getFullYear()} Energy Hub Cafe, Al Nahda, Sharjah.</p>
        </div>
      </footer>

      <div className="action-bar">
        <a className="btn btn-primary" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> Order
        </a>
        <a className="btn btn-dark" href={CAFE.phoneHref}><Phone size={18} aria-hidden="true" /> Call</a>
      </div>
    </>
  );
}

export default App;
