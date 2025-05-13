import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface ILanguageSelectProps {
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  languages: { value: string; label: string }[];
}

const LanguageSelect = ({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}: ILanguageSelectProps) => (
  <div className="w-full h-[44px]  flex items-center justify-center">
    <Select onValueChange={setSelectedLanguage} value={selectedLanguage}>
      <SelectTrigger className="w-full bg-primary-100">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              {lang.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

export default LanguageSelect;
