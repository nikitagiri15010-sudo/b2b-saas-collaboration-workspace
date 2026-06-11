type MessageListProps = {
  messages: string[];
};

const MessageList = ({
  messages,
}: MessageListProps) => {
  return (
    <div className="space-y-3">
      {messages.map((message, index) => (
        <div
          key={index}
          className="rounded border p-3"
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default MessageList;