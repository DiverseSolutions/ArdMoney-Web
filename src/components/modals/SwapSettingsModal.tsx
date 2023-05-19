import { useDispatch, useSelector } from "react-redux";
import { setSwapSettingsModal } from "@slices/modalSlice";

import CloseIcon from "@assets/icons/CloseIcon";
import ModalLayout from "../layouts/ModalLayout";
import { FormEvent, useState } from "react";
import { RootState } from "@/redux/store";
import { isEmpty } from "radash";
import { setDeadline, setSlippage } from "@slices/dexSlice";

export default function SwapSettingsModal() {
  const { slippage,deadline } = useSelector((state:RootState) => state.dex)
  const [localSlippage,setLocalSlippage] = useState(slippage)
  const [localDeadline,setLocalDeadline] = useState(deadline)
  const dispatch = useDispatch();

  function handleModalClose() {
    dispatch(setSwapSettingsModal(false));
  }

  function handleSlippageChange(e: FormEvent<HTMLInputElement>){
    const inputValue = e.currentTarget.value;
    if(isEmpty(inputValue)){
      dispatch(setSlippage(0))
      setLocalSlippage(0)
    }

    let amount = parseFloat(inputValue)
    dispatch(setSlippage(amount))
    setLocalSlippage(amount)
  }

  function handleDeadlineChange(e: FormEvent<HTMLInputElement>){
    const inputValue = e.currentTarget.value;
    if(isEmpty(inputValue)){
      dispatch(setDeadline(0))
      setLocalDeadline(0)
    }

    let amount = parseFloat(inputValue)
    dispatch(setDeadline(amount))
    setLocalDeadline(amount)
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
          <input type="number" className="text-right bg-transparent w-full focus-visible:outline-none" value={localSlippage} onChange={handleSlippageChange} />
          <span className="relative top-0.5 text-xs">%</span>
        </div>

        <span className="text-light-terteriary">Transaction Deadline</span>

        <div className="flex gap-4xs justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm">
          <input type="number" className="bg-transparent text-right w-full focus-visible:outline-none" value={localDeadline} onChange={handleDeadlineChange} />
          <span className="relative top-0.5 text-xs">min</span>
        </div>
      </div>
    </ModalLayout>
  );
}
