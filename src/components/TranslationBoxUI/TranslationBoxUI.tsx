import React from 'react';
import { LanguageSelect } from '../LanguageSelect';
import { TextArea } from '../TextArea';
import { ActionButtons } from '../ActionButtons';

type Mode = 'text' | 'code';

interface TranslationBoxUIProps {
  type: 'from' | 'to';
  mode: Mode;
  languages: { value: string; label: string }[];
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  text: string;
  setText: (value: string) => void;
  bgColor?: string;
  classname?: string;
  textAreaBgColor?: string;
  textAreaTextColor?: string;
}

const TranslationBoxUI = ({
  type,
  selectedLanguage,
  setSelectedLanguage,
  text,
  setText,
  mode,
  languages,
  bgColor = 'bg-primary-25',
  classname,
  textAreaTextColor,
  textAreaBgColor
}: TranslationBoxUIProps) => {
  return (
    <div
      className={`${classname ? classname : ''} w-full h-[522px] ${bgColor} text-black rounded-3xl flex flex-col justify-between gap-1`}
    >
      {/* Language Selection */}
      <div className="tablet:px-[40px] px-[20px] py-[20px] gap-5 flex flex-col border rounded-t-3xl border-primary-500">
        <div className="flex items-center justify-between tablet:gap-8 gap-3">
          <h4 className="font-medium"> {type === 'from' ? 'From' : 'To'} </h4>
          <LanguageSelect
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            languages={languages}
          />
        </div>
        <TextArea
          text={text}
          setText={setText}
          bgColor={textAreaBgColor}
          textColor={textAreaTextColor}
        />
      </div>

      {/* Bottom Actions */}
      <div className="tablet:px-[40px] px-[20px] py-[20px] gap-5 border rounded-b-3xl border-primary-500">
        <ActionButtons type={type} text={text} mode={mode} variant="alt" />
      </div>
    </div>
  );
};

export default TranslationBoxUI;
