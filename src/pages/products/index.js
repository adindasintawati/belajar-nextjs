import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    image: "image/odeng.jpg",
    name: "odeng1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias ipsum explicabo perspiciatis tempora recusandae enim, voluptate quis aliquam optio?",
    price: 25000,
  },
  {
    id: 2,
    image: "image/odeng.jpg",
    name: "odeng2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias ipsum explicabo perspiciatis tempora recusandae enim, voluptate quis aliquam optio?",
    price: 25000,
  },
  {
    id: 3,
    image: "image/odeng.jpg",
    name: "odeng3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias ipsum explicabo perspiciatis tempora recusandae enim, voluptate quis aliquam optio?",
    price: 25000,
  },
];

const ProductsPage = () => {
  const [username, setUsername] = useState("");
  /** useState : hooks dari react yang memungkinkan kita menambahkan state ke functional component.
   * username : variabel state yang akan menyimpan nilai username
   * setUsername : fungsi yang dipake buat memperbarui nilai username
   * "" (string kosong dalam useState(**)) : nilai awal dari state username
   * ketika setUsername dipanggil dengan nilai baru, react akan me-render ulang komponen dengan nilai state yang baru*/

  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
  }, []);
  /** useEffect(() => []) : hooks dari react yang memungkinkan kita untuk menambahkan side effect ke functional component
   * useEffect dipake untuk memperbarui komponen ketika ada perubahan pada state.
   * [] (array kosong/depency array) : argumen kedua milik useEffect yang artinya efek ini akan dijalankan sekali
   * saat komponen pertama kali dirender(load)
   * jika username ditemukan di localStorage, ia menggunakan setUsername untuk memperbarui nilai dari state username*/

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome, {username}</h1>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>
      <div className="flex justify-center items-center min-h-screen gap-4">
        {/* Baris awal cara menggunakan nested component */}
        <CardProduct>
          <CardProduct.Header image={"image/odeng.jpg"} />
          <CardProduct.Body
            title={"Title Product"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias ipsum explicabo perspiciatis tempora recusandae enim, voluptate quis aliquam optio?"
            }
          />
          <CardProduct.Footer price={"25.000"} />
        </CardProduct>
        {/* Baris akhir cara menggunakan nested component */}

        {/* cara memanggil nested componen menggunakan RENDERING LIST
      Rendering List : teknik untuk menampilkan beberapa elemen berdasarkan data dinamis yang disimpan dalam array of object */}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.name} desc={item.desc} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
