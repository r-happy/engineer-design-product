import { Colors } from "@/styles/colors";
import { mediaQueryScreen } from "@/styles/queries";
import { style } from "@vanilla-extract/css";

export const HomeSection_wrapper = style({
  // backgroundColor: Colors.background.HomeSection.light,
  border: `solid 2px ${Colors.color.sub_border.light}`,
  margin: "2rem 0px",
  padding: "1.0rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      padding: "1.2rem",
    },
  },
});

export const HomeSection_title = style({
  borderBottom: `solid 1px ${Colors.color.main_border.light}`,
});

export const HomeSection_content = style({});
