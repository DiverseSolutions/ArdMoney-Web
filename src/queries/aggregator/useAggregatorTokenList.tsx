import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useAggregatorTokenList() {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["aggregatorTokenList"],
    queryFn: () =>
      axios
        .get(`https://open-api.openocean.finance/v3/bsc/tokenList`)
        .then((res) => {
          if (res.status == 200) {
            if (res.data.code == 200) {
              return res.data.data;
            }
          }
        }),
  });
  return { data, isSuccess, isLoading };
}
