import Activities from "@/components/dashboard/Activities";
import MyAgents from "@/components/dashboard/MyAgents";
import Streets from "@/components/dashboard/Streets";
import TripleGrid from "@/components/TripleGrid";

export default function Home() {
  return (
    <TripleGrid
      firstColumn={<MyAgents />}
      secondColumn={<Activities />}
      thirdColumn={<Streets />}
    />
  );
}
