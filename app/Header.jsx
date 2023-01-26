import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute z-10 w-full px-14 ">
      <div className="flex w-full h-12 items-center mt-10 rounded-lg bg-gray-50/70">
        <Image
          src="/logo.svg"
          alt="Site logo"
          width={70}
          height={25}
          className="ml-2 mr-14"
        />
        <Link className="mr-8 text-base" href="/">
          Home
        </Link>
        <Link className="mr-8 text-base" href="/">
          Account
        </Link>
        <Link className="mr-8 text-base" href="/">
          Contact
        </Link>
        <Link className="mr-8 text-base" href="/">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
