import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-white">
      <div className="h-14 container max-w-screen-xl mx-auto flex items-center px-4">
        <Link href="/" className="inline-flex items-center mr-8">
          <Image
            width={36}
            height={36}
            className="object-contain h-9 w-9"
            src="/logo-512.png"
            alt="DraftGPT transparent 512x512 logo"
          />
          <span className="text-xl font-bold text-gray-900">DraftGPT</span>
        </Link>
        <nav className="max-md:hidden">
          <Link
            href="/tools"
            className="text-gray-600 hover:text-gray-900 mr-8"
          >
            Tools
          </Link>
          <Link href="/chat" className="text-gray-600 hover:text-gray-900 mr-8">
            Chat
          </Link>
          <Link
            href="/playground"
            className="text-gray-600 hover:text-gray-900 mr-8"
          >
            Playground
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-gray-900 mr-8"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex-1 flex justify-end items-center">
          <form className="mr-4 relative max-lg:hidden">
            <input
              type="text"
              name="nav-search"
              id="nav-search"
              className="w-full max-w-sm pl-10 pr-4 rounded-lg bg-slate-100 h-10 placeholder-slate-400"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </form>
          <Link
            href="/search"
            className="w-10 h-10 flex items-center justify-center mr-4 lg:hidden hover:bg-slate-100 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
          <Link
            href="/signin"
            className="bg-blue-500 text-white px-6 h-10 flex items-center rounded-lg hover:bg-blue-600 font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
