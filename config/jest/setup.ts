// polyfill for our use of require.context for loading stories dynamically
// since it's a webpack feature that doesn't exist under jest
// https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
import registerRequireContextHook from "babel-plugin-require-context-hook/register";

import "@testing-library/jest-dom/extend-expect";

registerRequireContextHook();

(global as any).window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error("requestAnimationFrame is not supported in Node");
};
