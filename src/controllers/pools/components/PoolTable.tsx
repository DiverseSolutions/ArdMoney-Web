import { useTranslation } from "react-i18next";

const header = [
  { translation: "tableName" },
  { translation: "tableTotalValueLocked" },
  { translation: "tableBaseToken" },
  { translation: "tableQuoteToken" },
  { translation: "tableDayVolume" },
  { translation: "tableSwap" },
  { translation: "tableMint" },
  { translation: "tableBurn" },
];

export default function PoolTable({ children }: { children: any }) {
  const { t } = useTranslation("pools");
  return (
    <table className="w-full">
      <thead className="w-full text-white mb-2 border-b border-primary/30">
        <tr className="px-6">
          {header.map((tab, index) => (
            <th key={index} scope="col" className="px-6 pt-3 pb-5">
              <span key={index} className="text-primary font-light">
                {t(tab.translation)}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
