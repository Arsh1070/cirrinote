import { footerLinks } from "@/const/footer";

import { Logo } from "../ui/logo";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="h-auto w-full border-t-1 border-[#ffffff]/10 bg-[#000]/96"
    >
      <div className="px-10 py-20 sm:space-y-16">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo src="/icons/Logo.svg" alt="logo" />
          <ul className="flex space-x-9 py-10 sm:space-x-12">
            {footerLinks.map((footLink) => (
              <li key={footLink.name}>
                <a
                  href={footLink.path}
                  className="text-white"
                  aria-current="page"
                >
                  <Logo src={footLink.icon} alt={footLink.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-x-1 text-sm text-[#ffffff]/50 sm:flex sm:items-center sm:justify-between">
          <p>© CirriNote 2025</p>
          <p>Crafted with passion by CreoWis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
