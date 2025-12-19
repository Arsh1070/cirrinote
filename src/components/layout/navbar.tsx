import { useEffect, useRef, useState } from "react";

import { Menu } from "lucide-react";

import { navItems } from "@/const/navbar";

import { Logo } from "../ui/logo";

const sections = [
  { id: "home", label: "Home Logo" },
  { id: "about", label: "About Logo" },
  { id: "features", label: "Features Logo" },
  { id: "contact", label: "Contact Logo" }, // sh
];

/* max - w - screen - xl; */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLogo, setActiveLogo] = useState(sections[0].label);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // trigger after 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.4],
      // watch both "any visibility" and "60% visibility"
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // find the most visible entry
      let mostVisible: IntersectionObserverEntry | null = null;

      entries.forEach((entry) => {
        if (
          !mostVisible ||
          entry.intersectionRatio > mostVisible.intersectionRatio
        ) {
          mostVisible = entry;
        }
      });

      if (mostVisible && mostVisible.isIntersecting) {
        const matched = sections.find((s) => s.id === mostVisible!.target.id);
        if (matched) setActiveLogo(matched.label);
      }
    }, options);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <nav
      className={`fixed start-0 top-0 z-20 w-full transition-all duration-300 md:top-8 ${
        isScrolled ?
          "bg-black/5 backdrop-blur-md" // blurred + translucent
        : "bg-transparent"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between p-6 sm:px-10 sm:py-6">
        <a
          href="#home"
          className="flex items-center space-x-3 text-white rtl:space-x-reverse"
        >
          {activeLogo}
          {/*  <Logo
            src="/icons/Logo.svg"
            alt="logo"
            className="h-[24px] w-[93px] sm:h-[44px] sm:w-[169px]"
          /> */}
        </a>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button className="group relative flex items-center overflow-hidden rounded-full bg-white p-0.5">
            <div className="relative z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white sm:h-12 sm:w-12">
              <img className="h-4 w-4 sm:h-6 sm:w-6" src="/icons/cart.svg" />
            </div>
            <span className="relative z-20 px-3 py-1 font-medium text-black transition-colors duration-500 group-hover:text-white sm:px-6 sm:py-3">
              Try Now
            </span>
            <span className="absolute top-0.5 bottom-0.5 left-0.5 w-[28px] rounded-full bg-black transition-all duration-500 ease-in-out group-hover:w-[calc(100%-6px)] sm:left-1 sm:w-[44px]" />
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 [@media(min-width:830px)]:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <Menu />
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="hidden space-x-16 font-mono text-sm font-medium md:p-2.5 [@media(min-width:830px)]:flex">
            {navItems.map((navItem) => (
              <li key={navItem.name}>
                <a
                  href={navItem.path}
                  className="block rounded-sm bg-blue-700 px-3 py-2 text-white hover:text-green-500 md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
