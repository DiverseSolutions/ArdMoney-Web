import ModalCheck from "@components/checks/ModalCheck";
import Web3ConnectionCheck from "@components/checks/Web3ConnectionCheck";
import NetworkCheck from '@components/checks/NetworkCheck'
import { DefaultCheckProp } from "types/CheckTypes";

export default function ApplicationCheck({ children }: DefaultCheckProp) {
  return (
    <ModalCheck>
      <Web3ConnectionCheck>
        <NetworkCheck>
          {children}
        </NetworkCheck>
      </Web3ConnectionCheck>
    </ModalCheck>
  );
}
