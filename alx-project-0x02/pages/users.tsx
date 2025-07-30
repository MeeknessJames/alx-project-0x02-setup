// pages/users.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header'; 
import UserCard from '@/components/common/UserCard'; 
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold mb-8">Users from JSONPlaceholder</h1>
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json(); 

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;