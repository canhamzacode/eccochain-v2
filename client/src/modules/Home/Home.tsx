import {
  CodeTranslation,
  Features,
  Footer,
  HeroSection,
  Navbar,
} from '@/components';
import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen  text-white flex flex-col items-center overflow-hidden">
      <div className="hero-bg w-full flex flex-col tablet:gap-[168px] gap-20">
        <Navbar />
        <div className="w-full flex flex-col gap-10">
          <HeroSection />
          <div className="w-full pb-[100px]">
            <CodeTranslation />
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
