import api from "./api";
import type {
  Workspace,
  WorkspaceResponse,
} from "../types/workspaceApi";

export const getWorkspaces =
  async (): Promise<WorkspaceResponse> => {
    const response =
      await api.get("/workspaces");

    return response.data;
  };

export const getWorkspace =
  async (
    workspaceId: string
  ): Promise<WorkspaceResponse> => {
    const response =
      await api.get(
        `/workspaces/${workspaceId}`
      );

    return response.data;
  };

export const createWorkspace =
  async (
    workspace: Partial<Workspace>
  ): Promise<WorkspaceResponse> => {
    const response =
      await api.post(
        "/workspaces",
        workspace
      );

    return response.data;
  };

export const updateWorkspace =
  async (
    workspaceId: string,
    workspace: Partial<Workspace>
  ): Promise<WorkspaceResponse> => {
    const response =
      await api.put(
        `/workspaces/${workspaceId}`,
        workspace
      );

    return response.data;
  };

export const deleteWorkspace =
  async (
    workspaceId: string
  ) => {
    const response =
      await api.delete(
        `/workspaces/${workspaceId}`
      );

    return response.data;
  };