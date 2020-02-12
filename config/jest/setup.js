// polyfill for our use of require.context for loading stories dynamically
// since it's a webpack feature that doesn't exist under jest
// https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
const registerRequireContextHook = require("babel-plugin-require-context-hook/register");
registerRequireContextHook();

global.window = global;
window.addEventListener = () => {};
window.requestAnimationFrame = () => {
  throw new Error("requestAnimationFrame is not supported in Node");
};
