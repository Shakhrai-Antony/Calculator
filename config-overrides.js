const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@store': 'src/store',
    '@commands': 'src/utils',
    '@styles': 'src/styles',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
  })(config);
  return config;
};
