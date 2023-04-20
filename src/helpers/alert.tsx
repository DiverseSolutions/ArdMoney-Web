import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { SweetAlertIcon,SweetAlertPosition } from "sweetalert2";
import AlertLayout from '@layouts/AlertLayout'

export function alertSuccess(text:string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-secondary"
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="w-full text-secondary">{text}</div>
    </AlertLayout>
  )

  options.html = element
  Swal.fire(options);
}
export function alertError(text : string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-red-700"
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="w-full text-red-500">{text}</div>
    </AlertLayout>
  )

  options.html = element
  Swal.fire(options);
}

export function alertInfo(text:string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-primary"
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="w-full text-primary">{text}</div>
    </AlertLayout>
  )

  options.html = element
  Swal.fire(options);
}


function getAlertDefaultOptions() {
  return {
    icon: "success" as SweetAlertIcon,
    position: "bottom" as SweetAlertPosition,
    showConfirmButton: false,
    timer: 3000,
    customClass: {
      popup: "flex items-center bg-black w-2/12 border-2 rounded-3xs border-solid py-0 m-0 px-xl mb-5",
      icon: "hidden",
      title: "hidden",
      closeButton: "hidden",
      htmlContainer: "w-full py-xl m-0 ",
    },
    html : ""
  };
}
