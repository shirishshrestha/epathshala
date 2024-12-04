import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPaymentSuccessful: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentSuccess: (state) => {
      state.isPaymentSuccessful = true;
    },
    resetPaymentSuccess: (state) => {
      state.isPaymentSuccessful = false;
    },
  },
});

export const { setPaymentSuccess, resetPaymentSuccess } = paymentSlice.actions;
export default paymentSlice.reducer;
