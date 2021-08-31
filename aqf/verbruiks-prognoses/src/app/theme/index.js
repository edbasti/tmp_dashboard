const color = {
  primary: '#98ca3d',
  primaryHover: '#b2d663',
  primaryDark: '#13633A',
  primaryDarkLowOpacity: 'rgba(19, 99, 58, 0.27)',
  primaryLight: '#eff9e9',
  primaryDarkHover: '#277048',
  primaryTextColor: '#ffffff',

  success: '#52c41a',
  warning: '#ff9900',
  error: '#f5222d',

  text: '#333333',
  textInvert: '#fff',
  textLight: '#797979',

  accentBlue: '#2493c1',
  accentBlueLight: '#eef3f8',
  accentGrey: '#f6f6f7',

  border: '#e8e8e8',
  borderPrimary: '#BAD67D',
  borderSecondary: 'rgba(152,202,61,0.20)',
  borderPrimaryDark: '#2D6F50',

  defaultPolygonColor: '#0000ff',
  selectedPolygonColor: '#FF0000',

  darkGrey: '#5b5b5b',
  disabledGrey: '#d9d9d9',
  disabledGreyBg: '#f5f5f5',
  disabledText: '#9e9e9e',
  lightGrey: '#e8e8e8',
  background: '#ECF2F6',
  tableRowAlternating: '#F6F8FA',
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  googleMapRouteColor: '#4cb1f7',
  googleMapRouteUnprocessedColor: '#b64bf4',

  backgroundGradientColor: 'rgba(152, 202, 61, 0.15)',
};

const fontSize = {
  small: '11px',
  base: '14px',
  large: '17px',
  h4: '20px',
  h3: '23px',
  h2: '26px',
  h1: '30px',
};

const iconSize = {
  small: '12px',
  base: '16px',
  large: '18px',
  xlarge: '22px',
  xxlarge: '40px',
};

const fontFamily = `
Roboto,
"PingFang SC",
"Hiragino Sans GB",
"Microsoft YaHei",
"Helvetica Neue",
Helvetica, Arial,
sans-serif
`;

// use commonjs module since this is being used in webpack
module.exports = {
  color,
  fontSize,
  fontFamily,
  iconSize,
};
