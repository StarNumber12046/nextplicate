import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1>This is an AI Website</h1>
        <Link href="/flux">Flux (Image Generator)</Link>
        <Link href="/chat">Chat</Link>
      </main>
    </HydrateClient>
  );
}
