"use client";

import { AddonStep, useAddonStore } from "@/zustand/addons";
import AddCustomAddon from "./AddCustomAddon";
import BrowseAddons from "./BrowseAddons";

const AgentAddons = () => {
  const { currentAddonStep } = useAddonStore((state) => state);

  return (
    <>
      {currentAddonStep === AddonStep.BROWSE && <BrowseAddons />}
      {currentAddonStep === AddonStep.CUSTOM && <AddCustomAddon />}
    </>
  );
};

export default AgentAddons;
