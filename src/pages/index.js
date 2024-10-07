/** file index.js ini dibuat secara otomatis di folder src/pages.
 * file ini akan menjadi halaman utama di aplikasi nextjs*/

import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/CardProduct";
import Card from "@/components/molecules/CardWithChildren";
import { isMobileScreenAtom } from "@/jotai/atoms";
import { getEvents } from "@/services/events";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";

export default function Home({ events }) {
  // panggil state isMobileScreen dari jotai yang udah di diset secara global
  const [isMobileScreen, setIsMobileScreen] = useAtom(isMobileScreenAtom);
  // dibawah ini state biasa
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(window.innerWidth < 768);
      setIsLargeScreen(window.innerWidth >= 1240);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreen]);

  console.log(isMobileScreen, isLargeScreen);

  return (
    <div className="p-4 flex justify-center items-center min-h-screen">
      {isMobileScreen ? (
        <h1>ini halaman mobile</h1>
      ) : (
        <h1>ini halaman desktop</h1>
      )}
      <Button />
      <div className="flex gap-6">
        {events.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Body title={item.title} desc={item.participant} />
            {item.location}
          </CardProduct>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [eventResult] = await Promise.all([getEvents()]);
    return {
      props: {
        events: eventResult?.content,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
