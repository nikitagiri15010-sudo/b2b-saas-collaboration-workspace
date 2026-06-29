// import { channels } from "../../data/workspaceData";
// import { useWorkspaces } from "../../hooks/useWorkspaces";

// type WorkspaceSidebarProps = {
//   selectedChannel: string;
//   setSelectedChannel: (channel: string) => void;
// };

// const WorkspaceSidebar = ({
//   selectedChannel,
//   setSelectedChannel,
// }: WorkspaceSidebarProps) => {
//   const {
//     data: workspaces,
//     isLoading,
//     isError,
//   } = useWorkspaces();

//   console.log("React Query workspaces:", workspaces);

//   if (isLoading) {
//     return (
//       <aside className="w-64 border-r p-4">
//         <p>Loading workspaces...</p>
//       </aside>
//     );
//   }

//   if (isError) {
//     return (
//       <aside className="w-64 border-r p-4">
//         <p className="text-red-500">
//           Failed to load workspaces.
//         </p>
//       </aside>
//     );
//   }

//   if (!workspaces || workspaces.length === 0) {
//     return (
//       <aside className="w-64 border-r p-4">
//         <p>No workspaces found.</p>
//       </aside>
//     );
//   }

//   const currentWorkspace = workspaces[0];

//   return (
//     <aside className="w-64 border-r p-4">
//       <h2 className="mb-6 text-xl font-bold">
//         {currentWorkspace.name}
//       </h2>

//       <h3 className="mb-3 text-sm font-semibold uppercase">
//         Channels
//       </h3>

//       <ul className="space-y-2">
//         {channels.map((channel) => (
//           <li
//             key={channel.id}
//             onClick={() =>
//               setSelectedChannel(channel.id)
//             }
//             className={`cursor-pointer rounded px-2 py-1 ${
//               selectedChannel === channel.id
//                 ? "bg-gray-200 font-semibold"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             # {channel.name}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default WorkspaceSidebar;

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