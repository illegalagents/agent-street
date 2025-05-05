"use client";

import { Addon } from "@/zustand/addons";
import Image from "next/image";

const PromptSuggestion = ({ task, steps }: { task: string; steps: number }) => {
  return (
    <div className="flex gap-4 items-center">
      <Image src="/icons/warning.svg" alt="robot" width={25} height={25} />
      <div>
        <h1 className="text-white text-xl">{task}</h1>
        <p className="text-[#C5ACB2] text-lg">{steps} steps</p>
      </div>
    </div>
  );
};

const ConfiguredAddon = ({ addon }: { addon: Addon }) => {
  return (
    <div className="flex flex-col items-start gap-4 container max-w-4xl">
      <div className="mt-24 mb-8 flex gap-4 container max-w-4xl flex-col md:flex-row">
        <Image
          src={addon.image}
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
            commodity service? So do we. Best battlefield options among no good
            ones? Maybe fire a burst in direction of an incoming drone and hope
            for a lucky hit?
          </p>
        </div>
      </div>

      <div className="flex gap-6 mb-8 flex-col md:flex-row">
        <div className="flex items-center border-2 border-[#44222A] h-25 w-25 justify-center">
          <Image
            src="/icons/profile.svg"
            alt="profile"
            width={60}
            height={60}
          />
        </div>
        <div>
          <h1 className="text-[#C04944] font-bold">
            Connected Account Details
          </h1>
          <p className="text-[#45E6FF] underline">longusername@gmail.com</p>
        </div>
        <button className="action-button">Sign Out</button>
      </div>

      <div className="flex gap-6 mb-8 flex-col">
        <h1 className="text-[#C04944] text-2xl font-bold">
          What todo next? (suggested prompts)
        </h1>
        <div className="flex flex-col gap-4">
          <PromptSuggestion task="Surfing Social Media" steps={5} />
          <PromptSuggestion task="Browse the Web" steps={1} />
          <PromptSuggestion task="Create a todo list app" steps={6} />
        </div>
      </div>
    </div>
  );
};

export default ConfiguredAddon;
