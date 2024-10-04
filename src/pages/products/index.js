import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import Image from "next/image";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { data } from "@/constant/data";
import BackToTop from "@/components/atoms/Icons/BackToTop";
import { getProducts } from "@/services/products";
import { getUsername, login } from "@/services/auth";
import useLogin from "@/hooks/useLogin";
import formatCurrency from "@/helpers/utils/formatCurrency";

const ProductsPage = ({ products }) => {
  const footerRef = useRef();
  // useref : hooks dari react yang dipake untuk membuat referensi ke elemen DOM atau mengakses elemen DOM (DOM adalah elemen/tag HTML)
  const username = useLogin();
  // const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  // const [products, setProducts] = useState([]); // <- state untuk nyimpen data dari API

  // useEffect untuk manggil service getProducts
  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const dataProduct = await getProducts();
  //       setProducts(dataProduct.slice(0, 8));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  const searchProduct = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  /** useState : hooks dari react yang memungkinkan kita menambahkan state ke functional component.
   * username : variabel state yang akan menyimpan nilai username
   * setUsername : fungsi yang dipake buat memperbarui nilai username
   * "" (string kosong dalam useState(**)) : nilai awal dari state username
   * ketika setUsername dipanggil dengan nilai baru, react akan me-render ulang komponen dengan nilai state yang baru*/

  // useEffect untuk mendapatkan data dari localStorage
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // USEEFFECT PAKE NEXTJS BIASA
  // // useEffect untuk mendapatkan data dari localStorage
  // useEffect(() => {
  //   const getUsername = localStorage.getItem("username");
  //   if (getUsername) {
  //     setUsername(getUsername);
  //   }
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);
  /** useEffect(() => []) : hooks dari react yang memungkinkan kita untuk menambahkan side effect ke functional component
   * useEffect dipake untuk memperbarui komponen ketika ada perubahan pada state.
   * [] (array kosong/depency array) : argumen kedua milik useEffect yang artinya efek ini akan dijalankan sekali
   * saat komponen pertama kali dirender(load)
   * jika username ditemukan di localStorage, ia menggunakan setUsername untuk memperbarui nilai dari state username*/

  // Event handler untuk logout dan menghapus data dari localStorage
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  // PERBEDAAN useMemo untuk perhitungan matematika dan yang disimpen nilainya
  // sedangkan useCallback yang disimpen fungsinya

  // eventHandler diganti ke useCallback
  /** useCallback : hooks yang dipake buat nyimpen FUNGSI di cache agar fungsi hanya dijalankan
   * ketika ada perubahan pada nilai fungsi tersebut*/
  const handleAddToCard = useCallback(
    (id) => {
      // jika ada id yang sama maka akan menambahkan jumlah qty +1
      if (cart.find((item) => item.id === id)) {
        // dia akan mapping dan membongkar itemnya untuk mencari data dengan id yang sama
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        // kalo qty datanya cuma 1, maka cuma akan di set 1 qty-nya
        setCart([...cart, { id, qty: 1 }]);
      }
    },
    [cart]
  );

  // // event handler untuk menambahkan produk ke Cart
  // const handleAddToCard = (id) => {
  //   // jika ada id yang sama maka akan menambahkan jumlah qty +1
  //   if (cart.find((item) => item.id === id)) {
  //     // dia akan mapping dan membongkar itemnya untuk mencari data dengan id yang sama
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     // kalo qty datanya cuma 1, maka cuma akan di set 1 qty-nya
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // useMemo untuk menghitung total harga cart dan menyimpan hasil perhitungannya ke chace
  /** useMemo : hooks untuk menyimpan hasil komputasi (perhitungan matematika) di chace
   * agar tidak perlu dijalankan / dihitung ulang ketika tidak ada perubahan,
   * dalam kasus ini, useMemo untuk nyimpen hasil total cart dicache sehingga ketika halaman direfresh,
   * total cart ga di itung ulang kalo nilainya ga berubah
   *
   * product?.price <- tanda tanya (?) pada product adalah optional chaining
   * optional chaining : sebuah penjagaan untuk memastikan nilai/propertinya ada atau tidak dari suatu data,
   * manfaat dari optimal chaining adalah untuk menghindari error null atau undefined */
  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const product = products.find((product) => product.id === item.id);
      return total + product?.price * item.qty;
    }, 0);
  }, [cart, products]); // <- data yang lagi dipantau perubahannya

  // useEffect untuk menghitung total harga dan menyimpan data Cart ke localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // useEffect untuk menghandle button backToTop
  useEffect(() => {
    function handleScroll() {
      // footerRef.current.offsettop untuk ambil nilai offsetTop (posisi vertikal atas/bawah) dari elemen footer yang diakses footerRef
      const footerTop = footerRef.current.offsetTop;

      // window.innerHeight : untuk ambil nilai tinggi objek window (tampilan viewport tanpa toolbar & scrollbar)
      const viewportHeight = window.innerHeight;

      // window.screenY : untuk ambil nilai scroll sumbu Y dari objek window (posisi scroll di layar vertikal/atas dan bawah)
      const scrollPosition = window.scrollY;

      if (scrollPosition + viewportHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }

    // event listener untuk ngecek scroll
    // fungsi handleScroll akan dijalanin pada saat event scroll terjadi (pada saat layar discroll)
    window.addEventListener("scroll", handleScroll);

    // kembalikan fungsi yang akan dijalankan saat layar berhenti di scroll
    return () => {
      // hapus event listener pada event scroll ketika scroll berhenti
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]); // <- [footerRef] akan dipantau setiap kali ada perubahan /(lifecycle)

  // fungsi/eventHandle yang akan dijalankan ketika button di klik
  const handleBackToTop = () => {
    // window.scrollTo : untuk men-scrikk layar keatas dengan animasi yang smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome, {username}</h1>
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="Search...."
            className="py-2 px-4 rounded-full w-[300px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value !== "") {
                setShowSearch(true);
              } else {
                setShowSearch(false);
              }
            }}
          />
          {showSearch && searchProduct.length > 0 && (
            <ul className="absolute bg-white text-black w-[300px] mt-1 py-2 px-3 rounded-lg">
              {searchProduct.map((product) => (
                <li key={product.id} className="my-1">
                  {product.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>
      <div className="flex px-5 py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 uppercase">Products</h1>
          {/* products */}
          <div className="flex flex-wrap gap-4">
            {products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer
                  price={item.price}
                  onClick={() => {
                    handleAddToCard(item.id);
                  }}
                />
              </CardProduct>
            ))}
          </div>
        </div>
        {/* cart */}
        {cart.length > 0 && (
          <div className="cart w-2/3">
            <h1 className="text-3xl font-bold mb-2 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                // logic untuk nyari id dalam variabel data, kalo id yang di data sama dengan id yang ada di cart maka ambil produknya
                const datas = products.find((data) => data.id === item.id);
                return (
                  <>
                    <div key={item.id} className="flex p-4 border rounded-lg">
                      <Image
                        src={datas?.image}
                        width={100}
                        height={100}
                        alt="cart item"
                        className="aspect-square object-contain"
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between ml-3">
                          <span className="font-bold text-xl line-clamp-2">
                            {datas?.title}
                          </span>
                          <span className="font-semibold">
                            {formatCurrency(datas?.price * item.qty)}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <span className="mb-1">Qty</span>
                          <span className="flex-justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                            {item.qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2">
              <span className="font-semibold">total</span>
              <span className="font-semibold">{formatCurrency(cartTotal)}</span>
            </div>
          </div>
        )}
      </div>
      {showBackToTop && (
        <div
          onClick={handleBackToTop}
          className="fixed bottom-20 bg-blue-600 p-2 right-5 rounded-full"
        >
          <BackToTop />
        </div>
      )}
      <footer
        ref={footerRef}
        className="text-center p-5 bg-gray-800 text-white w-full font-bold"
      >
        Copyright by Adinda
      </footer>
    </>
  );
};

/** Server Side Rendering (SSR) : teknik memuat halaman yang dimana proses rendering tersebut
 * dilakukan di sisi server, lalu dikirim ke client hasil render webnya.
 * teknik ini bermanfaat untuk meningkatkan performa website
 * teknik ini di khususkan untuk halaman website yang datanya dinamis atau bisa di ubah-ubah.*/

// export async function getServerSideProps() {
//   // // cara pertama untuk manggil service satu satu
//   // try {
//   //   const products = await getProducts();
//   //   const slicedProducts = products.slice(0, 8);
//   //   return {
//   //     props: {
//   //       products: slicedProducts || [],
//   //     },
//   //   };
//   // } catch (error) {
//   //   console.log(error);
//   // }

//   // cara kedua manggil beberapa service sekaligus menggunakan promise menggunakan Promise.all
//   // CONTOH : const [productResults, userLogin] = await Promise.all([getProducts(), login()]);
//   try {
//     const [productsResults] = await Promise.all([getProducts()]);
//     const slicedProducts = productsResults.slice(0, 8);
//     const products = await getProducts();
//     return {
//       props: {
//         products: slicedProducts || [],
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

/** Static site generationm (SSG) : teknik yang memuat halaman website pada saat proses build time (npm run build)
 * dan halaman websitenya bisa di cache sehingga ketika user kembali ke halaman dengan SSG
 * proses memuatnya lebih cepat.
 * teknik ini di khususkan untuk halaman website yang datanya statis atau tidak berubah-ubah.
 *
 * build time : adalah proses penyiapan aplikasi disisi server saat di deploy
 * run time : proses setelah build dimana aplikasi dijalanin di server/browser
 */
// export async function getStaticProps() {
//   try {
//     const [productsResults] = await Promise.all([getProducts()]);
//     const slicedProducts = productsResults.slice(0, 8);
//     const products = await getProducts();
//     return {
//       props: {
//         products: slicedProducts || [],
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

/** Incremental site generation (ISG) : teknik yang menggabungkan SSR dan SSG, dimana teknik ini
 * memuat halaman website secara statis namun halamannya bisa di update secara dinamis
 * jika ada perubahan data. */

export async function getStaticProps() {
  try {
    const [productsResults] = await Promise.all([getProducts()]);
    const slicedProducts = productsResults.slice(0, 8);
    const products = await getProducts();
    return {
      props: {
        products: slicedProducts || [],
      },
      revalidate: 60, //<- revalidate akan merefresh/mengupdate data setelah 60detik
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductsPage;
