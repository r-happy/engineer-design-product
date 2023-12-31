import { style } from "@vanilla-extract/css";
import { mediaQueryScreen } from "./queries";

export const paddingSpaceMd = style({
  padding: "1.0rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      padding: "1.2rem",
    },
  },
});

export const paddingSpaceSm = style({
  padding: "0.6rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      padding: "0.8rem",
    },
  },
});

export const borderRadiusSm = style({
  borderRadius: "0.4rem",
  overflow: "hidden",
});

export const borderRadiusMd = style({
  borderRadius: "0.6rem",
  overflow: "hidden",
})

export const container = style({
  width: "90%",
  margin: "0 auto",

  "@media": {
    [mediaQueryScreen("md")]: {
      maxWidth: "640px",
    },
  },
});

export const icon_hero_title = style({
  fontSize: "1.5rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      fontSize: "2rem",
    },
  },
});

export const header_icon_hero_title = style({
  fontSize: "0.3rem",

  "@media": {
    [mediaQueryScreen("md")]: {
      fontSize: "0.5rem",
    },
  },
});