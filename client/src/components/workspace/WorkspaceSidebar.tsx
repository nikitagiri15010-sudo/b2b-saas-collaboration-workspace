import { channels } from "../../data/workspaceData";
type WorkspaceSidebarProps = {
  selectedChannel: string;
  setSelectedChannel: (channel: string) => void;
};

const WorkspaceSidebar = ({
  selectedChannel,
  setSelectedChannel,
}: WorkspaceSidebarProps) => {
 

  return (
    <aside className="w-64 border-r p-4">
      <h2 className="mb-6 text-xl font-bold">
        Acme Workspace
      </h2>

      <h3 className="mb-3 text-sm font-semibold uppercase">
        Channels
      </h3>

      <ul className="space-y-2">
        {channels.map((channel) => (
          <li
            key={channel.id}
            onClick={() =>
              setSelectedChannel(channel.id)
            }
            className={`cursor-pointer rounded px-2 py-1 ${
              selectedChannel === channel.id
                ? "bg-gray-200 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            # {channel.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default WorkspaceSidebar;