import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createMessage,
  deleteMessage,
  getMessagesByChannel,
  updateMessage,
} from "../services/messageApi";

import type {
  CreateMessageData,
  UpdateMessageData,
} from "../types/workspace";

export const useMessages = (
  channelId: string
) => {
  return useQuery({
    queryKey: ["messages", channelId],

    queryFn: () =>
      getMessagesByChannel(channelId),

    enabled: !!channelId,
  });
};

export const useCreateMessage = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (
      data: CreateMessageData
    ) => createMessage(data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [
          "messages",
          variables.channelId,
        ],
      });
    },
  });
};

export const useUpdateMessage = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      messageId,
      data,
      channelId,
    }: {
      messageId: string;
      data: UpdateMessageData;
      channelId: string;
    }) =>
      updateMessage(
        messageId,
        data
      ),

    onSuccess: (
      _,
      variables
    ) => {
      queryClient.invalidateQueries({
        queryKey: [
          "messages",
          variables.channelId,
        ],
      });
    },
  });
};

export const useDeleteMessage = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      messageId,
      channelId,
    }: {
      messageId: string;
      channelId: string;
    }) =>
      deleteMessage(messageId),

    onSuccess: (
      _,
      variables
    ) => {
      queryClient.invalidateQueries({
        queryKey: [
          "messages",
          variables.channelId,
        ],
      });
    },
  });
};