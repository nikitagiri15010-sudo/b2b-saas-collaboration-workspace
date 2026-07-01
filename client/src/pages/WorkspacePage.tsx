import { useEffect, useState } from "react";
import WorkspaceSidebar from "../components/workspace/WorkspaceSidebar";
import WorkspaceMain from "../components/workspace/WorkspaceMain";
import { useWorkspaces } from "../hooks/useWorkspaces";

const WorkspacePage = () => {
  const [selectedChannel, setSelectedChannel] =
    useState("general");

  const [selectedWorkspaceId, setSelectedWorkspaceId] =
    useState("");

  const {
    data: workspaces,
    isLoading,
    isError,
  } = useWorkspaces();

  useEffect(() => {
    if (
      workspaces &&
      workspaces.length > 0 &&
      !selectedWorkspaceId
    ) {
      setSelectedWorkspaceId(workspaces[0]._id);
    }
  }, [workspaces, selectedWorkspaceId]);

  if (isLoading) {
    return <p className="p-4">Loading workspaces...</p>;
  }

  if (isError) {
    return (
      <p className="p-4 text-red-500">
        Failed to load workspaces.
      </p>
    );
  }

  if (!selectedWorkspaceId) {
    return <p className="p-4">No workspaces found.</p>;
  }

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <WorkspaceSidebar
        selectedWorkspaceId={selectedWorkspaceId}
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
