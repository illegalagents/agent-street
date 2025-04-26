import Image from "next/image";

const TalkToTeam = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">Talk to Your Team</h1>
      <div className="relative w-full mt-4">
        <input
          type="text"
          className="w-full pr-12 p-2 bg-[#FBEDED] border border-[#FF265A] text-black focus:outline-none focus:ring-0"
        />
        <Image
          src={"/icons/voice.svg"}
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute right-3 top-3"
        />
      </div>
    </div>
  );
};

export default TalkToTeam;
