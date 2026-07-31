import { showToast } from "nextjs-toast-notify";

// Define your global settings here once
const defaultOptions = {
  duration: 3000,
  position: "top-center",
  transition: "topBounce",
  sound: true,
};

export const toast = {
  success: (message) => showToast.success(message, defaultOptions),
  error: (message) => showToast.error(message, defaultOptions),
  warning: (message) => showToast.warning(message, defaultOptions),
  info: (message) => showToast.info(message, defaultOptions),
};
