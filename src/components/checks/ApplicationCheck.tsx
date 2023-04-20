import ModalCheck from "@components/checks/ModalCheck";
import Web3ConnectionCheck from "@components/checks/Web3ConnectionCheck";
import { DefaultCheckProp } from "types/CheckTypes";

export default function ApplicationCheck({ children }: DefaultCheckProp) {
  return (
    <ModalCheck>
      <Web3ConnectionCheck>
        {children}
      </Web3ConnectionCheck>
    </ModalCheck>
  );
}
