module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: ["./node_modules"]
                }
              }
            }
          ]
        }
      ]
    }
  };