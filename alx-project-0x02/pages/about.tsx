// pages/about.tsx
import Head from 'next/head';
import Header from '../components/layout/Header'; 

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Header /> { }
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">About SoloForge</h1>
        <p className="mt-4 text-lg">
          This project is designed to help you master Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;