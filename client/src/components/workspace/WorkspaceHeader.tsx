type WorkspaceHeaderProps = {
  selectedChannel: string;
};

const WorkspaceHeader = ({
  selectedChannel,
}: WorkspaceHeaderProps) => {
  return (
    <h1 className="mb-6 text-3xl font-bold">
      #{selectedChannel}
    </h1>
  );
};

export default WorkspaceHeader;