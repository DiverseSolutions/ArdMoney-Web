import Button from "@/components/shared/Button";
import { IconButtonProp } from 'types/ButtonTypes'

import { 
  filterIconSize
} from "@helpers/component/buttonFilters";

const baseStyle = "";

export default function IconButton({ viewBox = "",fill = "",noAnimation = false,style,children,size = "normal",clickHandler }: IconButtonProp) {
  const iconSizeStyle = filterIconSize(size)

  const resultStyle = `${baseStyle} ${iconSizeStyle} ${style}` 

  return (
    <Button base={baseStyle} clickHandler={clickHandler} size={size} noAnimation={noAnimation} theme="icon" padding="none">
      <svg
        className={resultStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        fill={fill}
      >
        {children}
      </svg>
    </Button>
  );
}
