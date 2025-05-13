import { HiOutlineThumbDown, HiOutlineThumbUp } from 'react-icons/hi';
import { IoVolumeMediumOutline } from 'react-icons/io5';
import { PiMicrophoneBold } from 'react-icons/pi';
import { BiExport } from 'react-icons/bi';
import { FiCopy } from 'react-icons/fi';

interface IActionButtonsProps {
  type: 'from' | 'to';
  text: string;
  mode: 'text' | 'code';
  language?: string;
  actionClassname?: string;
  variant?: 'default' | 'alt';
}

const ActionButtons = ({
  type,
  text,
  mode,
  language,
  variant = 'default'
}: IActionButtonsProps) => {
  const bgColorVariants = {
    default: {
      enabled: 'bg-primary-500',
      disabled: 'bg-primary-200'
    },
    alt: {
      enabled: 'bg-[#4954B0]',
      disabled: 'bg-[#9CA3AF]'
    }
  };

  const isDisabled = !text.trim();
  const bgColor = isDisabled ? bgColorVariants[variant].disabled : bgColorVariants[variant].enabled;
  const cursorClass = isDisabled ? 'cursor-not-allowed' : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExport = () => {
    const extMap: { [key: string]: string } = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      html: 'html',
      css: 'css',
      java: 'java',
      csharp: 'cs',
      cpp: 'cpp',
      json: 'json'
    };

    const extension =
      language && extMap[language.toLowerCase()] ? extMap[language.toLowerCase()] : 'txt';

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `translated_code.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePlayVoice = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      {mode === 'text' ? (
        <>
          {type === 'from' ? (
            <button
              className={`border border-[#D0D5DD] w-[226px] rounded-lg flex items-center justify-center h-[44px] font-semibold text-base gap-1 ${
                isDisabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={isDisabled}
            >
              <PiMicrophoneBold className="text-base" />
              Real-time translation
            </button>
          ) : (
            <button
              onClick={handlePlayVoice}
              className={`w-[150px] rounded-lg flex gap-1 items-center justify-center h-[44px] font-semibold text-white text-base ${bgColor} ${cursorClass}`}
              disabled={isDisabled}
            >
              <IoVolumeMediumOutline className="text-base" />
              Read aloud
            </button>
          )}

          {type === 'from' ? (
            <button
              className={`w-[109px] h-[44px] rounded-lg text-white ${bgColor} ${cursorClass}`}
              disabled={isDisabled}
            >
              Translate
            </button>
          ) : (
            <div className="flex items-center gap-3">
              {[HiOutlineThumbUp, HiOutlineThumbDown].map((Icon, index) => (
                <button
                  key={index}
                  className={`w-[40px] h-[40px] flex items-center justify-center rounded-full text-2xl text-white ${bgColor} ${cursorClass}`}
                  disabled={isDisabled}
                >
                  <Icon />
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {type === 'from' ? (
            <button
              className={`w-full h-[44px] rounded-lg font-semibold text-white ${bgColor} ${cursorClass}`}
              disabled={isDisabled}
            >
              Translate
            </button>
          ) : (
            <div className="flex w-full items-center gap-3">
              <button
                onClick={handleCopy}
                className={`w-full h-[44px] flex items-center justify-center rounded-lg text-white ${bgColor} ${cursorClass}`}
                disabled={isDisabled}
              >
                <FiCopy />
              </button>

              <button
                onClick={handleExport}
                className={`w-full h-[44px] flex items-center justify-center rounded-lg text-white ${bgColor} ${cursorClass}`}
                disabled={isDisabled}
              >
                <BiExport />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActionButtons;
