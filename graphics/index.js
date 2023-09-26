nodecg.Replicant("speakerNameReplicant", { defaultValue: "Matti Meikalainen" });
nodecg.Replicant("speakerTitleReplicant", { defaultValue: "Web Developer" });
nodecg.Replicant("showGraphicReplicant", { defaultValue: true });

const speakerNameRep = nodecg.Replicant("speakerNameReplicant");
const speakerTitleRep = nodecg.Replicant("speakerTitleReplicant");
const showGraphicRep = nodecg.Replicant("showGraphicReplicant");

const nameElement = document.getElementById("name");
const titleElement = document.getElementById("title");
const slashElement = document.getElementById("slash");

const triggerAnimation = () => {
  nameElement.classList.remove("name-animation-show");
  titleElement.classList.remove("title-animation-show");
  slashElement.classList.remove("slash-animation-show");

  nameElement.offsetWidth;
  titleElement.offsetWidth;
  slashElement.offsetWidth;

  nameElement.classList.add("name-animation-show");
  titleElement.classList.add("title-animation-show");
  slashElement.classList.add("slash-animation-show");
};

const animateIn = () => {
  nameElement.classList.remove("name-animation-hide");
  titleElement.classList.remove("title-animation-hide");
  slashElement.classList.remove("slash-animation-hide");

  nameElement.offsetWidth;
  titleElement.offsetWidth;
  slashElement.offsetWidth;

  nameElement.classList.add("name-animation-show");
  titleElement.classList.add("title-animation-show");
  slashElement.classList.add("slash-animation-show");
}

const animateOut = () => {
  nameElement.classList.remove("name-animation-show");
  titleElement.classList.remove("title-animation-show");
  slashElement.classList.remove("slash-animation-show");

  nameElement.offsetWidth;
  titleElement.offsetWidth;
  slashElement.offsetWidth;

  nameElement.classList.add("name-animation-hide");
  titleElement.classList.add("title-animation-hide");
  slashElement.classList.add("slash-animation-hide");
}

speakerNameRep.on("change", (newValue) => {
  nameElement.textContent = newValue;
  triggerAnimation();
});

speakerTitleRep.on("change", (newValue) => {
  titleElement.textContent = newValue;
  triggerAnimation();
});

showGraphicRep.on("change", (newValue) => {
  if (newValue) {
    animateIn();
  } else {
    animateOut();
  }
});