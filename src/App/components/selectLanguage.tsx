import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export function SelectLanguage(props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
  const savedLanguage = localStorage.getItem("language") || "EN";

  const {
    i18n: { changeLanguage },
  } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    localStorage.setItem("language", lang);
    // Atualizar o estado da aplicação sem recarregar
  };

  return (
    <div {...props}>
      <Select
        defaultValue={savedLanguage}
        onValueChange={(lang) => handleLanguageChange(lang)}
      >
        <SelectTrigger
          className="bg-transparent border-none text-muted font-semibold h-7 focus:outline-none focus:ring-0 focus:ring-offset-0 text-2xl  w-full"
          aria-label="Select Language"

        >
          <SelectValue  />
        </SelectTrigger>
        <SelectContent className="bg-transparent w-[50px] h-[6rem] rounded-none">
          <SelectItem
            value="EN"
            className="text-1xl text-muted font-semibold hover:text-muted cursor-pointer"
          >
            EN
          </SelectItem>
          <SelectItem
            value="BR"
            className="text-1xl text-muted-foreground font-semibold hover:text-muted cursor-pointer"
          >
            BR
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
