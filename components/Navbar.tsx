"use client";

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
}) => {
  return (
    <li>
      <Link
        href={url}
        className={`
            uppercase font-bold flex items-center space-x-2
            transition-colors duration-200 ease-in-out
            ${isActive ? "text-[#EF5650]" : "text-[#FFD9D6] hover:text-white"}
          `}
      >
        <span
          className={`
              font-radio-space text-2xl
              transition-opacity duration-200 ease-in-out
              ${!isActive ? "opacity-35 hover:opacity-80" : ""}
            `}
        >
          {number}
        </span>
        <span>{text}</span>
      </Link>
    </li>
  );
};
const navItems = [
  { number: "01", text: "Dashboard", url: "/" },
  { number: "02", text: "My Agents", url: "/agents" },
  { number: "03", text: "Streets", url: "/streets" },
  { number: "04", text: "Addons", url: "/addons" },
  { number: "05", text: "Account", url: "/account" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#210e0e] p-3 border-y border-[#44222A]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/nav-logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="mr-6"
          />
          <ul className="flex space-x-6">
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
        <div>
          <div className="flex items-center space-x-4">
            <h2 className="text-[#FFD9D6]">Balance</h2>
            <div className="flex items-center justify-center space-x-2 border border-[#44222A] px-4 h-10">
              <Image
                src="/icons/credits.svg"
                alt="Coin"
                width={15}
                height={15}
                className="mr-2"
              />
              <span className="text-[#CAFFFF] font-bold font-radio-space">
                2500.00
              </span>
              <Image
                src="/icons/plus.svg"
                alt="Coin"
                width={20}
                height={20}
                className="ml-10"
              />
            </div>
            <Image
              src="/user.png"
              alt="Notification"
              width={40}
              height={40}
              className="mx-4 cursor-pointer rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
