import React, { useState } from "react";
import { StyledContainer } from "./elements";
import Button from "../Button";
import Text from "../Text";
import { TextType } from "../Text/types";
import { UserProfilePropsType } from "./types";

const UserProfile: React.FC<UserProfilePropsType> = ({ user }) => {
  const [texType, setTexType] = useState(TextType.SHORT);
  return (
    <StyledContainer>
      <h1>Hi! I'm {user.name}!</h1>
      <img src={user.img} alt={`${user.name}`} />
      <h2>And this is my bio:</h2>
      <Text
        testId={"bio"}
        textType={texType}
        text={user.bio.short}
        longText={user.bio.long}
      />
      <Button
        testId={"bio-button-change"}
        onClick={() =>
          setTexType(
            texType === TextType.SHORT ? TextType.LONG : TextType.SHORT
          )
        }
      >
        See my longer BIO
      </Button>
    </StyledContainer>
  );
};

export default UserProfile;
