"use client";

import { AddonStep, useAddonStore } from "@/zustand/addons";
import Image from "next/image";

const AddonCard = ({
  name,
  description,
  tags,
  image,
  onClick,
}: {
  name: string;
  description: string;
  tags: string[];
  image: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-[#32212D] hover:shadow-lg hover:bg-[#452c3d]
          transform hover:scale-101 
          transition duration-200 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded"
        width={500}
        height={500}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#FFD9D6] mt-2">{name}</h2>
        <p className="text-[#957A78]">{description}</p>
        <div className="flex flex-wrap mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[#7DBEC4] text-sm mr-2 mb-2 underline"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BrowseAddons = () => {
  const { addons, setAddonStep, setSelectedAddon } = useAddonStore(
    (state) => state
  );

  return (
    <div className="fade-in">
      <div className="p-6 border-[#44222A] border-b-2">
        <h1 className="text-[#C04944] text-3xl font-bold">Agents Addons</h1>
        <p className="text-[#C5ACB2] text-lg mt-2">
          Addons enchance your Agent’s capabilities, allowing them to perform
          better and do new things.
        </p>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-262px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
          {addons.map((addon, index) => (
            <AddonCard
              key={index}
              name={addon.name}
              description={addon.description}
              tags={addon.tags}
              image={addon.image}
              onClick={() => {
                setSelectedAddon(addon);
                setAddonStep(AddonStep.CONFIGURE);
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center p-4 border-t-2 border-[#44222A] gap-4">
        <button
          className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit 
              cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]"
          onClick={() => setAddonStep(AddonStep.CUSTOM)}
        >
          Add Custom Addon
        </button>
      </div>
    </div>
  );
};

export default BrowseAddons;
