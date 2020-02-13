export enum TextType {
  LONG = "long",
  SHORT = "short"
}
export interface TextProps {
  testId?: string;
  textType: TextType;
  text: string;
  longText: string;
}
