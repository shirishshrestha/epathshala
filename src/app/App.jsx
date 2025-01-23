import { Footer, Header, useCrossTabLogout } from "@/features/shared";
import { Outlet } from "react-router-dom";

const App = () => {
  useCrossTabLogout();
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
