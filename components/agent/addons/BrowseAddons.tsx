"use client";

import { AddonStep, useAddonStore } from "@/zustand/addons";
import { Agent, useAgentStore } from "@/zustand/agents";
import Image from "next/image";

const AddonCard = ({
  name,
  description,
  tags,
  image,
  isActive,
  onAdd,
  onRemove,
  onEdit,
}: {
  name: string;
  description: string;
  tags: string[];
  image: string;
  isActive: boolean;
  onAdd: () => void;
  onRemove: () => void;
  onEdit: () => void;
}) => {
  return (
    <div
      className="bg-[#32212D] hover:shadow-lg hover:bg-[#452c3d]
          transform hover:scale-101 
          transition duration-200 ease-in-out"
    >
      <div className="relative">
        {isActive ? (
          <div className="flex absolute top-2 right-2 z-10 gap-2">
            <button
              type="button"
              className="bg-white hover:bg-[#CAFFFF] text-white p-1 rounded border-2 border-black border-2 cursor-pointer"
              onClick={onEdit}
            >
              <Image
                src={"/icons/settings.svg"}
                alt={name}
                className="w-full h-5 w-5 object-cover"
                width={100}
                height={100}
              />
            </button>
            <button
              type="button"
              className="bg-white hover:bg-[#C04944] text-white p-1 rounded border-2 border-black border-2 cursor-pointer"
              onClick={onRemove}
            >
              <Image
                src={"/icons/trash.svg"}
                alt={name}
                className="w-full h-5 w-5 object-cover"
                width={100}
                height={100}
              />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="absolute top-2 right-2 z-10 bg-white hover:bg-[#25D74F] text-white p-1 rounded border-2 border-black border-2 cursor-pointer"
            onClick={onAdd}
          >
            <Image
              src={"/icons/add.svg"}
              alt={name}
              className="w-full h-5 w-5 object-cover"
              width={100}
              height={100}
            />
          </button>
        )}

        {isActive && (
          <div className="absolute top-2 left-2 p-2 px-4 bg-[#25D74F] text-black rounded-full text-sm font-bold">
            <p>IN USE</p>
          </div>
        )}

        <Image
          src={image}
          alt={name}
          className="w-full h-32 object-cover rounded"
          width={500}
          height={500}
        />
      </div>

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

const BrowseAddons = ({ agent }: { agent: Agent }) => {
  const { addons, setAddonStep, setSelectedAddon } = useAddonStore(
    (state) => state
  );
  const { editAgent } = useAgentStore((state) => state);

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
              onAdd={() => {
                setSelectedAddon(addon);
                setAddonStep(AddonStep.CONFIGURE);
                editAgent(agent.id, {
                  addons: [...agent.addons, addon.id],
                });
              }}
              onRemove={() => {
                editAgent(agent.id, {
                  addons: agent.addons.filter((id) => id !== addon.id),
                });
              }}
              onEdit={() => {
                setSelectedAddon(addon);
                setAddonStep(AddonStep.CONFIGURE);
              }}
              isActive={agent.addons.includes(addon.id)}
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
