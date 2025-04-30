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

      <div className="h-[calc(100vh-262px)]">
        <Image
          src="/agent-banner.png"
          alt="Agent Banner"
          width={1000}
          height={500}
          className="w-full h-32 object-cover rounded"
        />

        <div className="container mx-auto max-w-3xl p-4">
          <div className="flex justify-between mb-8">
            <div>
              <h1 className="text-[#C04944] text-xl font-bold mb-4">
                Agent Name
              </h1>
              <h1 className="text-white text-2xl font-bold"> {agent.name}</h1>
            </div>
            <div className="flex items-center gap-6 align-end">
              <Image
                src="/agents/big.png"
                alt="Agent Image"
                width={75}
                height={75}
                className="border-2 border-[#44222A]"
              />
              <div>
                <h1 className="text-[#C04944] text-xl font-bold mb-4">Model</h1>
                <h1 className="text-white text-2xl font-bold">OpenAI</h1>
              </div>
              <button className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]">
                Change
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-[#C04944] text-xl font-bold mb-4">Voice</h1>
            <h1 className="text-white text-2xl font-bold">voicename...</h1>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <div className="w-100">
              <h1 className="text-[#C04944] text-xl font-bold mb-4">
                Temperature
              </h1>
              <Slider />
            </div>
            <div className="w-100">
              <h1 className="text-[#C04944] text-xl font-bold mb-4">
                Max Tokens
              </h1>
              <Slider />
            </div>
            <div className="w-100">
              <h1 className="text-[#C04944] text-xl font-bold mb-4">Top P</h1>
              <Slider />
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-[#C04944] text-xl font-bold mb-4">
              System Message
            </h1>
            <p>
              Describe desired model behaviour (tone, tool usage, response
              style). Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 border-t-2 border-[#44222A] gap-4">
        <button className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]">
          Edit Agent
        </button>
      </div>
    </div>
  );
};

export default AgentDetails;
