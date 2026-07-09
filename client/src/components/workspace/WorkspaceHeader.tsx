type WorkspaceHeaderProps = {
  channelName: string;
};

const WorkspaceHeader = ({
  channelName,
}: WorkspaceHeaderProps) => {
  return (
    <h1 className="mb-6 text-3xl font-bold">
      #{channelName}
    </h1>
  );
};

export default WorkspaceHeader;