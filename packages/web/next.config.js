const path = require("path");
const withTM = require("next-transpile-modules")(["react-native"]);

module.exports = {
  ...withTM({
    webpack: (config, { defaultLoaders }) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native": path.join(
          __dirname,
          "node_modules",
          "react-native-web"
        ),
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];

      config.resolve.modules = [
        ...config.resolve.modules,
        path.resolve(__dirname, "node_modules"),
      ];

      config.module.rules.push({
        test: /\.+(js|jsx|ts|tsx)$/,
        use: defaultLoaders.babel,
        include: [path.resolve(__dirname, "..", "shared")],
      });

      return config;
    },
  }),
};
