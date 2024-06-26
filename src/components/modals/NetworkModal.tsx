import { Chain, SupportedChainList } from "@constants/ChainList";
import { useDispatch } from "react-redux";

import { setNetworkModal } from "@slices/modalSlice";
import { addingChain, switchToChain } from "@helpers/web3/metamask";
import { alert } from "@helpers/alert";
import { setNetworkConfigured, setNetworkUnknown } from "@slices/networkSlice";
import ModalLayout from "../layouts/ModalLayout";
import Divider from "@components/shared/Divider";
import { useTranslation } from "react-i18next";
import useScreenType from "react-screentype-hook";

export default function NetworkModal() {
  const { t } = useTranslation();
  const { isMobile } = useScreenType();

  const dispatch = useDispatch();

  function handleModalClose() {
    dispatch(setNetworkModal(false));
  }

  async function handleChainConnect(chain: Chain) {
    try {
      await switchToChain(chain);
      dispatch(setNetworkUnknown(false));
      dispatch(setNetworkConfigured(true));
      alert("success", "Successfully Switched to Chain");
      handleModalClose();
    } catch (error) {
      try {
        await addingChain(chain);
        dispatch(setNetworkUnknown(false));
        dispatch(setNetworkConfigured(true));
        alert("success", "Successfully Added Chain");
        handleModalClose();
      } catch (e) {
        alert("error", "Error Adding Chain");
      }
    }
  }

  return (
    <ModalLayout
      alignment={isMobile ? "center" : "right"}
      handleModalClose={handleModalClose}
    >
      <div className="flex flex-col gap-xl w-full">
        <div className="flex items-center justify-between gap-0">
          <h5>{t("common:chooseChain")}</h5>
          <div
            className="i-ic-outline-close icon-size-5 btn-animation"
            onClick={handleModalClose}
          />
        </div>
        <Divider />
        <div className="grid gap-3xs grid-cols-1">
          {SupportedChainList.map((chain, index) => (
            <button
              key={index}
              onClick={() => {
                handleChainConnect(chain);
              }}
              className="btn-outline btn-animation gap-xs items-center"
            >
              <img
                src={chain.logos[0]}
                className="h-8 w-auto"
                alt="chain_logo"
              />
              <span className="text-base">{chain.name[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </ModalLayout>
  );
}
