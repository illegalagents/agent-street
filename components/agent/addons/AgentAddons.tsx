"use client";

import { AddonStep, useAddonStore } from "@/zustand/addons";
import AddCustomAddon from "./AddCustomAddon";
import BrowseAddons from "./BrowseAddons";
import ConfigureAddon from "./ConfigureAddon";

const AgentAddons = () => {
  const { currentAddonStep } = useAddonStore((state) => state);

  return (
    <>
      {currentAddonStep === AddonStep.BROWSE && <BrowseAddons />}
      {currentAddonStep === AddonStep.CONFIGURE && <ConfigureAddon />}
      {currentAddonStep === AddonStep.CUSTOM && <AddCustomAddon />}
    </>
  );
};

export default AgentAddons;
