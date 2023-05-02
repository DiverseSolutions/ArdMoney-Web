import { useState } from "react";
import { useTranslation } from "react-i18next";
// import Iframe from 'react-iframe'

import BgLogos from "@assets/home/BgLogos.png";

import Background from "@assets/home/background.svg";
import PersonaWithTokenBG from "@assets/home/PersonaWithTokenBG.png";
import Chevron from "@assets/home/down_chevron.png";
import Arrow_RB from "@assets/home/arrow_rb.png";
import Media1 from "@assets/home/media1.png";
import Media2 from "@assets/home/media2.png";
import Media3 from "@assets/home/media3.png";
import Ghosts from "@assets/home/cero_ghosts.png";
import TextBg from "@assets/home/text_bg.svg";
import PurpleBigCircleBG from "@assets/home/ellipse.svg";
import PurpleCircleRightSideBG from "@assets/home/ellipse_102.svg";
import Blog_rectangle from "@assets/home/blog_rectangle.svg";
import Card from "@/components/shared/Card";
import Section from "@/components/layouts/Section";
import PageContainer from "@/components/layouts/PageContainer";
import OutlineButton from "@/components/shared/OutlineButton";

export default function Home() {
  const [faqAccordionState, setFaqAccordionState] = useState(1);

  const { t } = useTranslation();

  return (
    <PageContainer>
      <Section style="mb-layout-xl text-center">
        <div className="text-light-secondary md:text-xl">
          First Mongolian DAO
        </div>
        <div className="flex flex-col text-xl md:text-4xl font-extrabold">
          <span>{t("home:title")}</span>
          <span>Without Boundaries</span>
        </div>
        <div className="flex items-center justify-center w-full gap-base">
          <a
            href="https://app.ardmoney.com/"
            target={"_blank"}
            className="btn w-[151px] md:w-[219px]"
          >
            <span className="text-xs lg:text-base font-light">Launch App</span>
          </a>
          <a
            href="https://docs.ardmoney.com/"
            target={"_blank"}
            className="w-[151px] md:w-[219px]"
          >
            <OutlineButton>
              <span className="text-xs lg:text-base">
                Learn how to start
              </span>
            </OutlineButton>
          </a>
        </div>
        <img
          src={Background}
          alt=""
          data-aos="fade-up"
          data-aos-delay="500"
          className="absolute w-full left-0 top-0 mt-96"
        />
      </Section>

      <Section style="md:mt-layout-xl">
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="grid grid-cols-2 md:grid-cols-4 z-30"
        >
          <div className="flex flex-col text-center p-base font-extrabold">
            <span className="text-xl md:text-3xl lg:text-4xl">0.03₮</span>
            <span className="text-2xs md:text-sm lg:text-base">
              ARDM PRICE
            </span>
          </div>
          <div className="flex flex-col text-center p-base font-extrabold">
            <span className="text-xl md:text-3xl lg:text-4xl">12.3B</span>
            <span className="text-2xs md:text-sm lg:text-base">
              STAKING CONTRACT
            </span>
          </div>
          <div className="flex flex-col text-center p-base font-extrabold">
            <span className="text-xl md:text-3xl lg:text-4xl">3.29B</span>
            <span className="text-2xs md:text-sm lg:text-base">
              MARKET CAP
            </span>
          </div>
          <div className="flex flex-col text-center p-base font-extrabold">
            <span className="text-xl md:text-3xl lg:text-4xl">133B</span>
            <span className="text-2xs md:text-sm lg:text-base">
              TOTAL SUPPLY
            </span>
          </div>
        </div>
      </Section>

      <Section style="items-center">
        <div className="md:w-7/12 flex flex-col gap-base text-center border-none p-0">
          <span className="text-xl md:text-3xl text-white font-extrabold">
            Advanced protocol for managing digital assets
          </span>
          <span className="text-light-secondary text-sm md:text-base">
            Ardmoney is revolutionising the world of financial services. We've
            created a low-cost, high-speed blockchain based financial system and
            are dedicated to being the fastest, most reliable and secure
            transactions service that can be used by consumers and businesses.
          </span>
        </div>

        <img
          src={BgLogos}
          alt=""
          className="absolute opacity-30 w-full left-0 hidden md:flex"
        />
      </Section>

      <Section style="relative">
        <Card style="min-h-[500px] bg-transparent md:bg-gradient-to-r md:from-[#8362FD] md:to-[#3FE600] p-1px">
          <div className="flex flex-col absolute bottom-0 justify-end gap-base p-6 w-full md:w-4/12 rounded-tl-lg rounded-bl-lg z-10 bg-transparent">
            <span className="text-base md:text-xl font-bold">
              WHAT WE CAPABLE OF
            </span>
            <span className="font-light text-sm md:text-base/base">
              Ardmoney is a decentralized protocol providing financial services,
              such as Lending, Borrowing, Liquidity mining, without an
              intermediary.
            </span>
          </div>
          <div className="opacity-50 md:opacity-100 flex justify-end relative w-full h-full bg-black rounded-lg">
            <div className="flex justify-items-end md:w-10/12">
              <img
                src={PersonaWithTokenBG}
                alt="image"
                className="object-cover w-full"
              />
            </div>
          </div>
        </Card>

        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <Card>
            <span className="text-base md:text-xl font-bold">
              DEFI
            </span>
            <span className="text-base md:w-11/12">
              Facilitating permissionless decentralized lending.
            </span>
            <span className="text-light-secondary text-xs md:text-sm font-light">
              ArdMoney protocol users are able to save with high interest and
              borrow with low interest.
            </span>
          </Card>
          <Card>
            <span className="text-base md:text-xl font-bold">
              DEX
            </span>
            <span className="text-base md:w-11/12">
              Your exchange in your hands.
            </span>
            <span className="text-light-secondary text-xs md:text-sm font-light">
              Smart Contracts allow ArdMoney to provide a permissionless,
              trustless, immutable platform to trade crypto assets.
            </span>
          </Card>
          <Card>
            <span className="text-base md:text-xl font-bold">
              DAO
            </span>
            <span className="text-base md:w-11/12">
              By the people. For the people.
            </span>
            <span className="text-light-secondary text-xs md:text-sm font-light">
              Ardmoney is fully democratized and is governed by its token
              holders which ensures the protocol serves the best interest of the
              people.
            </span>
          </Card>
        </div>
        <img
          src={PurpleBigCircleBG}
          alt=""
          className="absolute w-full left-0"
        />
      </Section>

      <Section style="">
        <Card style="justify-center relative border-none text-center px-0 py-0 md:p-base">
          <span className="uppercase text-xl md:text-3xl font-bold text-white">
            getting <br /> confused is <br /> okay. <br /> we will help you{" "}
            <br /> to{" "}
            <span
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[#3FE600] "
            >
              understand
            </span>{" "}
            <br />
            these{" "}
            <span
              data-aos="fade-up"
              data-aos-delay="800"
              className="text-[#8362FD]"
            >
              concepts
            </span>
          </span>
        </Card>
        <img src={TextBg} alt="" className="hidden md:block absolute w-full left-0" />
      </Section>

      <Section style="md:mt-layout-lg">
        <Card style="border-none px-0">
          {faqs.map((faq) => (
            <button
              key={faq.id}
              onClick={() => {
                if (faqAccordionState != faq.id) {
                  setFaqAccordionState(faq.id);
                } else {
                  setFaqAccordionState(-1);
                }
              }}
            >
              <div className="flex transition-all ease-linear delay-100 bg-black flex-col w-full border rounded-lg p-[1px] text-white">
                <div
                  className={`flex justify-between items-center w-full p-xl bg-black rounded-lg`}
                >
                  <span className="text-base md:text-xl font-bold uppercase">
                    {faq.title}
                  </span>
                  <div
                    className={`h-4 w-4 md:h-6 md:w-6 relative transition ${faqAccordionState == faq.id ? "rotate-180" : "rotate-0"
                      }`}
                  >
                    <img src={Chevron} alt="image" />
                  </div>
                </div>
                {faqAccordionState == faq.id && (
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-delay="500"
                    className={`flex transition-all flex-col md:flex-row px-xl pb-xl bg-black text-justify rounded-bl-lg rounded-br-lg w-full gap-xl`}
                  >
                    <div className="flex relative w-full md:w-1/2 rounded-lg bg-white h-40 md:h-[300px]">
                      <iframe
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-full h-full rounded-lg"
                        src={faq.url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      >
                      </iframe>
                    </div>
                    <div className="flex flex-col md:w-1/2 gap-base">
                      <span className="text-sm md:text-base">
                        By the people. For the people.
                      </span>
                      <span className="text-sm md:text-sm text-light-secondary font-light">
                        Ardmoney is fully democratized and is governed by its
                        token holders which ensures the protocol serves the best
                        interest of the people.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
          <div className="flex items-center justify-center w-full gap-xl rounded-lg border">
            <div className="flex flex-col items-center gap-xl p-xl rounded-lg bg-gradient-to-br from-[#000000] via-[#8362FD]/10 to-[#8362FD] text-white">
              <span className="flex text-center uppercase text-base md:text-xl font-bold">
                Four Pillars of Ardmoney
              </span>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3xs md:gap-xl">
                <div className="flex flex-col bg-dark-terteriary rounded-lg p-xl gap-base">
                  <span className="uppercase font-bold text-base md:text-base/base lg:text-base">
                    Dynamic Fees
                  </span>
                  <span className="text-light-secondary text-sm font-light">
                    The DAO will determine the pool fee based on trust, utility,
                    and risks associated with the asset.
                  </span>
                </div>
                <div className="flex flex-col bg-black/40 rounded-lg p-6 gap-base">
                  <span className="uppercase font-bold text-base md:text-base/base lg:text-base">
                    Multichain
                  </span>
                  <span className="text-light-secondary text-sm font-light">
                    Users will be able to use Ardmoney on the chain that they
                    most see fit. Ardmoney is currently deployed on Polygon and
                    Binance mdart Chain.
                  </span>
                </div>
                <div className="flex flex-col bg-black/40 rounded-lg p-6 gap-base">
                  <span className="uppercase font-bold text-base md:text-base/base lg:text-base">
                    Permissionless
                  </span>
                  <span className="text-light-secondary text-sm font-light">
                    Ardmoney will serve as a gateway for investors to have
                    exposure to crypto projects in less known economies.
                  </span>
                </div>
                <div className="flex flex-col bg-black/40 rounded-lg p-6 gap-base">
                  <span className="uppercase font-bold text-base md:text-base/base lg:text-base">
                    Decentralized
                  </span>
                  <span className="text-light-secondary text-sm font-light">
                    Ardmoney is governed by its token holders who are able to
                    vote on upcoming features.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <Card style="border-none px-0">
          <div className="flex gap-sm items-center w-full py-3xs">
            <span className="text-base md:text-xl font-bold">
              BLOG POST
            </span>
            <div className="flex items-end w-5 h-5 md:w-8 md:h-8">
              <img
                src={Arrow_RB}
                alt="Arrow_RB"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-base md:gap-xl lg:gap-lg w-full">
            <div className="flex border rounded-lg md:mb-2xl bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer ">
              <a
                href="https://medium.com/@ardmoney/%D0%BC%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%8B%D0%BD-%D0%B0%D0%BD%D1%85%D0%BD%D1%8B-defi-%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB-%D1%85%D1%8D%D1%80%D1%8D%D0%B3%D0%BB%D1%8D%D1%8D%D0%BD%D0%B4-%D0%BE%D1%80%D0%BB%D0%BE%D0%BE-2d8479c2a737"
                target={"_blank"}
                className="flex flex-col p-xl bg-black rounded-lg text-left"
              >
                <div className="flex justify-center w-full">
                  <img
                    src={Media1}
                    width={"330px"}
                    height={"180px"}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col mt-base gap-base">
                  <span className="font-bold text-sm md:text-base uppercase">
                    Монголын анхны DeFi протокол хэрэглээнд орлоо!
                  </span>
                  <span className="font-light text-light-secondary text-sm">
                    The DAO will determine the pool fee based on trust, utility,
                    and risks associated with the asset.
                  </span>
                </div>
              </a>
            </div>
            <div className="flex border rounded-lg md:mt-4xl bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer">
              <a
                href="https://medium.com/@ardmoney/monthly-developer-report-2-c97e115ed50d"
                target={"_blank"}
                className="flex flex-col p-xl pb-4xl bg-black rounded-lg text-left"
              >
                <div className="flex justify-center w-full">
                  <img
                    src={Media2}
                    width={"330px"}
                    height={"180px"}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col mt-base gap-base">
                  <span className="font-bold text-sm md:text-base uppercase">
                    Monthly developer report #3
                  </span>
                  <span className="font-light text-light-secondary text-sm">
                    The DAO will determine the pool fee based on trust, utility,
                    and risks associated with the asset.
                  </span>
                </div>
              </a>
            </div>
            <div className="flex border rounded-lg mb-2xl bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer">
              <a
                href="https://medium.com/@ardmoney/monthly-developer-report-3-5c0e4362dae"
                target={"_blank"}
                className="flex flex-col p-xl bg-black rounded-lg text-left"
              >
                <div className="flex justify-center w-full">
                  <img
                    src={Media3}
                    width={"330px"}
                    height={"180px"}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col mt-base gap-base">
                  <span className="font-bold text-sm md:text-base uppercase">
                    Monthly Developer Report #2
                  </span>
                  <span className="font-light text-light-secondary text-sm">
                    The DAO will determine the pool fee based on trust, utility,
                    and risks associated with the asset.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Card>
        <img
          src={Blog_rectangle}
          alt=""
          className="absolute w-full left-0 z-1"
        />

        <img
          src={PurpleCircleRightSideBG}
          alt=""
          className="absolute w-full right-0 z-1"
        />
      </Section>

      <Section>
        <Card style="border-none px-0 gap-0">
          <div className="flex flex-col md:flex-row md:justify-between w-full rounded-lg h-full md:h-[363px]">
            <div className="flex flex-col justify-end gap-4 text-white w-full md:w-5/12 lg:w-6/12">
              <div className="flex gap-1 lg:gap-lg cursor-pointer">
                <span className="text-sm md:text-xl font-bold uppercase">
                  Join our community
                </span>
                <div className="flex items-end w-5 h-5 md:w-8 md:h-8">
                  <img
                    src={Arrow_RB}
                    alt="Arrow_RB"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-light-secondary font-light">
                Users will be able to use Ardmoney on the chain that they most
                see fit. Ardmoney is currently deployed on Polygon and Binance
                Smart Chain.
              </p>
            </div>
            <div className="flex relative top-4 justify-center md:justify-center lg:justify-end relative w-full h-full bg-transparent rounded-lg md:w-6/12 lg:w-6/12">
                <img
                  src={Ghosts}
                  data-aos="fade-up"
                  data-aos-delay="800"
                  alt="image"
                  className="object-cover w-full"
                />
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-white w-full gap-xs">
            <a
              href="https://t.me/ArdMoney"
              target={"_blank"}
              className="w-full h-full"
            >
              <OutlineButton style="justify-between px-xl py-xl">
                <span className="text-base md:text-xl font-bold">
                  TELEGRAM
                </span>
                <div className="i-fa-brands-telegram-plane icon-size-7" />
              </OutlineButton>
            </a>

            <a
              href="https://twitter.com/AxxmLabs"
              target={"_blank"}
              className="w-full h-full"
            >
              <OutlineButton style="justify-between px-xl py-xl">
                <span className="text-base md:text-xl font-bold">
                  TWITTER
                </span>
                <div className="i-fa-brands-twitter icon-size-5" />
              </OutlineButton>
            </a>
          </div>
        </Card>
      </Section>
    </PageContainer>
  );
}

const faqs = [
  {
    id: 1,
    title: "what is ardmoney ?",
    subtitle: "By the people. For the people.",
    description:
      "Ardmoney is fully democratized and is governed by its token holders which ensures the protocol serves the best interest of the people.",
    url: "https://www.youtube.com/embed/Wfc6AJVA8O4",
  },
  {
    id: 2,
    title: "what is dex ?",
    subtitle: "By the people. For the people.",
    description:
      "Ardmoney is fully democratized and is governed by its token holders which ensures the protocol serves the best interest of the people.",
    url: "https://www.youtube.com/embed/3HESogLqS2Q",
  },
  {
    id: 3,
    title: "what is dao ?",
    subtitle: "By the people. For the people.",
    description:
      "Ardmoney is fully democratized and is governed by its token holders which ensures the protocol serves the best interest of the people.",
    url: "https://www.youtube.com/embed/0HMA_y4V_Qo",
  },
];
