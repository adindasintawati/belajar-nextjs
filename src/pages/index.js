/** file index.js ini dibuat secara otomatis di folder src/pages.
 * file ini akan menjadi halaman utama di aplikasi nextjs*/

import Button from "@/components/atoms/Button";
import Card from "@/components/molecules/CardWithChildren";
import { isMobileScreenAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";

export default function Home() {
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

      {!isMobileScreen && (
        <>
          {/* cara menggunakan komponen dan props */}
          {/* cara menggunakan komponen dengan children */}
          {/* <Card> </Card> adalah parentnya*/}
          <Card cardClassname={"p-4"}>
            {/* awal komponen children */}
            <h2 className="text-xl font-bold my-3">Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              soluta suscipit tenetur sint placeat accusamus sed voluptatibus
              amet aperiam voluptate.
            </p>
            {/* akhir komponen children */}
          </Card>
          <Card cardClassname={"p-2"}>
            <h2 className="text-xl font-bold my-3">Card Title 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              soluta suscipit tenetur sint placeat accusamus sed voluptatibus
              amet aperiam voluptate.
            </p>
          </Card>
        </>
      )}
    </div>
  );
}
