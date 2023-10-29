module.exports = {
    // Other Webpack configuration options...
  
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
  
    // Other Webpack configuration options...
  };
  