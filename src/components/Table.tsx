import { TableProp } from "types/TableTypes";
import { useNavigate } from "react-router-dom";

export default function Table({ header, rows }: TableProp) {
  const navigate = useNavigate();

  function handleRowClick(link: string) {
    if (!link) return;
    navigate(link);
  }

  return (
    <div className="rounded-3xs border border-primary">
      <table className="table-fixed w-full  divide-y divide-primary">
        <thead className=" text-primary">
          <tr className="font-normal">
            {header.map((item, index) => (
              <th key={index} scope={"col"} className={`py-3.5  font-normal`}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y text-center divide-primary text-white">
          {rows.map((row, rowIndex) => (
            <tr
              onClick={() => handleRowClick(row.link)}
              key={rowIndex}
              className="hover:bg-primary cursor-pointer"
            >
              {row.texts.map((text, textIndex) => (
                <td key={textIndex} className=" py-4 text-sm  ">
                  {text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
