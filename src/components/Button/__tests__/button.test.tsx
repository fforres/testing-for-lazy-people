import * as React from "react";
import { render } from "@testing-library/react";
import Button from "..";

const textElement = <div>I'm a test!</div>;
const textString = `<div>I'm a test!</div>`;

describe("Button", () => {
  // it("Should render the correct children", () => {
  //   const { getByTestId } = render(
  //     <Button testId="test-0">{textElement}</Button>
  //   );
  //   const test = getByTestId("test-0");
  //   expect(test).toContainHTML(textString);
  // });
});
