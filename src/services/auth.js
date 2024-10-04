import axios from "axios";
import { jwtDecode } from "jwt-decode";
const api = process.env.NEXT_PUBLIC_API;

// objek payload adalah data yang kita kirim dari API
// payload adalah data yang dikirim ke backend
export async function login(payload) {
  try {
    const response = await axios.post(`${api}/auth/login`, payload);
    console.log(response);

    return { status: true, token: response.data.token };
  } catch (error) {
    console.log(error);
    return { status: false, error };
  }
}

// jwt-decode untuk mendecode atau membuka enskripsi token untuk mendapatkan data
export const getUsername = (token) => {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  return decodedToken.user;
};
