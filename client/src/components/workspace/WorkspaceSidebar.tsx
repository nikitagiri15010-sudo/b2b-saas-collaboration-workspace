import { useState } from "react";
import {
  useChannels,
  useCreateChannel,
} from "../../hooks/useChannels";

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
  const [channelName, setChannelName] = useState("");

  const {
    data: channels,
    isLoading,
    isError,
  } = useChannels(selectedWorkspaceId);

  const { mutate: createChannel, isPending } =
    useCreateChannel();

  const handleCreateChannel = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!channelName.trim()) return;

    createChannel(
      {
        name: channelName,
        workspace: selectedWorkspaceId,
      },
      {
        onSuccess: () => {
          setChannelName("");
        },
      }
    );
  };

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
        <h2 className="mb-6 text-xl font-bold">
          Workspace
        </h2>

        <h3 className="mb-4 text-sm font-semibold uppercase">
          Create Your First Channel
        </h3>

        <form
          onSubmit={handleCreateChannel}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Channel name"
            value={channelName}
            onChange={(e) =>
              setChannelName(e.target.value)
            }
            className="w-full rounded border px-3 py-2"
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending
              ? "Creating..."
              : "Create Channel"}
          </button>
        </form>
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