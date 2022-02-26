import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { theme } from "./theme.css";

export const container = style({
  padding: `0, ${calc.multiply(theme.space, 8)}`,
});

export const main = style({
  minHeight: "100vh",
  padding: `${calc.multiply(theme.space, 16)} 0`,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const footer = style({
  display: "flex",
  flex: 1,
  padding: `${calc.multiply(theme.space, 8)} 0`,
  borderTop: `1px solid ${theme.color.border}`,
  justifyContent: "center",
  alignItems: "center",
});

export const logoLink = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
});

export const title = style({
  margin: 0,
  lineHeight: 1.15,
  fontSize: "4rem",
  textAlign: "center",
});

export const titleLink = style({
  color: theme.color.primary,
  textDecoration: "none",

  // root に :hover, :focus みたいな書き方はできなさそう
  ":hover": {
    textDecoration: "underline",
  },

  selectors: {
    // selectors 以下はできる
    "&:focus, &:active": {
      textDecoration: "underline",
    },
  },
});

// 普通はこう書かないけどサンプルとして
export const anchor = style({
  selectors: {
    [`${footer} &`]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1,
    },
  },
});

export const description = style({
  margin: `${calc.multiply(theme.space, 16)} 0`,
  textAlign: "center",
  lineHeight: 1.5,
  fontSize: "1.5rem",
});

export const code = style({
  background: theme.color.background,
  borderRadius: 5,
  padding: calc.multiply(theme.space, 3),
  fontSize: "1.1rem",
  fontFamily: theme.typography.code,
});

export const grid = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: 800,

  "@media": {
    "(max-width: 600px)": {
      width: "100%",
      flexDirection: "column",
    },
  },
});

export const card = style({
  margin: calc.multiply(theme.space, 4),
  padding: calc.multiply(theme.space, 6),
  textAlign: "left",
  color: "inherit",
  textDecoration: "none",
  border: `1px solid ${theme.color.border}`,
  borderRadius: 10,
  transition: "color 0.15s ease, border-color 0.15s ease",
  maxWidth: 300,

  ":hover": {
    color: theme.color.primary,
    borderColor: theme.color.primary,
  },
  ":focus": {
    color: theme.color.primary,
    borderColor: theme.color.primary,
  },
  ":active": {
    color: theme.color.primary,
    borderColor: theme.color.primary,
  },
});

export const cardTitle = style({
  margin: `0 0 ${calc.multiply(theme.space, 4)} 0`,
  fontSize: "1.5rem",
});

export const cardDescription = style({
  margin: 0,
  fontSize: "1.25rem",
  lineHeight: 1.5,
});

export const logo = style({
  height: "1em",
  marginLeft: calc.multiply(theme.space, 2),
});
