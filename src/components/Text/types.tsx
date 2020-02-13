export enum TextType {
  LONG = "long",
  SHORT = "short"
}
export interface TextProps {
  textType: TextType;
  text: string;
  longText: string;
}
