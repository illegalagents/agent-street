import Image from "next/image";

const mockStreets = [
  {
    id: 1,
    name: "Main Street",
    userCount: "230",
    messagesCount: "3920",
    streetImage: "/streets/1.png",
  },
  {
    id: 2,
    name: "Broadway",
    userCount: "230",
    messagesCount: "3920",
    streetImage: "/streets/2.png",
  },
  {
    id: 3,
    name: "5th Avenue",
    userCount: "230",
    messagesCount: "3920",
    streetImage: "/streets/3.png",
  },
];

const MainStreet = ({
  streetImage,
  streetName,
  userCount,
  messagesCount,
}: {
  streetImage: string;
  streetName: string;
  userCount: string;
  messagesCount: string;
}) => {
  return (
    <div
      className="bg-[#161114] shadow-md flex items-center space-x-4 hover:bg-[#2a1f27] hover:shadow-lg 
        transform hover:scale-101 
        transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="relative w-full h-60 flex-shrink-0">
        <Image
          src={streetImage}
          alt={streetName}
          className="object-cover w-full h-full"
          fill
          sizes="500px"
        />
        <div className="absolute bg-[#000000b8] flex flex-col items-start justify-end text-white p-3 h-fit w-full bottom-0">
          <h1 className="font-bold text-[#EF5650] text-xl">{streetName}</h1>
          <div className="flex gap-6">
            <p>
              <span className="font-bold">{userCount}</span> users
            </p>
            <p>
              <span className="font-bold">{messagesCount}</span> messages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LittleStreet = ({
  streetImage,
  streetName,
  userCount,
  messagesCount,
}: {
  streetImage: string;
  streetName: string;
  userCount: string;
  messagesCount: string;
}) => {
  return (
    <div
      className="bg-[#161114] shadow-md flex items-center space-x-4 hover:bg-[#2a1f27] hover:shadow-lg 
        transform hover:scale-101 
        transition duration-200 ease-in-out cursor-pointer"
    >
      <Image
        src={streetImage}
        alt={streetName}
        height={70}
        width={70}
        style={{ width: "70", height: "70" }}
      />
      <div className="p-2">
        <h1 className="font-bold text-[#EF5650] text-xl">{streetName}</h1>
        <div className="flex gap-6">
          <p>
            <span className="font-bold">{userCount}</span> users
          </p>
          <p>
            <span className="font-bold">{messagesCount}</span> messages
          </p>
        </div>
      </div>
    </div>
  );
};

const Streets = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4 uppercase">Streets to go!</h1>
      <div className="flex flex-col gap-4">
        <MainStreet
          streetImage={mockStreets[0].streetImage}
          streetName={mockStreets[0].name}
          userCount={mockStreets[0].userCount}
          messagesCount={mockStreets[0].messagesCount}
        />
        {mockStreets.slice(1).map((street) => (
          <LittleStreet
            streetImage={street.streetImage}
            streetName={street.name}
            userCount={street.userCount}
            messagesCount={street.messagesCount}
            key={street.id}
          />
        ))}
      </div>
      <div className="text-[#7DBEC4] underline text-right mt-4 flex items-center justify-end space-x-2 cursor-pointer">
        <p>Browse...</p>
      </div>
    </div>
  );
};
export default Streets;
