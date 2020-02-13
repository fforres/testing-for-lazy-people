module.exports = {
  stories: ["../src/**/*.stories.tsx", "../src/**/stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ],
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true
                }
              }
            ],
            exclude: [/node_modules/, /\.stories\.tsx$/]
          },
          {
            test: /\.stories\.tsx?$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true
                }
              }
            ],
            enforce: "pre",
            exclude: [/node_modules/]
          }
        ]
      },
      resolve: {
        ...(config.resolve || {}),
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".mjs"]
      }
    };
  }
};
