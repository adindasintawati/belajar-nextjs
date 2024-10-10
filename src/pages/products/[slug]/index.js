import formatCurrency from "@/helpers/utils/formatCurrency";
import { getProductById } from "@/services/products";
import React from "react";

/** Dynamic routing : membuat page dengan slug dinamis, baik berupa id, ataupun slug seperti contoh kasus dibawah ini
 * contoh lain: localhost:3000/product/laptop-gaming
 * link(url) setelah/product disebut sebagai params atau slug, nah slug(/laptop-gaming) inilah yang akan di render
 *
 * perbedaan slug dan query params
 * slug : url params dibelakang /, contoh(/product-1)
 * query params : query params dibelakang ?, contoh(product?kategori=pakaian)*/

const ProductDetailPage = ({ detailProduct }) => {
  console.log(detailProduct);

  return (
    <>
      <div className="flex flex-col min-h-screen p-6 bg-gradient-to-b from-black to-blue-900 text-white">
        <h1 className="text-4xl font-bold">Detail Product</h1>
        <div className="p-4 mt-5 rounded-2xl max-w-xl bg-white bg-opacity-20">
          <h2 className="text-2xl font-bold">{detailProduct?.title}</h2>
          <p className="font-semibold mt-5">{detailProduct?.description}</p>
          <span className="text-xl font-bold mt-5">
            {formatCurrency(detailProduct?.price)}
          </span>
        </div>
      </div>
      ;
    </>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);
  const id = params.slug;

  const detailProduct = await getProductById(id);

  return {
    props: {
      detailProduct,
    },
  };
}

export default ProductDetailPage;
