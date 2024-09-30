/** file index.js ini dibuat secara otomatis di folder src/pages.
 * file ini akan menjadi halaman utama di aplikasi nextjs*/

import Button from "@/component/Button";
import ButtonWithProps from "@/component/ButtonWithProps";
import Card from "@/component/CardWithChildren";

export default function Home() {
  return (
    <div className="font-poppins p-4 flex justify-center items-center min-h-screen">
      <h1>Welcome to Nextjs</h1>
      <Button />
      {/* cara menggunakan komponen dan props */}
      <ButtonWithProps buttonClassname={"bg-red-500 text-white"} />
      <Button />
      <ButtonWithProps buttonClassname={"bg-yellow-500"} />
      <Button />
      <ButtonWithProps
        buttonClassname={"bg-green-500 text-white"}
        textButton="Submit"
      />
      {/* cara menggunakan komponen dengan children */}
      {/* <Card> </Card> adalah parentnya*/}
      <ButtonWithProps />
      <Card cardClassname={"p-4"}>
        {/* awal komponen children */}
        <h2 className="text-xl font-bold my-3">Card Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          soluta suscipit tenetur sint placeat accusamus sed voluptatibus amet
          aperiam voluptate.
        </p>
        <ButtonWithProps />
        {/* akhir komponen children */}
      </Card>
      <Card cardClassname={"p-2"}>
        <h2 className="text-xl font-bold my-3">Card Title 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          soluta suscipit tenetur sint placeat accusamus sed voluptatibus amet
          aperiam voluptate.
        </p>
      </Card>
    </div>
  );
}
