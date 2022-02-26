import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("html, body", {
  padding: 0,
  margin: 0,
  fontFamily: theme.typography.text,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});

export const foo = {};
