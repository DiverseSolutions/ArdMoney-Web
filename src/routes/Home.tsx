import { useState } from "react";

import Background from "@assets/background.png";
import Face from "@assets/face.png";
import Persona from "@assets/persona.png";
import Chevron from "@assets/down_chevron.png";
import Arrow_RB from "@assets/arrow_rb.png";
import Media1 from "@assets/media1.png";
import Media2 from "@assets/media2.png";
import Media3 from "@assets/media3.png";
import Ghosts from "@assets/ghosts.png";
import Telegram from "@assets/telegram.png";
import Twitter from "@assets/twitter.png";
import Play from "@assets/play.png";
import Cero3 from "@assets/frame/cero_logo3.png";
import Cero4 from "@assets/frame/cero_logo4.png";
import Cero5 from "@assets/frame/cero_logo5.png";
import Cero6 from "@assets/frame/cero_logo6.png";

export default function Home() {
  const [faqs, setFaqs] = useState(faqsInit);

  function toggleItem(selectedFaqs: any) {
    setFaqs((prev) =>
      prev.map((item) => {
        if (selectedFaqs.id !== item.id) return item;
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      })
    );
  }

  return (
      <div className='flex flex-col w-full bg-black'>
        <div className='flex flex-col'>
          <div className='absolute top-0 w-full h-auto'>
            {/* <div className='flex justify-center items-center relative w-full h-auto'>
              <img
                src={Background}
                alt='image'
                className='fill-transparent'
              />
            </div> */}
          </div>
          <div className='flex flex-col gap-6 w-full px-32 pt-32 pb-64 text-center z-10'>
            <span className='text-white/60'>First Mongolian DAO</span>
            <div className='flex flex-col text-[56px] leading-none text-white'>
              <span>Financial System</span>
              <span>Without Boundaries</span>
            </div>
            <div className='flex justify-center w-full gap-4'>
              <button className='bg-[#8362FD] text-black py-[14px] px-[20px] rounded-lg'>
                <span>Launch App</span>
              </button>
              <button className='border border-[#8362FD] text-white py-[14px] px-[20px] rounded-lg'>
                Learn how to start
              </button>
            </div>
          </div>

          <div className='flex w-full justify-center items-center bg-black '>
            <div className='flex flex-col max-w-6xl w-full justify-between'>
              <div className='grid grid-cols-4 z-30 text-white w-full pt-64 pb-32 px-0 '>
                <div className='flex flex-col text-center'>
                  <span className='text-[56px]'>0.03₮</span>
                  <span className='text-md'>CERO PRICE</span>
                </div>
                <div className='flex flex-col text-center'>
                  <span className='text-[56px]'>5.58B</span>
                  <span className='text-md'>STAKING CONTRACT</span>
                </div>
                <div className='flex flex-col text-center'>
                  <span className='text-[56px]'>3.18B</span>
                  <span className='text-md'>MARKET CAP</span>
                </div>
                <div className='flex flex-col text-center'>
                  <span className='text-[56px]'>103.3</span>
                  <span className='text-md'>TOTAL VOLUME</span>
                </div>
              </div>

              <div className='flex flex-col w-full justify-center items-center gap-5 mb-32'>
                <img
                  src={Face}
                  width={"61.57px"}
                  height={"64px"}
                  alt='image'
                />
                <div className='flex flex-col gap-4 text-center max-w-lg'>
                  <span className='text-[40px] text-white leading-none'>
                    Advanced protocol for managing digital assets
                  </span>
                  <span className='text-white/60 text-md leading-6'>
                    Cero is revolutionising the world of financial services.
                    We've created a low-cost, high-speed blockchain based
                    financial system and are dedicated to being the fastest,
                    most reliable and secure transactions service that can be
                    used by consumers and businesses.
                  </span>
                </div>
              </div>

              <div className='flex flex-col pt-16 gap-6'>
                <div className='flex w-full rounded-lg h-[363px] bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px]'>
                  <div className='flex flex-col justify-end gap-4 p-6 text-white w-4/12 bg-black back rounded-tl-lg rounded-bl-lg'>
                    <span className='text-2xl font-extrabold'>
                      WHAT WE CAPABLE OF
                    </span>
                    <span className='font-normal'>
                      Cero Protocol is a decentralized protocol providing
                      financial services, such as Lending, Borrowing, Liquidity
                      mining, without an intermediary.
                    </span>
                  </div>
                  <div className='flex relative h-full w-8/12 bg-black back rounded-tr-lg rounded-br-lg'>
                    <img src={Persona} alt='image' />
                  </div>
                </div>

                <div className='grid grid-cols-3 gap-6 '>
                  <div className='flex flex-col gap-4 text-white border border-white/60 p-6 rounded-lg'>
                    <span className='text-2xl'>DEFI</span>
                    <span>
                      Facilitating permissionless decentralized lending.
                    </span>
                    <span className='text-white/60 text-sm'>
                      ArdMoney protocol users are able to save with high
                      interest and borrow with low interest.
                    </span>
                  </div>
                  <div className='flex flex-col gap-4 text-white border border-white/60 p-6 rounded-lg'>
                    <span className='text-2xl'>DEX</span>
                    <span>Your exchange in your hands.</span>
                    <span className='text-white/60 text-sm'>
                      Smart Contracts allow ArdMoney to provide a
                      permissionless, trustless, immutable platform to trade
                      crypto assets.
                    </span>
                  </div>
                  <div className='flex flex-col gap-4 text-white border border-white/60 p-6 rounded-lg'>
                    <span className='text-2xl'>DAO</span>
                    <span>By the people. For the people.</span>
                    <span className='text-white/60 text-sm'>
                      Cero protocol is fully democratized and is governed by its
                      token holders which ensures the protocol serves the best
                      interest of the people.
                    </span>
                  </div>
                </div>

                <div className='flex justify-center pt-32 pb-16 px-0 text-center gap-6'>
                  <div className=''>
                    <span className='uppercase text-[40px] font-bold leading-none text-white'>
                      getting <br /> confused is <br /> okay. <br /> we will
                      help you <br /> to{" "}
                      <span className='text-[#3FE600]'>understand</span> <br />
                      these <span className='text-[#8362FD]'>concepts</span>
                    </span>
                  </div>
                </div>

                <div className='flex flex-col gap-6'>
                  {faqs.map((faq, index) => {
                    return (
                      <button key={index} onClick={() => toggleItem(faq)}>
                        <div className='flex flex-col w-full border rounded-lg bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] text-white'>
                          <div
                            className={`flex justify-between items-center w-full item p-6 bg-black back ${
                              faq.isOpen
                                ? "rounded-tl-lg rounded-tr-lg"
                                : "rounded-lg "
                            } `}
                          >
                            <span className='text-2xl font-bold uppercase'>
                              {faq.title}
                            </span>
                            <div
                              className={`h-6 w-6 relative transition ${
                                faq.isOpen ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              <img src={Chevron} alt='image' />
                            </div>
                          </div>
                          {faq.isOpen && (
                            <div className='flex px-6 pb-6 bg-black text-justify rounded-bl-lg rounded-br-lg w-full gap-6'>
                              <div className='flex relative w-1/2 rounded-lg bg-white h-[300px]'>
                                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                  <div className={`h-10 w-10 relative`}>
                                    <img
                                      src={Play}
                                      alt='image'
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className='flex flex-col w-1/2 gap-4'>
                                <span>By the people. For the people.</span>
                                <span className='text-sm text-white/60'>
                                  Cero protocol is fully democratized and is
                                  governed by its token holders which ensures
                                  the protocol serves the best interest of the
                                  people.
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}

                  <div className='flex items-center justify-center w-full gap-6 rounded-lg mb-16 border'>
                    <div className='flex flex-col items-center p-6 back rounded-lg bg-gradient-to-br from-[#000000] via-[#8362FD]/10 to-[#8362FD] text-white'>
                      <span className='flex text-center uppercase text-2xl font-bold mb-6'>
                        Four Pillars of cero protocol
                      </span>
                      <div className='grid grid-cols-4 gap-6'>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-4'>
                          <span className='uppercase font-extrabold text-md'>
                            Dynamic Fees
                          </span>
                          <span className='text-white/60 text-sm font-light'>
                            The DAO will determine the pool fee based on trust,
                            utility, and risks associated with the asset.
                          </span>
                        </div>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-4'>
                          <span className='uppercase'>Multichain</span>
                          <span className='text-white/60 text-sm font-light'>
                            Users will be able to use Cero on the chain that
                            they most see fit. Cero is currently deployed on
                            Polygon and Binance Smart Chain.
                          </span>
                        </div>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-4'>
                          <span className='uppercase'>Permissionless</span>
                          <span className='text-white/60 text-sm font-light'>
                            Cero will serve as a gateway for investors to have
                            exposure to crypto projects in less known economies.
                          </span>
                        </div>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-4'>
                          <span className='uppercase'>Decentralized</span>
                          <span className='text-white/60 text-sm font-light'>
                            Cero is governed by its token holders who are able
                            to vote on upcoming features.
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <div className='flex absolute left-0 z-40'>
                      <img src={Cero3} alt='image' />
                    </div> */}
                  </div>

                  <div className='flex flex-col w-full'>
                    <div className='flex gap-4 items-center w-full py-8 text-white'>
                      <span className='text-2xl font-extrabold'>BLOG</span>
                      <img
                        src={Arrow_RB}
                        width='32px'
                        height='32px'
                        alt='Arrow_RB'
                      />
                    </div>
                    <div className='grid grid-cols-3 gap-10 w-full text-white'>
                      <div className='flex border rounded-lg mb-16 bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer '>
                        <div className='flex flex-col p-6 bg-black back rounded-lg'>
                          <img
                            src={Media1}
                            width={"330px"}
                            height={"180px"}
                            alt='image'
                          />
                          <div className='flex flex-col mt-[10px] gap-4'>
                            <span className='font-extrabold text-md'>
                              Монголын анхны DeFi протокол хэрэглээнд орлоо!
                            </span>
                            <span className='text-white/60 text-sm'>
                              The DAO will determine the pool fee based on
                              trust, utility, and risks associated with the
                              asset.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='flex border rounded-lg mt-16 bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer'>
                        <div className='flex flex-col p-6 bg-black back rounded-lg'>
                          <img
                            src={Media2}
                            width={"330px"}
                            height={"180px"}
                            alt='image'
                          />
                          <div className='flex flex-col mt-[10px] gap-4'>
                            <span className='font-extrabold text-md'>
                              Монголын анхны DeFi протокол хэрэглээнд орлоо!
                            </span>
                            <span className='text-white/60 text-sm'>
                              The DAO will determine the pool fee based on
                              trust, utility, and risks associated with the
                              asset.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='flex border rounded-lg mb-16 bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer'>
                        <div className='flex flex-col p-6 bg-black back rounded-lg'>
                          <img
                            src={Media3}
                            width={"330px"}
                            height={"180px"}
                            alt='image'
                          />
                          <div className='flex flex-col mt-[10px] gap-4'>
                            <span className='font-extrabold text-md'>
                              Монголын анхны DeFi протокол хэрэглээнд орлоо!
                            </span>
                            <span className='text-white/60 text-sm'>
                              The DAO will determine the pool fee based on
                              trust, utility, and risks associated with the
                              asset.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col mt-10 mb-16'>
                    <div className='flex w-full rounded-lg h-[363px]'>
                      <div className='flex flex-col justify-end gap-4 text-white w-4/12 mb-10'>
                        <div className='flex gap-4 cursor-pointer'>
                          <span className='text-2xl font-extrabold uppercase'>
                            Join our community
                          </span>
                          <img
                            src={Arrow_RB}
                            width='32px'
                            height='32px'
                            alt='Arrow_RB'
                          />
                        </div>
                        <span className='font-normal text-white/60 text-sm'>
                          Users will be able to use Cero on the chain that they
                          most see fit. Cero is currently deployed on Polygon
                          and Binance Smart Chain.
                        </span>
                      </div>
                      <div className='flex relative h-full w-8/12'>
                        <img src={Ghosts} alt='image' />
                      </div>
                    </div>
                    <div className='flex gap-2 text-white'>
                      <button className='flex w-1/2 justify-between items-center rounded-lg bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px]'>
                        <div className='flex justify-between h-full w-full items-center p-6 bg-black back rounded-lg'>
                          <span className="text-2xl font-extrabold">TELEGRAM</span>
                          <img
                            src={Telegram}
                            width='32px'
                            height='32px'
                            alt='Arrow_RB'
                          />
                        </div>
                      </button>
                      <button className='flex w-1/2 justify-between items-center rounded-lg bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px]'>
                        <div className='flex justify-between h-full w-full items-center p-6 bg-black back rounded-lg'>
                          <span className="text-2xl font-extrabold">TWITTER</span>
                          <img
                            src={Twitter}
                            width='32px'
                            height='32px'
                            alt='Arrow_RB'
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

const faqsInit = [
  {
    id: 1,
    title: "what is cero ?",
    subtitle: "By the people. For the people.",
    description:
      "Cero protocol is fully democratized and is governed by its token holders which ensures the protocol serves the best interest of the people.",
    isOpen: false,
  },
  {
    id: 2,
    title: "what is dex ?",
    subtitle: "By the people. For the people.",
    description:
      "Cero protocol is fully democratized and is governed by its token holders which ensures the protocol serves the best interest of the people.",
    isOpen: false,
  },
  {
    id: 3,
    title: "what is dao ?",
    subtitle: "By the people. For the people.",
    description:
      "Cero protocol is fully democratized and is governed by its token holders which ensures the protocol serves the best interest of the people.",
    isOpen: false,
  },
];
