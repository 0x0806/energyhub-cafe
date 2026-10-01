import { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Clock3,
  Dumbbell,
  Fish,
  Flame,
  GlassWater,
  Instagram,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  Pizza,
  Salad,
  Sparkles,
  Utensils,
  X,
  Zap,
} from 'lucide-react';

const CAFE = {
  name: 'Energy Hub Cafe',
  tagline: 'Fuel your body. Enjoy your day.',
  addressLine1: 'Al Tayer Tower, G Floor, Shop 5',
  addressLine2: '19 Street, Al Nahda, Sharjah',
  phone: '06 742 3253',
  phoneIntl: '+97167423253',
  whatsapp: '971507250627',
  whatsappUrl: 'https://wa.me/971507250627',
  mapsQuery: 'Energy+Hub+Cafe+Al+Tayer+Tower+Al+Nahda+Sharjah',
  noonUrl: 'https://food.noon.com/uae-en/outlet/NRGYHB5ASR/',
};

const menuBoards = [
  { src: '/images/2.jpg', label: 'Protein meals & fresh juices', alt: 'Energy Hub Cafe final menu board showing high-protein meals, fresh juices and cafe favourites' },
  { src: '/images/3.jpg', label: 'Bites, burgers & desserts', alt: 'Energy Hub Cafe final menu board showing bites, burgers, fries, desserts and snacks' },
  { src: '/images/1.jpg', label: 'Breakfast, pasta & signatures', alt: 'Energy Hub Cafe final menu board showing breakfast, pasta, noodles, South Indian dishes and signature meals' },
];

const categories = [
  { name: 'High-protein meals', detail: 'Chicken, fish and vegetarian dishes built to fuel.', icon: Dumbbell },
  { name: 'Salads & protein bowls', detail: 'Wholesome bowls and crisp, vibrant greens.', icon: Salad },
  { name: 'Shakes & fresh juices', detail: 'Protein shakes, smoothies and refreshing juices.', icon: GlassWater },
  { name: 'Breakfast & South Indian', detail: 'Breakfast favourites, dosas and hearty starts.', icon: Utensils },
  { name: 'Pizza, pasta & burgers', detail: 'Café classics, burgers, fries, pasta and noodles.', icon: Pizza },
  { name: 'Desserts & snacks', detail: 'Cakes, sweet finishes and traditional snacks.', icon: Sparkles },
];

