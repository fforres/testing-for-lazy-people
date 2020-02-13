import React from "react";
import { action } from "@storybook/addon-actions";
import Text, { TextType } from "./index";

export default {
  title: "Text",
  component: Text
};

const longText = `Dolor et laboriosam magnam non. Voluptas aut mollitia ducimus aliquid autem
ullam aut. Omnis quia ea dolores architecto cum aspernatur. Ut sit quod
neque quia inventore aut et odio. Dolores velit eum repudiandae reiciendis
assumenda excepturi dolores dicta. Fuga eligendi dolores commodi similique
doloribus possimus molestiae.`;

const shortText = "Quis sit qui nihil totam repudiandae harum est qui rerum.";

export const SmallText: React.FC = () => (
  <Text textType={TextType.LONG} text={shortText} longText={longText} />
);
