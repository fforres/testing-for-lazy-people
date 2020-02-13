import React from "react";
import { StyledContainer } from "./elements";
import { TextType, TextProps } from "./types";

const Text: React.FC<TextProps> = ({ textType, text, longText }) => {
  return (
    <StyledContainer>
      {textType === TextType.LONG && <p>{longText}</p>}
      {textType === TextType.SHORT ? <div>{text}</div> : null}
    </StyledContainer>
  );
};

export default Text;
