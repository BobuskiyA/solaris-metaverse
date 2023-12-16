import MacOS from "./SMVInstaller.pkg";
import Windows from "./SMVInstaller.exe";

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
