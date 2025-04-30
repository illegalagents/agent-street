"use client";

import { useAgentStore } from "@/zustand/agents";
import Image from "next/image";
import Link from "next/link";

const AgentInfo = ({ icon, count }: { icon: string; count: number }) => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-[#240E11] p-1 px-2 border border-[#44222A]">
      <Image
        src={icon}
        alt="Icon"
        width={20}
        height={20}
        style={{ width: "auto", height: "auto" }}
      />
      <span className="text-[#45E6FF]">{count}</span>
    </div>
  );
};

const AgentCard = ({
  agentName,
  agentClass,
  agentTask,
  agentChatCount,
  agentNotificationCount,
  agentImage,
  actions,
}: {
  agentName: string;
  agentClass: string;
  agentTask: string;
  agentChatCount: number;
  agentNotificationCount: number;
  agentImage: string;
  actions: string[];
}) => {
  return (
    <Link href={`/agents/${agentName}`}>
      <div className="bg-[#161114] shadow-md p-1">
        <div className="flex items-center space-x-4 justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={agentImage}
              alt={agentName}
              className="w-20 h-20"
              width={64}
              height={64}
            />
            <div>
              <h2 className="text-lg font-bold text-[#EF5650]">{agentName}</h2>
              <p className="text-[#6D98C1]">{agentClass}</p>
              <p className="text-[#C5ACB2]">{agentTask}</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 mr-2">
            <AgentInfo icon="/icons/chat-bubble.svg" count={agentChatCount} />
            <AgentInfo
              icon="/icons/warning.svg"
              count={agentNotificationCount}
            />
          </div>
        </div>
      </div>
      {actions.map((action, index) => (
        <div key={index} className="flex items-center space-x-2 ml-6 mt-2">
          <Image
            src={"/icons/warning.svg"}
            alt="Icon"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-[#FFD9D6]">{action}</p>
        </div>
      ))}
    </Link>
  );
};

const MyAgents = () => {
  const agents = useAgentStore((state) => state.agents);

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">
        My Agents ({agents.length})
      </h1>
      <div className="flex flex-col space-y-2 mt-4">
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            agentName={agent.name}
            agentClass={agent.class}
            agentTask={agent.task}
            agentChatCount={agent.chatCount}
            agentNotificationCount={agent.notificationCount}
            agentImage={agent.image}
            actions={agent.actions}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAgents;
