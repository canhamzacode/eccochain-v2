import React from 'react';
import { HiLanguage } from 'react-icons/hi2';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="py-[100px] w-full flex flex-col gap-16 tablet:px-[87px] px-5 bg-[url('/footerGradient.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col gap-10 max-w-[1280px] mx-auto w-full items-center text-center">
        {/* <Image src="/logo.png" width={32} height={32} alt="logo" /> */}
        <div className="flex flex-col gap-4 max-w-[768px] mx-auto">
          <h5 className="text-3xl font-semibold">
            EccoChain: The Future of Cross-Chain Development
          </h5>
          <p className="text-xl">
            Join thousands of users who trust EccoChain for cross-chain
            development. Try it free today and experience seamless
            communication.
          </p>
        </div>
        <button className="md:max-w-[189px] w-full mx-auto h-[60px] rounded-lg bg-[#4954B0] md:text-lg text-base font-semibold flex items-center gap-2 text-white justify-center mt-6">
          <HiLanguage /> Try for free
        </button>
      </div>
      <div className="w-full max-w-[1280px] mx-auto border-t border-t-white pt-8 flex justify-between text-[#667085]">
        <p>© {currentYear} Eccochain. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <p>Terms</p>
          <p>Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
