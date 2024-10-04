/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images.remotePatterns untuk memberikan izin untuk menggunakan gambar dari sumber eksternal
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**/*",
      },
    ],
  },
  // basePath: "/home",
  // <- basePath dipake untuk mengubah url halaman utama(misal dari localhost:3000 => localhost:3000/home)
};

export default nextConfig;

/**
 * file next.config.js dibuat otomatis oleh nextjs di root folder untuk mengatur konfigurasi nextjs
 * lebih detailnya bisa baca dokumentasinya di https://nextjs.org/docs/app/api-reference/next-config-js
 * */
