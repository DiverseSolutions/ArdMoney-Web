import { useState } from "react";

import Background from "@assets/background.svg";
import Background2 from "@assets/background2.svg";
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
      <div className='flex flex-col w-full bg-black min-h-screen'>
        
        <div className='relative flex flex-col items-center w-full p-6 lg:p-0'>
          <div className='flex flex-col gap-lg w-full lg:px-32 pt-32 pb-32 lg:pb-64 text-center z-10'>
            <span className='text-white/60 text-base sm:text-xl'>First Mongolian DAO</span>
            <div className='flex flex-col text-2xl sm:text-4xl font-extrabold leading-none text-white'>
              <span>Financial System</span>
              <span>Without Boundaries</span>
            </div>
            <div className='flex items-center justify-center w-full gap-base'>
              <button className='flex items-center justify-center w-1/2 sm:w-1/5 md:1/3 bg-[#8362FD] text-white py-3 rounded-lg'>
                <span className="text-xs lg:text-base">Launch App</span>
              </button>
              <button className='flex items-center justify-center w-1/2 sm:w-1/5 md:1/3 border border-[#8362FD] text-white py-3 rounded-lg'>
                <span className="text-xs lg:text-base">
                  Learn how to start
                </span>
              </button>
            </div>
          </div>
          <img src={Background} alt="" className='absolute left-0 top-0 mt-96' />
          <img src={Background2} alt="" className='absolute left-0 top-1/4 -mt-96' />

          <div className='flex w-full justify-center items-center bg-black'>
            
            <div className='flex flex-col max-w-6xl w-full justify-between'>
              <div className='grid grid-cols-2 sm:grid-cols-4 z-30 text-white w-full pt-64 pb-32 px-0 '>
                <div className='flex flex-col text-center p-base font-extrabold'>
                  <span className='text-xl sm:text-3xl lg:text-4xl'>0.03₮</span>
                  <span className='text-2xs sm:text-sm lg:text-base'>CERO PRICE</span>
                </div>
                <div className='flex flex-col text-center p-base font-extrabold'>
                <span className='text-xl sm:text-3xl lg:text-4xl'>5.58B</span>
                  <span className='text-2xs sm:text-sm lg:text-base'>STAKING CONTRACT</span>
                </div>
                <div className='flex flex-col text-center p-base font-extrabold'>
                  <span className='text-xl sm:text-3xl lg:text-4xl'>3.18B</span>
                  <span className='text-2xs sm:text-sm lg:text-base'>MARKET CAP</span>
                </div>
                <div className='flex flex-col text-center p-base font-extrabold'>
                  <span className='text-xl sm:text-3xl lg:text-4xl'>103.3</span>
                  <span className='text-2xs sm:text-sm lg:text-base'>TOTAL VOLUME</span>
                </div>
              </div>

              <div className='flex flex-col w-full justify-center items-center gap-5 mb-16 sm:mb-32'>
                <img
                  src={Face}
                  width={"61.57px"}
                  height={"64px"}
                  alt='image'
                />
                <div className='flex flex-col gap-base text-center max-w-lg'>
                  <span className='text-xl sm:text-3xl text-white font-extrabold'>
                    Advanced protocol for managing digital assets
                  </span>
                  <span className='text-white/60 text-xs sm:text-base'>
                    Cero is revolutionising the world of financial services.
                    We've created a low-cost, high-speed blockchain based
                    financial system and are dedicated to being the fastest,
                    most reliable and secure transactions service that can be
                    used by consumers and businesses.
                  </span>
                  
                </div>
              </div>

              <div className='flex flex-col pt-16 gap-6'>
                <div className='flex relative w-full rounded-lg h-[363px] bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px]'>
                  <div className='flex flex-col absolute bottom-0 justify-end gap-4 p-6 text-white w-full sm:w-4/12 back rounded-tl-lg rounded-bl-lg z-10'>
                    <span className='text-base sm:text-xl font-extrabold'>
                      WHAT WE CAPABLE OF
                    </span>
                    <span className='font-normal text-sm sm:text-base'>
                      Cero Protocol is a decentralized protocol providing
                      financial services, such as Lending, Borrowing, Liquidity
                      mining, without an intermediary.
                    </span>
                  </div>
                  <div className='flex justify-end relative w-full h-full bg-black back rounded-lg '>
                    <div className="flex justify-items-end md:w-8/12">
                      <img src={Persona} alt='image' className="object-cover w-full"/>
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 '>
                  <div className='flex flex-col gap-sm text-white border border-white/60 p-6 rounded-lg'>
                    <span className='text-base sm:text-xl font-extrabold'>DEFI</span>
                    <span className="text-sm sm:text-base">
                      Facilitating permissionless decentralized lending.
                    </span>
                    <span className='text-white/60 text-2xs sm:text-sm font-light'>
                      ArdMoney protocol users are able to save with high
                      interest and borrow with low interest.
                    </span>
                  </div>
                  <div className='flex flex-col gap-sm text-white border border-white/60 p-6 rounded-lg'>
                  <span className='text-base sm:text-xl font-extrabold'>DEX</span>
                  <span className="text-sm sm:text-base">Your exchange in your hands.</span>
                  <span className='text-white/60 text-2xs sm:text-sm font-light'>
                      Smart Contracts allow ArdMoney to provide a
                      permissionless, trustless, immutable platform to trade
                      crypto assets.
                    </span>
                  </div>
                  <div className='flex flex-col gap-sm text-white border border-white/60 p-6 rounded-lg'>
                  <span className='text-base sm:text-xl font-extrabold'>DAO</span>
                  <span className="text-sm sm:text-base">By the people. For the people.</span>
                  <span className='text-white/60 text-2xs sm:text-sm font-light'>
                      Cero protocol is fully democratized and is governed by its
                      token holders which ensures the protocol serves the best
                      interest of the people.
                    </span>
                  </div>
                </div>

                <div className='flex justify-center pt-12 pb-8 sm:pt-32 sm:pb-16 px-0 text-center gap-6'>
                  <div className=''>
                    <span className='uppercase text-xl sm:text-3xl font-extrabold text-white'>
                      getting <br /> confused is <br /> okay. <br /> we will
                      help you <br /> to{" "}
                      <span className='text-[#3FE600] '>understand</span> <br />
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
                            <span className='text-base sm:text-xl font-extrabold uppercase'>
                              {faq.title}
                            </span>
                            <div
                              className={`h-4 w-4 sm:h-6 sm:w-6 relative transition ${
                                faq.isOpen ? "rotate-180" : "rotate-0"
                              }`}
                            >
                              <img src={Chevron} alt='image' />
                            </div>
                          </div>
                          {faq.isOpen && (
                            <div className='flex flex-col sm:flex-row px-6 pb-6 bg-black text-justify rounded-bl-lg rounded-br-lg w-full gap-6'>
                              <div className='flex relative w-full sm:w-1/2 rounded-lg bg-white h-40 sm:h-[300px]'>
                                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                  <div className={`h-12 w-12 relative`}>
                                    <img
                                      src={Play}
                                      alt='image'
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className='flex flex-col sm:w-1/2 gap-4'>
                                <span className="text-sm sm:text-base">By the people. For the people.</span>
                                <span className='text-2xs sm:text-sm text-white/60 font-light'>
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

                  <div className='flex items-center justify-center w-full gap-6 rounded-lg mb-20 sm:mb-16 lg:mb-16 border'>
                    <div className='flex flex-col items-center p-6 back rounded-lg bg-gradient-to-br from-[#000000] via-[#8362FD]/10 to-[#8362FD] text-white'>
                      <span className='flex text-center uppercase text-base sm:text-xl font-extrabold mb-6'>
                        Four Pillars of cero protocol
                      </span>
                      <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6'>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-base'>
                          <span className='uppercase font-extrabold text-sm sm:text-sm lg:text-base'>
                            Dynamic Fees
                          </span>
                          <span className='text-white/60 text-2xs lg:text-sm font-light'>
                            The DAO will determine the pool fee based on trust,
                            utility, and risks associated with the asset.
                          </span>
                        </div>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-base'>
                          <span className='uppercase font-extrabold text-sm sm:text-sm lg:text-base'>Multichain</span>
                          <span className='text-white/60 text-2xs lg:text-sm font-light'>
                            Users will be able to use Cero on the chain that
                            they most see fit. Cero is currently deployed on
                            Polygon and Binance Smart Chain.
                          </span>
                        </div>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-base'>
                          <span className='uppercase font-extrabold text-sm sm:text-sm lg:text-base'>Permissionless</span>
                          <span className='text-white/60 text-2xs lg:text-sm font-light'>
                            Cero will serve as a gateway for investors to have
                            exposure to crypto projects in less known economies.
                          </span>
                        </div>
                        <div className='flex flex-col bg-black/40 rounded-lg p-6 gap-base'>
                          <span className='uppercase font-extrabold text-sm sm:text-sm lg:text-base'>Decentralized</span>
                          <span className='text-white/60 text-2xs lg:text-sm font-light'>
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
                      <span className='text-base sm:text-xl font-extrabold'>BLOG POST</span>
                      <div className="flex items-end w-5 h-5 sm:w-8 sm:h-8">
                        <img
                          src={Arrow_RB}
                          alt='Arrow_RB'
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-base sm:gap-xl lg:gap-10 w-full text-white'>
                      <div className='flex border rounded-lg sm:mb-16 bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer '>
                        <div className='flex flex-col p-6 bg-black back rounded-lg'>
                          <img
                            src={Media1}
                            width={"330px"}
                            height={"180px"}
                            alt='image'
                          />
                          <div className='flex flex-col mt-base gap-base'>
                            <span className='font-extrabold text-sm sm:text-base uppercase'>
                              Монголын анхны DeFi протокол хэрэглээнд орлоо!
                            </span>
                            <span className='font-light text-white/60 text-sm'>
                              The DAO will determine the pool fee based on
                              trust, utility, and risks associated with the
                              asset.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='flex border rounded-lg sm:mt-16 bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] cursor-pointer'>
                        <div className='flex flex-col p-6 bg-black back rounded-lg'>
                          <img
                            src={Media2}
                            width={"330px"}
                            height={"180px"}
                            alt='image'
                          />
                          <div className='flex flex-col mt-base gap-base'>
                            <span className='font-extrabold text-sm sm:text-base uppercase'>
                              Monthly developer report #3
                            </span>
                            <span className='font-light text-white/60 text-sm'>
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
                          <div className='flex flex-col mt-base gap-base'>
                            <span className='font-extrabold text-sm sm:text-base uppercase'>
                              Monthly Developer Report #2
                            </span>
                            <span className='font-light text-white/60 text-sm'>
                              The DAO will determine the pool fee based on
                              trust, utility, and risks associated with the
                              asset.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col mt-10 sm:mb-16'>
                    <div className='flex flex-col sm:flex-row sm:justify-between w-full rounded-lg h-full sm:h-[363px]'>
                      <div className='flex flex-col justify-end gap-4 text-white w-full sm:w-5/12 lg:w-6/12 mb-10'>
                        <div className='flex gap-1 lg:gap-lg cursor-pointer'>
                          <span className='text-md sm:text-xl font-extrabold uppercase'>
                            Join our community
                          </span>
                          <div className="flex items-end w-5 h-5 sm:w-8 sm:h-8">
                            <img
                              src={Arrow_RB}
                              alt='Arrow_RB'
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <p className='text-white/60'>
                          Users will be able to use Cero on the chain that they
                          most see fit. Cero is currently deployed on Polygon
                          and Binance Smart Chain.
                        </p>
                      </div>
                      <div className='flex justify-center sm:justify-center lg:justify-end relative w-full h-full bg-black back rounded-lg sm:w-6/12 lg:w-8/12'>
                        <div className="flex justify-end">
                          <img src={Ghosts} alt='image' className="object-cover w-full"/>
                        </div>
                      </div>
                      
             
                    </div>
                    <div className='flex text-white w-full gap-2'>
                      <button className='flex w-1/2 justify-between items-center rounded-lg bg-gradient p-[1px]'>
                        <div className='flex justify-center sm:justify-between h-full w-full items-center p-3 sm:p-xl bg-black back rounded-lg gap-3'>
                          <span className="text-base sm:text-xl font-extrabold">TELEGRAM</span>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <img
                              src={Telegram}
                              alt='Telegram imagem'
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </button>
                      <button className='flex w-1/2 justify-between items-center rounded-lg bg-gradient p-[1px]'>
                      <div className='flex justify-center sm:justify-between h-full w-full items-center p-3 sm:p-xl bg-black back rounded-lg gap-3'>
                          <span className="text-base sm:text-xl font-extrabold">TWITTER</span>
                          <div className="w-4 h-4 sm:w-8 sm:h-8">
                            <img
                              src={Twitter}
                              alt='Twitter image'
                              className="object-contain"
                            />
                          </div>
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
