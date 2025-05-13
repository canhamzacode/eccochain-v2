import { IoCodeSlashSharp } from 'react-icons/io5';
import { RxCopy } from 'react-icons/rx';

type Props = {
  onExport: () => void;
  onCopy: () => void;
};

const OutputActions = ({ onExport, onCopy }: Props) => (
  <div className="tablet:px-[40px] px-[20px] py-[20px] gap-5 border rounded-b-3xl border-primary-500 grid grid-cols-2">
    <button
      onClick={onExport}
      className="w-full h-11 bg-[#4954B0] rounded-lg flex items-center justify-center gap-2"
    >
      <IoCodeSlashSharp />
      <p>Export</p>
    </button>
    <button
      onClick={onCopy}
      className="w-full h-11 bg-[#4954B0] rounded-lg flex items-center justify-center gap-2"
    >
      <RxCopy />
      <p>Copy</p>
    </button>
  </div>
);

export default OutputActions;
