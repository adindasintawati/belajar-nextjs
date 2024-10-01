import CardProduct from "@/components/molecules/CardProduct";
import React from "react";

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
  return (
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
  );
};

export default ProductsPage;
