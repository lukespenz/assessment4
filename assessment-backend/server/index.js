const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {
  getVisions,
  deleteVision,
  createVision,
  updateVision,
} = require("./controller");

app.get("/api/visions", getVisions);
app.delete("/api/visions/:id", deleteVision);
app.post("/api/visions", createVision);
app.put("/api/visions/:id", updateVision);

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "spoiler: you're gonna die",
    "true love will find you in the end, so long as you're looking too",
    "lies corrode the soul so you can no longer trust your iniution which is the last thing you have to rely on during a crisis",
    "we spend time and pay attention which are the most valuable currencies in the universe",
    "don't believe what people say they value, look at their calendar and bank account to see what they truly value",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.listen(4000, () => console.log("Server running on 4000"));
