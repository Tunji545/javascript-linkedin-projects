const IMAGES = document.querySelectorAll("img");
const SIZES = {
  showcase: "100vw",
  reason: "(max-width: 799px) 100vw, 372px",
  feature: "(max-width: 799px) 100vw, 558px",
  story: "(max-width: 799px) 100vw, 670px"
}

function makeSrcset(imgSrc) {
  let makeUp = [];
  let width = 400;

  for (var i = 0; i < 5; i++) {
    makeUp[i] = imgSrc + "-" + width + ".jpg " + width + "w";
    width += 400;
  }
  return makeUp.join();
}

for (var i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  imgSrc = imgSrc.slice(0, -8);
  let srcset = makeSrcset(imgSrc);
  IMAGES[i].setAttribute("srcset", srcset);

  let types = IMAGES[i].getAttribute("data-type");
  let sizes = SIZES[types];
  IMAGES[i].setAttribute("sizes", sizes);
}