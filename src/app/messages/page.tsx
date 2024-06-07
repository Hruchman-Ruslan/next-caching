// import { unstable_noStore } from "next/cache";

import { getMessages } from "@/lib/message";

import Messages from "@/components/messages";

export interface MessagePageProps {}

// export const revalidate = 5;
// export const dynamic = "force-dynamic";

export default function MessagePage({}: MessagePageProps) {
  // unstable_noStore();
  // no cache

  // const response = await fetch("http://localhost:8080/messages", {
  //   next: { tags: ["msg"] },
  // });
  // revalidateTag remove cache with tag msg

  // const response = await fetch("http://localhost:8080/messages");

  // const messages = await response.json();

  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
