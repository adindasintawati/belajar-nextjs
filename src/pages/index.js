/** file index.js ini dibuat secara otomatis di folder src/pages.
 * file ini akan menjadi halaman utama di aplikasi nextjs*/

import Button from "@/components/atoms/Button";
import Card from "@/components/molecules/CardWithChildren";
import { useSelector } from "react-redux";

export default function Home() {
  const { isMobileScreen, isLargeScreen } = useSelector(
    (state) => state.screen.isMobileScreen
  );
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
