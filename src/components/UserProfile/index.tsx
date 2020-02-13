import React, { useState } from "react";
import { StyledContainer, Image } from "./elements";
import Button from "../Button";
import Text from "../Text";
import { TextType } from "../Text/types";
import { UserProfilePropsType } from "./types";

const UserProfile: React.FC<UserProfilePropsType> = ({ user }) => {
  const [texType, setTexType] = useState(TextType.SHORT);
  const buttonText = texType === TextType.SHORT ? "longer" : "shorter";
  return (
    <StyledContainer>
      <h1>Hi! I'm {user.name}!</h1>
      <Image src={user.img} alt={`${user.name}`} />
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
        {`See my ${buttonText} BIO`}
      </Button>
    </StyledContainer>
  );
};

export default UserProfile;
