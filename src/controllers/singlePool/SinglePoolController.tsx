import { GlobalAppState } from "@/redux/globalStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import DescriptionSection from "./sections/DescriptionSection";
import HeaderSection from "./sections/HeaderSection";
import PoolStatisticsSection from "./sections/PoolStatisticsSection";
import PoolTabs from "./components/PoolTabs";
import AddTab from "./sections/tabs/AddTab";
import RemoveTab from "./sections/tabs/RemoveTab";
import TokensContext from "./context/TokensContext";
import PoolContext from "./context/PoolContext";
import useGetPairQuery from "./queries/useGetPairQuery";
import ResetStatesContext from "./context/ResetStatesContext";
import useResetHook from "./hooks/useResetHook";

export default function SinglePoolController() {
  const { poolId } = useParams();
  const { dexList } = useSelector((state: GlobalAppState) => state.token);
  const poolQueryData = useGetPairQuery(poolId ?? "");
  const { refetch: refetchPoolData } = poolQueryData;
  const [searchParams] = useSearchParams();
  const [tabState, setTabState] = useState("add");
  const { resetState, reset } = useResetHook();

  useEffect(() => {
    refetchPoolData();
  }, [resetState]);

  const baseToken = useMemo(() => {
    let baseTokenSymbol = searchParams.get("baseTokenSymbol");
    let token = dexList.find((item: any) => item.symbol === baseTokenSymbol);
    return token;
  }, [searchParams]);

  const quoteToken = useMemo(() => {
    let quoteTokenSymbol = searchParams.get("quoteTokenSymbol");
    let token = dexList.find((item: any) => item.symbol === quoteTokenSymbol);
    return token;
  }, [searchParams]);

  if (baseToken == null || quoteToken == null) {
    return "error";
  }
  if (poolId == null) {
    return "error";
  }

  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-6">
      <ResetStatesContext.Provider value={{ resetState, reset }}>
        <PoolContext.Provider value={poolQueryData}>
          <TokensContext.Provider value={{ baseToken, quoteToken }}>
            <HeaderSection />
            <DescriptionSection />
            <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4">
              <div className="rounded-3xs border border-secondary p-6 w-12/12 lg:w-5/12">
                <PoolStatisticsSection />
              </div>

              <div className="rounded-3xs border border-primary p-6 w-12/12 lg:w-7/12">
                <div className="flex flex-col gap-y-6 h-full">
                  <PoolTabs tabState={tabState} setTabState={setTabState} />

                  {tabState == "add" && <AddTab />}
                  {tabState == "remove" && <RemoveTab />}
                </div>
              </div>
            </div>
          </TokensContext.Provider>
        </PoolContext.Provider>
      </ResetStatesContext.Provider>
    </div>
  );
}
