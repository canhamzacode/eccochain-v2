interface ITextArea {
  text: string;
  setText: (value: string) => void;
  bgColor?: string;
  textColor?: string;
}

const TextArea = ({
  text,
  setText,
  bgColor = 'bg-primary-100',
  textColor = 'text-white'
}: ITextArea) => (
  <div className={`w-full h-[320px] ${bgColor} ${textColor}  rounded-xl p-4`}>
    <textarea
      className="w-full h-full bg-transparent outline-none resize-none"
      placeholder="Enter text to translate..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  </div>
);

export default TextArea;
