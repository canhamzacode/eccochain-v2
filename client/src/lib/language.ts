// config/languages.ts

export type LanguageOption = {
  label: string;
  value: string;
  extension: string;
};

export const languageOptions: LanguageOption[] = [
  {
    label: 'Rust',
    value: 'rust',
    extension: 'rs',
  },
  {
    label: 'Solidity',
    value: 'solidity',
    extension: 'sol',
  },
  {
    label: 'Typescript',
    value: 'typescript',
    extension: 'ts',
  },
];

// Utility to get extension by value
export const getExtensionByValue = (value: string): string => {
  const lang = languageOptions.find((l) => l.value === value);
  return lang?.extension || 'txt';
};
