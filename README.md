<p align="center">
  <img src="assets/logo-512.png" alt="Logo Kalkulator IPAL SPPG" width="120">
</p>

<h1 align="center">Kalkulator IPAL SPPG</h1>

<p align="center">
  Kalkulator kapasitas Instalasi Pengolahan Air Limbah (IPAL) dapur SPPG dengan teknologi MBBR,<br>
  sesuai Kepmen LHK/Kepala BPLH No. 2760 Tahun 2025.
</p>

---

## Fitur

- **Debit desain**: dihitung dari jumlah porsi dan pekerja, atau langsung dari timbulan air limbah harian, ditambah cadangan 10%.
- **Volume tiap unit**: pemisah minyak lemak, ekualisasi, anaerob/anoksik, aerobik MBBR, clarifier, desinfeksi (CCT), dan bak effluent.
- **Cek beban COD**: bila COD air limbah masuk di atas 1.500 mg/L (asumsi Kepmen), muncul peringatan dan usulan volume bak anaerob.
- **Media MBBR**: volume dan luas permukaan media sesuai jenis media yang dipilih.
- **Blower**: kebutuhan oksigen untuk COD dan amoniak, efisiensi transfer sesuai kedalaman bak dan jenis diffuser, udara minimal pengaduk media, tekanan kerja, daya motor, dan rekomendasi jenis blower.
- **Klorin**: perkiraan pemakaian sesuai kualitas air outlet (jernih, umum, keruh), kebutuhan kaporit tablet atau bubuk per hari dan per bulan, lama 1 tablet habis, waktu kontak, serta cek pemakaian nyata dari jumlah tablet yang habis.
- **Baku mutu efluen**: penilaian otomatis hasil uji laboratorium sesuai klasifikasi volume air limbah, ditambah saran tindak lanjut untuk parameter yang tidak memenuhi.
- **Simulasi**: animasi susunan unit IPAL dengan pompa, float switch, dan rotameter.
- Tampilan menyesuaikan laptop dan HP.

## Struktur folder

```
kalkulator-ipal-sppg/
├── index.html          Aplikasi untuk GitHub Pages
├── README.md           Keterangan proyek (halaman ini)
├── assets/
│   ├── logo.svg        Logo (vektor)
│   └── logo-512.png    Logo (gambar 512 x 512 px)
└── apps-script/
    ├── Kode.gs         Kode server Google Apps Script
    └── Index.html      Tampilan untuk Google Apps Script
```

`index.html` dan `apps-script/Index.html` berisi kode yang sama. Aplikasi tidak menyimpan data apa pun; semua hitungan berjalan di browser pengguna.

## Menjalankan di Google Apps Script

1. Buat proyek baru di [script.google.com](https://script.google.com).
2. Tempel isi `apps-script/Kode.gs` ke file `Kode.gs`.
3. Buat file HTML bernama `index`, lalu tempel isi `apps-script/Index.html`.
4. **Terapkan** > **Deployment baru** > jenis **Aplikasi web** > akses **Siapa saja**.

## Dasar hitung

| Parameter | Nilai |
|---|---|
| Timbulan air limbah per porsi | 7,5 L/hari |
| Timbulan air limbah pekerja | 20 L/orang/hari |
| Cadangan (safety factor) | 10% |
| HRT aerobik MBBR | 12 jam |
| Kebutuhan oksigen | 1 kg O₂/kg COD + 4,57 kg O₂/kg NH₃-N |
| Efisiensi transfer oksigen | 3%/m (gelembung halus), 1,5%/m (gelembung kasar) |
| Udara minimal pengaduk | 1,8 m³/jam per m³ bak aerobik |
| Perkiraan pemakaian klorin | 3 / 5 / 10 mg/L (air outlet jernih / umum / keruh) |

Nilai persentase, HRT, dan baku mutu mengikuti Lampiran I dan II Kepmen LHK/Kepala BPLH No. 2760 Tahun 2025. Rentang jenis blower bersifat indikatif; cocokkan dengan katalog pemasok.

---

<p align="center">
  Dikembangkan oleh <b>Bidang Penataan dan Penaatan Lingkungan Hidup</b><br>
  Dinas Lingkungan Hidup (DLH) Kabupaten Cilacap
</p>
