import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: " hello world" });
});

app.listen(3000, () => console.log("Server is running"));
