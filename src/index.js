const mongoose = require("mongoose");
const bootstrapApp = require("./app");
const http = require("http").createServer(bootstrapApp());

// Start the server using stdlib http server
(async () => {
  mongoose.connect(process.env.MONGO_URI);

  http.listen(process.env.PORT, (req, res) => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
})();
