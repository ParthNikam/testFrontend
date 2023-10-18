export const entry = './src/index.js';
export const module = {
  rules: [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    }
  ],
};