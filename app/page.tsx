import Activities from "@/components/dashboard/Activities";
import Inbox from "@/components/dashboard/Inbox";
import MyAgents from "@/components/dashboard/MyAgents";
import Streets from "@/components/dashboard/Streets";
import TalkToTeam from "@/components/dashboard/TalkToTeam";
import TripleGrid from "@/components/TripleGrid";
import Addons from "@/components/dashboard/Addons";

export default function Home() {
  return (
    <TripleGrid
      firstColumn={
        <div className="flex flex-col gap-4">
          <MyAgents />
          <Inbox />
          <TalkToTeam />
        </div>
      }
      secondColumn={<Activities />}
      thirdColumn={
        <div className="flex flex-col gap-4">
          <Streets />
          <Addons />
        </div>
      }
    />
  );
}
