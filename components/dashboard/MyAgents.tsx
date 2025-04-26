import Image from "next/image";

const mockAgents = [
  {
    name: "Agent 1",
    class: "Pro Gamer",
    task: "Playing Fortnite...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/1.png",
  },
  {
    name: "Agent 1",
    class: "Coder",
    task: "Vibe coding...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/2.png",
  },
  {
    name: "Agent 1",
    class: "Finance",
    task: "Balancing the books...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/3.png",
  },
  {
    name: "Agent 1",
    class: "Romantic",
    task: "Flirting with the AI...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/4.png",
  },
];

const AgentInfo = ({ icon, count }: { icon: string; count: number }) => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-[#240E11] p-1 px-2 border border-[#44222A]">
      <Image src={icon} alt="Icon" width={20} height={20} />
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
}: {
  agentName: string;
  agentClass: string;
  agentTask: string;
  agentChatCount: number;
  agentNotificationCount: number;
  agentImage: string;
}) => {
  return (
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
          <AgentInfo icon="/icons/warning.svg" count={agentNotificationCount} />
        </div>
      </div>
    </div>
  );
};

const MyAgents = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">My Agents</h1>
      <div className="flex flex-col space-y-2 mt-4">
        {mockAgents.map((agent, index) => (
          <AgentCard
            key={index}
            agentName={agent.name}
            agentClass={agent.class}
            agentTask={agent.task}
            agentChatCount={agent.chatCount}
            agentNotificationCount={agent.notificationCount}
            agentImage={agent.image}
          />
        ))}
      </div>
      <div className="text-[#7DBEC4] underline text-right mt-4 flex items-center justify-end space-x-4 cursor-pointer">
        <p>Show All</p>
        <p>Add Agent</p>
      </div>
    </div>
  );
};

export default MyAgents;
