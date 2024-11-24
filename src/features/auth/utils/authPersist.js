import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "../redux/authSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

export const persistAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
