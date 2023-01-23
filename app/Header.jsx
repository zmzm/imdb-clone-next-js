'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky">
      <div className="flex w-full h-12 items-center mx-14 mt-10">
        <Image
          src="/logo.svg"
          alt="Site logo"
          width={70}
          height={25}
          className="mr-14"
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
