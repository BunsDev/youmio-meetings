import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { IconBell, IconMicrophone } from '@tabler/icons-react';
import MobileNav from './MobileNav';
import { BellIcon } from 'lucide-react';

const Navbar = () => {
  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  const renderSearchForm = () => {
    return (
      <form
        action=""
        method="POST"
        className="flex items-center space-x-2 text-slate-200"
      >
        <div className="bg-[#0f0f0f] w-full ring-1 ring-opacity-10 ring-white shadow-xl text-white flex items-center space-x-1 py-2 px-4 rounded-full h-full">
          {renderMagnifyingGlassIcon()}
          <input
            type="search"
            placeholder="Type and press enter."
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm "
          />
        </div>
        <div className=" p-2 flex cursor-pointer items-center justify-center bg-black rounded-full">
          <IconMicrophone />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  return (
    <nav className="flex-between items-center fixed z-50 w-full bg-[#0f0f0f] shadow-xl px-6 py-4 lg:px-5">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-medium text-white max-sm:hidden">
          Youmio
        </p>
      </Link>
      <div>
        <div className=" ">{renderSearchForm()}</div>
      </div>
      <div className="flex-between w-14 ">
        {/* <IconBell className="text-white h-64 w-64" /> */}
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
