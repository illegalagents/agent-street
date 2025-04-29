import Image from "next/image";

const mockAddons = [
  {
    name: "Addon 1",
    description: "This is a description of Addon 1.",
    tags: ["tag1", "tag2"],
    image: "/addons/cards/1.png",
  },
  {
    name: "Addon 2",
    description: "This is a description of Addon 2.",
    tags: ["tag3", "tag4"],
    image: "/addons/cards/2.png",
  },
  {
    name: "Addon 3",
    description: "This is a description of Addon 3.",
    tags: ["tag5", "tag6"],
    image: "/addons/cards/3.png",
  },
  {
    name: "Addon 4",
    description: "This is a description of Addon 4.",
    tags: ["tag7", "tag8"],
    image: "/addons/cards/4.png",
  },
  {
    name: "Addon 5",
    description: "This is a description of Addon 5.",
    tags: ["tag9", "tag10"],
    image: "/addons/cards/5.png",
  },
  {
    name: "Addon 6",
    description: "This is a description of Addon 6.",
    tags: ["tag11", "tag12"],
    image: "/addons/cards/2.png",
  },
  {
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/1.png",
  },
  {
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/2.png",
  },
  {
    name: "Addon 4",
    description: "This is a description of Addon 4.",
    tags: ["tag7", "tag8"],
    image: "/addons/cards/2.png",
  },
  {
    name: "Addon 5",
    description: "This is a description of Addon 5.",
    tags: ["tag9", "tag10"],
    image: "/addons/cards/3.png",
  },
  {
    name: "Addon 6",
    description: "This is a description of Addon 6.",
    tags: ["tag11", "tag12"],
    image: "/addons/cards/4.png",
  },
  {
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/5.png",
  },
  {
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/6.png",
  },
  {
    name: "Addon 4",
    description: "This is a description of Addon 4.",
    tags: ["tag7", "tag8"],
    image: "/addons/cards/1.png",
  },
  {
    name: "Addon 5",
    description: "This is a description of Addon 5.",
    tags: ["tag9", "tag10"],
    image: "/addons/cards/2.png",
  },
  {
    name: "Addon 6",
    description: "This is a description of Addon 6.",
    tags: ["tag11", "tag12"],
    image: "/addons/cards/3.png",
  },
  {
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/4.png",
  },
  {
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/5.png",
  },
  {
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/6.png",
  },
  {
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/1.png",
  },
];

const AddonCard = ({
  name,
  description,
  tags,
  image,
}: {
  name: string;
  description: string;
  tags: string[];
  image: string;
}) => {
  return (
    <div
      className="bg-[#32212D] hover:shadow-lg hover:bg-[#452c3d]
        transform hover:scale-101 
        transition duration-200 ease-in-out cursor-pointer"
    >
      <Image
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded"
        width={500}
        height={500}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#FFD9D6] mt-2">{name}</h2>
        <p className="text-[#957A78]">{description}</p>
        <div className="flex flex-wrap mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[#7DBEC4] text-sm mr-2 mb-2 underline"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const AgentAddons = () => {
  return (
    <div className="fade-in">
      <div className="p-6 border-[#44222A] border-b-2">
        <h1 className="text-[#C04944] text-3xl font-bold">Agents Addons</h1>
        <p className="text-[#C5ACB2] text-lg mt-2">
          Addons enchance your Agent’s capabilities, allowing them to perform
          better and do new things.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6 overflow-y-auto h-[calc(100vh-262px)]">
        {mockAddons.map((addon, index) => (
          <AddonCard
            key={index}
            name={addon.name}
            description={addon.description}
            tags={addon.tags}
            image={addon.image}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-4 border-t-2 border-[#44222A] gap-4">
        <button className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]">
          Add New Addon
        </button>
        <button className="bg-[#0A3E69] text-[#45E6FF] px-4 py-2 h-fit cursor-pointer transition duration-300 ease-in-out hover:bg-[#0A3E69] hover:text-[#FFD9D6]">
          Create New Addon
        </button>
      </div>
    </div>
  );
};

export default AgentAddons;
