import { DefaultCheckProp } from "types/CheckTypes";

import ModalCheck from "@components/checks/ModalCheck";
import Web3ConnectionCheck from "@components/checks/Web3ConnectionCheck";
import NetworkCheck from "@components/checks/NetworkCheck";
import TokenListCheck from "@components/checks/TokenListCheck";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ApplicationCheck({ children }: DefaultCheckProp) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalCheck>
        <Web3ConnectionCheck>
          <NetworkCheck>
            <TokenListCheck>{children}</TokenListCheck>
          </NetworkCheck>
        </Web3ConnectionCheck>
      </ModalCheck>
    </QueryClientProvider>
  );
}
