import Image from "next/image";

const mockTodoItems = [
  {
    id: 1,
    title: "Create a new agent",
    image: "/todo/1.png",
  },
  {
    id: 2,
    title: "Train your agent",
    image: "/todo/2.png",
  },
  {
    id: 3,
    title: "Test your agent",
    image: "/todo/1.png",
  },
];

const TodoItem = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="flex mb-2 bg-[#161114]">
      <Image src={image} alt="Agent Image" width={100} height={100} />
      <div className="flex align-center space-x-4 ml-2 pt-2 pl-2 w-full">
        <Image
          src={"/icons/warning.svg"}
          alt="Icon"
          width={50}
          height={50}
          style={{ width: "20px", height: "20px" }}
          className="mt-1"
        />
        <div className="w-full pr-2">
          <h3 className="text-lg font-bold text-[#FFD9D6]">{title}</h3>
          <button className="text-sm text-[#45E6FF] bg-[#0A3E69] px-4 py-2 float-right hover:bg-[#0c4c81] cursor-pointer">
            Go!
          </button>
        </div>
      </div>
    </div>
  );
};

const ThingsTodo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">
        Things todo with your agents
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        {mockTodoItems.map((item) => (
          <TodoItem key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default ThingsTodo;
