import React from "react";

/** props(singkatan dari "properties")
 * props : cara untuk mengirim data dari satu komponen ke komponen lainnya.
 * props adalah objek yang diteruskan sebagai argumen/parameter dan digunakan
 * untuk mengkustomisasi style komponen, mengirim data dari API dan sebagainya*/

// ** parameter pada function dibawah ini disebut props
const ButtonWithProps = ({
  buttonClassname = "bg-blue-500",
  textButton = "Button",
}) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${buttonClassname}`}>
      {textButton}
    </button>
  );
};

export default ButtonWithProps;
