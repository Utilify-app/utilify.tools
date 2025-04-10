const postcss = require('rollup-plugin-postcss');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins = config.plugins.filter(plugin => plugin.name !== 'replace');

    config.plugins.push(
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(options.env || 'development'),
      })
    );

    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );

    return config;
  },
};
