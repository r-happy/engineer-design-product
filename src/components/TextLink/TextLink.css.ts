import { style } from "@vanilla-extract/css";

export const link_style = style({
  textDecoration: "underline",
  ":hover": {
    textDecoration: "none",
  },
});

export const wrapper = style({
  display: "inline-block"
})
