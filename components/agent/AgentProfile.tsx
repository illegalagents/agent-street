import Link from "next/link";
import Image from "next/image";

const mockAgents = [
  {
    name: "Agent 1",
    class: "Pro Gamer",
    task: "Playing Fortnite...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/1.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
  },
  {
    name: "Agent 1",
    class: "Coder",
    task: "Vibe coding...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/2.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
  },
  {
    name: "Agent 1",
    class: "Finance",
    task: "Balancing the books...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/3.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
  },
  {
    name: "Agent 1",
    class: "Romantic",
    task: "Flirting with the AI...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/4.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
  },
  {
    name: "Agent 1",
    class: "Pro Gamer",
    task: "Playing Fortnite...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/1.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
  },
  {
    name: "Agent 1",
    class: "Coder",
    task: "Vibe coding...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/2.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
  },
];

const AgentMain = () => {
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
          <div className="bg-[#56304A] flex items-center justify-center w-24 h-24 hover:shadow-lg hover:bg-[#44222A] cursor-pointer transition duration-200 ease-in-out">
            <h1 className="text-[#FFECEC] text-4xl">+</h1>
          </div>
          {mockAgents.map((agent, index) => (
            <Image
              key={index}
              src={agent.image}
              alt="Agent Image"
              width={100}
              height={100}
              className="hover:shadow-lg 
        transform hover:scale-101 
        transition duration-200 ease-in-out cursor-pointer"
            />
          ))}
        </div>
        <div>
          <Image
            src="/agents/big.png"
            alt="Agent Image"
            width={500}
            height={500}
            className="border border-black border-5"
          />
          <h1 className="text-2xl font-bold text-[#FFD9D6] mt-4">Agent Name</h1>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-lg font-bold text-[#6D98C1]">Agent Class</h1>
            <button className="ml-auto bg-[#5D4F61] text-white px-4 py-2 h-fit cursor-pointer hover:bg-[#44222A] transition duration-300 ease-in-out">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgentProfile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 px-3 md:px-8 py-8 space-y-4 md:space-y-0">
      <div className="col-span-1">
        <AgentMain />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default AgentProfile;
