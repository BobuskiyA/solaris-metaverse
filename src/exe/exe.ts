import MacOS from "./Mac.exe";
import Windows from "./Game.exe";

export const exe = (doc: string) => {
  switch (doc) {
    case "MacOS":
      return MacOS;

    case "Windows":
      return Windows;

    default:
      throw new Error("Document is not defined");
  }
};
