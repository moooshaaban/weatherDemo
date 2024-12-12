module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'], // Base directory for resolving modules.
        alias: {
          '@src': './src', // Alias '@src' to the './src' directory.
          '@core': './src/core',
          '@features': './src/features',
        },
      },
    ],
    'jest-hoist',
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
