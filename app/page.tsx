import MyAgents from "@/components/dashboard/MyAgents";
import TripleGrid from "@/components/TripleGrid";

export default function Home() {
  return (
    <TripleGrid
      firstColumn={<MyAgents />}
      secondColumn={<div className="h-32">Activities</div>}
      thirdColumn={<div className="h-32">Streets to go!</div>}
    />
  );
}