const offers = [
  { tag: 'Best seller', title: 'The 14 AED Power Combo', detail: 'A feel-good pairing for your training days.', accent: 'lime' },
  { tag: 'Fresh pick', title: 'Green Hour', detail: 'A bright, fresh reset for busy afternoons.', accent: 'cream' },
  { tag: 'After training', title: 'The Recovery Ritual', detail: 'A satisfying finish when you have done the work.', accent: 'charcoal' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeBoard, setActiveBoard] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return (): void => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollTo = useCallback((id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  return (
    <main className="site-shell">
      <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
        <nav className="nav container" aria-label="Main navigation">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Energy Hub Cafe home">
            <img src="/images/Energy_Hub_Logo-01 copy.png" alt="Energy Hub Cafe logo" />
          </button>
          <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
            <button onClick={() => scrollTo('menu')}>Menu</button>
            <button onClick={() => scrollTo('offers')}>Offers</button>
            <button onClick={() => scrollTo('story')}>Our energy</button>
            <button onClick={() => scrollTo('visit')}>Visit us</button>
            <a href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav-order">
              <MessageCircle size={15} /> Order on WhatsApp
            </a>
          </div>
          <button className="nav-cta" onClick={() => scrollTo('menu')}>Explore menu <ArrowRight size={16} /></button>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Energy for every version of you</div>
          <h1>Eat well.<br /><em>Live fully.</em></h1>
          <p className="hero-intro">Experience the ultimate fusion of health and flavor in Al Nahda, Sharjah. Inside New Life Style Way Gym, we serve food that nourishes and delights — from high-protein meals and protein bowls to fresh juices, shakes, breakfast, South Indian dishes and café classics. Dine in or order home delivery.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo('menu')}>Discover the menu <ArrowRight size={17} /></button>
            <a className="button button-whatsapp" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} /> Order now
            </a>
          </div>
          <div className="hero-meta">
            <div><strong>01</strong><span>High-protein<br />meals & bowls</span></div>
            <div><strong>02</strong><span>Fresh juices<br />& protein shakes</span></div>
            <div><strong>03</strong><span>Café classics<br />& desserts</span></div>
          </div>
        </div>
        <div className="hero-art" aria-label="Energy Hub Cafe menu highlights">
          <div className="sun-disc" />
          <div className="hero-ring hero-ring-one" />
          <div className="hero-ring hero-ring-two" />
          <div className="art-card art-card-back"><img src="/images/3.jpg" alt={menuBoards[1].alt} loading="lazy" /></div>
          <div className="art-card art-card-front"><img src="/images/2.jpg" alt={menuBoards[0].alt} /></div>
          <div className="floating-label label-top"><Zap size={15} fill="currentColor" /> High protein</div>
          <div className="floating-label label-bottom">Freshly made <span>↗</span></div>
          <div className="grain grain-hero" />
        </div>
      </section>

      <section className="marquee" aria-label="Cafe values">
        <div className="marquee-track">
          <span>Fresh Ingredients</span><i>✳</i><span>High Protein</span><i>✳</i><span>Real Flavor</span><i>✳</i><span>Fresh Ingredients</span><i>✳</i><span>High Protein</span><i>✳</i><span>Real Flavor</span>
        </div>
      </section>

      <section className="delivery-banner" aria-label="Energy Hub Cafe home delivery options">
        <div className="container delivery-inner">
          <div className="delivery-copy">
            <span className="delivery-label">Now serving on</span>
            <strong>Home delivery available</strong>
          </div>
          <div className="delivery-logos">
            <a href={CAFE.noonUrl} target="_blank" rel="noopener noreferrer" className="delivery-logo" aria-label="Order Energy Hub Cafe on noon food">
              <img className="delivery-brand-image" src="/images/image.png" alt="noon food" />
            </a>
            <a href="https://www.keeta.com" target="_blank" rel="noopener noreferrer" className="delivery-logo" aria-label="Order Energy Hub Cafe on Keeta">
              <img className="delivery-brand-image" src="/images/image copy.png" alt="Keeta" />
            </a>
            <a href="https://www.talabat.com/uae" target="_blank" rel="noopener noreferrer" className="delivery-logo delivery-logo-talabat" aria-label="Order Energy Hub Cafe on Talabat">
              <img className="delivery-brand-image" src="/images/image copy 2.png" alt="Talabat" />
            </a>
          </div>
          <p className="delivery-note">Order your favourite healthy meals, protein bowls, fresh juices and café classics for delivery.</p>
        </div>
      </section>

      <section className="intro-section container" id="story">
        <div className="section-kicker">01 / The Energy Hub feeling</div>
        <div className="intro-grid">
          <h2>Where health<br /><em>meets flavor.</em></h2>
          <div className="intro-copy">
            <p>Conveniently located within the New Life Style Way Gym, our final menu is thoughtfully crafted to nourish and delight. From high-protein meals and fresh salads to wholesome protein bowls, we offer chicken, fish and vegetarian dishes in Al Nahda, Sharjah.</p>
            <p>Refresh yourself with protein shakes, smoothies, pre- and post-workout drinks and fresh juices. You will also find breakfast, South Indian favourites, pizza, pasta, noodles, burgers, sandwiches, fries, cakes, desserts and traditional snacks.</p>
            <button className="underlined-button" onClick={() => scrollTo('visit')}>Find your way here <ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="value-row">
          <div className="value-card"><span className="value-number">01</span><Sparkles size={21} /><h3>Made with intention</h3><p>Fresh ingredients, thoughtful combinations and zero shortcuts.</p></div>
          <div className="value-card"><span className="value-number">02</span><Leaf size={21} /><h3>Bright by nature</h3><p>Colourful food and drinks that feel as good as they look.</p></div>
          <div className="value-card"><span className="value-number">03</span><Clock3 size={21} /><h3>On your time</h3><p>Easy mornings, quick lunches and lingering catch-ups.</p></div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker light">02 / What's on the table</div>
              <h2>Built for<br /><em>real life.</em></h2>
            </div>
            <p>Whether you're a fitness enthusiast or simply seeking a delicious, wholesome meal, you'll find something to love.</p>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div className="category-card" key={cat.name}>
                  <Icon size={22} />
                  <div>
                    <strong>{cat.name}</strong>
                    <small>{cat.detail}</small>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="menu-tabs" role="tablist" aria-label="Menu board selector">
            {menuBoards.map((board, index) => (
              <button
                key={board.src}
                className={activeTab === index ? 'active' : ''}
                onClick={() => { setActiveTab(index); setActiveBoard(index); }}
                role="tab"
                aria-selected={activeTab === index}
              >
                <span className="tab-num">0{index + 1}</span>
                <span className="tab-label">{board.label}</span>
              </button>
            ))}
          </div>

          <div className="menu-feature">
            <div className="feature-copy">
              <span className="feature-number">0{activeBoard + 1}</span>
              <h3>{menuBoards[activeBoard].label}</h3>
              <p>Explore the final menu — high-protein meals, salads, protein bowls, shakes, juices, breakfast, South Indian dishes, pizza, pasta, noodles, burgers, sandwiches, fries, cakes, desserts and traditional snacks.</p>
              <div className="feature-actions">
                <button className="button button-light" onClick={() => setActiveBoard((activeBoard + 1) % menuBoards.length)}>Next board <ArrowRight size={17} /></button>
                <a className="button button-whatsapp-dark" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} /> Order on WhatsApp
                </a>
              </div>
            </div>
            <div className="feature-image">
              <img src={menuBoards[activeBoard].src} alt={menuBoards[activeBoard].alt} loading="lazy" />
              <div className="image-caption">{menuBoards[activeBoard].label}<span>0{activeBoard + 1} / 03</span></div>
            </div>
          </div>
          <div className="board-dots">
            {menuBoards.map((board, index) => (
              <button
                key={board.src}
                className={activeBoard === index ? 'active' : ''}
                onClick={() => setActiveBoard(index)}
                aria-label={`Show ${board.label}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="offers-section container" id="offers">
        <div className="offers-heading">
          <div className="section-kicker">03 / A little extra</div>
          <h2>Good things<br /><em>come together.</em></h2>
          <p>Small reasons to make today your favourite day of the week.</p>
        </div>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <article className={`offer-card ${offer.accent}`} key={offer.title}>
              <div className="offer-top"><span>{offer.tag}</span><span>0{index + 1}</span></div>
              <div>
                <h3>{offer.title}</h3>
                <p>{offer.detail}</p>
                <a href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="offer-link">
                  Order on WhatsApp <ArrowRight size={15} />
                </a>
              </div>
              <div className="offer-mark">✳</div>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="container visit-inner">
          <div>
            <div className="section-kicker light">04 / Your table is waiting</div>
            <h2>Bring your<br /><em>good energy.</em></h2>
          </div>
          <div className="visit-details">
            <p>Come as you are. Leave a little lighter.</p>
            <div className="visit-info">
              <div>
                <strong><MapPin size={13} /> Find us</strong>
                <span>{CAFE.addressLine1}<br />{CAFE.addressLine2}</span>
              </div>
              <div>
                <strong><Phone size={13} /> Call us</strong>
                <span>{CAFE.phone}</span>
              </div>
              <div>
                <strong><Clock3 size={13} /> Open daily</strong>
                <span>6:00 AM – 11:00 PM</span>
              </div>
            </div>
            <div className="visit-actions">
              <a className="button button-light" href={`https://www.google.com/maps/search/?api=1&query=${CAFE.mapsQuery}`} target="_blank" rel="noopener noreferrer">Get directions <ArrowRight size={17} /></a>
              <a className="button button-whatsapp" href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> Order on WhatsApp</a>
              <a className="button button-dark-outline" href={CAFE.noonUrl} target="_blank" rel="noopener noreferrer">Order for delivery <ArrowRight size={16} /></a>
              <a className="button button-ghost" href={`tel:${CAFE.phoneIntl}`}>Call now <Phone size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src="/images/Energy_Hub_Logo-01 copy.png" alt="Energy Hub Cafe" />
            <p>{CAFE.tagline}</p>
          </div>
          <div className="footer-links">
            <div>
              <span>Explore</span>
              <button onClick={() => scrollTo('menu')}>Menu</button>
              <button onClick={() => scrollTo('offers')}>Offers</button>
              <button onClick={() => scrollTo('story')}>Our energy</button>
            </div>
            <div>
              <span>Visit us</span>
              <span className="footer-static">{CAFE.addressLine1}, {CAFE.addressLine2}</span>
              <a href={`tel:${CAFE.phoneIntl}`}><Phone size={14} /> {CAFE.phone}</a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${CAFE.mapsQuery}`} target="_blank" rel="noopener noreferrer"><MapPin size={14} /> Get directions</a>
            </div>
            <div>
              <span>Order & follow</span>
              <a href={CAFE.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={14} /> WhatsApp order</a>
              <a href={CAFE.noonUrl} target="_blank" rel="noopener noreferrer"><ArrowRight size={14} /> Home delivery</a>
              <a href="https://www.instagram.com/energyhub_cafe" target="_blank" rel="noopener noreferrer"><Instagram size={15} /> Instagram</a>
            </div>
          </div>
        </div>
        <div className="container footer-bar">
          <span>© {new Date().getFullYear()} Energy Hub Cafe — Healthy High-Protein Cafe in Al Nahda, Sharjah. All rights reserved.</span>
          <button onClick={() => scrollTo('top')} className="back-to-top">Back to top <ArrowUp size={15} /></button>
        </div>
      </footer>

      <section className="seo-content" aria-label="About Energy Hub Cafe">
        <h2>Energy Hub Cafe — Healthy Cafe in Al Nahda, Sharjah</h2>
        <p>
          Energy Hub Cafe is a healthy high-protein cafe located in Al Nahda, Sharjah, inside New Life Style Way Gym.
          We serve high-protein meals, protein bowls, fresh salads, protein shakes, smoothies, fresh juices,
          breakfast, South Indian dishes including dosa, pizza, pasta, noodles, burgers, sandwiches, fries, cakes,
          desserts and traditional snacks. Whether you are looking for a post-workout meal, a healthy lunch in
          Sharjah, or a casual cafe near Al Nahda, Energy Hub Cafe has something for everyone.
        </p>
        <p>
          We offer dine-in, takeaway and home delivery across Sharjah through noon food, Keeta and Talabat.
          You can also order directly on WhatsApp. Our best seller is the 14 AED Power Combo — a high-protein
          meal pairing perfect for training days. Open daily from 6:00 AM to 11:00 PM.
        </p>
        <p>
          Visit us at Al Tayer Tower, G Floor, Shop 5, 19 Street, Al Nahda, Sharjah, UAE.
          Call +971 6 742 3253 or WhatsApp +971 50 725 0627 to order.
        </p>
      </section>
    </main>
  );
}

export default App;
