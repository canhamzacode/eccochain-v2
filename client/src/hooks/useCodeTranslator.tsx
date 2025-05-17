import { getExtensionByValue } from '@/lib/language';
import { useState } from 'react';

const useCodeTranslator = () => {
  const [fromLanguage, setFromLanguage] = useState('typescript');
  const [toLanguage, setToLanguage] = useState('rust');
  const [inputCode, setInputCode] = useState('');
  const [translatedCode, setTranslatedCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setError('');

    if (!inputCode.trim()) {
      setError('Please enter code to translate.');
      return;
    }

    if (fromLanguage === toLanguage) {
      setError('You can’t translate to the same language.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        'https://eccochain.onrender.com/api/translate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: inputCode,
            fromLanguage,
            toLanguage,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Translation failed. Please try again.');
      }

      const data = await response.json();
      console.log(data);

      setTranslatedCode(
        data.response || '// Translation successful but no response provided.'
      );
    } catch (err) {
      console.error(err);
      setError(
        'Unable to translate code. Please check your connection or try again later.'
      );
      setTranslatedCode('// Error: Unable to translate the code.');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    const extension = getExtensionByValue(toLanguage);
    const blob = new Blob([translatedCode], {
      type: 'text/plain;charset=utf-8',
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extension}`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedCode);
    alert('Copied to clipboard');
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
    error,
    loading,
  };
};

export default useCodeTranslator;
