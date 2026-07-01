import api from "./api";

import type {
  Channel,
  CreateChannelData,
  UpdateChannelData,
} from "../types/channel";

export const getChannelsByWorkspace = async (
  workspaceId: string
): Promise<Channel[]> => {
  const response = await api.get(`/channels/workspace/${workspaceId}`);
  return response.data.channels;
};

export const createChannel = async (
  data: CreateChannelData
): Promise<Channel> => {
  const response = await api.post("/channels", data);
  return response.data.channel;
};

export const updateChannel = async (
  channelId: string,
  data: UpdateChannelData
): Promise<Channel> => {
  const response = await api.put(`/channels/${channelId}`, data);
  return response.data.channel;
};

export const deleteChannel = async (
  channelId: string
): Promise<void> => {
  await api.delete(`/channels/${channelId}`);
};