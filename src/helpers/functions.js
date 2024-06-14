import moment from "moment";
import { APP_NAME } from "../config";

export const setTitle = (name) => (document.title = `${name || ""} | ${APP_NAME} `);
export const dateConverter = (date) => moment(date).format("DD-MM-YYYY");
export const timeConverter = (time) => moment(time, "HH:mm:ss").format("hh:mm a");
export const numberToString = (number = 0) => number.toLocaleString("en-IN") || 0;
export const numberToCurrency = (number = 0) => {
  return (
    number?.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
    }) || "₹0"
  );
};

export const setToken = (name, token) => {
  if (!name || !token) return;
  localStorage.setItem(name, token);
};

export const isNull = (field) => {
  return (
    field === undefined ||
    field === "undefined" ||
    field === "" ||
    field === null ||
    field === "null"
  );
};
