'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaMagic,
  FaRobot,
} from 'react-icons/fa';
import { LuNotebook } from 'react-icons/lu';
import { PiGitBranchBold } from 'react-icons/pi';
import { RiToolsFill } from 'react-icons/ri';

const slides = [
  {
    id: 1,
    image: '/developer.png',
    alt: 'Smart Contract Developer',
    caption: 'Cross-Chain Magic: Write Once, Deploy Anywhere',
    icon: <FaMagic />,
  },
  {
    id: 2,
    image: '/ai.png',
    alt: 'AI-Powered Translation',
    caption: 'AI-Powered: Fast, Accurate, Error-free Translations.',
    icon: <FaRobot />,
  },
  {
    id: 3,
    image: '/language.png',
    alt: 'Multi-Language Support',
    caption: 'Multi-Language: Solidity, Rust, Move, CosmWasm, and more.',
    icon: <FaCode />,
  },
  {
    id: 4,
    image: '/education.png',
    alt: 'Multi-Language Support',
    caption: 'Education: Learn How Rust Works by Example.',
    icon: <LuNotebook />,
  },
  {
    id: 5,
    image: '/security.png',
    alt: 'Multi-Language Support',
    caption: 'Onchain Safety: Verified, Secure, and Compliant.',
    icon: <PiGitBranchBold />,
  },
  {
    id: 6,
    image: '/beginner.png',
    alt: 'Multi-Language Support',
    caption: 'Beginner-Friendly: Special Inbuilt Error-Handling Tool.',
    icon: <RiToolsFill />,
  },
];

const Features = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <section className="flex flex-col md:gap-14 gap-10 w-full ">
      <div className="w-full bg-[#030619] flex flex-col md:gap-10 gap-5 py-16 ">
        <div className="max-w-[1118px] w-full mx-auto mid-bg">
          <h2 className="tablet:text-3xl text-xl md:text-4xl font-bold text-white text-center leading-tight px-4">
            EccoChain Convert Smart Contracts and
            <br />
            Programs{' '}
            <span className="text-gray-400">
              Across Solana, Ethereum, Aptos,
            </span>
            <br />
            <span className="text-gray-400">and more—effortlessly.</span>
          </h2>
        </div>{' '}
        <div className="md:bg-features py-10">
          <div className="max-w-[1118px] w-full mx-auto flex flex-col items-center gap-10 px-8">
            <div className="relative w-full max-w-5xl  rounded-xl">
              <Image
                src={slides[current].image}
                alt={slides[current].alt}
                width={1118}
                height={538}
                className="rounded-xl w-full object-cover transition duration-500 ease-in-out"
              />

              {/* Arrows */}
              <button
                className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#4954B0] p-2  border border-white  rounded-lg flex items-center justify-center text-white hover:bg-opacity-70  w-11 h-11"
                onClick={prevSlide}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#4954B0] border border-white p-2 rounded-lg flex items-center justify-center text-white hover:bg-opacity-70 w-11 h-11"
                onClick={nextSlide}
              >
                <FaArrowRight />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      i === current ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Captions with icons */}
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-2 text-center w-full md:px-8">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  onClick={() => setCurrent(index)}
                  className={`cursor-pointer transition-all md:px-4 py-2 rounded-lg flex text-left gap-3 ${
                    current === index
                      ? 'text-white font-semibold'
                      : 'text-gray-400'
                  }`}
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        current === index
                          ? 'bg-white text-[#4954B0]'
                          : 'bg-gray-400 text-[#52525B]'
                      }`}
                    >
                      <span className="text-xl">{slide.icon}</span>
                    </div>
                  </div>
                  <span className="text-base sm:text-lg">{slide.caption}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-[#4954B0] hover:bg-primary-400 transition text-white md:w-[189px] w-full h-[60px] px-6 py-3 rounded-lg font-semibold text-base">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
