import Toastify from "toastify-js";

export class CustomToastService {
  constructor() {
    this.defaultStyle = {
      padding: "12px 20px",
      color: "#ffffff",
      display: "inline-block",
      "box-shadow":
        " 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3)",
      position: "fixed",
      top: "-150px",
      right: "15px",
      transition: "all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)",
      "border-radius": "2px",
      cursor: "pointer",
    };
  }

  success(message) {
    Toastify({
      text: message,
      duration: 3000,
      style: {
        ...this.defaultStyle,
        background: "linear-gradient(135deg, #73a5ff, #5477f5)",
      },
    }).showToast();
  }

  error(message) {
    Toastify({
      text: message,
      duration: 3000,
      style: {
        ...this.defaultStyle,
        "background-color": "red",
      },
    }).showToast();
  }
}
