import { persistAuthReducer } from "@/features/auth/utils/authPersist";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
  },
});

export const persistor = persistStore(store);
export default store;
