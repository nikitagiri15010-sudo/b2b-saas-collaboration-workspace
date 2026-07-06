export interface Workspace {
  _id: string;
  name: string;
  description?: string;
  owner: string;
  members: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Channel {
  id: string;
  name: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface Message {
  _id: string;
  content: string;
  channel: string;
  sender: User;
  createdAt: string;
  updatedAt: string;
}

/*
|--------------------------------------------------------------------------
| Temporary Mock Types
|--------------------------------------------------------------------------
| These are kept temporarily so the current WorkspaceMain,
| MessageList and workspaceData continue working until we
| migrate them to the backend Message model.
|--------------------------------------------------------------------------
*/

export interface MockMessage {
  id: string;
  content: string;
  author: string;
  timestamp: string;
}

export interface CreateMessageData {
  content: string;
  channelId: string;
}

export interface UpdateMessageData {
  content: string;
}