export interface MessageProps {
  messages: { id: number; text: string }[];
}

export default function Messages({ messages }: MessageProps) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
