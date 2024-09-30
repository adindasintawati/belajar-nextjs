/**
 * file_document.js ini dibuat otomatis oleh nexjs di folder src/pages.
 * file ini dipake memungkinkan kita untuk nambahin informasi dokumen ke dalam website kita
 * secara sederhana, ini bertindak sebagai <head> dalam aplikasi kita*/

/**
 * kapan harus menggunakan atau mengubah file_dokumen.js
 * 1. saat menambahkan elemen baru ke dalam <head> yang berlaku untuk seluruh halaman
 * 2. saat menyesuaikan atribut/elemen pada tag html/body
 * 3. saat menambahkan script atau style yang di perlukan untuk server side rendering*/

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // lang = "en" adalah bahasa inggris
    // kalo mau ubah ke indonesia maka ganti ke <Html lang="id"
    <Html lang="id">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
