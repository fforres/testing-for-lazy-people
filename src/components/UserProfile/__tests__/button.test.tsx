import * as React from "react";
import UserProfile from "..";
import { render, fireEvent, screen } from "@testing-library/react";
import { UserProfileProps } from "../mocks";

describe("UserProfile", () => {
  // it("Should render short text by default", () => {
  //   const { queryByTestId } = render(<UserProfile {...UserProfileProps} />);
  //   expect(queryByTestId("bio")).toHaveTextContent(
  //     UserProfileProps.user.bio.short
  //   );
  // });
  // it("Should switch text", () => {
  //   const { queryByText, queryByTestId } = render(
  //     <UserProfile {...UserProfileProps} />
  //   );
  //   const Button = queryByTestId("bio-button-change");
  //   if (Button) fireEvent.click(Button);
  //   expect(queryByText(UserProfileProps.user.bio.short)).toBeNull();
  // });
});
