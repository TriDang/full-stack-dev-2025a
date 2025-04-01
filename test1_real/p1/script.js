let className = "yellow"; // control the background color style

function getCatFact() {
  const URL = "https://catfact.ninja/fact";
  const NAME = "Tri Dang";

  // time when fetch() is called
  const now = Date.now();
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // time lapse in seconds
      const timeLapse = (Date.now() - now) / 1000;
      const fact = data.fact;
      const content = `${NAME}: ${fact} <br>Time Lapse: ${timeLapse} seconds`;
      const element = document.getElementById("result");
      // update content
      element.innerHTML = content;
      // update CSS class
      if (className === "yellow") {
        element.classList.add("yellow");
        element.classList.remove("green");
        className = "green";
      } else {
        element.classList.add("green");
        element.classList.remove("yellow");
        className = "yellow";
      }
    });
}
