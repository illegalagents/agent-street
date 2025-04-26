import Activities from "@/components/dashboard/Activities";
import MyAgents from "@/components/agents/MyAgents";
import Streets from "@/components/dashboard/Streets";
import TripleGrid from "@/components/TripleGrid";
import Addons from "@/components/dashboard/Addons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Street | My Agents",
  description: "Your agents, your way.",
};

export default function Agents() {
  return (
    <TripleGrid
      firstColumn={
        <div className="flex flex-col gap-4">
          <MyAgents />
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
