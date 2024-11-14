import { Outlet } from "react-router-dom";
import { Footer, Header } from "./features/shared";

const App = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
