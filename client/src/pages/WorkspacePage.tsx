import { useState } from "react";
import WorkspaceSidebar from "../components/workspace/WorkspaceSidebar";
import WorkspaceMain from "../components/workspace/WorkspaceMain";

const WorkspacePage = () => {
  const [selectedChannel, setSelectedChannel] =
    useState("general");

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <WorkspaceSidebar
        selectedChannel={selectedChannel}
        setSelectedChannel={setSelectedChannel}
      />

      <WorkspaceMain
        selectedChannel={selectedChannel}
      />
    </div>
  );
};

export default WorkspacePage;

