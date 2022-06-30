toggleMenu = () => {
  let menu = document.getElementById("menu");
  menu.classList.toggle("active");
};

removeMenu = () => {
  let menu = document.getElementById("menu");
  menu.classList.remove("active");
};
var box1Rotation = false;
var box2Rotation = false;

expandFeatureOptions = () => {
  let box = document.getElementById("optionsBox1");
  box.classList.toggle("active");

  let arrow = document.getElementById("expandArrow1");
  box1Rotation = !box1Rotation;
  arrowAnimation1(box1Rotation);
  return box1Rotation;
};
expandCompanyOptions = () => {
  let box = document.getElementById("optionsBox2");
  box.classList.toggle("active");

  let arrow = document.getElementById("expandArrow2");
  box2Rotation = !box2Rotation;
  arrowAnimation2(box2Rotation);
  return box2Rotation;
};

arrowAnimation1 = (box1Rotation) => {
  let arrow = document.getElementById("expandArrow1");
  box1Rotation == true ? (arrow.style.transform = "rotateZ(180deg)") : null;
  box1Rotation == false ? (arrow.style.transform = "rotateZ(0deg)") : null;
};

arrowAnimation2 = (box2Rotation) => {
  let arrow = document.getElementById("expandArrow2");
  box2Rotation == true ? (arrow.style.transform = "rotateZ(180deg)") : null;
  box2Rotation == false ? (arrow.style.transform = "rotateZ(0deg)") : null;
};
