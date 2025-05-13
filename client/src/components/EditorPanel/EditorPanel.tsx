'use client';
import React from 'react';
import Editor from '@monaco-editor/react';
import { LanguageSelect } from '../LanguageSelect';

type Props = {
  title: string;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  code: string;
  setCode: (val: string) => void;
  languages: { label: string; value: string }[];
};

const EditorPanel = ({
  title,
  selectedLanguage,
  setSelectedLanguage,
  code,
  setCode,
  languages,
}: Props) => {
  return (
    <div className="w-full rounded-3xl flex flex-col justify-between mb-1">
      <div className="tablet:px-[40px] px-[20px] py-[20px] gap-5 flex flex-col border rounded-t-3xl border-primary-500">
        <div className="flex items-center justify-between tablet:gap-8 gap-3">
          <h4 className="font-medium text-white">{title}</h4>
          <LanguageSelect
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            languages={languages}
          />
        </div>
        <Editor
          height="362px"
          language={selectedLanguage}
          value={code}
          onChange={(val) => setCode(val ?? '')}
          theme="hc-black"
        />
      </div>
    </div>
  );
};

export default EditorPanel;
