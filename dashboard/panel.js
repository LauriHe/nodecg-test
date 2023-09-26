const speakerNameRep = nodecg.Replicant("speakerNameReplicant");
const speakerTitleRep = nodecg.Replicant("speakerTitleReplicant");
const showGraphicRep = nodecg.Replicant("showGraphicReplicant");

const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");

const showHideButton = document.getElementById("showHide");
let showGraphic = showGraphicRep.value;

showHideButton.textContent = showGraphic ? "Shown" : "Hidden";

speakerNameRep.on("change", (newValue) => {
 nameInput.value = newValue;
});

speakerTitleRep.on("change", (newValue) => {
  titleInput.value = newValue;
});

showHideButton.addEventListener("click", () => {
  if (showGraphic) {
    showHideButton.textContent = "Hidden";
    showGraphic = false;
  } else {
    showHideButton.textContent = "Shown";
    showGraphic = true;
  }
});

const speakerForm = document.getElementById("speakerForm");

speakerForm.addEventListener("submit", (e) => {
  e.preventDefault;
  speakerNameRep.value = nameInput.value;
  speakerTitleRep.value = titleInput.value;
  showGraphicRep.value = showGraphic;
});