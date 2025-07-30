// pages/index.tsx
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Welcome to SoloForge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-5xl font-bold text-center">
          Welcome to SoloForge: Mastering Project Autonomy!
        </h1>
        <p className="mt-4 text-xl">
          Your journey to becoming a Next.js, TypeScript, and Tailwind CSS master begins here.
        </p>
      </main>
    </div>
  );
};

export default Home;