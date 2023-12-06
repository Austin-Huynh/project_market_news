import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-beige flex min-h-screen flex-col items-center p-24">
      <div className="flex row-auto">
        <img
          className="ml-4 mt-4"
          src="https://img.icons8.com/dusk/64/small-business.png"
          alt="Logo"
        />
        <h1 className="text-offBlack font-bold font-sans text-4xl mt-9 ml-2 ">
          Market News
        </h1>
      </div>
      <div className="z-10 max-w-5xl w-100% items-center font-mono text-sm bg-white rounded-2xl p-4 mt-4 shadow-lg">
        <h1 className="text-offBlack font-bold font-sans text-4xl">Welcome!</h1>
        <p className="text-offBlack font-sans text-lg my-4">
          This website allows you to enter a Company&apos;s stock ticker to pull
          up some of the latest articles about the company. Currently the
          website can only pull up 3 articles at a time and can handle 100
          request a day due to the API&apos;s free tier limitations.
        </p>
        <button className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link href="/newsArticles">Enter</Link>
        </button>
      </div>
    </main>
  );
}
