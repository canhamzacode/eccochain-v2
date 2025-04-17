import { useState } from 'react';

const useCodeTranslator = () => {
  const [fromLanguage, setFromLanguage] = useState('javascript');
  const [toLanguage, setToLanguage] = useState('python');
  const [inputCode, setInputCode] = useState('');
  const [translatedCode, setTranslatedCode] = useState('');

  const handleTranslate = () => {
    setTranslatedCode(`// Translated to ${toLanguage}\n${inputCode}`);
  };

  const handleExport = () => {
    const blob = new Blob([translatedCode], {
      type: 'text/plain;charset=utf-8',
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${toLanguage}`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedCode);
  };

  const swapLanguages = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
    setInputCode(translatedCode);
    setTranslatedCode(inputCode);
  };

  return {
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
  };
};

export default useCodeTranslator;
