# 🚀 Project Setup - Next.js Application

Dokumentasi ini berisi panduan lengkap untuk menjalankan project Next.js ini secara lokal, mulai dari instalasi hingga menjalankan aplikasi.

---

## 📦 Requirements

Pastikan kamu sudah menginstall:

* Node.js (disarankan versi LTS)
* Package Manager (pilih salah satu):

  * npm
  * yarn
  * pnpm
  * bun

Cek versi:

```bash
node -v
npm -v
```

---

## ⚙️ Installation

1. **Clone repository**

```bash
git clone <your-repository-url>
```

2. **Masuk ke folder project**

```bash
cd <nama-project>
```

3. **Install dependencies**

Pilih sesuai package manager yang kamu gunakan:

```bash
npm install
```

atau

```bash
yarn install
```

atau

```bash
pnpm install
```

atau

```bash
bun install
```

---

## ▶️ Running the Project

Jalankan development server:

```bash
npm run dev
```

atau

```bash
yarn dev
```

atau

```bash
pnpm dev
```

atau

```bash
bun dev
```

---

## 🌐 Akses Aplikasi

Buka browser dan akses:

```
http://localhost:3000
```

Aplikasi akan otomatis reload ketika ada perubahan pada code.

---

## 🛠️ Struktur Dasar Project

* `app/` → Routing & halaman utama (App Router)
* `components/` → Reusable components
* `public/` → Asset static (gambar, dll)
* `styles/` → Styling (jika ada)
* `lib/` → Helper / utility functions

---

## ✏️ Development

Mulai edit halaman utama di:

```
app/page.tsx
```

Semua perubahan akan langsung terlihat (hot reload).

---

## 🔐 Environment Variables (Opsional)

Jika project menggunakan environment variables, buat file:

```
.env.local
```

Contoh:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 📦 Build Production

Untuk build aplikasi:

```bash
npm run build
```

Jalankan hasil build:

```bash
npm start
```

---

## 🚀 Deployment

Project ini dapat dideploy ke berbagai platform, seperti:

* Vercel (recommended)
* VPS / Server sendiri
* Docker

---

## 📚 Notes

* Pastikan dependencies sudah terinstall sebelum menjalankan project
* Gunakan Node.js versi terbaru agar kompatibel
* Jika terjadi error, coba hapus `node_modules` lalu install ulang

```bash
rm -rf node_modules
npm install
```

---

## 🤝 Contribution

Jika ingin berkontribusi:

1. Fork repository
2. Buat branch baru
3. Commit perubahan
4. Submit pull request

---

## 📄 License

Project ini menggunakan lisensi sesuai kebutuhan tim / organisasi.

---

Happy Coding 💻🔥
