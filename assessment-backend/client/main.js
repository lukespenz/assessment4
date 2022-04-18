const visionsContainer = document.querySelector("#visions-container");
const form = document.querySelector("form");

const baseURL = "http://localhost:4000/api/visions";

const visionsCallback = ({ data: visions }) => showVisions(visions);
const errCallback = (err) => console.log(err.response.data);

const getAllVisions = () =>
  axios.get(baseURL).then(visionsCallback).catch(errCallback);
const createVision = (body) =>
  axios.post(baseURL, body).then(visionsCallback).catch(errCallback);
const deleteVision = (id) =>
  axios.delete(`${baseURL}/${id}`).then(visionsCallback).catch(errCallback);
const updateVision = (id) =>
  axios.put(`${baseURL}/${id}`).then(visionsCallback).catch(errCallback);

function submitHandler(e) {
  e.preventDefault();

  let goal = document.querySelector("#goal");
  let progress = document.querySelector("#progress");
  let imageURL = document.querySelector("#img");

  let bodyObj = {
    goal: goal.value,
    progress: progress.value,
    imageURL: imageURL.value,
  };
  createVision(bodyObj);
  goal.value = "";
  progress.value = "";
  imageURL.value = "";
}

function createVisionCard(vision) {
  const visionCard = document.createElement("div");
  visionCard.classList.add("vision-card");

  visionCard.innerHTML = `<img alt='vision cover' src=${vision.imageURL} class="vision-cover"/>
  <p class="visionGoal">${vision.goal}</p>
  <p class="visionProgress">${vision.progress}</p>
  <button onclick="deleteVision(${vision.id})">delete</button>`;

  visionsContainer.appendChild(visionCard);
}

function showVisions(arr) {
  console.log("show me my visions!");
  visionsContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createVisionCard(arr[i]);
  }
}

form.addEventListener("submit", submitHandler);

getAllVisions();
