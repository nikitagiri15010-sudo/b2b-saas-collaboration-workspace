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
          key={message.id}
          className="rounded border p-3"
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default MessageList;