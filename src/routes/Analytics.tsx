import {
  useGetAllTokensQuery,
  useGetAllPairsQuery,
} from "../redux/slices/subgraphSlice";
import * as Tabs from "@radix-ui/react-tabs";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect } from "react";

export default function Analytics() {
  const { t } = useTranslation();
  const {
    data: tokens,
    isLoading: isTokensLoading,
    isSuccess: isTokensSuccess,
    isError: isTokensError,
    error: tokensError,
  } = useGetAllTokensQuery(null);
  const {
    data: pairs,
    isLoading: isPairsLoading,
    isSuccess: isPairsSuccess,
    isError: isPairsError,
    error: pairsError,
  } = useGetAllPairsQuery(null);

  console.log({ pairs });

  return (
    <div className="pt-14">
      <div>
        <Tabs.Root defaultValue={"overview"} className="TabsRoot">
          <Tabs.List className="TabsList w-96">
            <Tabs.Trigger className="TabsTrigger" value={"overview"}>
              {t("analytics:overview")}
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value={"pools"}>
              {t("analytics:pools")}
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value={"tokens"}>
              {t("analytics:tokens")}
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value={"overview"}>
            <Overview tokens={tokens} pairs={pairs} />
          </Tabs.Content>
          <Tabs.Content value={"pools"}>
            <Pools pairs={pairs} />
          </Tabs.Content>
          <Tabs.Content value={"tokens"}>
            <Tokens tokens={tokens} />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

function Overview({ tokens, pairs }: any) {
  return (
    <div>
      <Tokens tokens={tokens} />
      <Pools pairs={pairs} />
    </div>
  );
}

function Pools({ pairs }: any) {
  const { t } = useTranslation();

  const [data, setData] = useState<Pair[]>([]);

  const table = useReactTable({
    data,
    columns: pairColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (!pairs) return;
    setData(
      pairs.map((pair: any, index: number) => ({
        number: index + 1,
        pool: `${pair.token0.symbol} / ${pair.token1.symbol}`,
        totalVolume: parseInt(pair.volumeToken0) + parseInt(pair.volumeToken1),
        totalLpTokens: parseInt(pair.totalSupply),
        liquidityProviders: pair.liquidityProviderCount,
        address: `${pair.id.slice(0, 20)}...`,
      }))
    );
  }, [pairs]);
  return (
    <div>
      <div className="mt-10 text-xl">{t("analytics:pools")}</div>
      <div className="mt-5 rounded-3xs border border-primary w-full">
        <table className=" w-full  divide-y divide-primary">
          <thead className="text-primary text-left">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="font-normal">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={`py-3.5  font-normal`}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y text-left divide-primary text-white">
            {table.getRowModel().rows.map((row) => (
              <tr className="hover:bg-primary cursor-pointer" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=" py-4 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tokens({ tokens }: any) {
  const { t } = useTranslation();
  const [data, setData] = useState<Token[]>([]);

  const table = useReactTable({
    data,
    columns: tokenColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (!tokens) return;
    setData(
      tokens.map((token: any, index: number) => ({
        number: index + 1,
        name: token.name,
        symbol: token.symbol,
        totalLiquidity: parseInt(token.totalLiquidity),
        tradeVolume: parseInt(token.tradeVolume),
        address: `${token.id.slice(0, 20)}...`,
      }))
    );
  }, [tokens]);
  return (
    <div>
      <div className="mt-10 text-xl">{t("analytics:tokens")}</div>
      <div className="mt-5 rounded-3xs border border-primary w-full">
        <table className=" w-full  divide-y divide-primary">
          <thead className="text-primary text-left">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="font-normal">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={`py-3.5  font-normal`}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y text-left divide-primary text-white">
            {table.getRowModel().rows.map((row) => (
              <tr className="hover:bg-primary cursor-pointer" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=" py-4 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tokensColumnHelper = createColumnHelper<Token>();

const tokenColumns = [
  tokensColumnHelper.accessor("number", {
    header: () => <div className="w-10 text-center">#</div>,
    cell: (info) => <div className="w-10 text-center">{info.getValue()}</div>,
  }),
  tokensColumnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  tokensColumnHelper.accessor("symbol", {
    cell: (info) => info.getValue(),
  }),
  tokensColumnHelper.accessor("totalLiquidity", {
    cell: (info) => info.getValue(),
  }),
  tokensColumnHelper.accessor("tradeVolume", {
    cell: (info) => info.getValue(),
  }),
  tokensColumnHelper.accessor("address", {
    cell: (info) => info.getValue(),
  }),
];

type Token = {
  number: number;
  name: string;
  symbol: string;
  totalLiquidity: string;
  tradeVolume: string;
  address: string;
};

const pairColumnHelper = createColumnHelper<Pair>();

const pairColumns = [
  pairColumnHelper.accessor("number", {
    header: () => <div className="w-10 text-center">#</div>,
    cell: (info) => <div className="w-10 text-center">{info.getValue()}</div>,
  }),
  pairColumnHelper.accessor("pool", {
    cell: (info) => info.getValue(),
  }),
  pairColumnHelper.accessor("totalVolume", {
    cell: (info) => info.getValue(),
  }),
  pairColumnHelper.accessor("totalLpTokens", {
    cell: (info) => info.getValue(),
  }),
  pairColumnHelper.accessor("liquidityProviders", {
    cell: (info) => info.getValue(),
  }),
  pairColumnHelper.accessor("address", {
    cell: (info) => info.getValue(),
  }),
];

type Pair = {
  number: number;
  pool: string;
  totalVolume: string;
  totalLpTokens: string;
  liquidityProviders: string;
  address: string;
};
