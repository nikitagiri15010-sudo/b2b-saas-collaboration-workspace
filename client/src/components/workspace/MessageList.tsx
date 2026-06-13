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
 <div className="mb-1 flex items-center gap-2">
  <p className="text-sm font-semibold">
    {message.author}
  </p>

  <span className="text-xs text-gray-500">
    {message.timestamp}
  </span>
</div>

<p>{message.content}</p>
</div>
      ))}
    </div>
  );
};

export default MessageList;