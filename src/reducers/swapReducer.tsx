import { Token } from "@constants/TokenList";
import { Dispatch } from "react";

export function reducer(state: SwapPageState, action: ActionType) {
  switch (action.type) {
    case SwapPageActions.fromToken:
      return { ...state, fromToken: action.payload };
    case SwapPageActions.toToken:
      return { ...state, toToken: action.payload };

    case SwapPageActions.fromModal:
      return { ...state, fromModal: action.payload };
    case SwapPageActions.toModal:
      return { ...state, toModal: action.payload };

    case SwapPageActions.fromInput:
      return { ...state, fromInput: action.payload };

    case SwapPageActions.rate:
      return { ...state, rate: action.payload };

    default:
      throw Error("Unknown action: " + action.type);
  }
}

export type SwapPageState = {
  fromToken: Token | undefined;
  toToken: Token | undefined;

  fromModal: boolean;
  toModal: boolean;

  fromInput: number | string;

  rate: number;
};

export enum SwapPageActions {
  fromToken = "fromTokenAction",
  toToken = "toTokenAction",

  fromModal = "fromModalAction",
  toModal = "toModalAction",

  fromInput = "fromInputAction",

  rate = "rateAction",
}

export function pageDispatcher(dispatch: Dispatch<ActionType>){
  return (type: SwapPageActions,payload:any) => {
    dispatch({ type , payload})
  }
}

export type ActionType = {
  type: SwapPageActions;
  payload: any;
};
