if (localStorage.getItem("dark-mode")) {
  document.body.setAttribute("class", "day-mode");
}
if (!isNaN(parseInt(window.localStorage.getItem("color")?.valueOf()))) {
  window.document.documentElement.style.setProperty(
    "--color-hue",
    parseInt(window.localStorage.getItem("color")?.valueOf()).toString()
  );
}
