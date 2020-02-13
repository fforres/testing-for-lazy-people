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
    <StyledButton
      isHovered={isHovered}
      data-testid={testId}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseEnter={() => {
        console.log("true");
        setisHovered(true);
      }}
      onMouseLeave={() => {
        console.log("false");
        setisHovered(false);
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
