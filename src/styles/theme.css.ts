import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    primary: "#0070f3",
    border: "#eaeaea",
    background: "#fafafa",
  },
  space: "0.25rem",
  typography: {
    text: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    code: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
  },
});
