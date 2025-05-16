import { MdTranslate } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

type Props = {
  onClick: () => void;
  loading?: boolean;
};

const TranslateButton = ({ onClick, loading = false }: Props) => (
  <div className="tablet:px-[40px] px-[20px] py-[20px] gap-5 border rounded-b-3xl border-primary-500">
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full h-11 rounded-lg flex items-center justify-center gap-2 transition-colors ${
        loading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-[#4954B0] hover:bg-[#3c47a0]'
      }`}
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" />
          <p>Translating...</p>
        </>
      ) : (
        <>
          <MdTranslate />
          <p>Translate</p>
        </>
      )}
    </button>
  </div>
);

export default TranslateButton;
