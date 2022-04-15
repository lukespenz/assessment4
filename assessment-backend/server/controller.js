const visions = [
  {
    id: 1,
    goal: "Gain 10lbs of Muscle",
    progress: "Went to the Gym",
    imageURL:
      "https://imgs.search.brave.com/3m70zV218FuCPzV5rl1qKcig-Fpf6hoyO-H2206q-7Q/rs:fit:1200:1097:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8teFdXNUtIOWpr/V1UvWFIyc3JkeEoz/Y0kvQUFBQUFBQUFB/V3cvVnc0aDN0NmM5/NmdfVktRdGJDTE5Y/aDdjaE5QSUUxMGNR/Q0xjQkdBcy9zMTYw/MC9Bcm5vbGQuanBn",
  },
];

let globalID = 10;

module.exports = {
  getVisions: (req, res) => res.status(200).send(visions),
  deleteVision: (req, res) => {
    let index = visions.findIndex((elem) => elem.id === +req.params.id);
    visions.splice(index, 1);
    res.status(200).send(visions);
  },
  createVision: (req, res) => {
    let { goal, progress, imageURL } = req.body;
    let createVision = {
      id: globalId,
      goal,
      progress,
      imageURL,
    };
    visions.push(createVision);
    res.status(200).send(visions);
    globalId++;
  },
  updateVision: (req, res) => {
    let { id } = req.params;
    //let index = visions.findIndex((elem) => +elem.id === +id);
  },
};
