import "@/styles/globals.css";
// import { setIsLargeScreen, setIsMobileScreen } from "@/redux/screen/action";
// import store from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "@/redux/store";
import { setIsMobileScreen } from "@/store/screen/screenSlice";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    function handleResize() {
      // store.dispatch : untuk mengtrigger perubahan/pembaharuan nilai pada state
      store.dispatch(setIsMobileScreen(window.innerWidth < 768));
      // store.dispatch(setIsLargeScreen(window.innerWidth >= 1240));
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
