import { DefaultCheckProp } from "types/CheckTypes";

import ModalCheck from "@components/checks/ModalCheck";
import Web3ConnectionCheck from "@components/checks/Web3ConnectionCheck";
import NetworkCheck from "@components/checks/NetworkCheck";
import TokenListCheck from "@components/checks/TokenListCheck";

export default function ApplicationCheck({ children }: DefaultCheckProp) {
  return (
    <ModalCheck>
      <Web3ConnectionCheck>
        <NetworkCheck>
          <TokenListCheck>{children}</TokenListCheck>
        </NetworkCheck>
      </Web3ConnectionCheck>
    </ModalCheck>
  );
}
