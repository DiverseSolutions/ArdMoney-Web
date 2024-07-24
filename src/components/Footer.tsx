import { useTranslation } from "react-i18next";
const footers = [
  { text: "dex", link: "https://app.ardmoney.com/" },
  { text: "testnet", link: "https://faucet.dsolutions.mn/" },
  {
    text: "whatIsArdm",
    link: "https://www.youtube.com/@ArdMoney-Official",
  },
  { text: "apply", link: "mailto:info@ardmoney.com" },
  {
    text: "buy",
    link: "https://www.idax.exchange/mn_MN/newTrade/ARDM_MONT",
  },
  { text: "forum", link: "https://t.me/ArdMoney" },
  { text: "snapshot", link: "https://snapshot.org/#/ardmoneydao.eth" },
];

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center p-lg lg:h-28 w-full">
      <div className="flex flex-col sm:max-w-6xl justify-between sm:items-center w-full gap-6 lg:gap-0">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-0">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-lg lg:items-center w-full text-white text-sm sm:text-xs lg:text-sm">
            {footers.map((item, index) => (
              <a key={index} href={item.link} target={"_blank"}>
                <span className="text-md">{t(`footer:${item.text}`)}</span>
              </a>
            ))}
          </div>
          <div className="flex whitespace-nowrap gap-2 text-white text-sm sm:text-xs lg:text-sm">
            <span className="text-light-secondary">
              {t("footer:inquiries")}
            </span>
            <a
              href="mailto:info@dsolutions.mn"
              className="underline cursor-pointer"
            >
              info@dsolutions.mn
            </a>
          </div>
          <div className="ml-4 flex whitespace-nowrap gap-2 text-white text-sm sm:text-xs lg:text-sm">
            <span className="text-light-secondary">
              {i18n.language === "mn" ? "Утас" : "Phone"}:
            </span>
            <span className="underline cursor-pointer">+976 91951199</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-light-secondary">
              <div className="i-ic-round-copyright icon-size-4 relative bottom-0.5" />
              <span className="sm:text-xs lg:text-sm">
                {t("navBar:rights")} 6575013
              </span>
            </div>
            <div className="flex flex-col text-light-secondary">
              <span className="sm:text-xs lg:text-sm">
                {i18n.language === "mn"
                  ? "Сүхбаатар дүүргийн 8-р хороо, Сүхбаатарын талбай, Цэнтрал тауэр, 14200 Улаанбаатар хот"
                  : "Central tower, Sukhbaatar Square, Khoroo 8, Sukhbaatar District 14200 Ulaanbaatar, Mongolia"}
              </span>
            </div>
          </div>
          <div className="flex sm:justify-end items-center gap-lg text-white">
            <a
              href="https://medium.com/@ardmoney/monthly-developer-report-3-5c0e4362dae"
              target={"_blank"}
            >
              <div className="i-fa-brands-medium icon-size-6" />
            </a>
            <a
              href="https://www.instagram.com/ard.money/?next=%2F"
              target={"_blank"}
            >
              <div className="i-fa-brands-instagram icon-size-6" />
            </a>
            <a
              href="https://www.facebook.com/search/top?q=ardmoney"
              target={"_blank"}
            >
              <div className="i-fa-brands-facebook icon-size-6" />
            </a>
            <a
              href="https://www.youtube.com/@ArdMoney-Official"
              target={"_blank"}
            >
              <div className="i-fa-brands-youtube icon-size-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
