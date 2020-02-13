import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button(({ dark }) => ({
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
}));

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onHover: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dark?: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, onHover, children }) => (
  <StyledButton onClick={onClick} onMouseOver={onHover}>
    {children}
  </StyledButton>
);

export default Button;
