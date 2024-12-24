import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "What do you call a very small valentine? A valen-tiny!",
    },
    {
      id: 2,
      joke: "What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!",
    },
    {
      id: 3,
      joke: "Why don't sharks like to eat clowns? Because they taste funny!",
    },
    {
      id: 4,
      joke: "What did the fish say when it hit the wall? Dam!",
    },
    {
      id: 5,
      joke: "How do you organize a space party? You planet!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
