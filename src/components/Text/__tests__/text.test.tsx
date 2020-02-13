import * as React from "react";
import Text from "..";
import { longText, shortText } from "../mocks";
import { render, fireEvent, screen } from "@testing-library/react";
import { TextType } from "../types";

describe("TextNode", () => {
  it("Should should render short text", () => {
    const { queryByTestId } = render(
      <Text
        testId={"testId"}
        textType={TextType.SHORT}
        text={shortText}
        longText={longText}
      />
    );
    const TextElement = queryByTestId("testId");
    expect(TextElement).toHaveTextContent(shortText);
  });
  it("Should should render short text", () => {
    const { queryByTestId } = render(
      <Text
        testId={"testId"}
        textType={TextType.LONG}
        text={shortText}
        longText={longText}
      />
    );
    const TextElement = queryByTestId("testId");
    expect(TextElement).toHaveTextContent(longText);
  });
});
