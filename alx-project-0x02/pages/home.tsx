// pages/home.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card'; // Import the Card component

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Next.js Basics"
            content="Learn about file-system routing and fast refresh."
          />
          <Card
            title="TypeScript Power"
            content="Enhance your code with static type checking for better reliability."
          />
          <Card
            title="Tailwind CSS Styling"
            content="Build beautiful designs rapidly with utility classes."
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;