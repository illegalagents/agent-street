import Image from "next/image";

const mockTasks = [
  {
    taskName: "Task 1",
    status: "In Progress",
    agentImage: "/agents/1.png",
    progress: 50,
  },
  {
    taskName: "Task 2",
    status: "Completed",
    agentImage: "/agents/2.png",
    progress: 100,
  },
  {
    taskName: "Task 3",
    status: "Not Started",
    agentImage: "/agents/3.png",
    progress: 0,
  },
  {
    taskName: "Task 4",
    status: "In Progress",
    agentImage: "/agents/4.png",
    progress: 75,
  },
  {
    taskName: "Task 5",
    status: "Completed",
    agentImage: "/agents/1.png",
    progress: 100,
  },
];

const AgentTask = ({
  taskName,
  status,
  agentImage,
  progress,
}: {
  taskName: string;
  status: string;
  agentImage: string;
  progress: number;
}) => {
  const radius = 22;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const progressColor =
    status === "Completed"
      ? "#1A9C82"
      : status === "In Progress"
      ? "#E0A64E"
      : "#C5ACB2";

  return (
    <div className="flex items-center justify-between p-2 mb-2 bg-[#161114] hover:bg-[#2a1f27] hover:shadow-lg transform hover:scale-101 transition duration-200 ease-in-out cursor-pointer">
      <div className="flex items-center justify-between space-x-4 w-full">
        <div className="flex items-center space-x-4">
          <div
            className="relative"
            style={{ width: radius * 2, height: radius * 2 }}
          >
            <svg width={radius * 2} height={radius * 2}>
              {/* light fill in center */}
              <circle
                fill={progressColor}
                fillOpacity="0.2"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke="#333"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke={progressColor}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                transform={`rotate(-90 ${radius} ${radius})`}
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center text-sm font-bold"
              style={{ color: progressColor, fontSize: "0.8rem" }}
            >
              {progress}%
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{taskName}</h3>
            <p style={{ color: progressColor }}>{status}</p>
          </div>
        </div>
        <Image src={agentImage} alt="Agent Image" width={50} height={50} />
      </div>
    </div>
  );
};

const AgentTasks = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold uppercase">Agents Tasks</h1>

        <div className="text-[#7DBEC4] underline text-right flex items-center justify-end space-x-4 cursor-pointer">
          <p className="hover:text-[#45E6FF]">Show All</p>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        {mockTasks.map((task, index) => (
          <AgentTask
            key={index}
            taskName={task.taskName}
            status={task.status}
            agentImage={task.agentImage}
            progress={task.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentTasks;
