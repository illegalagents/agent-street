import { Metadata } from "next";
import AgentProfile from "@/components/agent/AgentProfile";

export const metadata: Metadata = {
  title: "Agent Street | Agent Addons",
  description: "Edit your agent addons.",
};

export default async function Agents({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) {
    return <div>Agent not found</div>;
  }
  return <AgentProfile agentId={Number(id)} />;
}
