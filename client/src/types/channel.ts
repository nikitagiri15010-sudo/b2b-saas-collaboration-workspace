export interface Channel {
  _id: string;
  name: string;
  workspace: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateChannelData {
  name: string;
  workspace: string;
}

export interface UpdateChannelData {
  name: string;
}