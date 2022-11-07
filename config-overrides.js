const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@pages": "src/pages",
    "@store": "src/store",
    "@commands": "src/commands",
    "@styles": "src/styles/styled",
  })(config);
  return config;
};
