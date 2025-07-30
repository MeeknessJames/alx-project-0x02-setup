import Head from 'next/head';
import Header from '@/components/layout/Header'; 
import Button from '@/components/common/Button'; 

const AboutPage = () => {
  const handleClick = (buttonName: string) => {
    alert(`You clicked the ${buttonName} button!`);
  };

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">About SoloForge</h1>
        <p className="mt-4 text-lg mb-8 text-center max-w-2xl">
          This project is designed to help you master Next.js, TypeScript, and Tailwind CSS by building
          a comprehensive web application. Explore the different features and components!
        </p>

        <div className="flex flex-col space-y-4">
          <Button onClick={() => handleClick('Small Rounded')} size="small" shape="rounded-sm">
            Small Button
          </Button>
          <Button onClick={() => handleClick('Medium Square')} size="medium" shape="rounded-md">
            Medium Button
          </Button>
          <Button onClick={() => handleClick('Large Full Round')} size="large" shape="rounded-full">
            Large Button
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;