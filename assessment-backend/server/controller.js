const visions = require("./db.json");

let globalID = visions[visions.length - 1].id;

module.exports = {
  getVisions: (req, res) => res.status(200).send(visions),
  deleteVision: (req, res) => {
    console.log("delete!");
    let index = visions.findIndex((elem) => elem.id === +req.params.id);
    visions.splice(index, 1);
    res.status(200).send(visions);
  },
  createVision: (req, res) => {
    let { goal, progress, imageURL } = req.body;
    let createVision = {
      id: globalID,
      goal,
      progress,
      imageURL,
    };
    visions.push(createVision);
    res.status(200).send(visions);
    globalID++;
  },
  updateVision: (req, res) => {
    let { goal, progress } = req.body;
    let index = visions.findIndex((elem) => +elem.id === +id);

    if (visions[index]) res.status(200).send(visions);
  },
};
