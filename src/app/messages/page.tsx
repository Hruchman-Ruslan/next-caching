import Messages from "@/components/messages";

export interface MessagePageProps {}

export default async function MessagePage({}: MessagePageProps) {
  const response = await fetch("http://localhost:8080/messages", {
    headers: {
      "X-ID": "page",
    },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
