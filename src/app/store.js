import { persistAuthReducer } from "@/features/auth/utils/authPersist";
import { persistanceMiddleware } from "@/features/shared";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    persistanceMiddleware(getDefaultMiddleware),
});

export const persistor = persistStore(store);
export default store;
