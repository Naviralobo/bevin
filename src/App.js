// import React from "react";
// import Homepage from "./pages/Homepage";

// const App = () => {
//   return <Homepage />;
// };

// export default App;
import { useState, useEffect } from "react";
import images from "./images";
import "./App.css";

// ── NAVBAR ──────────────────────────────────────────────
function Navbar({ onWhatsApp }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a
        href="#top"
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src={images.logo}
          alt="Bevin Transports Logo"
          className="nav-logo-img"
        />
        <div className="nav-logo-text">
          <span>Bevin Transports</span>
          <span>Est. 1961 · Tiruchendur</span>
        </div>
      </a>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["services", "gallery", "coverage", "why-us", "contact"].map((id) => (
          <li key={id}>
            <button
              className={id === "contact" ? "nav-cta" : ""}
              onClick={() => scrollTo(id)}
            >
              {id === "why-us"
                ? "Why Us"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-social">
        <button onClick={onWhatsApp} className="social-btn" title="WhatsApp">
          <svg viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
        <a
          href="https://www.instagram.com/bevin_transports_1961"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}

// ── HERO ────────────────────────────────────────────────
function Hero({ onWhatsApp }) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg-pattern" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Trusted Since 1961 · 5★ Google Rating (27 Reviews)
          </div>
          <h1>
            Your ride, <span> our responsibility.</span>
          </h1>
          <p className="hero-tagline">
            Bevin Transports delivers <em>safe, on-time &amp; reliable</em>{" "}
            taxi, cab &amp; bus services across Tamil Nadu and Kerala.
          </p>
          <div className="hero-actions">
            <a href="tel:6380458832" className="btn-primary">
              📞 Call Now
            </a>
            <button className="btn-secondary" onClick={onWhatsApp}>
              💬 WhatsApp Us
            </button>
          </div>
          <div className="google-rating">
            <span className="stars">★★★★★</span>
            <span>5.0 · 27 Reviews on Google</span>
          </div>
          <div className="hero-stats">
            {[
              { num: "60", sup: "+", label: "Years of Trust" },
              { num: "2", sup: "", label: "States Covered" },
              { num: "24", sup: "/7", label: "Available" },
            ].map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-number">
                  {s.num}
                  <span>{s.sup}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-main">
            <img src={images.bus_blue} alt="Bevin Transports Blue Bus" />
            <div className="img-badge">Bevin Fleet · Tamil Nadu</div>
          </div>
          <div className="hero-img-small">
            <img src={images.ertiga_front} alt="Bevin Ertiga Cab" />
            <div className="img-badge">Ertiga Cab</div>
          </div>
          <div className="hero-img-small">
            <img src={images.bus_airjet} alt="Bevin Premium Bus" />
            <div className="img-badge">Premium Bus</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SERVICES ────────────────────────────────────────────
const SERVICES = [
  {
    img: "ertiga_side",
    pill: "🚕 Taxi & Cab",
    title: "Taxi / Cab Service",
    desc: "Comfortable and affordable taxi rides for local trips, outstation travel, and airport transfers. Available 24/7.",
    items: [
      "Local & outstation trips",
      "Airport & station transfers",
      "One-way & round trips",
      "AC sedans, SUVs & MPVs",
    ],
  },
  {
    img: "xuv_red",
    pill: "🚖 Corporate Cab",
    title: "Corporate Cab",
    desc: "Dedicated cab services for businesses. Punctual, professional, and managed for your daily corporate travel needs.",
    items: [
      "Employee pick-up & drop",
      "Monthly corporate packages",
      "Airport & client transfers",
      "Ertiga, XUV & more",
    ],
  },
  {
    img: "bus_white",
    pill: "🚌 Bus Hire",
    title: "Bus — Local & Tours",
    desc: "Comfortable bus hire for pilgrimage tours, family outings, school trips, and local city transportation.",
    items: [
      "Temple & pilgrimage tours",
      "Family & group travel",
      "School & college trips",
      "AC & non-AC buses",
    ],
  },
  {
    img: "bus_road",
    pill: "🏢 Corporate Bus",
    title: "Corporate Bus",
    desc: "Scheduled bus services for companies needing reliable, on-time staff transportation every single day.",
    items: [
      "Staff shuttle services",
      "Fixed route scheduling",
      "Large capacity fleet",
      "GPS-tracked vehicles",
    ],
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-header">
        <div className="section-tag">What We Offer</div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          From comfortable taxi rides to corporate buses — the right vehicle for
          every journey.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-card-img">
              <img src={images[s.img]} alt={s.title} />
            </div>
            <div className="service-card-bar" />
            <div className="service-card-body">
              <div className="service-pill">{s.pill}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── GALLERY ─────────────────────────────────────────────
const GALLERY = [
  { key: "bus_blue", label: "Bevin Blue Bus · Local Routes", large: true },
  { key: "ertiga_rear", label: "Suzuki Ertiga · Cab" },
  { key: "xuv_red", label: "Mahindra XUV700 · SUV" },
  { key: "white_cab", label: "Mahindra · White Cab" },
  { key: "bus_airjet", label: "Bevin Premium Bus" },
  { key: "bus_green", label: "Bevin Green Bus" },
];

function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="section-header">
        <div className="section-tag">Our Fleet</div>
        <h2 className="section-title">See Our Vehicles</h2>
        <p className="section-subtitle">
          A diverse fleet of buses, cabs and SUVs — maintained to the highest
          standards for your comfort and safety.
        </p>
      </div>
      <div className="gallery-grid">
        {GALLERY.map((g) => (
          <div className={`gallery-item ${g.large ? "large" : ""}`} key={g.key}>
            <img src={images[g.key]} alt={g.label} />
            <div className="gallery-overlay">
              <span>{g.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-footer">
        <a
          href="https://www.instagram.com/bevin_transports_1961"
          target="_blank"
          rel="noreferrer"
          className="instagram-btn"
        >
          <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          View More on Instagram @bevin_transports_1961
        </a>
      </div>
    </section>
  );
}

// ── COVERAGE ────────────────────────────────────────────
function Coverage() {
  const routes = [
    "Tiruchendur → Chennai",
    "Tiruchendur → Madurai",
    "Tiruchendur → Coimbatore",
    "Tamil Nadu → Kerala",
    "Thiruchendur → Trivandrum",
    "Thiruchendur → Rameshwaram",
  ];
  return (
    <section className="coverage" id="coverage">
      <div className="coverage-inner">
        <div>
          <div className="section-tag gold">Where We Operate</div>
          <h2 className="section-title white">Serving Across South India</h2>
          <p className="section-subtitle muted">
            From our base in Tiruchendur, connecting cities &amp; communities
            across two states.
          </p>
          <div className="states">
            <div className="state-row">
              <span className="state-flag">🏛️</span>
              <div className="state-info">
                <div className="state-name">Tamil Nadu</div>
                <div className="state-desc">
                  Full coverage — all major cities &amp; districts
                </div>
              </div>
              <span className="state-tag">Home State</span>
            </div>
            <div className="state-row">
              <span className="state-flag">🌴</span>
              <div className="state-info">
                <div className="state-name">Kerala</div>
                <div className="state-desc">
                  Inter-state routes connecting southern cities
                </div>
              </div>
              <span className="state-tag">Interstate</span>
            </div>
          </div>
          <div className="google-box">
            <div className="stars">★★★★★</div>
            <p>5.0 Rating · 27 Reviews on Google Business</p>
          </div>
        </div>
        <div className="map-card">
          <div className="map-card-img">
            <img src={images.bus_road} alt="Bevin Bus on Road" />
          </div>
          <div className="route-pills">
            {routes.map((r) => (
              <span className="route-pill" key={r}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── WHY US ──────────────────────────────────────────────
const WHY = [
  {
    icon: "🏆",
    title: "60+ Years Legacy",
    desc: "Founded in 1961. One of Tamil Nadu's most experienced and trusted transport companies.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure",
    desc: "Well-maintained vehicles, professional drivers — your safety at every step of the journey.",
  },
  {
    icon: "⏰",
    title: "Always On Time",
    desc: "Thousands of on-time trips speak for our punctuality across Tamil Nadu and Kerala.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "Always reachable by phone or WhatsApp. Book a ride or get help anytime, day or night.",
  },
  {
    icon: "⭐",
    title: "5★ Google Rating",
    desc: "27 reviews and a perfect 5-star rating on Google — verified by our happy customers.",
  },
];

function WhyUs() {
  return (
    <section className="section why-us" id="why-us">
      <div className="section-header">
        <div className="section-tag">Why Choose Us</div>
        <h2 className="section-title">The Bevin Difference</h2>
        <p className="section-subtitle">
          Over six decades of trust built one ride at a time.
        </p>
      </div>
      <div className="why-grid">
        {WHY.map((w) => (
          <div className="why-card" key={w.title}>
            <div className="why-icon">{w.icon}</div>
            <h4>{w.title}</h4>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT ─────────────────────────────────────────────
function Contact({ onWhatsApp }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const text = `Hello Bevin Transports! My name is ${form.name}. I need: ${form.service || "your services"}. ${form.message ? "Details: " + form.message + ". " : ""}My phone: ${form.phone}`;
    window.open(
      "https://wa.me/916380458832?text=" + encodeURIComponent(text),
      "_blank",
    );
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <div className="section-tag">Get In Touch</div>
          <h2>
            Ready to Move?
            <br />
            Let's Talk.
          </h2>
          <p>
            Whether you need a taxi, corporate cab or a bus, we're here to help.
            Reach out by call, WhatsApp, or use the enquiry form.
          </p>
          <div className="contact-items">
            {[
              {
                href: "tel:6380458832",
                icon: "📞",
                label: "Phone",
                value: "+91 63804 58832",
              },
              {
                href: "#",
                icon: "💬",
                label: "WhatsApp",
                value: "Chat with us instantly",
                onClick: onWhatsApp,
              },
              {
                href: "mailto:bevintransports@gmail.com",
                icon: "✉️",
                label: "Email",
                value: "bevintransports@gmail.com",
              },
              {
                href: "https://www.instagram.com/bevin_transports_1961",
                icon: "📸",
                label: "Instagram",
                value: "@bevin_transports_1961",
                target: "_blank",
              },
              {
                href: "#",
                icon: "📍",
                label: "Location",
                value: "Tiruchendur, Tamil Nadu 628215",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.target}
                rel={c.target ? "noreferrer" : undefined}
                className="contact-item"
                onClick={
                  c.onClick
                    ? (e) => {
                        e.preventDefault();
                        c.onClick();
                      }
                    : undefined
                }
              >
                <div className="contact-item-icon">{c.icon}</div>
                <div>
                  <div className="contact-item-label">{c.label}</div>
                  <div className="contact-item-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-form">
          <h3>Send an Enquiry</h3>
          {[
            {
              label: "Your Name",
              type: "text",
              key: "name",
              placeholder: "e.g. Rajesh Kumar",
            },
            {
              label: "Phone Number",
              type: "tel",
              key: "phone",
              placeholder: "+91 XXXXX XXXXX",
            },
          ].map((f) => (
            <div className="form-group" key={f.key}>
              <label>{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              />
            </div>
          ))}
          <div className="form-group">
            <label>Service Required</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="">Select a service</option>
              {[
                "Taxi / Cab Booking",
                "Corporate Cab",
                "Bus — Local Transportation",
                "Bus — Tours & Travels",
                "Corporate Bus",
              ].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="3"
              placeholder="Route, date, number of passengers..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button className="form-submit" onClick={handleSubmit}>
            Send via WhatsApp →
          </button>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ──────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={images.logo} alt="Bevin Transports" />
            <div className="nlt">
              <span>Bevin Transports</span>
              <span>Est. 1961 · Tiruchendur</span>
            </div>
          </div>
          <p>
            Trusted taxi, cab &amp; bus services across Tamil Nadu &amp; Kerala
            since 1961. Your journey is our responsibility.
          </p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            {[
              "Taxi / Cab Service",
              "Corporate Cab",
              "Bus & Tours",
              "Corporate Bus",
            ].map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="tel:6380458832">+91 63804 58832</a>
            </li>
            <li>
              <a href="mailto:bevintransports@gmail.com">
                bevintransports@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bevin_transports_1961"
                target="_blank"
                rel="noreferrer"
              >
                @bevin_transports_1961
              </a>
            </li>
            <li>
              <a href="#contact">Tiruchendur, Tamil Nadu</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Bevin Transports. All rights reserved. Tiruchendur, Tamil Nadu
          628215.
        </p>
        <p>Serving Tamil Nadu · Kerala</p>
      </div>
    </footer>
  );
}

// ── WHATSAPP CHAT ────────────────────────────────────────
function WhatsAppChat({ open, onClose }) {
  const [msg, setMsg] = useState("");
  const send = () => {
    const text =
      msg.trim() || "Hello Bevin Transports! I would like to make a booking.";
    window.open(
      "https://wa.me/916380458832?text=" + encodeURIComponent(text),
      "_blank",
    );
  };
  return (
    <>
      <div className={`wa-chat ${open ? "open" : ""}`}>
        <div className="wa-header">
          <img src={images.logo} alt="Bevin" />
          <div className="wa-header-info">
            <span>Bevin Transports</span>
            <span>Typically replies instantly</span>
          </div>
          <button className="wa-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="wa-body">
          <div className="wa-bubble">
            👋 Hello! Welcome to Bevin Transports.
            <br />
            How can we help you today? Taxi, cab, bus or corporate booking?
            <span className="wa-time">now</span>
          </div>
        </div>
        <div className="wa-input-row">
          <input
            className="wa-input"
            placeholder="Type a message..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button className="wa-send" onClick={send}>
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
      <button className="wa-float" onClick={onClose} title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </>
  );
}

// ── APP ─────────────────────────────────────────────────
export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const toggleChat = () => setChatOpen((o) => !o);

  return (
    <>
      <Navbar onWhatsApp={toggleChat} />
      <Hero onWhatsApp={toggleChat} />
      <Services />
      <Gallery />
      <Coverage />
      <WhyUs />
      <Contact onWhatsApp={toggleChat} />
      <Footer />
      <WhatsAppChat open={chatOpen} onClose={toggleChat} />
    </>
  );
}
