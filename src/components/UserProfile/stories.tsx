import React from "react";

import { UserProfileProps } from "./mocks";
import UserProfile from ".";

export default {
  title: "UserProfile",
  component: UserProfile
};

export const DefaultUserProfile: React.FC = () => (
  <UserProfile {...UserProfileProps} />
);
