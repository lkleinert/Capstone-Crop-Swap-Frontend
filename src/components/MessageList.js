import Message from "../components/Message";
import SendMessageForm from "./SendMessageForm";

const MessageList = ({ messages, addMessage, username, authUser }) => {
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
      <SendMessageForm
        addMessage={addMessage}
        username={username}
        authUser={authUser}
      />
    </div>
  );
};

export default MessageList;
