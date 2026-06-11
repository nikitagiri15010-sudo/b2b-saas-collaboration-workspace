type MessageInputProps = {
  newMessage: string;
  setNewMessage: (value: string) => void;
  handleSendMessage: () => void;
};

const MessageInput = ({
  newMessage,
  setNewMessage,
  handleSendMessage,
}: MessageInputProps) => {
  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        value={newMessage}
        onChange={(e) =>
          setNewMessage(e.target.value)
        }
        placeholder="Type a message..."
        className="flex-1 rounded border px-3 py-2"
      />

      <button
        onClick={handleSendMessage}
        className="rounded border px-4 py-2"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;