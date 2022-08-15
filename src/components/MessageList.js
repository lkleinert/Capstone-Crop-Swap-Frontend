import Message from "../components/Message";
import SendMessageForm from "./SendMessageForm";

const MessageList = ({ messages, addMessage, username, authUser }) => {
  return (
    <>
      <div className="messages-list">
        {messages.map((message) => {
          return (
            <Message
              key={message.id}
              sender={message.fromUsername}
              body={message.content}
              timeStamp={message.createdAt}
              authUser={authUser}
            />
          );
        })}
      </div>
      <SendMessageForm
        addMessage={addMessage}
        username={username}
        authUser={authUser}
      />
    </>
  );
};

export default MessageList;
