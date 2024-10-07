const { setIsMobileScreen } = require("@/redux/screen/action");

const initialState = {
  isMobileScreen: false,
};

const screenSlice = createSlice({
  name: "screen", // nama untuk slice ini
  initialState, // nentuin nilai awal state
  //   reducers: objek yang berisi kumpulan reducer yang mau dipake untuk memperbarui nilai state
  reducers: {
    setIsMobileScreen: (state, action) => {
      // state.isMobileScreen = action.payload : memperbarui nilai state isMobileScreen dari nilai yang dikirim dari action.payload
      state.isMobileScreen = action.payload;
    },
  },
});

// export action creator setIsMobileScreen dari screenSlice untuk ngirim action ke store redux dan memicu perubahan state
export const { setIsMobileScreen } = screenSlice.action;

export default screenSlice.reducers;
