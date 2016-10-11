 module.exports = {
    // where we start bundling our code
    entry: './js/index.js',
    // where it gets output to (what our script tag will link to)
    output: {
        // where does it go?
        path: './',
        // what is the file called?
        filename: 'bundle.js'
    },
    module: {
    loaders: [{
      // what loader are we using
      loader: 'babel',
      // what files should we look for
      test: /\.js$/,
      // what files should we exclude
      exclude: /node_modules/
      }
    ]
  },
  devtool: "inline-source-map"
}
