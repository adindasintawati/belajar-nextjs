import { SET_IS_MOBILE_SCREEN, SET_IS_LARGE_SCREEN } from "./constant";

/** file action : objek yang mendeskripsikan perubahan yang ingin dilakukan pada state
 * atau sederhananya action seperti sebuah PERINTAH yang akan di kirimkan ke reducer*/

// Fungsi setIsMobileScreen ini disebut sebagai action creator
export const setIsMobileScreen = (isMobile) => ({
  type: SET_IS_MOBILE_SCREEN, //type : menentukan jenis action yang diterima dari constant
  payload: isMobile, // payload : nilai yang diperbaharui ketika action di jalankan
});

export const setIsLargeScreen = (isLarge) => ({
  type: SET_IS_LARGE_SCREEN,
  payload: isLarge,
});
