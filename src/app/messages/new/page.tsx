import { redirect } from "next/navigation";

import { addMessage } from "@/lib/message";

export interface NewMessagePageProps {}

export default function NewMessagePage({}: NewMessagePageProps) {
  async function createMessage(formData: FormData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);
    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows={5} />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
