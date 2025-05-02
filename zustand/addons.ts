import { create } from "zustand";
import { devtools } from "zustand/middleware";

const mockAddons = [
  {
    id: 1,
    name: "Addon 1",
    description: "This is a description of Addon 1.",
    tags: ["tag1", "tag2"],
    image: "/addons/cards/1.png",
  },
  {
    id: 2,
    name: "Addon 2",
    description: "This is a description of Addon 2.",
    tags: ["tag3", "tag4"],
    image: "/addons/cards/2.png",
  },
  {
    id: 3,
    name: "Addon 3",
    description: "This is a description of Addon 3.",
    tags: ["tag5", "tag6"],
    image: "/addons/cards/3.png",
  },
  {
    id: 4,
    name: "Addon 4",
    description: "This is a description of Addon 4.",
    tags: ["tag7", "tag8"],
    image: "/addons/cards/4.png",
  },
  {
    id: 5,
    name: "Addon 5",
    description: "This is a description of Addon 5.",
    tags: ["tag9", "tag10"],
    image: "/addons/cards/5.png",
  },
  {
    id: 6,
    name: "Addon 6",
    description: "This is a description of Addon 6.",
    tags: ["tag11", "tag12"],
    image: "/addons/cards/2.png",
  },
  {
    id: 7,
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/1.png",
  },
  {
    id: 8,
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/2.png",
  },
  {
    id: 9,
    name: "Addon 4",
    description: "This is a description of Addon 4.",
    tags: ["tag7", "tag8"],
    image: "/addons/cards/2.png",
  },
  {
    id: 10,
    name: "Addon 5",
    description: "This is a description of Addon 5.",
    tags: ["tag9", "tag10"],
    image: "/addons/cards/3.png",
  },
  {
    id: 11,
    name: "Addon 6",
    description: "This is a description of Addon 6.",
    tags: ["tag11", "tag12"],
    image: "/addons/cards/4.png",
  },
  {
    id: 12,
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/5.png",
  },
  {
    id: 13,
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/6.png",
  },
  {
    id: 14,
    name: "Addon 4",
    description: "This is a description of Addon 4.",
    tags: ["tag7", "tag8"],
    image: "/addons/cards/1.png",
  },
  {
    id: 15,
    name: "Addon 5",
    description: "This is a description of Addon 5.",
    tags: ["tag9", "tag10"],
    image: "/addons/cards/2.png",
  },
  {
    id: 16,
    name: "Addon 6",
    description: "This is a description of Addon 6.",
    tags: ["tag11", "tag12"],
    image: "/addons/cards/3.png",
  },
  {
    id: 17,
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/4.png",
  },
  {
    id: 18,
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/5.png",
  },
  {
    id: 19,
    name: "Addon 7",
    description: "This is a description of Addon 7.",
    tags: ["tag13", "tag14"],
    image: "/addons/cards/6.png",
  },
  {
    id: 20,
    name: "Addon 8",
    description: "This is a description of Addon 8.",
    tags: ["tag15", "tag16"],
    image: "/addons/cards/1.png",
  },
];

export interface Addon {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
}

export enum AddonStep {
  BROWSE,
  CONFIGURE,
  CUSTOM,
}

interface AddonsState {
  addons: Addon[];
  currentAddonStep: AddonStep;
  selectedAddon: Addon | null;
  setSelectedAddon: (addon: Addon | null) => void;
  setAddonStep: (step: AddonStep) => void;
  addAddon: (addon: Addon) => void;
  editAddon: (id: number, updatedAddon: Partial<Addon>) => void;
  deleteAddon: (id: number) => void;
}

export const useAddonStore = create<AddonsState>()(
  devtools(
    (set) => ({
      addons: mockAddons,
      currentAddonStep: AddonStep.BROWSE,
      selectedAddon: null,
      setSelectedAddon: (addon) => set({ selectedAddon: addon }),
      setAddonStep: (step: AddonStep) => set({ currentAddonStep: step }),
      addAddon: (addon) =>
        set((state) => ({
          addons: [...state.addons, addon],
        })),
      editAddon: (id, updatedAddon) =>
        set((state) => ({
          addons: state.addons.map((addon) =>
            addon.id === id ? { ...addon, ...updatedAddon } : addon
          ),
        })),

      deleteAddon: (id) =>
        set((state) => ({
          addons: state.addons.filter((addon) => addon.id !== id),
        })),
    }),
    {
      name: "addon-storage",
    }
  )
);
