import Image from "next/image";

const mockMessages = [
  {
    agentName: "Agent 1",
    agentImage: "/agents/1.png",
    message: "Hello, how can I assist you?",
    time: "10:00 AM",
  },
  {
    agentName: "Agent 2",
    agentImage: "/agents/2.png",
    message: "I have completed the task.",
    time: "10:05 AM",
  },
  {
    agentName: "Agent 3",
    agentImage: "/agents/3.png",
    message: "Let's schedule a meeting.",
    time: "10:10 AM",
  },
];

const InboxMessage = ({
  agentName,
  agentImage,
  message,
  time,
}: {
  agentName: string;
  agentImage: string;
  message: string;
  time: string;
}) => {
  return (
    <div
      className="flex items-center justify-between p-2 mb-2  hover:bg-[#2a1f27] hover:shadow-lg 
        transform hover:scale-101 
        transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="flex items-center space-x-2">
        <Image src={agentImage} alt="Agent Image" width={50} height={50} />
        <div>
          <h3 className="text-lg font-bold text-[#EF5650]">{agentName}</h3>
          <p className="">{message}</p>
        </div>
      </div>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
};

const Inbox = () => {
  return (
    <div>
      <div className="flex flex-row items-center mb-4 gap-4">
        <div className="flex items-center justify-center space-x-2 bg-[#240E11] p-2 border border-[#44222A]">
          <Image
            src={"/icons/chat-bubble.svg"}
            alt="Icon"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <h1 className="text-2xl font-bold uppercase">My Inbox</h1>
      </div>
      <div className="flex flex-col gap-2">
        {mockMessages.map((message, index) => (
          <InboxMessage
            key={index}
            agentName={message.agentName}
            agentImage={message.agentImage}
            message={message.message}
            time={message.time}
          />
        ))}
      </div>
      <div className="text-[#7DBEC4] underline text-right mt-4 flex items-center justify-end space-x-2 cursor-pointer">
        <p>Show All</p>
      </div>
    </div>
  );
};

export default Inbox;
