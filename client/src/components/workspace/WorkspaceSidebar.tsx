    import { useChannels } from "../../hooks/useChannels";

    type WorkspaceSidebarProps = {
      selectedWorkspaceId: string;
      selectedChannel: string;
      setSelectedChannel: (channel: string) => void;
    };

    const WorkspaceSidebar = ({
      selectedWorkspaceId,
      selectedChannel,
      setSelectedChannel,
    }: WorkspaceSidebarProps) => {
      const {
        data: channels,
        isLoading,
        isError,
      } = useChannels(selectedWorkspaceId);

      if (isLoading) {
        return (
          <aside className="w-64 border-r p-4">
            <p>Loading channels...</p>
          </aside>
        );
      }

      if (isError) {
        return (
          <aside className="w-64 border-r p-4">
            <p className="text-red-500">
              Failed to load channels.
            </p>
          </aside>
        );
      }

      if (!channels || channels.length === 0) {
        return (
          <aside className="w-64 border-r p-4">
            <p>No channels found.</p>
          </aside>
        );
      }

      return (
        <aside className="w-64 border-r p-4">
          <h2 className="mb-6 text-xl font-bold">
            Workspace
          </h2>

          <h3 className="mb-3 text-sm font-semibold uppercase">
            Channels
          </h3>

          <ul className="space-y-2">
            {channels.map((channel) => (
              <li
                key={channel._id}
                onClick={() =>
                  setSelectedChannel(channel._id)
                }
                className={`cursor-pointer rounded px-2 py-1 ${
                  selectedChannel === channel._id
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