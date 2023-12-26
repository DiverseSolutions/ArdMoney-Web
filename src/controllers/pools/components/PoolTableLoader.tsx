import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { list } from "radash";

export default function PoolTableLoader({
  children,
  isLoading = false,
}: {
  children?: React.ReactNode;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <table className="w-full">
        <thead className="w-full text-white border-b border-primary/30">
          <tr className="px-6">
            {list(8).map((_, index) => (
              <th key={index} scope="col" className="px-6 pt-3 pb-5">
                <Skeleton className="w-full h-[20px] bg-gray-700" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mt-2">
          {list(1).map((item) => (
            <tr key={item} className="">
              {list(8).map((_, index) => (
                <td key={index} className="px-6 my-2">
                  <Skeleton className="w-[50px] lg:w-full h-[20px] bg-gray-700 my-7" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return <>{children}</>;
}
