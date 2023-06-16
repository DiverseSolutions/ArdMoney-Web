import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import { SweetAlertIcon, SweetAlertPosition } from "sweetalert2";
import AlertLayout from "@layouts/AlertLayout";

type AlertType = "success" | "error" | "info";

export function alert(alertStyle: AlertType, content: string) {
  switch (alertStyle) {
    case "success":
      alertSuccess(content);
      break;
    case "error":
      alertError(content);
      break;
    case "info":
      alertInfo(content);
      break;
    default:
      alertInfo(content);
      break;
  }
}

function alertSuccess(text: string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-secondary";
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="w-full text-secondary">{text}</div>
    </AlertLayout>
  );

  options.html = element;
  Swal.fire(options);
}
function alertError(text: string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-red-700";
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="w-full text-red-500">{text}</div>
    </AlertLayout>
  );

  options.html = element;
  Swal.fire(options);
}

function alertInfo(text: string) {
  let options = getAlertDefaultOptions();
  options.customClass.popup += "border-primary";
  let element = ReactDOMServer.renderToString(
    <AlertLayout>
      <div className="w-full text-primary">{text}</div>
    </AlertLayout>
  );

  options.html = element;
  Swal.fire(options);
}

function getAlertDefaultOptions() {
  return {
    icon: "success" as SweetAlertIcon,
    position: "top" as SweetAlertPosition,
    showConfirmButton: false,
    timer: 3000,
    customClass: {
      popup:
        "flex! items-center! bg-black! min-w-4/12 max-w-11/12 md:min-w-2/12! md:max-w-5/12! border-2! rounded-3xs! border-solid! py-0! m-0! px-xl! mb-5!" +
        " ",
      icon: "hidden!",
      title: "hidden!",
      closeButton: "hidden!",
      htmlContainer: "w-full! py-xl! m-0! ",
    },
    html: "",
  };
}
