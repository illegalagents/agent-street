"use client";

import AddCustomAddon from "./AddCustomAddon";
import BrowseAddons from "./BrowseAddons";
import ConfigureAddon from "./ConfigureAddon";
import { Agent } from "@/zustand/agents";
import { usePathname } from "next/navigation";

const AgentAddons = ({ agent }: { agent: Agent }) => {
  const pathname = usePathname();

  const configureMatch = new RegExp(`^/agents/${agent.id}/addons/(\\d+)$`).exec(
    pathname
  );

  return (
    <>
      {pathname === `/agents/${agent.id}/addons` && (
        <BrowseAddons agent={agent} />
      )}
      {configureMatch && (
        <ConfigureAddon
          agent={agent}
          addonId={parseInt(configureMatch[1], 10)}
        />
      )}
      {pathname === `/agents/${agent.id}/addons/custom` && (
        <AddCustomAddon agent={agent} />
      )}
    </>
  );
};

export default AgentAddons;
