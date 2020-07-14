module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-typescript'],
    ['transform-node-env-inline'],
    ['transform-inline-environment-variables'],
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ],
};
