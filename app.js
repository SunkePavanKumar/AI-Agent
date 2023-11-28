import express from "express";
import "dotenv/config";
const app = new express();

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is listening to the port ${port}.`);
});

try {
  app.get("/", (req, res) => {
    res.send("Welcome");
  });
} catch (error) {
  console.log("Error in app.js and Error : " + error);
}
