module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from'
  ],
  "env": {
    "test": {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-export-default-from'
      ],
    }
  }
};
