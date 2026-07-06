import type { Message } from "../../types/workspace";

type MessageListProps = {
  messages: Message[];
};

const MessageList = ({
  messages,
}: MessageListProps) => {
  return (
    <div className="space-y-3">
      {messages.map((message) => (
        <div
          key={message._id}
          className="rounded border p-3"
        >
          <div className="mb-1 flex items-center gap-2">
            <p className="text-sm font-semibold">
              {message.sender.name}
            </p>

            <span className="text-xs text-gray-500">
              {new Date(
                message.createdAt
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;