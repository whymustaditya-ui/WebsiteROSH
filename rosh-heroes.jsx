// rosh-heroes.jsx — three hero/style directions for ROSH Plastic landing page
const { useState } = React;

const WA_LINK = "https://wa.me/6285121108862?text=" + encodeURIComponent("Halo ROSH Plastic, saya ingin menanyakan produk kemasan plastik.");
const NAV = ["Beranda", "Tentang", "Produk", "Industri", "Pengiriman", "Kontak"];

const WAIcon = ({ color = "#06351a" }) => (
  <svg className="rh-wa-ico" viewBox="0 0 32 32" fill={color} aria-hidden="true">
    <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2C10.6 31.2 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29.3c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.1C2.5 8.6 8.6 2.5 16 2.5S29.5 8.6 29.5 16 23.4 29.3 16 29.3zm7.4-9.9c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.7.2-.2.2-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5z"/>
  </svg>
);

/* ============================ DIRECTION A — Full-Bleed Catalog ============================ */
function HeroA() {
  return (
    <div className="rh" style={{ background: "var(--navy)" }}>
      {/* bg image */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(assets/hero-products-navy.png)", backgroundSize: "cover", backgroundPosition: "right center" }} />
      {/* legibility gradient */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, var(--navy-d) 0%, rgba(4,26,57,0.92) 34%, rgba(5,36,77,0.55) 56%, rgba(5,36,77,0.10) 78%)" }} />
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* nav */}
        <nav className="rh-nav" style={{ color: "#fff" }}>
          <img className="rh-nav-logo" src="assets/logo-rosh.png" style={{ filter: "brightness(0) invert(1)" }} alt="ROSH Plastic" />
          <ul className="rh-nav-links">
            {NAV.map((n, i) => <li key={n}><a href="#" className={i === 0 ? "active" : ""}>{n}</a></li>)}
          </ul>
          <a className="rh-btn rh-btn-wa rh-btn-pill" href={WA_LINK}><WAIcon /> Pesan via WhatsApp</a>
        </nav>
        {/* content */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 56px" }}>
          <div style={{ maxWidth: 640, color: "#fff" }}>
            <p className="rh-overline" style={{ color: "#7fb0ec", marginBottom: 22 }}>Kualitas&nbsp;&nbsp;•&nbsp;&nbsp;Konsistensi&nbsp;&nbsp;•&nbsp;&nbsp;Kepercayaan</p>
            <h1 className="rh-display" style={{ fontSize: 70, color: "#fff" }}>Kemasan plastik untuk bisnis yang terus tumbuh.</h1>
            <p className="rh-sub" style={{ color: "rgba(255,255,255,0.82)", marginTop: 26, maxWidth: 540 }}>
              Dari UMKM hingga korporasi — thinwall, gelas cup, dan kemasan food grade dengan kualitas konsisten, stok terjaga, dan pengiriman cepat se-Jabodetabek.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 38 }}>
              <a className="rh-btn rh-btn-wa" href={WA_LINK}><WAIcon /> Pesan via WhatsApp</a>
              <a className="rh-btn rh-btn-ghost" href="#produk">Lihat Katalog Produk</a>
            </div>
          </div>
        </div>
        {/* stat strip */}
        <div style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(255,255,255,0.14)", color: "#fff" }}>
          {[["5.000+", "Pelanggan dilayani"], ["Setiap hari", "Jadwal pengiriman"], ["H+1", "Sampai setelah bayar"], ["Gratis ongkir", "Area Jabodetabek"]].map(([n, l], i) => (
            <div key={i} style={{ flex: 1, padding: "22px 56px", borderLeft: i ? "1px solid rgba(255,255,255,0.14)" : "none" }}>
              <div className="rh-stat-num" style={{ color: "#fff", fontSize: 24 }}>{n}</div>
              <div className="rh-stat-label" style={{ color: "rgba(255,255,255,0.66)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================ DIRECTION B — Split Showcase ============================ */
function HeroB() {
  return (
    <div className="rh" style={{ background: "var(--bg)" }}>
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* nav */}
        <nav className="rh-nav" style={{ color: "var(--ink)", borderBottom: "1px solid var(--line)" }}>
          <img className="rh-nav-logo" src="assets/logo-rosh.png" alt="ROSH Plastic" />
          <ul className="rh-nav-links">
            {NAV.map((n, i) => <li key={n}><a href="#" className={i === 0 ? "active" : ""}>{n}</a></li>)}
          </ul>
          <a className="rh-btn rh-btn-wa rh-btn-pill" href={WA_LINK}><WAIcon /> Pesan via WhatsApp</a>
        </nav>
        {/* split */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.05fr 0.95fr" }}>
          {/* left */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 56px" }}>
            <p className="rh-overline" style={{ color: "var(--steel)", marginBottom: 20 }}>Distributor Kemasan Plastik</p>
            <h1 className="rh-display" style={{ fontSize: 58, color: "var(--navy)" }}>Solusi kemasan yang mudah, cepat &amp; andal.</h1>
            <p className="rh-sub" style={{ marginTop: 22, maxWidth: 480 }}>
              ROSH Plastic membangun supply chain yang terstruktur agar bisnis Anda mendapat produk yang tepat, kualitas konsisten, dan ketersediaan yang terjaga.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
              <a className="rh-btn rh-btn-wa" href={WA_LINK}><WAIcon /> Pesan via WhatsApp</a>
              <a className="rh-btn rh-btn-ghost-d" href="#produk">Lihat Produk</a>
            </div>
            <div style={{ display: "flex", gap: 44, marginTop: 48 }}>
              {[["5.000+", "Pelanggan dilayani"], ["4 wilayah", "Jabodetabek & sekitar"], ["H+1", "Pengiriman cepat"]].map(([n, l], i) => (
                <div key={i}>
                  <div className="rh-stat-num" style={{ color: "var(--navy)" }}>{n}</div>
                  <div className="rh-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* right navy panel with products */}
          <div style={{ position: "relative", background: "var(--navy)", overflow: "hidden" }}>
            <div className="rh-dots" style={{ position: "absolute", top: 28, right: 28, width: 130, height: 90, color: "rgba(127,176,236,0.5)" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url(assets/hero-products-navy.png)", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,36,77,0.10), rgba(4,26,57,0.45))" }} />
            <div style={{ position: "absolute", left: 36, bottom: 34, color: "#fff" }}>
              <p className="rh-overline" style={{ fontSize: 12, color: "#7fb0ec" }}>Food Grade · Recyclable · High Quality</p>
              <p style={{ fontFamily: "var(--rh-font-display)", fontWeight: 800, fontSize: 22, margin: "8px 0 0" }}>Ratusan SKU kemasan siap kirim.</p>
            </div>
          </div>
        </div>
        {/* trust strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 36, padding: "20px 56px", background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "var(--rh-font-display)", fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--slate)" }}>Dipercaya oleh</span>
          {["Tong Tji", "Akara Group", "Catering & HORECA"].map((c) => (
            <span key={c} style={{ fontFamily: "var(--rh-font-display)", fontWeight: 800, fontSize: 19, color: "var(--navy)", opacity: 0.72 }}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================ DIRECTION C — Bold Editorial ============================ */
function HeroC() {
  return (
    <div className="rh" style={{ background: "var(--navy-d)" }}>
      {/* motifs */}
      <div className="rh-dots" style={{ position: "absolute", top: 96, right: 60, width: 180, height: 120, color: "rgba(127,176,236,0.42)" }} />
      <svg style={{ position: "absolute", left: -40, bottom: -40, width: 360, height: 360, color: "rgba(127,176,236,0.12)" }} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
        {[0,1,2,3,4].map(i => <path key={i} d={`M0 ${120+i*16} Q 60 ${90+i*16} 120 ${120+i*16} T 240 ${120+i*16}`} />)}
      </svg>
      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        <nav className="rh-nav" style={{ color: "#fff" }}>
          <img className="rh-nav-logo" src="assets/logo-rosh.png" style={{ filter: "brightness(0) invert(1)" }} alt="ROSH Plastic" />
          <ul className="rh-nav-links">
            {NAV.map((n, i) => <li key={n}><a href="#" className={i === 0 ? "active" : ""}>{n}</a></li>)}
          </ul>
          <a className="rh-btn rh-btn-wa rh-btn-pill" href={WA_LINK}><WAIcon /> Pesan via WhatsApp</a>
        </nav>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 0.78fr", alignItems: "center", padding: "0 56px", gap: 20 }}>
          <div style={{ color: "#fff" }}>
            <p className="rh-rule rh-overline" style={{ color: "#7fb0ec", marginBottom: 26 }}><span>Kualitas</span><span className="dot" /><span>Konsistensi</span><span className="dot" /><span>Kepercayaan</span></p>
            <h1 className="rh-display" style={{ fontSize: 92, color: "#fff", textTransform: "uppercase", lineHeight: 0.9 }}>
              Kemasan<br/>yang bisa<br/><span style={{ color: "transparent", WebkitTextStroke: "2px #7fb0ec" }}>diandalkan</span>
            </h1>
            <p className="rh-sub" style={{ color: "rgba(255,255,255,0.80)", marginTop: 30, maxWidth: 470 }}>
              Thinwall, gelas cup, dan kemasan food grade untuk HORECA, general trade, hingga korporasi — dengan stok yang selalu terjaga.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
              <a className="rh-btn rh-btn-wa" href={WA_LINK}><WAIcon /> Pesan via WhatsApp</a>
              <a className="rh-btn rh-btn-ghost" href="#produk">Lihat Katalog</a>
            </div>
          </div>
          <div style={{ position: "relative", alignSelf: "stretch" }}>
            <div style={{ position: "absolute", inset: "8% -56px 0 0", backgroundImage: "url(assets/hero-products-navy.png)", backgroundSize: "cover", backgroundPosition: "left center", borderRadius: "20px 0 0 0", maskImage: "linear-gradient(90deg, transparent, #000 14%)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 14%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ Canvas ============================ */
function App() {
  return (
    <DesignCanvas>
      <DCSection id="heroes" title="ROSH Plastic — Arah Hero" subtitle="Tiga arah visual & gaya. Pilih satu (atau campur elemennya) untuk dilanjutkan ke halaman penuh.">
        <DCArtboard id="a" label="A · Full-Bleed Catalog" width={1440} height={840}><HeroA /></DCArtboard>
        <DCArtboard id="b" label="B · Split Showcase" width={1440} height={840}><HeroB /></DCArtboard>
        <DCArtboard id="c" label="C · Bold Editorial" width={1440} height={840}><HeroC /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
