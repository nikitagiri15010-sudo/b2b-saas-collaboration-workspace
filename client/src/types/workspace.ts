import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createWorkspace,
  deleteWorkspace,
  getWorkspaces,
  updateWorkspace,
} from "../services/workspaceApi";

export const useWorkspaces =
  () => {
    return useQuery({
      queryKey: [
        "workspaces",
      ],
      queryFn:
        getWorkspaces,
    });
  };

export const useCreateWorkspace =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        createWorkspace,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "workspaces",
            ],
          }
        );
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
      }: any) =>
        updateWorkspace(
          workspaceId,
          workspace
        ),

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "workspaces",
            ],
          }
        );
      },
    });
  };

export const useDeleteWorkspace =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        deleteWorkspace,

      onSuccess: () => {
        queryClient.invalidateQueries(
          {
            queryKey: [
              "workspaces",
            ],
          }
        );
      },
    });
  };