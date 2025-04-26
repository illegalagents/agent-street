import Image from "next/image";

interface Message {
  role: "agent" | "user";
  name: string;
  text: string;
  image: string;
  time: string;
}

const mockMessages: Message[] = [
  {
    role: "agent",
    name: "Agent 1",
    text: "Hello! How can I assist you today?",
    image: "/agents/1.png",
    time: "10:00 AM",
  },
  {
    role: "user",
    name: "User",
    text: "I need help with my project.",
    image: "/agents/2.png",
    time: "10:01 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "Sure! What do you need help with?",
    image: "/agents/1.png",
    time: "10:02 AM",
  },
  {
    role: "user",
    name: "User",
    text: "I need to create a new agent.",
    image: "/agents/2.png",
    time: "10:03 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "I can help you with that. Let's get started.",
    image: "/agents/1.png",
    time: "10:04 AM",
  },
  {
    role: "user",
    name: "User",
    text: "Thank you!",
    image: "/agents/2.png",
    time: "10:05 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "You're welcome! If you have any other questions, feel free to ask.",
    image: "/agents/1.png",
    time: "10:06 AM",
  },
  {
    role: "user",
    name: "User",
    text: "Will do!",
    image: "/agents/2.png",
    time: "10:07 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "Hello! How can I assist you today?",
    image: "/agents/1.png",
    time: "10:00 AM",
  },
  {
    role: "user",
    name: "User",
    text: "I need help with my project.",
    image: "/agents/2.png",
    time: "10:01 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "Sure! What do you need help with?",
    image: "/agents/1.png",
    time: "10:02 AM",
  },
  {
    role: "user",
    name: "User",
    text: "I need to create a new agent.",
    image: "/agents/2.png",
    time: "10:03 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "I can help you with that. Let's get started.",
    image: "/agents/1.png",
    time: "10:04 AM",
  },
  {
    role: "user",
    name: "User",
    text: "Thank you!",
    image: "/agents/2.png",
    time: "10:05 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "You're welcome! If you have any other questions, feel free to ask.",
    image: "/agents/1.png",
    time: "10:06 AM",
  },
  {
    role: "user",
    name: "User",
    text: "Will do!",
    image: "/agents/2.png",
    time: "10:07 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "You're welcome! If you have any other questions, feel free to ask.",
    image: "/agents/1.png",
    time: "10:06 AM",
  },
  {
    role: "user",
    name: "User",
    text: "Will do!",
    image: "/agents/2.png",
    time: "10:07 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "Hello! How can I assist you today?",
    image: "/agents/1.png",
    time: "10:00 AM",
  },
  {
    role: "user",
    name: "User",
    text: "I need help with my project.",
    image: "/agents/2.png",
    time: "10:01 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "Sure! What do you need help with?",
    image: "/agents/1.png",
    time: "10:02 AM",
  },
  {
    role: "user",
    name: "User",
    text: "I need to create a new agent.",
    image: "/agents/2.png",
    time: "10:03 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "I can help you with that. Let's get started.",
    image: "/agents/1.png",
    time: "10:04 AM",
  },
  {
    role: "user",
    name: "User",
    text: "Thank you!",
    image: "/agents/2.png",
    time: "10:05 AM",
  },
  {
    role: "agent",
    name: "Agent 1",
    text: "You're welcome! If you have any other questions, feel free to ask.",
    image: "/agents/1.png",
    time: "10:06 AM",
  },
  {
    role: "user",
    name: "User",
    text: "Will do!",
    image: "/agents/2.png",
    time: "10:07 AM",
  },
];

const AgentMessage = ({ message }: { message: Message }) => {
  return (
    <div className="flex mb-2 w-full">
      <Image src={message.image} alt="Agent Image" width={60} height={60} />
      <div className="ml-2">
        <p className="text-[#FF265A]">
          {message.name}
          <span className="text-white text-sm ml-2">{message.time}</span>
        </p>
        <h3 className="text-lg font-bold">{message.text}</h3>
      </div>
    </div>
  );
};

const UserMessage = ({ message }: { message: Message }) => {
  return (
    <div className="flex mb-2 w-full justify-end">
      <div className="mr-2 flex flex-col items-end">
        <p className="text-[#FF265A]">
          {message.name}
          <span className="text-white text-sm ml-2">{message.time}</span>
        </p>
        <h3 className="text-lg font-bold">{message.text}</h3>
      </div>
      <Image src={message.image} alt="Agent Image" width={60} height={60} />
    </div>
  );
};

const AgentsChat = () => {
  return (
    // make the whole chat view fill the viewport
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      {/* messages area grows and scrolls */}
      <div className="flex-1 overflow-y-auto px-4 pt-4">
        {mockMessages.map((message, index) =>
          message.role === "agent" ? (
            <AgentMessage key={index} message={message} />
          ) : (
            <UserMessage key={index} message={message} />
          )
        )}
      </div>

      {/* input area stays at bottom */}
      <div className="pb-4 mt-4">
        <h1 className="text-2xl font-bold uppercase text-[#FF265A] mb-2">
          Talk to your agents
        </h1>
        <div className="relative w-full">
          <input
            type="text"
            className="w-full pr-12 p-2 bg-[#FBEDED] border border-[#FF265A] text-black focus:outline-none focus:ring-0"
          />
          <Image
            src={"/icons/voice.svg"}
            alt="Voice Icon"
            width={20}
            height={20}
            className="absolute right-3 top-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentsChat;
