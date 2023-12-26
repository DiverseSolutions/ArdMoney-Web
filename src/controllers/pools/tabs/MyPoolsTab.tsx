import { GlobalAppState } from "@/redux/store";
import { useSelector } from "react-redux";
import useGetUserPoolsQuery from "../queries/useGetUserPoolsQuery";
import { useMemo } from "react";
import PoolTable from "../components/PoolTable";
import { formatNumber } from "@/helpers/numbers";
import PoolTableLoader from "../components/PoolTableLoader";
import { useTranslation } from "react-i18next";
import BigNumber from "bignumber.js";
import { useNavigate } from "react-router-dom";

export default function MyPoolsTab({ search }: { search: string }) {
  const { t } = useTranslation("pools");
  const { data: pools, isSuccess, isLoading } = useGetUserPoolsQuery();
  const { isConfigured } = useSelector(
    (state: GlobalAppState) => state.network
  );
  const { dexList } = useSelector((state: GlobalAppState) => state.token);
  const navigate = useNavigate();
  const filteredPools = useMemo(() => {
    if (!pools) return [];

    return pools.filter(
      (pool: any) =>
        pool.token0.symbol.toUpperCase().includes(search.toUpperCase()) ||
        pool.token1.symbol.toUpperCase().includes(search.toUpperCase())
    );
  }, [isSuccess, search]);

  function handleRowLink(pool: any) {
    let searchQuery = `baseTokenSymbol=${pool.token0.symbol}&quoteTokenSymbol=${pool.token1.symbol}`;
    navigate(`/pool/${pool.id}?${searchQuery}`);
  }

  if (!isConfigured) {
    return (
      <div className="text-center text-white mt-16">
        <span>{t("common:pleaseConnectWallet")}</span>
      </div>
    );
  }

  return (
    <div className="border border-primary/30 rounded-lg p-3 justify-start block w-full overflow-auto text-left box-border mt-lg">
      <PoolTableLoader isLoading={isLoading}>
        {filteredPools.length == 0 ? (
          <div className="w-full text-center py-3">{t("searchNotFound")}</div>
        ) : (
          <PoolTable>
            {filteredPools.map((pool: any, index: number) => {
              const baseToken = dexList.find(
                (token: any) => token.symbol === pool.token0.symbol
              );
              const quoteToken = dexList.find(
                (token: any) => token.symbol === pool.token1.symbol
              );
              const swapLength = pool.swaps.length;
              const mintLength = pool.mints.length;
              const burnLength = pool.burns.length;

              return (
                <tr
                  key={index}
                  className="text-white cursor-pointer"
                  onClick={() => {
                    handleRowLink(pool);
                  }}
                >
                  <td className="flex flex-col px-6 py-3 gap-y-2 min-w-[180px]">
                    <div className="flex items-center gap-x-2">
                      {baseToken && (
                        <img src={baseToken.logo} className="w-8 h-8" />
                      )}
                      {quoteToken && (
                        <img src={quoteToken.logo} className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <p className="">
                        {pool.token0.symbol} / {pool.token1.symbol}
                      </p>
                    </div>
                  </td>
                  <td className="px-6">
                    {formatNumber(
                      BigNumber(pool.reserve0).plus(pool.reserve1).toNumber()
                    )}
                  </td>
                  <td className="px-6">{formatNumber(pool.reserve0)}</td>
                  <td className="px-6">{formatNumber(pool.reserve1)}</td>
                  <td className="px-6">
                    {formatNumber(
                      BigNumber(pool.volumeToken0)
                        .plus(pool.volumeToken1)
                        .toNumber()
                    )}
                  </td>
                  <td className="px-6 text-green-400">
                    {formatNumber(swapLength, 0, 0)} {t("transfer")}
                  </td>
                  <td className="px-6">
                    {formatNumber(mintLength, 0, 0)} {t("transfer")}
                  </td>
                  <td className="px-6">
                    {formatNumber(burnLength, 0, 0)} {t("transfer")}
                  </td>
                </tr>
              );
            })}
          </PoolTable>
        )}
      </PoolTableLoader>
    </div>
  );
}
