const webpack = require('webpack');
const config = require('@sweet-pea/build/webpack.config.js');

module.exports = {
  ...config,
  plugins: [
    ...(config.plugins ? config.plugins : []),
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
  ],
  /**
   * We declare our dependencies as external because we're a CLI
   * tool that can easily load these at runtime, there's no reason to duplicate
   * these in our NPM package.
   */
  externals: {
    "@sweet-pea/core": "@sweet-pea/core",
  }
};
