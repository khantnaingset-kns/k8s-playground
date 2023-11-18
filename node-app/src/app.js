const express = require("express");
const randomAnimalName = require("random-animal-name");

/**
 * @description Bootstrap the application
 * @returns {express} app
 */
function bootstrapApp() {
  const app = express();
  app.get("/health", (req, res) => {
    const connectionState = mongoose.connection.readyState;
    if (connectionState !== 0) {
      return res.json({ message: "Healthy" }).status(200);
    }
    return res.json({ message: "Server is not healthy!!!" }).status(503);
  });

  app.get("/", (req, res) => {
    res.json({ name: randomAnimalName() });
  });

  return app;
}

module.exports = bootstrapApp;
