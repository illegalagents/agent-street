import { Metadata } from "next";
import AgentProfile from "@/components/agent/AgentProfile";

export const metadata: Metadata = {
  title: "Agent Street | Agent",
  description: "Your agents, your way.",
};

export default function Agents() {
  return <AgentProfile />;
}
