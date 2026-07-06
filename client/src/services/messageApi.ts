import api from "./api";

import type {
  Message,
  CreateMessageData,
  UpdateMessageData,
} from "../types/workspace";

export const getMessagesByChannel = async (
  channelId: string
): Promise<Message[]> => {
  const response = await api.get(
    `/messages/channel/${channelId}`
  );

  return response.data.data;
};

export const createMessage = async (
  data: CreateMessageData
): Promise<Message> => {
  const response = await api.post(
    "/messages",
    data
  );

  return response.data.data;
};

export const updateMessage = async (
  messageId: string,
  data: UpdateMessageData
): Promise<Message> => {
  const response = await api.put(
    `/messages/${messageId}`,
    data
  );

  return response.data.data;
};

export const deleteMessage = async (
  messageId: string
): Promise<void> => {
  await api.delete(
    `/messages/${messageId}`
  );
};