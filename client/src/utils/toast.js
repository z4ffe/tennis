import {toast} from "react-toastify";

export const ShowToast = (type, msg) => {
   switch (type) {
	  case 'success':
		 toast.success(msg, {
			position: toast.POSITION.TOP_RIGHT,
			hideProgressBar: true,
			autoClose: true,
			theme: "light",
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			icon: "➤",
		 })
		 break;
	  case 'error':
		 toast.error(msg, {
			position: toast.POSITION.TOP_RIGHT,
			theme: "light",
			pauseOnHover: true,
			hideProgressBar: true,
			autoClose: true,
			draggable: true,
			progress: undefined,
			icon: "✕"
		 })
		 break;
	  default:
		 return false
   }
}
