"use client";

import Image from "next/image";

const mockAddons = [
  {
    addonImage: "/addons/binance.png",
    addonName: "Trading",
    addonDescription: "Binance",
    userCount: 598,
  },
  {
    addonImage: "/addons/coinbase.png",
    addonName: "Crypto",
    addonDescription: "Coinbase MCP",
    userCount: 200,
  },
  {
    addonImage: "/addons/discord.png",
    addonName: "Socialisation & Games",
    addonDescription: "Discord MCP server",
    userCount: 300,
  },
];

const Addon = ({
  addonImage,
  addonName,
  addonDescription,
  userCount,
  onClick,
}: {
  addonImage: string;
  addonName: string;
  addonDescription: string;
  userCount: number;
  onClick?: () => void;
}) => {
  return (
    <div className="flex gap-4 items-center justify-between">
      <div className="border border-[#44222A] p-2 rounded-full flex items-center justify-center">
        <Image
          src={addonImage}
          alt="Addon Image"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col ml-4 w-full">
        <h3 className="text-lg font-bold">{addonName}</h3>
        <div className="flex items-center justify-between ">
          <p className="text-[#716475]">{addonDescription}</p>
          <span className="text-grey">{userCount}</span>
        </div>
      </div>
      <button
        className="ml-auto bg-[#5D4F61] text-white px-4 py-2 rounded-md h-fit cursor-pointer hover:bg-[#44222A] transition duration-300 ease-in-out"
        onClick={onClick}
      >
        Install
      </button>
    </div>
  );
};

const Addons = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">Suggested Addons</h1>
      <div className="flex flex-col space-y-2 mt-4">
        {mockAddons.map((addon, index) => (
          <Addon
            key={index}
            addonImage={addon.addonImage}
            addonName={addon.addonName}
            addonDescription={addon.addonDescription}
            userCount={addon.userCount}
            onClick={() => console.log(`Clicked on ${addon.addonName}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Addons;
