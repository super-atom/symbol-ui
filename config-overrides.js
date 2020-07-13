const {
  override,
  useBabelRc,
  useEslintRc,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
  }),
);
