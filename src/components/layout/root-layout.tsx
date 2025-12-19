import { Outlet } from "react-router-dom";

// import { TailwindIndicator } from "../tailwind-indicator";
import Footer from "./footer";
import Navbar from "./navbar";
import TickerBar from "./TickerBar";

const RootLayout = () => {
  return (
    <div className="min-h-screen scroll-smooth antialiased">
      <TickerBar />
      <header className="min-h-26 bg-black">
        <Navbar />
      </header>

      <main className="w-full">
        <Outlet />
      </main>
      <Footer />

      {/*  <TailwindIndicator /> */}
    </div>
  );
};

export default RootLayout;
