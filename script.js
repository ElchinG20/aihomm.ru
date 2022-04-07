console.clear();

let colors = [ "#222", "#373d54", "#fafafb"],
  buttons = Array.from(document.querySelectorAll("button")),
  body = document.body;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    color = colors.shift();
    colors.push(color);
    let textColor = getCorrectTextColor(color);
    let highlightColor;
    if (textColor == "#5161ce") {
      highlightColor = "#fff";
    } else {
      highlightColor = "#fff";
    }
    document.documentElement.style.setProperty("--bg", color);
    document.documentElement.style.setProperty("--base", textColor);
    document.documentElement.style.setProperty("--highlight", highlightColor);
  });
});

function getCorrectTextColor(hex) {
  threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

  hRed = hexToR(hex);
  hGreen = hexToG(hex);
  hBlue = hexToB(hex);

  function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16);
  }
  function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16);
  }
  function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16);
  }
  function cutHex(h) {
    return h.charAt(0) == "#" ? h.substring(1, 7) : h;
  }

  cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return "#5161ce";
  } else {
    return "#fafafb";
  }
}