// use commonjs module since this is being used in webpack
// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('./index');

module.exports = {
  'primary-color': theme.color.primary,
  'ghost-color': 'red',
  'info-color': theme.color.primary,
  'processing-color': theme.color.primary,
  'text-color': theme.color.text,
  'body-background': theme.color.background,

  'font-family': theme.fontFamily,
  'font-size-base': theme.fontSize.base,
  'font-size-lg': theme.fontSize.large,
};
