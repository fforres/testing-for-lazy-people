import React, { useState } from "react";
import { StyledButton } from "./elements";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  onHover,
  testId,
  children
}) => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <StyledButton data-testid={testId} onClick={onClick} onMouseOver={onHover}>
      {children}
    </StyledButton>
  );
};

export default Button;
