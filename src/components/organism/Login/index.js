import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  // buat fungsi handle login
  const handleLogin = (event) => {
    // event.preventDefault() berfungsi untuk mencegah halaman agar tidak refresh/reload saat fungsi di triger
    event.preventDefault();
    console.log("Login");
    // event.target.username.value : buat ngambil data dalam inputan form dan ngehasilin ke log
    console.log(event.target.username.value);
    console.log(event.target.password.value);

    // localStorage.setItem : buat nyimpen data dari inputan form ke dalam penyimpanan lokal milik browser
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);

    // window.location.href : berfungsi untuk mengarahkan ke halaman lain
    window.location.href = "/products";
  };
  return (
    // onSubmit : event handler dari form yang menangani aksi ketika form disubmit (melalui button dengan type "submits")
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan nama"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
      />
      <Button
        // onClick : event handler dari button yang menangani event ketika button di klik
        // onClick={handleLogin}
        color={"bg-blue-500 hover:bg-blue-700"}
        size={"w-full"}
        textButton="Submit"
        type={"submit"}
      />
    </form>
  );
};

export default Login;
