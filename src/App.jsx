import { useState } from "react";
import "./App.css";

const WHATSAPP = "94766901459";

const products = [
  { id: 1, name: "Plush Keytag", price: "Rs 500", cat: "Accessories" },
  { id: 2, name: "Washi Tape Set", price: "Rs 500", cat: "Tapes" },
  { id: 3, name: "Pastel Gel Pens", price: "Rs 600", cat: "Pens" },
  { id: 4, name: "Fancy Pen", price: "Rs 250", cat: "Pens" },
  { id: 5, name: "Stickers Storage Box", price: "Rs 800", cat: "Storage" },
  { id: 6, name: "Gold Washi Tape Set", price: "Rs 500", cat: "Tapes" },
  { id: 7, name: "Magnetic Bookmarks", price: "Rs 300", cat: "Bookmarks" },
  { id: 8, name: "Customized Notebook", price: "Rs 950", cat: "Notebooks" },
  { id: 9, name: "Sticker Set 25 Pcs", price: "Rs 300", cat: "Stickers" },
  { id: 10, name: "Polaroid Photos", price: "Rs 400", cat: "Gifts" },
  { id: 11, name: "Gift Box Set", price: "Rs 1500", cat: "Gifts" },
  { id: 12, name: "Memo Pad", price: "Rs 350", cat: "Notebooks" },
];

const cats = ["All","Notebooks","Tapes","Pens","Stickers","Bookmarks","Accessories","Storage","Gifts"];

function App() {
  const [active, setActive] = useState("All");

  const list = active === "All" ? products : products.filter(function(p) { return p.cat === active; });

  function order(name) {
    var msg = name ? "Hi! I want to order: " + name : "Hi! I want to place an order";
    window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
  }

  return (
    <div>

      <nav className="navbar">
        <div className="navbar-logo">Say It In Stationery</div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#how-to-order">How to Order</a></li>
          <li><a className="navbar-cta" href="#shop">Order Now</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Islandwide Delivery in Sri Lanka</div>
          <h1>Make it yours <span>cute, cozy</span> and uniquely you</h1>
          <p>A cozy journaling brand that also offers beautiful stationery. Customize, inscribe, and cherish every piece.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={function() { order(); }}>Shop Now</button>
            <a className="btn-outline" href="#shop">Browse Products</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section">
          <div className="about-grid">
            <div className="about-text">
              <h2>A little shop with a lot of love</h2>
              <p>Say It In Stationery started as a passion for journaling and grew into a cozy little brand that helps people express themselves through beautiful stationery.</p>
              <p>Every product is carefully chosen — made for the dreamers, the planners, the journal-keepers, and everyone who believes in the power of putting thoughts into words.</p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">433+</div>
                  <div className="stat-label">Posts</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4.2K</div>
                  <div className="stat-label">Followers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Love</div>
                </div>
              </div>
            </div>
            <div className="about-image">Your stationery journey starts here</div>
          </div>
        </div>
      </section>

      <section className="products" id="shop">
        <div className="section">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Tap any product to order directly via WhatsApp!</p>
          <div className="filter-buttons">
            {cats.map(function(cat) {
              return (
                <button
                  key={cat}
                  className={"filter-btn " + (active === cat ? "active" : "")}
                  onClick={function() { setActive(cat); }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className="products-grid">
            {list.map(function(p) {
              return (
                <div className="product-card" key={p.id}>
                  <div className="product-image">🎀</div>
                  <div className="product-info">
                    <div className="product-category">{p.cat}</div>
                    <div className="product-name">{p.name}</div>
                    <div className="product-price">{p.price}</div>
                    <button className="btn-primary" onClick={function() { order(p.name); }}>
                      Order via WhatsApp
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="how-to-order" id="how-to-order">
        <div className="section">
          <h2 className="section-title">How to Order</h2>
          <p className="section-subtitle">Simple, easy, and straight to your door!</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Browse Products</h3>
              <p>Check out our collection and pick what you love!</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>DM or WhatsApp Us</h3>
              <p>Send us a message with your order details.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Bank Deposit</h3>
              <p>We accept bank deposits only. Details shared on order.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>We Deliver!</h3>
              <p>Islandwide delivery across Sri Lanka. Packed with love!</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">Say It In Stationery</div>
        <p className="footer-tagline">A cozy journaling brand in Sri Lanka</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#shop">Shop</a>
          <a href="#how-to-order">How to Order</a>
        </div>
        <div className="footer-social">
          <a className="social-btn" href="https://www.instagram.com/say_it_in_stationery.lk/" target="_blank" rel="noreferrer">Instagram</a>
          <button className="social-btn" onClick={function() { order(); }}>WhatsApp</button>
        </div>
        <div className="footer-bottom">2025 Say It In Stationery. Made with love in Sri Lanka.</div>
      </footer>

    </div>
  );
}

export default App;