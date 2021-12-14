if (localStorage.getItem("dark-mode")) {
  document.body.classList.add("day-mode");
}

if (localStorage.getItem("curved-borders")) {
  document.body.classList.add("curved-borders");
}

if (!isNaN(parseInt(window.localStorage.getItem("color")?.valueOf()))) {
  window.document.documentElement.style.setProperty(
    "--color-hue",
    parseInt(window.localStorage.getItem("color")?.valueOf()).toString()
  );
}
