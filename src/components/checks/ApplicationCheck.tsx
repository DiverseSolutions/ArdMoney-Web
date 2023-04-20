import ModalCheck from "@components/checks/ModalCheck" 
import { DefaultCheckProp } from 'types/CheckTypes'

export default function ApplicationCheck({ children }: DefaultCheckProp) {
  return (
    <ModalCheck>
      {children}
    </ModalCheck>
  )
}
