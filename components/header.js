import Link from "next/link";

const Header = () => (
  <header className="flex flex-col items-center justify-center lg:pb-16 sm:pb-10 pb-5">
    <Link href="/">
      <a className="font-bold lg:pb-7 sm:pb-5 pb-3 lg:text-7xl sm:text-5xl text-3xl">
        Grabby Aliens
      </a>
    </Link>
    <nav className="flex lg:gap-7 sm:gap-5 gap-3">
      <Link href="/paper">
        <a className="text-indigo-700 lg:text-lg sm:text-base text-sm">Paper</a>
      </Link>
      <Link href="/presentations">
        <a className="text-yellow-700 lg:text-lg sm:text-base text-sm">
          Presentations
        </a>
      </Link>
      <Link href="/posts">
        <a className="text-red-700 lg:text-lg sm:text-base text-sm">
          Hanson's blog posts
        </a>
      </Link>
      <Link href="/coverage">
        <a className="text-green-700 lg:text-lg sm:text-base text-sm">
          Coverage
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;
