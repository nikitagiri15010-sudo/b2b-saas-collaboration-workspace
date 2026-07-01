import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getChannelsByWorkspace,
  createChannel,
  updateChannel,
  deleteChannel,
} from "../services/channelApi";

import type {
  CreateChannelData,
  UpdateChannelData,
} from "../types/channel";

export const useChannels = (workspaceId: string) => {
  return useQuery({
    queryKey: ["channels", workspaceId],
    queryFn: () => getChannelsByWorkspace(workspaceId),
    enabled: !!workspaceId,
  });
};

export const useCreateChannel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateChannelData) => createChannel(data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["channels", variables.workspace],
      });
    },
  });
};

export const useUpdateChannel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      channelId,
      data,
    }: {
      channelId: string;
      data: UpdateChannelData;
    }) => updateChannel(channelId, data),

    onSuccess: (channel) => {
      queryClient.invalidateQueries({
        queryKey: ["channels", channel.workspace],
      });
    },
  });
};

export const useDeleteChannel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (channelId: string) => deleteChannel(channelId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["channels"],
      });
    },
  });
};