// pages/home.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header /> {}
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">This is the Home Page!</h1>
        <p className="mt-4 text-lg">Welcome back to the main hub.</p>
      </main>
    </div>
  );
};

export default HomePage;