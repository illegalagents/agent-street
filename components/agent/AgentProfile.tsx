"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AgentAddons from "./AgentAddons";
import AgentDetails from "./AgentDetails";
import { Agent, useAgentStore } from "@/zustand/agents";

const AgentMain = ({ agents, agent }: { agents: Agent[]; agent: Agent }) => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <Link href="/agents">
          <h1 className="text-2xl font-bold text-[#FFD9D6] underline hover:text-[#EF5650]">
            Agents
          </h1>
        </Link>
        {"-"}
        <h1 className="text-2xl font-bold">Agent Profile</h1>
      </div>
      <div className="flex mt-4 gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-[#56304A] flex items-center justify-center w-20 h-20 hover:shadow-lg hover:bg-[#44222A] cursor-pointer transition duration-200 ease-in-out">
            <h1 className="text-[#FFECEC] text-4xl">+</h1>
          </div>
          {agents.map((agent, index) => (
            <Link href={`/agents/${agent.id}`} key={index}>
              <Image
                src={agent.image}
                alt="Agent Image"
                width={75}
                height={75}
                className="hover:shadow-lg 
                  transform hover:scale-101 
                  transition duration-200 ease-in-out cursor-pointer"
              />
            </Link>
          ))}
        </div>
        <div>
          <Image
            src={agent.image}
            alt="Agent Image"
            width={500}
            height={500}
            className="border border-black border-5"
          />
          <h1 className="text-2xl font-bold text-[#FFD9D6] mt-4">
            {agent.name}
          </h1>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-lg font-bold text-[#6D98C1]">{agent.class}</h1>
            <button className="ml-auto bg-[#5D4F61] text-white px-4 py-2 h-fit cursor-pointer hover:bg-[#44222A] transition duration-300 ease-in-out">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const sidePanelTabs = [
  { name: "Addons", icon: "/icons/actions.svg" },
  { name: "Settings", icon: "/icons/settings.svg" },
  { name: "History", icon: "/icons/history.svg" },
  { name: "Logs", icon: "/icons/logs.svg" },
];

const AgentSidePanel = ({ agent }: { agent: Agent }) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-row">
      {/* Tabs */}
      <div className="flex flex-col gap-4 mt-10">
        {sidePanelTabs.map((tabItem, index) => (
          <div
            className={`bg-[#301A25] hover:bg-[#44222A] cursor-pointer h-20 w-20 ${
              index === tab ? "bg-[#44222A]" : ""
            }`}
            key={index}
            onClick={() => setTab(index)}
          ></div>
        ))}
      </div>
      <div className="bg-[#301A25] border-[#44222A] border-2 h-[calc(100vh-64px)] flex-1">
        {tab === 0 && <AgentDetails agent={agent} />}
        {tab === 1 && <AgentAddons />}
      </div>
    </div>
  );
};

const AgentProfile = ({ agentId }: { agentId: number }) => {
  const agents = useAgentStore((state) => state.agents);
  const agent = agents.find((agent) => agent.id === agentId) as Agent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 space-y-4 md:space-y-0">
      <div className="col-span-1 p-4">
        <AgentMain agents={agents} agent={agent} />
      </div>
      <div className="col-span-3">
        <AgentSidePanel agent={agent} />
      </div>
    </div>
  );
};

export default AgentProfile;
