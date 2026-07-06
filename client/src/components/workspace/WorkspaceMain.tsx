import { useState } from "react";

import WorkspaceHeader from "./WorkspaceHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

import {
  useCreateMessage,
  useMessages,
} from "../../hooks/useMessages";

type WorkspaceMainProps = {
  selectedChannel: string;
};

const WorkspaceMain = ({
  selectedChannel,
}: WorkspaceMainProps) => {
  const [newMessage, setNewMessage] =
    useState("");

  const {
    data: messages = [],
    isLoading,
    isError,
  } = useMessages(selectedChannel);

  const createMessageMutation =
    useCreateMessage();

  const handleSendMessage = () => {
    const trimmedMessage =
      newMessage.trim();

    if (!trimmedMessage) return;

    createMessageMutation.mutate(
      {
        content: trimmedMessage,
        channelId: selectedChannel,
      },
      {
        onSuccess: () => {
          setNewMessage("");
        },
      }
    );
  };

  return (
    <main className="flex-1 p-6">
      <WorkspaceHeader
        selectedChannel={selectedChannel}
      />

      <div className="mb-6 flex gap-2">
        <MessageInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSendMessage={
            handleSendMessage
          }
        />
      </div>

      {isLoading && (
        <p>Loading messages...</p>
      )}

      {isError && (
        <p className="text-red-500">
          Failed to load messages.
        </p>
      )}

      {!isLoading &&
        !isError &&
        messages.length === 0 && (
          <p className="text-gray-500">
            No messages yet.
          </p>
        )}

      {!isLoading &&
        !isError &&
        messages.length > 0 && (
          <MessageList
            messages={messages}
          />
        )}
    </main>
  );
};

export default WorkspaceMain;