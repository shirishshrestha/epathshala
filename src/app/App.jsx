import { Footer, Header, useCrossTabLogout } from "@/features/shared";
import { Outlet, ScrollRestoration } from "react-router-dom";

const App = () => {
  useCrossTabLogout();
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
