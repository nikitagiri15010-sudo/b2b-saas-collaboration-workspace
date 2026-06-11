import { useState } from "react";
import { useEffect } from "react";
import MessageList from "./MessageList";
import { channelMessages } from "../../data/workspaceData";
import MessageInput from "./MessageInput";
import WorkspaceHeader from "./WorkspaceHeader";
type WorkspaceMainProps = {
  selectedChannel: string;
};

const WorkspaceMain = ({
  selectedChannel,
}: WorkspaceMainProps) => {
  

    const [messages, setMessages] = useState(
  channelMessages[selectedChannel] || []
);

useEffect(() => {
  setMessages(
    channelMessages[selectedChannel] || []
  );
}, [selectedChannel]);

const [newMessage, setNewMessage] =
  useState("");

  const handleSendMessage = () => {
  if (!newMessage.trim()) return;

  setMessages([
    ...messages,
    newMessage,
  ]);

  setNewMessage("");
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
  handleSendMessage={handleSendMessage}
/>

</div>
<MessageList messages={messages} />
    </main>
  );
};

export default WorkspaceMain;