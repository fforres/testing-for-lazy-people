import React from "react";
import { StyledContainer } from "./elements";
import { TextType, TextProps } from "./types";

const Text: React.FC<TextProps> = ({ textType, text, longText, testId }) => {
  return (
    <StyledContainer data-testid={testId}>
      {textType === TextType.LONG && <p>{longText}</p>}
      {textType === TextType.SHORT && <div>{text}</div>}
    </StyledContainer>
  );
};

export default Text;
