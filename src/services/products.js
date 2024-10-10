// import dependency axios untuk integrasi ke API
import axios from "axios";

/** import dan simpan variabel api yang berisi URL public dari eviroment variabel NEXT_PUBLIC_API
 * process.env.NEXT_PUBLIC_blablabla untuk mengakses variable environment yang mau dipake*/
const api = process.env.NEXT_PUBLIC_API;

// export fungsi getProducts yang mengembalikan data product dari API
export async function getProducts() {
  // eksekusi di blok try catch
  try {
    // buat request GET ke URL API produk menggunakan axios kemudian tampung hasilnya ke variable response
    const response = await axios.get(`${api}/products`);

    // kembalikan data produk dari response jika berhasil
    return response.data;
  } catch (error) {
    // tampilin error jika gagal mengambil data dari API
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`${api}/products/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
