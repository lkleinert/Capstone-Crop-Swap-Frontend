const Message = ({ sender, body, timeStamp }) => {
  return (
    <div>
      <h4>{sender}</h4>
      <p>{body}</p>
      <p>{timeStamp}</p>
    </div>
  );
};

export default Message;
