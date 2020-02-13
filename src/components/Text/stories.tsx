import React from "react";
import { TextType } from "./types";
import Text from "./index";
import { shortText, longText } from "./mocks";

export default {
  title: "Text",
  component: Text
};

export const ShortText: React.FC = () => (
  <Text textType={TextType.SHORT} text={shortText} longText={longText} />
);

// export const LongText: React.FC = () => (
//   <Text textType={TextType.LONG} text={shortText} longText={longText} />
// );
