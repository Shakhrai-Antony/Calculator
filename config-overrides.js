const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@pages': 'src/pages',
        '@store': 'src/store',
        '@componentsStyles': 'src/components/fcComponents',
        '@pagesStyles': 'src/pages/fcPages'
    })(config);
    return config;
}