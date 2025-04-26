"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  number,
  text,
  url,
  isActive,
}: {
  number: string;
  text: string;
  url: string;
  isActive?: boolean;
}) => (
  <li>
    <Link
      href={url}
      className={`
        uppercase font-bold flex items-center space-x-2 transition-colors duration-200
        ${isActive ? "text-[#EF5650]" : "text-[#FFD9D6] hover:text-white"}
      `}
    >
      <span
        className={`
        font-radio-space text-2xl transition-opacity duration-200
        ${!isActive ? "opacity-35 hover:opacity-80" : ""}
      `}
      >
        {number}
      </span>
      <span>{text}</span>
    </Link>
  </li>
);

const navItems = [
  { number: "01", text: "Dashboard", url: "/" },
  { number: "02", text: "My Agents", url: "/agents" },
  { number: "03", text: "Streets", url: "/streets" },
  { number: "04", text: "Addons", url: "/addons" },
  { number: "05", text: "Account", url: "/account" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-[#210e0e] p-3 border-y border-[#44222A] fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        {/* logo + desktop menu */}
        <div className="flex items-center">
          <Image
            src="/nav-logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="mr-6"
          />
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavItem
                key={item.number}
                number={item.number}
                text={item.text}
                url={item.url}
                isActive={pathname === item.url}
              />
            ))}
          </ul>
        </div>

        {/* right side (balance + avatar) */}
        <div className="hidden md:flex items-center space-x-4">
          <h2 className="text-[#FFD9D6]">Balance</h2>
          <div className="flex items-center justify-center space-x-2 border border-[#44222A] px-4 h-10">
            <Image
              src="/icons/credits.svg"
              alt="Coin"
              width={15}
              height={15}
              style={{ width: "auto", height: "auto" }}
            />
            <span className="text-[#CAFFFF] font-bold font-radio-space">
              2500.00
            </span>
            <Image
              src="/icons/plus.svg"
              alt="Add"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <Image
            src="/user.png"
            alt="User"
            width={40}
            height={40}
            className="cursor-pointer rounded-full"
          />
        </div>

        {/* mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-menu-icon lucide-square-menu"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 8h10" />
              <path d="M7 12h10" />
              <path d="M7 16h10" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* mobile menu */}

      <div
        className={`
            md:hidden bg-[#210e0e] border-t border-[#44222A] overflow-hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? "mt-2 max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <NavItem
              key={item.number}
              number={item.number}
              text={item.text}
              url={item.url}
              isActive={pathname === item.url}
            />
          ))}
        </ul>
        <div className="border-t border-[#44222A] pt-4 pb-1 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[#FFD9D6]">Balance</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 border border-[#44222A] px-4 h-10">
                <Image
                  src="/icons/credits.svg"
                  alt="Coin"
                  width={15}
                  height={15}
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="text-[#CAFFFF] font-bold font-radio-space">
                  2500.00
                </span>
                <Image
                  src="/icons/plus.svg"
                  alt="Add"
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <Image
                src="/user.png"
                alt="User"
                width={40}
                height={40}
                className="rounded-full self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
