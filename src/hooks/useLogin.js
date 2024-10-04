import { getUsername } from "@/services/auth";
import React, { useEffect, useState } from "react";

// custom hooks dibuat/dipake ketika ada hooks hooks/fungsi hooks dipake berkali kali dibanyak halaman
const useLogin = () => {
  const [username, setUsername] = useState("");
  // useEffect untuk mendapatkan data dari localStorage
  useEffect(() => {
    // ambil token yang kesimpen di localStorage
    const token = localStorage.getItem("token");
    // cek kalo ada token maka akan ambil nama user dari token yang di decode
    if (token) {
      // kirim nama user tersebut ke state username
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);
  return username;
};

export default useLogin;
