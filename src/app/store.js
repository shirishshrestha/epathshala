import { persistAuthReducer } from "@/features/auth/utils/authPersist";
import { persistanceMiddleware } from "@/features/shared";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import paymentReducer from "@/features/shared/redux/paymentSlice";

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    payment: paymentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    persistanceMiddleware(getDefaultMiddleware),
});

export const persistor = persistStore(store);
export default store;
