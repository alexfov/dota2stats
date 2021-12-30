module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          _app: './src',
          _assets: './assets',
        },
      },
    ],
  ],
};
