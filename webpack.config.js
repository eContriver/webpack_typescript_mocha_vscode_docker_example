const path = require('path');
const glob = require("glob");

module.exports = {
  entry: glob.sync(__dirname + "/test/*.test.ts"),
  devtool: "source-map", 
  mode: 'development',
  target: 'web',
  output: {
    path: __dirname + "/dist/",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ]
  },
};
