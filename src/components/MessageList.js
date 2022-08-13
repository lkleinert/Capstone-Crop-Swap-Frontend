import Message from "../components/Message";
import SendMessageForm from "./SendMessageForm";

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <Message
            key={message.id}
            sender={message.fromUsername}
            body={message.content}
            timeStamp={message.createdAt}
          />
        );
      })}
      <SendMessageForm />
    </div>
  );
};

export default MessageList;
