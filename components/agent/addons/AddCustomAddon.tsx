"use client";

import { AddonStep, useAddonStore } from "@/zustand/addons";
import Image from "next/image";
import { useState } from "react";

const AddonInput = ({
  defaultValue,
  placeholder,
  label,
}: {
  defaultValue: string;
  placeholder: string;
  label: string;
}) => {
  return (
    <div>
      <label>
        <h1 className="text-[#FFD9D6] text-lg font-bold mb-2">{label}</h1>
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="bg-[#44222A] text-white text-xl border-2 border-[#44222A] rounded px-4 py-2 md:min-w-[400px] w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

const AddonEnvInput = ({ onRemove }: { onRemove?: () => void }) => {
  return (
    <div>
      <label>
        <h1 className="text-[#FFD9D6] text-lg font-bold mb-2">Enviroment Variable</h1>
      </label>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="bg-[#44222A] text-white text-xl border-2 border-[#44222A] rounded px-4 py-2 md:min-w-[400px] w-full"
          placeholder={"Key..."}
        />
        <input
          type="text"
          className="bg-[#44222A] text-white text-xl border-2 border-[#44222A] rounded px-4 py-2 md:min-w-[400px] w-full"
          placeholder={"Value..."}
        />
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          onClick={onRemove}
        >
          X
        </button>
      </div>
    </div>
  );
};

const AddCustomAddon = () => {
  const [envs, setEnvs] = useState<number[]>([1]);

  const { setAddonStep } = useAddonStore((state) => state);

  const addEnv = () => {
    setEnvs((prev) => [...prev, prev.length ? Math.max(...prev) + 1 : 0]);
  };

  const removeEnv = (id: number) => {
    setEnvs((prev) => prev.filter((envId) => envId !== id));
  };

  return (
    <div className="fade-in overflow-hidden">
      <div className="p-6 border-[#44222A] border-b-2">
        <h1 className="text-[#C04944] text-3xl font-bold">
          Custom Addon Configuration
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
            src={"/addons/add-addon.png"}
            alt="Add Addon"
            width={500}
            height={500}
            className="w-32 h-32 object-cover rounded absolute top-[40px] left-1/2 transform -translate-x-1/2 border-2 border-[#44222A]"
          />
        </div>

        <div className="flex flex-col items-center justify-center p-4 mt-20 md:px-12">
          <h1 className="text-[#C04944] text-3xl font-bold mb-2">
            Configure Custom Addon
          </h1>
          <p>
            To learn more about the Agent’s Addons and how to configure them,
            visit the documentation.
          </p>

          <div className="mt-8 mb-8 flex flex-col gap-4">
            <AddonInput
              label="MCP Server URL"
              defaultValue=""
              placeholder="URL Link..."
            />
            {envs.map((id) => (
              <AddonEnvInput key={id} onRemove={() => removeEnv(id)} />
            ))}
            <button
              type="button"
              className="self-start bg-[#0A3E69] text-[#45E6FF] px-4 py-2 rounded mt-2 cursor-pointer"
              onClick={addEnv}
            >
              Add Env
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 border-t-2 border-[#44222A] gap-4">
        <button
          className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit 
            cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]"
          onClick={() => setAddonStep(AddonStep.BROWSE)}
        >
          Back
        </button>
        <button
          className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit 
            cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default AddCustomAddon;
