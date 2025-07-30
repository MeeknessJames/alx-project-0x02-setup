// pages/home.tsx
import Head from 'next/head';
import { useState } from 'react'; 
import Header from '@/components/layout/Header'; 
import Card from '@/components/common/Card'; 
import PostModal from '@/components/common/PostModal'; 
import { type CardProps } from '../interfaces'; 

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    { title: 'Next.js Basics', content: 'Learn about file-system routing and fast refresh.' },
    { title: 'TypeScript Power', content: 'Enhance your code with static type checking for better reliability.' },
    { title: 'Tailwind CSS Styling', content: 'Build beautiful designs rapidly with utility classes.' },
  ]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page!</h1>

        {}
        <button
          onClick={handleOpenModal}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Add New Post
        </button>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {}
        <PostModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddPost} />
      </main>
    </div>
  );
};

export default HomePage;