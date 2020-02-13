import React from "react";
import { StyledContainer } from "./elements";

export enum TextType {
  LONG = "long",
  SHORT = "short"
}
interface Props {
  textType: TextType;
  text: string;
  longText: string;
}

const Text: React.FC<Props> = ({ textType, text, longText }) => {
  return (
    <StyledContainer>
      {textType === TextType.LONG && <p>{longText}</p>}
      {textType === TextType.SHORT ? <div>{text}</div> : null}
    </StyledContainer>
  );
};

export default Text;
