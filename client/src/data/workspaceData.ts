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
    content: "Welcome to the general channel.",
    author: "System",
    timestamp: "09:00 AM",
  },
  {
    id: "g2",
    content: "Team announcements will appear here.",
    author: "Admin",
    timestamp: "09:15 AM",
  },
],

development: [
  {
    id: "d1",
    content: "Development sprint starts Monday.",
    author: "Rahul",
    timestamp: "10:00 AM",
  },
  {
    id: "d2",
    content: "Code reviews are pending.",
    author: "Priya",
    timestamp: "10:30 AM",
  },
],

design: [
  {
    id: "de1",
    content: "New design system draft uploaded.",
    author: "Ankit",
    timestamp: "11:00 AM",
  },
  {
    id: "de2",
    content: "Review the dashboard mockups.",
    author: "Sneha",
    timestamp: "11:20 AM",
  },
],

marketing: [
  {
    id: "m1",
    content: "Campaign planning meeting tomorrow.",
    author: "Riya",
    timestamp: "01:00 PM",
  },
  {
    id: "m2",
    content: "Social media content ready.",
    author: "Aman",
    timestamp: "01:30 PM",
  },
],
};