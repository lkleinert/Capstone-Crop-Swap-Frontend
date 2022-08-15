import { DateTime } from "luxon";

const Message = ({ sender, body, timeStamp, authUser }) => {
  const time = DateTime.fromISO(timeStamp);
  const localTime = time.toLocaleString(DateTime.DATETIME_SHORT);

  const side = sender === authUser ? "messageFromMe" : "messageToMe";

  return (
    <div className={side}>
      <h4>{sender === authUser ? "Me" : sender}</h4>
      <p className="text-break">{body}</p>
      <p>{localTime}</p>
    </div>
  );
};

export default Message;
