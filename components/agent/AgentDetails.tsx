import Image from "next/image";

const AgentDetails = () => {
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
