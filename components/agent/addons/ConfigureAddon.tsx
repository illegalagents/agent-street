"use client";

import { AddonStep, useAddonStore } from "@/zustand/addons";
import { Agent } from "@/zustand/agents";
import Image from "next/image";

const ConfigureAddon = ({ agent }: { agent: Agent }) => {
  const { setAddonStep, selectedAddon, setSelectedAddon } = useAddonStore(
    (state) => state
  );

  console.log(agent);

  if (!selectedAddon) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-[#C5ACB2] text-lg">No addon selected</p>
      </div>
    );
  }

  return (
    <div className="fade-in overflow-hidden">
      <div className="p-6 border-[#44222A] border-b-2">
        <h1 className="text-[#C04944] text-3xl font-bold">
          {selectedAddon.name} Configuration
        </h1>
        <p className="text-[#C5ACB2] text-lg mt-2">
          Addons enhance your Agent’s capabilities, allowing them to perform
          better and do new things.
        </p>
      </div>

      <div className="min-h-[calc(100vh-262px)]">
        <div className="relative">
          <Image
            src="/agent-banner.png"
            alt="Banner"
            width={1000}
            height={500}
            className="w-full h-32 object-cover rounded"
          />
          <Image
            src={selectedAddon.image}
            alt="Add Addon"
            width={500}
            height={500}
            className="w-32 h-32 object-cover rounded absolute top-[40px] left-1/2 transform -translate-x-1/2 border-2 border-[#44222A]"
          />
        </div>

        <div className="flex flex-col items-center justify-center p-4 mt-20 md:px-12">
          <h1 className="text-[#C04944] text-3xl font-bold mb-2">
            Connect {selectedAddon.name}
          </h1>
          <p>
            To learn more about the Agent’s Addons and how to configure them,
            visit the documentation.
          </p>

          <div className="mt-24 mb-8 flex gap-4 container max-w-4xl flex-col md:flex-row">
            <Image
              src={selectedAddon.image}
              alt="Add Addon"
              width={500}
              height={500}
              className="w-32 h-32 object-cover rounded border-2 border-[#44222A]"
            />
            <div>
              <h1 className="text-[#C04944] text-3xl font-bold mb-2">
                Addon Description
              </h1>
              <p>
                Don`t you hate paying big monopolies ridiculous prices for a
                commodity service? So do we. Best battlefield options among no
                good ones? Maybe fire a burst in direction of an incoming drone
                and hope for a lucky hit?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 border-t-2 border-[#44222A] gap-4">
        <button
          className="action-button"
          onClick={() => {
            setSelectedAddon(null);
            setAddonStep(AddonStep.BROWSE);
          }}
        >
          Back
        </button>
        <button className="action-button">Fast Connect</button>
        <button className="action-button">Connect Manually</button>
      </div>
    </div>
  );
};

export default ConfigureAddon;
