"use client";

import { AddonStep, useAddonStore } from "@/zustand/addons";
import AddCustomAddon from "./AddCustomAddon";
import BrowseAddons from "./BrowseAddons";
import ConfigureAddon from "./ConfigureAddon";
import { Agent } from "@/zustand/agents";

const AgentAddons = ({ agent }: { agent: Agent }) => {
  const { currentAddonStep } = useAddonStore((state) => state);

  return (
    <>
      {currentAddonStep === AddonStep.BROWSE && <BrowseAddons agent={agent} />}
      {currentAddonStep === AddonStep.CONFIGURE && <ConfigureAddon agent={agent} />}
      {currentAddonStep === AddonStep.CUSTOM && <AddCustomAddon />}
    </>
  );
};

export default AgentAddons;
