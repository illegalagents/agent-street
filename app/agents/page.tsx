import MyAgents from "@/components/agents/MyAgents";
import TripleGrid from "@/components/TripleGrid";
import { Metadata } from "next";
import AgentTasks from "@/components/agents/AgentTasks";
import ThingsTodo from "@/components/agents/ThingsTodo";
import AgentsChat from "@/components/agents/AgentsChat";

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
      secondColumn={<AgentsChat />}
      thirdColumn={
        <div className="flex flex-col gap-4">
          <AgentTasks />
          <ThingsTodo />
        </div>
      }
    />
  );
}
