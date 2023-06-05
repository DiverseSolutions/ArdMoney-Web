import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";

export default function AdditionalDropdownMenu() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(lan: string) {
    i18n.changeLanguage(lan);
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="w-8 h-8 rounded-full">
          <div className="flex justify-center items-center space-x-0.5  h-full">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent z-50"
          sideOffset={5}
        >
          <DropdownMenu.Item className="DropdownMenuItem hover:bg-red-100">
            <div className="flex justify-center w-full space-x-1">
              <div
                onClick={() => handleChangeLanguage("mn")}
                className={`${
                  i18n.language === "mn" && "underline"
                } hover:underline cursor-pointer`}
              >
                mn
              </div>
              <div>/</div>
              <div
                onClick={() => handleChangeLanguage("en")}
                className={`${
                  i18n.language === "en" && "underline"
                } hover:underline cursor-pointer`}
              >
                en
              </div>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
