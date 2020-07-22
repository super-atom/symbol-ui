const {
  override,
  useBabelRc,
  useEslintRc,
  addWebpackAlias,
  addBabelPreset,
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
  }),
  addBabelPreset('@emotion/babel-preset-css-prop'),
);
