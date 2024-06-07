export interface MessageLayoutProps {
  children: React.ReactNode;
}

export default async function MessageLayout({ children }: MessageLayoutProps) {
  const response = await fetch("http://localhost:8080/messages", {
    cache: "no-store",
    // no cache response
  });
  const messages = await response.json();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
