import { Colors } from "@/styles/colors";
import { globalStyle, style } from "@vanilla-extract/css";

export const about_body = style({});

globalStyle(`${about_body} h1, h2`, {
  borderBottom: `solid 1px ${Colors.color.main_border.light}`,
});

export const image_wrapper = style({
  display: "flex",
  margin: "0 auto",
});

export const image = style({
  width: "50%",
});
