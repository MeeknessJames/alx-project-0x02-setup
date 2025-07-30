// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {}
        <span className="text-2xl font-bold">SoloForge</span>
        {}
        <ul className="flex space-x-4">
          <li>
            {}
            <Link href="/" className="hover:text-gray-300">Home (temp)</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">About (temp)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;