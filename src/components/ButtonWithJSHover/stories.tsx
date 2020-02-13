import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

export default {
  title: "Button WithJS",
  component: Button
};

export const WithText: React.FC = () => <Button>Hello Button</Button>;

export const WithEmojisAndActions: React.FC = () => (
  <Button onClick={action("clicked")} onHover={action("hovered")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
