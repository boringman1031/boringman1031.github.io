import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import DecryptedText from './components/rb/DecryptedText';
import RotatingText from './components/rb/RotatingText';
import CountUp from './components/rb/CountUp';
import ShinyText from './components/rb/ShinyText';
import SpotlightCard from './components/rb/SpotlightCard';
import { content, links } from './data';

const PixelBlast = lazy(() => import('./components/rb/PixelBlast'));

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'story', 'contact'];

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'zh' || saved === 'en') return saved;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

// Fades children in once they scroll into view.
function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

function SectionHead({ label, title }) {
  return (
    <Reveal className="section-head">
      <span className="label">{label}</span>
      <h2>
        <DecryptedText text={title} animateOn="view" sequential speed={35} encryptedClassName="enc" />
      </h2>
    </Reveal>
  );
}

const Icon = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M3 5.5h18v13H3z M3 6l9 7 9-7"/></svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/></svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></svg>
  ),
  fb: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.86.25-1.45 1.48-1.45h1.57V4.5a21 21 0 0 0-2.3-.12c-2.27 0-3.83 1.39-3.83 3.94v2.18H8v3h2.42V21h3.08Z"/></svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M7 17 17 7M9 7h8v8"/></svg>
  ),
};

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  // Highlight the nav item for the section currently on screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand" aria-label="Home">
          <span className="brand-dot" />
          BORINGMAN
        </a>
        <nav className={menuOpen ? 'open' : ''}>
          {SECTIONS.map(id => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <button className="lang" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} aria-label="Switch language">
            <span className={lang === 'zh' ? 'on' : ''}>中</span>
            <span className="sep">/</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
          <button className="burger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-bg">
          <Suspense fallback={null}>
            <PixelBlast
            variant="square"
            pixelSize={4}
            color="#9a9a9a"
            patternScale={3}
            patternDensity={1.05}
            pixelSizeJitter={0.4}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.4}
            liquid={false}
            speed={0.5}
            edgeFade={0.3}
            transparent
            />
          </Suspense>
        </div>
        <div className="hero-vignette" />
        <div className="hero-inner">
          <img className="avatar" src="img/avatar.png" alt={t.hero.name} width="96" height="96" />
          <p className="hello mono">{t.hero.hello}</p>
          <h1 key={lang} className="hero-name">
            <DecryptedText
              text={t.hero.name}
              animateOn="view"
              sequential
              speed={70}
              characters={lang === 'zh' ? '林益綺零壹貳參肆伍陸柒捌玖ABCDEF01' : undefined}
              encryptedClassName="enc"
            />
          </h1>
          <p className="hero-alt mono">{t.hero.alt}</p>
          <div className="roles">
            <span className="roles-prefix mono">&gt;_</span>
            <RotatingText
              key={lang}
              texts={t.hero.roles}
              mainClassName="role-pill"
              staggerFrom="last"
              staggerDuration={0.02}
              splitLevelClassName="role-split"
              rotationInterval={2400}
            />
          </div>
          <blockquote className="quote">「{t.hero.quote}」</blockquote>
          <div className="hero-cta">
            <a href="#projects" className="btn primary">
              {t.hero.cta}
            </a>
            <a href="#contact" className="btn ghost">
              <ShinyText text={t.hero.contact} color="#9a9a9a" shineColor="#ffffff" speed={3} />
            </a>
          </div>
        </div>
        <a href="#about" className="scroll-hint mono" aria-label="Scroll">
          SCROLL
          <span />
        </a>
      </section>

      <main>
        {/* ABOUT */}
        <section id="about" className="section">
          <SectionHead label={t.about.label} title={t.about.title} />
          <div className="about-grid">
            <Reveal className="about-text">
              <p className="bio">{t.about.bio}</p>
              <div className="traits">
                {t.about.traits.map(tr => (
                  <span key={tr}>#{tr}</span>
                ))}
              </div>
            </Reveal>
            <Reveal className="card-frame" delay={100}>
              <img src="img/card.png" alt="Boringman card" loading="lazy" />
            </Reveal>
          </div>
          <div className="stats">
            {t.about.stats.map((s, i) => (
              <Reveal key={s.label} className="stat" delay={i * 80}>
                <div className="stat-n">
                  <CountUp to={s.n} duration={1.6} />
                  {s.suffix && <span className="accent">{s.suffix}</span>}
                </div>
                <div className="stat-l">{s.label}</div>
              </Reveal>
            ))}
          </div>
          <Reveal as="dl" className="facts">
            {t.about.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="mono">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <SectionHead label={t.skills.label} title={t.skills.title} />
          <div className="skills-grid">
            {t.skills.list.map((s, i) => (
              <Reveal key={s.title} delay={i * 60} className={i === 0 ? 'span-2' : ''}>
                <SpotlightCard className="skill-card" spotlightColor="rgba(255, 122, 26, 0.18)">
                  <span className="skill-idx mono">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.items.map(it => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {s.tags.map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <SectionHead label={t.experience.label} title={t.experience.title} />
          <div className="exp-grid">
            <ol className="timeline">
              {t.experience.timeline.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 80} className={`tl-item tl-${e.kind}`}>
                  <span className="tl-dot" />
                  <span className="tl-period mono">{e.period}</span>
                  <h3>{e.title}</h3>
                  <p className="tl-sub">{e.sub}</p>
                  {e.points && (
                    <ul>
                      {e.points.map(p => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                  {e.tags && (
                    <div className="tags">
                      {e.tags.map(tag => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </ol>
            <Reveal className="certs" delay={120}>
              <h3 className="mono certs-title">{t.experience.certsTitle}</h3>
              <ul>
                {t.experience.certs.map(([name, org, date]) => (
                  <li key={name}>
                    <span className="cert-name">{name}</span>
                    <span className="cert-meta mono">
                      {org}
                      {date && ` · ${date}`}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <SectionHead label={t.projects.label} title={t.projects.title} />
          <div className="projects">
            {t.projects.list.map((p, i) => (
              <Reveal key={p.title} className={`project ${p.image ? 'has-img' : ''}`}>
                {p.image && (
                  <a className="project-img" href={p.link} target="_blank" rel="noreferrer">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </a>
                )}
                <div className="project-body">
                  <div className="project-top">
                    <span className="mono project-no">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mono project-period">{p.period}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <div className="tags">
                    {p.stack.map(s => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.desc && <p className="project-desc">{p.desc}</p>}
                  {p.points && (
                    <ul className="project-points">
                      {p.points.map(([h, d]) => (
                        <li key={h}>
                          <strong>{h}</strong>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.link && (
                    <a className="link mono" href={p.link} target="_blank" rel="noreferrer">
                      {t.projects.view} {Icon.arrow}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="works">
            <h3 className="mono works-title">{t.projects.worksTitle}</h3>
            <div className="works-grid">
              {t.projects.works.map(w => (
                <a key={w.href} href={w.href} target="_blank" rel="noreferrer" className="work">
                  <span className="mono work-kind">{w.kind}</span>
                  <span className="work-title">{w.title}</span>
                  {Icon.arrow}
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* STORY */}
        <section id="story" className="section">
          <SectionHead label={t.story.label} title={t.story.title} />
          <div className="story">
            {t.story.parts.map(([h, body], i) => (
              <Reveal key={h} className="story-part" delay={i * 80}>
                <span className="mono story-no">0{i + 1}</span>
                <h3>{h}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <SectionHead label={t.contact.label} title={t.contact.title} />
          <Reveal>
            <p className="contact-text">{t.contact.text}</p>
            <a className="contact-mail" href={links.email}>
              ian.lin1031@gmail.com
            </a>
            <div className="socials">
              <a href={links.phone} aria-label="Phone">
                {Icon.phone}
                <span>0919-421-779</span>
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                {Icon.github}
                <span>boringman1031</span>
              </a>
              <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                {Icon.ig}
                <span>boringman_1031</span>
              </a>
              <a href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                {Icon.fb}
                <span>Facebook</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer mono">
        <span>© {new Date().getFullYear()} Lin Yi-Chi</span>
        <span>{t.footer}</span>
      </footer>
    </>
  );
}
