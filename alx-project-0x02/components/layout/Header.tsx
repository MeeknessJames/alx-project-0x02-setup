import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SoloForge
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-300">
              Posts
            </Link>
          </li>
          {}
          <li>
            <Link href="/users" className="hover:text-gray-300">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;