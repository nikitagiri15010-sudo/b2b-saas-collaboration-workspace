export const channels = [
  "general",
  "development",
  "design",
  "marketing",
];
export const channelMessages: Record<
  string,
  string[]
> = {
  general: [
    "Welcome to the general channel.",
    "Team announcements will appear here.",
  ],
  development: [
    "Development sprint starts Monday.",
    "Code reviews are pending.",
  ],
  design: [
    "New design system draft uploaded.",
    "Review the dashboard mockups.",
  ],
  marketing: [
    "Campaign planning meeting tomorrow.",
    "Social media content ready.",
  ],
};