// import Button from "@components/shared/Button";
import ChevronRightIcon from '@assets/icons/ChevronRightIcon'

export default function TokenSelectButton() {
  return (
    <button className="btn gap-2xs px-2xs py-2xs bg-primary-back">
      <span className="pr-sm">Select Token</span>
      <ChevronRightIcon style="w-1.5 mx-2xs" />
    </button>

  )
}
