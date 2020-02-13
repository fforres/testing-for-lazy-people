import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

export default {
  title: "Button",
  component: Button
};

export const WithText: React.FC = () => (
  <Button onClick={action("clicked")} onHover={action("hovered")}>
    Hello Button
  </Button>
);

export const WithEmoji: React.FC = () => (
  <Button onClick={action("clicked")} onHover={action("hovered")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
