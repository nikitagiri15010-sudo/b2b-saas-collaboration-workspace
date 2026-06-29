  import { useQuery } from "@tanstack/react-query";
  import { getWorkspaces } from "../services/workspaceApi";

  export const useWorkspaces = () => {
    return useQuery({
      queryKey: ["workspaces"],
      queryFn: getWorkspaces,
      select: (response) => response.workspaces ?? [],
    });
  };