import type {
  Channel,
  Message,
} from "../types/workspace";
export const channels: Channel[] = [
  {
    id: "general",
    name: "general",
  },
  {
    id: "development",
    name: "development",
  },
  {
    id: "design",
    name: "design",
  },
  {
    id: "marketing",
    name: "marketing",
  },
];
export const channelMessages: Record<
  string,
  Message[]
> = {
  general: [
    {
      id: "g1",
      content:
        "Welcome to the general channel.",
    },
    {
      id: "g2",
      content:
        "Team announcements will appear here.",
    },
  ],

  development: [
    {
      id: "d1",
      content:
        "Development sprint starts Monday.",
    },
    {
      id: "d2",
      content:
        "Code reviews are pending.",
    },
  ],

  design: [
    {
      id: "de1",
      content:
        "New design system draft uploaded.",
    },
    {
      id: "de2",
      content:
        "Review the dashboard mockups.",
    },
  ],

  marketing: [
    {
      id: "m1",
      content:
        "Campaign planning meeting tomorrow.",
    },
    {
      id: "m2",
      content:
        "Social media content ready.",
    },
  ],
};