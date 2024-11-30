import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { persistor, store } from "@/app/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { Loader, queryClient, router } from "@/features/shared";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
      
    </QueryClientProvider>
  </StrictMode>
);
