import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const wapper = style({
  width: "100%",
  padding: "0.6rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      padding: "0.8rem",
    },
  },
});
