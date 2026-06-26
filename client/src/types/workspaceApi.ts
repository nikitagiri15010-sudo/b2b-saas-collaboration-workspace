export interface Workspace {
  _id: string;
  name: string;
  description: string;
  owner: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceResponse {
  success: boolean;
  workspace?: Workspace;
  workspaces?: Workspace[];
  message?: string;
}