import Head from 'next/head';
import Header from '@/components/layout/Header'; 
const PostsPage = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Header /> {}
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Latest Posts</h1>
        <p className="mt-4 text-lg">Content for posts will be displayed here soon.</p>
      </main>
    </div>
  );
};

export default PostsPage;