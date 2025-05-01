"use client";

import { Agent } from "@/zustand/agents";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="flex items-center gap-5">
      <input
        onChange={(e) => setValue(Number(e.target.value))}
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="slider w-full h-2 bg-[#44222A] rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #C04944 ${value}%, #44222A ${value}%)`,
        }}
      />
      <h1>{value}</h1>
    </div>
  );
};

const AgentDetails = ({ agent }: { agent: Agent }) => {
  return (
    <div className="fade-in">
      <div className="p-6 border-[#44222A] border-b-2">
        <h1 className="text-[#C04944] text-3xl font-bold">Agent Details</h1>
        <p className="text-[#C5ACB2] text-lg mt-2">
          Here you can view and manage the details of your agent. You can
          customize the agent`s name, class, and other attributes.
        </p>
      </div>

      <div className="min-h-[calc(100vh-262px)]">
        <div className="relative">
          <Image
            src="/agent-banner.png"
            alt="Agent Banner"
            width={1000}
            height={500}
            className="w-full h-32 object-cover rounded"
          />
          <Image
            src={agent.image}
            alt="Agent Profile"
            width={500}
            height={500}
            className="w-32 h-32 object-cover rounded absolute top-[40px] left-1/2 transform -translate-x-1/2 border-2 border-[#44222A]"
          />
        </div>

        <div className="p-4 mt-20 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex gap-4">
              <div className="flex items-center border-2 border-[#44222A] h-25 w-25 justify-center">
                <Image
                  src="/icons/profile.svg"
                  alt="profile"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h1 className="text-[#C04944] text-xl font-bold mb-4">
                  Agent Name
                </h1>
                <input
                  type="text"
                  defaultValue={agent.name}
                  className="bg-[#44222A] text-white text-2xl font-bold border-2 border-[#44222A] rounded px-4 py-2 w-full"
                  placeholder="Enter agent name"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-[#44222A] h-25 w-25 justify-center">
                <Image
                  src="/icons/model.svg"
                  alt="profile"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h1 className="text-[#C04944] text-xl font-bold mb-4">Model</h1>
                <h1 className="text-white text-2xl font-bold">OpenAI</h1>
              </div>
              <button className="bg-[#4F3656] text-[#FFD9D6] px-4 py-2 h-fit cursor-pointer transition duration-300 ease-in-out hover:bg-[#592f46] hover:text-white ml-8">
                Change
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-end mb-8">
            <div className="flex items-center border-2 border-[#44222A] h-25 w-25 justify-center">
              <Image
                src="/icons/voice-setting.svg"
                alt="profile"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h1 className="text-[#C04944] text-xl font-bold mb-4">Voice</h1>
              <input
                type="text"
                defaultValue={agent.name}
                className="bg-[#44222A] text-white text-2xl font-bold border-2 border-[#44222A] rounded px-4 py-2 w-full"
                placeholder="Enter agent name"
              />
            </div>
            <button className="bg-[#4F3656] text-[#FFD9D6] px-2 py-2 h-fit cursor-pointer transition duration-300 ease-in-out hover:bg-[#592f46] hover:text-white">
              <Image
                src="/icons/play-sound.svg"
                alt="profile"
                width={25}
                height={25}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex gap-4">
              <div className="flex items-center border-2 border-[#44222A] h-25 w-25 justify-center">
                <Image
                  src="/icons/temp.svg"
                  alt="profile"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h1 className="text-[#C04944] text-xl font-bold mb-4">
                  Temperature
                </h1>
                <p className="mb-4">
                  Controls randomness. Closer to zero - more repetitive and
                  deterministic.
                </p>
                <Slider />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center border-2 border-[#44222A] h-25 w-25 justify-center">
                <Image
                  src="/icons/tokens.svg"
                  alt="profile"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h1 className="text-[#C04944] text-xl font-bold mb-4">
                  Max Tokens
                </h1>
                <p className="mb-4">
                  Max number of tokens to generate shared between the prompt and
                  completion.
                </p>
                <Slider />
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 mb-4">
            <div className="flex items-center border-2 border-[#44222A] h-25 w-25 justify-center">
              <Image
                src="/icons/tokens.svg"
                alt="profile"
                width={60}
                height={60}
              />
            </div>
            <div>
              <h1 className="text-[#C04944] text-xl font-bold mb-4">
                System Message
              </h1>
              <p>The overall tone and approach in character interactions.</p>
            </div>
          </div>
          <textarea
            className="bg-[#44222A] text-[#EAEAEA] text-xl border-2 border-[#44222A] rounded px-4 py-2 w-full h-32"
            placeholder="Enter system message"
            defaultValue={"You are a helpful assistant."}
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-4 border-t-2 border-[#44222A] gap-4">
        <button className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]">
          Save Agent
        </button>
      </div>
    </div>
  );
};

export default AgentDetails;
