import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="px-5">
      <div className="max-w-[725px] w-full h-[60px] bg-white rounded-[48px] mx-auto mt-6 px-12 py-5 flex items-center justify-between">
        <Link href="/">
          <Image width={88} height={20} src="/logo.png" alt="Logo" />
        </Link>
        <div>
          <button className="w-[99px] h-[36px] rounded-lg bg-primary text-white text-xs">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
