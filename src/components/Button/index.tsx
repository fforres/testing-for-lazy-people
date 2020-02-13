import React from "react";
import { StyledButton } from "./elements";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  onHover,
  testId,
  children
}) => (
  <StyledButton data-testid={testId} onClick={onClick} onMouseOver={onHover}>
    {children}
  </StyledButton>
);

export default Button;
