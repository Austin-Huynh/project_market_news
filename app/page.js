import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Project: MarketNews in development</h1>
        <p>
          <Link href="/newsArticles">MarketNews</Link>
        </p>
      </div>
    </main>
  );
}
