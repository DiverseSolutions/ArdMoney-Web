import { useState } from "react";
import Search from "@assets/pools/search.svg";
import ARDX from "@assets/pools/ardx.svg";
import MONT from "@assets/pools/mont.svg";

const header = [
  { text: "Name" },
  { text: "TVL" },
  { text: "Base Token" },
  { text: "Paired Token" },
  { text: "24h Volume" },
  { text: "Swap Transaction" },
  { text: "Merged Transaction" },
  { text: "Burned Transaction" },
];

const tabs = [{ text: "All" }, { text: "My pairs" }];

const body = [
  {
    baseImg: MONT,
    pairedImg: ARDX,
    nameBase: "ARDX",
    namePaired: "MONT",
    tvl: "43.49",
    baseToken: "1299.40",
    pairedToken: "1250.54",
    volume: "0",
    swap_transaction: "12",
    merged_transaction: "4",
    burned_transaction: "0",
  },
  {
    baseImg: MONT,
    pairedImg: ARDX,
    nameBase: "ARDX",
    namePaired: "MONT",
    tvl: "43.49",
    baseToken: "1299.40",
    pairedToken: "1250.54",
    volume: "0",
    swap_transaction: "12",
    merged_transaction: "4",
    burned_transaction: "0",
  },
];

export default function Pools() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const clickTab = (index: any) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex justify-center min-h-screen w-full ">
      <div className="flex flex-col w-full max-w-6xl mb-xl z-10 p-6 lg:p-0">
        <span className="text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg">
          Token pairs
        </span>
        <div className="flex gap-sm text-white w-full lg:w-1/3">
          {tabs.map((item, index) => (
            <button
              onClick={() => clickTab(index)}
              key={index}
              className={`${
                index === selectedIndex ? "bg-primary" : "bg-primary/10"
              }  py-sm w-1/2 text-center rounded-lg`}
            >
              <span>{item.text}</span>
            </button>
          ))}
        </div>
        <div className="flex w-full md:w-1/3 px-base py-sm border-2 border-primary/60 rounded-lg mt-lg gap-2 text-white">
          <img src={Search} alt="" />
          <input
            type="tel"
            placeholder="Search tokens"
            className="flex w-full bg-transparent outline-none text-base appearance-none placeholder:text-white"
          />
        </div>
        {selectedIndex === 0 ? (
          <div className="border border-primary/30 rounded-lg p-3 justify-start block w-full overflow-auto text-left box-border mt-lg">
            <table className="w-full">
              <thead className="items-center w-full text-white mb-2">
                <tr className="px-6">
                  {header.map((item, index) => (
                    <th key={index} scope="col" className="px-6 py-2">
                      <span key={index}>{item.text}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <>
                  {body.map((item, index) => (
                    <tr
                      key={index}
                      className="text-white border-t border-primary/30 "
                    >
                      <td className="flex flex-col px-6 py-3">
                        <div className="flex items-center">
                          <img src={item.baseImg} alt="" />{" "}
                          <img src={item.pairedImg} alt="" />
                        </div>
                        <div>
                          {item.nameBase} / {item.namePaired}
                        </div>
                      </td>
                      <td className="px-6">{item.tvl}</td>
                      <td className="px-6">{item.baseToken}</td>
                      <td className="px-6">{item.pairedToken}</td>
                      <td className="px-6">{item.volume}</td>
                      <td className="px-6">{item.swap_transaction} transfer</td>
                      <td className="px-6">
                        {item.merged_transaction} transfer
                      </td>
                      <td className="px-6">
                        {item.burned_transaction} transfer
                      </td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-white mt-16">
            <span>No pairs</span>
          </div>
        )}
      </div>
    </div>
  );
}
