# ROSH Plastic — Website

Landing page resmi **ROSH Plastic**, distributor kemasan plastik *food grade* untuk bisnis F&B di Indonesia. Situs ini menampilkan profil perusahaan, katalog produk, brand yang didistribusikan, area pengiriman, dan kanal kontak (WhatsApp).

> PT Roshan Strategi Nusantara · Jakarta Utara
>
> 🌐 Live di **[roshplastic.id](https://roshplastic.id)**

---

## Tentang ROSH Plastic

ROSH Plastic adalah distributor wholesale kemasan plastik food grade — melayani UMKM hingga korporasi dengan kualitas konsisten, stok terjaga, dan pengiriman cepat se-Jabodetabek.

- **Produk:** Thinwall Container, Thinwall Bowl & Round, Gelas Cup, Sauce Cup, Cup Jelly & Mika, Cup AMDK
- **Brand distribusi:** OTI Pack, KingMin, Perisai Cup
- **Segmen yang dilayani:** HORECA · General Trade · Corporate · Logistics
- **Pengiriman:** Gratis ongkir Jabodetabek, sampai H+1 setelah pembayaran, armada internal
- **Keunggulan:** Food Grade · Recyclable · BPA Free

---

## Tech Stack

Situs statis tanpa framework — ringan dan mudah di-deploy ke hosting statis mana pun.

- **HTML5** — `index.html` (single-page, section-based)
- **CSS3** — `rosh-site.css` (custom properties, grid/flex, animasi reveal)
- **Vanilla JS** — `rosh-site.js` (mobile menu, accordion FAQ, scroll reveal)
- **Google Fonts** — Bricolage Grotesque, Caveat, Plus Jakarta Sans

---

## Struktur Project

```
WebsiteROSH/
├── index.html             # Halaman utama (semua section) — entry point GitHub Pages
├── rosh-site.css          # Seluruh styling
├── rosh-site.js           # Interaksi (nav, FAQ, reveal)
├── CNAME                  # Custom domain (roshplastic.id) — JANGAN dihapus
├── assets/                # Gambar, logo brand, video produk
├── design-canvas.jsx      # File desain / referensi layout
├── rosh-heroes.jsx        # Varian hero (desain)
└── image-slot.js          # Helper slot gambar (desain)
```

### Section halaman
Navbar · Hero · Trust (dipercaya oleh) · Product Showcase · Brand · Produk · Industri · Testimoni · Pengiriman · FAQ · Kontak · Footer

---

## Menjalankan Secara Lokal

Cukup buka file HTML di browser:

```bash
# Opsi 1 — buka langsung
start index.html

# Opsi 2 — local server (disarankan, agar font & asset termuat penuh)
python -m http.server 8000
# lalu buka http://localhost:8000/
```

---

## Deployment

Hosting **nol rupiah** lewat **GitHub Pages**. Satu-satunya biaya = domain `.id` (~Rp200rb/tahun).

- **Repo:** `whymustaditya-ui/WebsiteROSH` (branch `main`)
- **Source:** GitHub Pages → Deploy from branch `main` / `(root)`
- **Entry file:** `index.html`
- **Live di:** https://roshplastic.id (`www.roshplastic.id` → redirect ke non-www)
- **HTTPS:** Enforce HTTPS ON (sertifikat SSL otomatis dari GitHub)
- Push ke `main` = auto-deploy via workflow *pages build and deployment*.

### Custom domain

- **Registrar:** Hostinger. Domain `roshplastic.id`, auto-renewal ON.
- **Nameserver:** tetap Hostinger — DNS diatur di hPanel (bukan ganti NS).
- **DNS records:**

  | Type  | Name  | Value                        |
  |-------|-------|------------------------------|
  | A     | `@`   | `185.199.108.153`            |
  | A     | `@`   | `185.199.109.153`            |
  | A     | `@`   | `185.199.110.153`            |
  | A     | `@`   | `185.199.111.153`            |
  | CNAME | `www` | `whymustaditya-ui.github.io` |

  Empat A record ke IP GitHub itu disengaja (round-robin/redundancy).

### ⚠️ Aturan penting

- **JANGAN hapus file `CNAME`** (isi: `roshplastic.id`). Hilang dari sebuah push → custom domain ke-reset ke `whymustaditya-ui.github.io`. Selalu `git pull` setelah GitHub bikin/ubah CNAME.
- **JANGAN ubah** keempat A record + CNAME `www` di Hostinger — itu yang nyambungin domain ke GitHub.
- **Jangan ganti nameserver** ke selain Hostinger.

---

## Kontak

- **WhatsApp:** +62 851-2110-8862
- **Email:** halo@roshplastic.com
- **Alamat:** Jl. Kamal Lama No. 49 Blok A18, Kamal Muara, Penjaringan, Jakarta Utara 11810

---

© 2026 PT Roshan Strategi Nusantara. Seluruh hak cipta dilindungi.
