/** @jsx jsx */
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

export const hoveredStyle = css`
  background: #0053ba;
`;

const focusedStyle = css`
  background: #0053ba;
  outline-color: #ffffff;
`;

export const StyledButton = styled.button({
  background: "#0069ed",
  outlineColor: "transparent",
  outlineStyle: "solid",
  outlineWidth: "1px",
  color: "#ffffff",
  border: "none",
  padding: "1rem 2rem",
  cursor: "pointer",
  display: "inline-block",
  transition: "background-color 200ms",
  "&:hover": hoveredStyle,
  "&:focus": focusedStyle
});
