module.exports = {
  components: 'src/app/modules/**/**/[A-Z]*.js',
  styleguideDir: './docs/styleguidist',
  moduleAliases: {
    'rsg-example': 'src',
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
  },
};
