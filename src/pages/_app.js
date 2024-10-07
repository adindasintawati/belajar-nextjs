import { isMobileScreenAtom } from "@/jotai/atoms";
import "@/styles/globals.css";
import { useEffect } from "react";
import { useSetAtom } from "jotai";

export default function App({ Component, pageProps }) {
  // useSetAtom buat memperbaharui nilai state
  // const setIsMobileScreen = useSetAtom(isMobileScreenAtom);

  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobileScreen(Window.innerWidth < 768);
  //   }
  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [setIsMobileScreen]);
  return <Component {...pageProps} />;
}
