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
  _id: string;
  name: string;
  workspace?: string;
  createdAt?: string;
  updatedAt?: string;
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

export interface CreateMessageData {
  content: string;
  channelId: string;
}

export interface UpdateMessageData {
  content: string;
}