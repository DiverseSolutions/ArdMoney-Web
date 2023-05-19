import { useDispatch } from "react-redux";
import { setSwapSettingsModal } from "@slices/modalSlice";

import CloseIcon from "@assets/icons/CloseIcon";
import ModalLayout from "../layouts/ModalLayout";

export default function SwapSettingsModal() {
  const dispatch = useDispatch();

  function handleModalClose() {
    dispatch(setSwapSettingsModal(false));
  }

  return (
    <ModalLayout handleModalClose={handleModalClose} >
      <div className="mt-5xl min-w-[423px] max-w-[423px] flex flex-col gap-base">
        <div className="flex justify-between items-center">
          <h5>Swap Settings</h5>
          <button
            className="btn-animation p-2xs rounded-4xs border border-light-back cursor-pointer"
            onClick={handleModalClose}
          >
            <CloseIcon />
          </button>
        </div>

        <span className="text-light-terteriary">Slippage Tolerance</span>

        <div className="flex gap-4xs justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm">
          <input type="number" className="text-right bg-transparent w-full focus-visible:outline-none" value={0.5} />
          <span className="relative top-0.5 text-xs">%</span>
        </div>

        <span className="text-light-terteriary">Transaction Deadline</span>

        <div className="flex gap-4xs justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm">
          <input type="number" className="bg-transparent text-right w-full focus-visible:outline-none" value={30} />
          <span className="relative top-0.5 text-xs">min</span>
        </div>
      </div>
    </ModalLayout>
  );
}
