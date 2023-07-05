var isNext = true;
var imgSlider = simpleslider.getSlider({
  container: document.getElementById("myslider"),
  prop: "left",
  init: -100,
  show: 0,
  end: 100,
  unit: "%",
});

document.getElementById("prev-button").onclick = function (e) {
  if (isNext) {
    imgSlider.reverse();
    isNext = false;
  }
  imgSlider.next();
  e.preventDefault();
};

document.getElementById("next-button").onclick = function (e) {
  if (!isNext) {
    imgSlider.reverse();
    isNext = true;
  }
  imgSlider.next();
  e.preventDefault();
};
