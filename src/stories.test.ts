import initStoryshots from "@storybook/addon-storyshots";
import { cleanup, render } from "@testing-library/react";
import { createSerializer } from "jest-emotion";

initStoryshots({
  asyncJest: true,
  snapshotSerializers: [createSerializer()],
  test: ({ story, context, done }) => {
    // eslint-disable-next-line no-console
    console.log(`Rendering story: ${context.kind} - ${story.name}`);
    render(story.render());
    setTimeout(() => {
      done();
      // cleanup Emotion global styles injection to prevent slowdown
      cleanup();
    }, 0);
  }
});
