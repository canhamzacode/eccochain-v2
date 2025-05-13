import { MdTranslate } from 'react-icons/md';

type Props = {
  onClick: () => void;
};

const TranslateButton = ({ onClick }: Props) => (
  <div className="tablet:px-[40px] px-[20px] py-[20px] gap-5 border rounded-b-3xl border-primary-500">
    <button
      onClick={onClick}
      className="w-full h-11 bg-[#4954B0] rounded-lg flex items-center justify-center gap-2"
    >
      <MdTranslate />
      <p>Translate</p>
    </button>
  </div>
);

export default TranslateButton;
