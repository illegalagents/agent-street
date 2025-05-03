import { create } from "zustand";
import { devtools } from "zustand/middleware";

const mockAgents = [
  {
    id: 1,
    name: "Samantha",
    class: "Pro Gamer",
    task: "Playing Fortnite...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/1.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
    addons: [1, 2],
  },
  {
    id: 2,
    name: "Bruce",
    class: "Coder",
    task: "Vibe coding...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/2.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
    addons: [1, 2],
  },
  {
    id: 3,
    name: "Jessica",
    class: "Finance",
    task: "Balancing the books...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/3.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
    addons: [1, 2],
  },
  {
    id: 4,
    name: "Sam",
    class: "Romantic",
    task: "Flirting with the AI...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/4.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
    addons: [1, 2],
  },
  {
    id: 5,
    name: "Kelly",
    class: "Pro Gamer",
    task: "Playing Fortnite...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/1.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
    addons: [1, 2],
  },
  {
    id: 6,
    name: "Shawn",
    class: "Coder",
    task: "Vibe coding...",
    chatCount: 5,
    notificationCount: 2,
    image: "/agents/2.png",
    actions: ["Search X for Apple.corp news...", "Bring news from followers.."],
    addons: [1, 2],
  },
];

export interface Agent {
  id: number;
  name: string;
  class: string;
  task: string;
  chatCount: number;
  notificationCount: number;
  image: string;
  actions: string[];
  addons: number[];
}

interface AgentState {
  agents: Agent[];
  addAgent: (agent: Agent) => void;
  editAgent: (id: number, updatedAgent: Partial<Agent>) => void;
  deleteAgent: (id: number) => void;
}

export const useAgentStore = create<AgentState>()(
  devtools(
    (set) => ({
      agents: mockAgents,
      addAgent: (agent) =>
        set((state) => ({
          agents: [...state.agents, agent],
        })),
      editAgent: (id, updatedAgent) =>
        set((state) => ({
          agents: state.agents.map((agent) =>
            agent.id === id ? { ...agent, ...updatedAgent } : agent
          ),
        })),
      deleteAgent: (id) =>
        set((state) => ({
          agents: state.agents.filter((agent) => agent.id !== id),
        })),
    }),
    {
      name: "agent-storage",
    }
  )
);
