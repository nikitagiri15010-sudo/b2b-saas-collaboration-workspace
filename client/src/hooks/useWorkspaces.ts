import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createWorkspace,
  deleteWorkspace,
  getWorkspace,
  getWorkspaces,
  updateWorkspace,
} from "../services/workspaceApi";

import type { Workspace } from "../types/workspaceApi";

export const useWorkspaces = () => {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: getWorkspaces,
    select: (response) =>
      response.workspaces ?? [],
  });
};

export const useWorkspace = (
  workspaceId: string
) => {
  return useQuery({
    queryKey: [
      "workspace",
      workspaceId,
    ],
    queryFn: () =>
      getWorkspace(workspaceId),
    enabled: !!workspaceId,
    select: (response) =>
      response.workspace,
  });
};

export const useCreateWorkspace =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: (
        workspace: Partial<Workspace>
      ) =>
        createWorkspace(workspace),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [
            "workspaces",
          ],
        });
      },
    });
  };

export const useUpdateWorkspace =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: ({
        workspaceId,
        workspace,
      }: {
        workspaceId: string;
        workspace: Partial<Workspace>;
      }) =>
        updateWorkspace(
          workspaceId,
          workspace
        ),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [
            "workspaces",
          ],
        });
      },
    });
  };

export const useDeleteWorkspace =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn: (
        workspaceId: string
      ) =>
        deleteWorkspace(
          workspaceId
        ),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [
            "workspaces",
          ],
        });
      },
    });
  };