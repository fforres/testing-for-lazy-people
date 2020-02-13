import styled from "@emotion/styled";

export const StyledButton = styled.button({
  background: "#0069ed",
  outlineColor: "transparent",
  color: "#ffffff",
  border: "none",
  padding: "1rem 2rem",
  cursor: "pointer",
  display: "inline-block",
  "&:hover, &:focus": {
    background: "#0053ba"
  },
  "&:focus": {
    outlineColor: "#fff"
  }
});
