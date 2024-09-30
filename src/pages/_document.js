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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
