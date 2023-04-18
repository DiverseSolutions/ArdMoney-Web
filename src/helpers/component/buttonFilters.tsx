import { ButtonTextSize, ButtonPaddingSize, ButtonTheme, DropdownIconSize, ButtonIconSize } from "@enums/ButtonEnums";

export function filterAnimationStyle(noAnimation : boolean){
  switch(noAnimation){
    case true:
      return "" 
    default:
      return "hover:scale-75 transition-all"
  }
}

export function filterPaddingStyle(padding : "none" | "small" | "normal" | "big"){
  switch(padding){
    case "none":
      return ButtonPaddingSize.none
    case "small":
      return ButtonPaddingSize.small
    case "normal":
      return ButtonPaddingSize.normal
    case "big":
      return ButtonPaddingSize.big
    default:
      return ButtonPaddingSize.normal
  }
}

export function filterColorStyle(theme : "primary" | "secondary" | "icon"){
  switch(theme){
    case "icon":
      return ButtonTheme.icon
    case "primary":
      return ButtonTheme.primary
    case "secondary":
      return ButtonTheme.secondary
    default:
      return ButtonTheme.primary
  }
}

export function filterTextSize(size : "small" | "normal" | "big"){
  switch(size){
    case "small":
      return ButtonTextSize.small
    case "normal":
      return ButtonTextSize.normal
    case "big":
      return ButtonTextSize.big
    default:
      return ButtonTextSize.normal
  }
}

export function filterDropdownIconSize(size : "small" | "normal" | "big"){
  switch(size){
    case "small":
      return DropdownIconSize.small
    case "normal":
      return DropdownIconSize.normal
    case "big":
      return DropdownIconSize.big
    default:
      return DropdownIconSize.normal
  }
}

export function filterIconSize(size : "small" | "normal" | "big"){
  switch(size){
    case "small":
      return ButtonIconSize.small
    case "normal":
      return ButtonIconSize.normal
    case "big":
      return ButtonIconSize.big
    default:
      return ButtonIconSize.normal
  }
}
