const config = {
    entry: {
        public: "./public/db.js", 
        index: "./public/index.js"
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.js"
    },
    mode: "development"
  };
  
  module.exports = config;
  