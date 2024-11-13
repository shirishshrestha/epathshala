import { Outlet } from "react-router-dom";
import { Footer, Header } from "./features/shared";

const App = () => {
  return (
    <main>
      <Header />
      <div className="h-[150vh]"></div>
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
