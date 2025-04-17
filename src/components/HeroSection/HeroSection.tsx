import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="rounded-full bg-ecco-darkPurple/30 border-ecco-purple/50 text-ecco-purple hover:bg-ecco-purple/10 hover:text-white mb-12 w-[150px] h-[37px] border md:text-base text-sm">
        build cross-chain
      </button>

      <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
        Build Once.
        <br />
        <span className="text-gray-400">Deploy Anywhere</span>
      </h1>
    </div>
  );
};

export default HeroSection;
