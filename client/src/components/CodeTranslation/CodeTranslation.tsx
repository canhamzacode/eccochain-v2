'use client';
import React from 'react';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { EditorPanel } from '../EditorPanel';
import { TranslateButton } from '../TranslateButton';
import { OutputActions } from '../OutputActions';
import { useCodeTranslator } from '@/hooks';

const CodeTranslation = () => {
  const {
    fromLanguage,
    toLanguage,
    inputCode,
    translatedCode,
    setFromLanguage,
    setToLanguage,
    setInputCode,
    setTranslatedCode,
    handleTranslate,
    handleExport,
    handleCopy,
    swapLanguages,
  } = useCodeTranslator();

  return (
    <div className="max-w-[1218px] mx-auto grid tablet:grid-cols-2 grid-cols-1 gap-3 relative px-9">
      <button
        onClick={swapLanguages}
        className="bg-[#4954B0] w-[48px] h-[48px] rounded-full text-white text-2xl font-bold flex items-center justify-center shadow-lg
          absolute tablet:top-8 tablet:left-1/2 tablet:-translate-x-1/2 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tablet:translate-y-0 z-20"
      >
        <LiaExchangeAltSolid />
      </button>

      <div>
        <EditorPanel
          title="From"
          selectedLanguage={fromLanguage}
          setSelectedLanguage={setFromLanguage}
          code={inputCode}
          setCode={setInputCode}
          languages={[
            {
              label: 'Rust',
              value: 'rust',
            },
            {
              label: 'Solidity',
              value: 'solidity',
            },
          ]}
        />
        <TranslateButton onClick={handleTranslate} />
      </div>

      <div>
        <EditorPanel
          title="To"
          selectedLanguage={toLanguage}
          setSelectedLanguage={setToLanguage}
          code={translatedCode}
          setCode={setTranslatedCode}
          languages={[
            {
              label: 'Solidity',
              value: 'solidity',
            },
            {
              label: 'Rust',
              value: 'rust',
            },
          ]}
        />
        <OutputActions onExport={handleExport} onCopy={handleCopy} />
      </div>
    </div>
  );
};

export default CodeTranslation;
