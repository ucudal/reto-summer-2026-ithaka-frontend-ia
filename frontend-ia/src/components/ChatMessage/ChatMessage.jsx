import styles from "./ChatMessage.module.css";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div
      className={`${styles.messageWrapper} ${isUser ? styles.userMessage : styles.assistantMessage}`}
    >
      <div className={styles.messageBubble}>{message}</div>
    </div>
  );
};

export default ChatMessage;
