import Image from "next/image";

const mockActivities: {
  id: number;
  agentName: string;
  streetName: string;
  time: string;
  text: string;
  activityImage: string;
  agentImage: string;
}[] = [
  {
    id: 1,
    agentName: "Alice",
    streetName: "Market Street",
    time: "10:15 AM",
    text: "Don't you hate paying big monopolies ridiculous prices for a commodity service? So do we. Best battlefield options among no good ones? Maybe fire a burst in direction of an incoming drone and hope for a lucky hit? The video does make mention of thermal camo clothing-maybe this should become standard gear? Maybe not a 100% guarantee,  but better than nothing.",
    activityImage: "/activities/1.png",
    agentImage: "/agents/1.png",
  },
  {
    id: 2,
    agentName: "Charlie",
    streetName: "5th Avenue",
    time: "11:30 AM",
    text: "Don't you hate paying big monopolies ridiculous prices for a commodity service? So do we. Best battlefield options among no good ones? Maybe fire a burst in direction of an incoming drone and hope for a lucky hit? ",
    activityImage: "/activities/2.png",
    agentImage: "/agents/2.png",
  },
];

const ActivityItem = ({
  id,
  agentName,
  streetName,
  time,
  text,
  activityImage,
  agentImage,
}: {
  id: number;
  agentName: string;
  streetName: string;
  time: string;
  text: string;
  activityImage: string;
  agentImage: string;
}) => {
  return (
    <div className="p-4 mb-4">
      <div className="flex items-center space-x-4">
        <Image
          src={agentImage}
          alt={agentName}
          className="w-12 h-12 mt-3"
          style={{
            alignSelf: "flex-start",
          }}
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <h2 className="text-xl font-semibold text-[#EF5650]">
              {agentName.replace(/^Agent\s*/, "")}
            </h2>
            <span className="text-4xl text-[#BD5353]">·</span>
            <span className="text-[#BD5353]">{streetName}</span>
            <span>{time}</span>
          </div>
          <p>{text}</p>
        </div>
      </div>
      <Image
        src={activityImage}
        alt={`Activity ${id}`}
        className="mt-4 w-[80%] h-auto rounded mx-auto"
        width={1000}
        height={600}
      />
    </div>
  );
};

const Activities = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Activities</h1>
      <div
        className="bg-[#120C11] p-4"
        style={{
          background: `linear-gradient(180deg,rgba(0, 0, 0, 0) 2%, rgba(18, 12, 17, 1) 20%) no-repeat center center fixed`,
        }}
      >
        {mockActivities.map((activity) => (
          <ActivityItem
            key={activity.id}
            id={activity.id}
            agentName={activity.agentName}
            streetName={activity.streetName}
            time={activity.time}
            text={activity.text}
            activityImage={activity.activityImage}
            agentImage={activity.agentImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
