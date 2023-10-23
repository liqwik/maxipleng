import { HomeIcon } from '@/components/icons';
import Link from 'next/link';

export interface ISidebarLayout {}

const SecondarySidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className="w-3/12">
      <Link href="/">
        <a>
          <span className="inline-flex items-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <HomeIcon className="h-5 w-5 text-white" />
          </span>
          <span>Home</span>
        </a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default SecondarySidebarLayout;
