const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ed23e17862msh695cac1642ce76ep1aa4fdjsn16b7c59ea9ce",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

fetch(
  "https://gamerpower.p.rapidapi.com/api/giveaways?platform=steam&type=loot&sort-by=popularity",
  options
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let item = 0; item < data.length; item++) {
      console.log(data[item]);

      let card = document.createElement("div");
      card.setAttribute("id", data[item].id);
      let anh = document.createElement("img");
      let title = document.createElement("h5");
      let trangban = document.getElementById("trangban");
      card.classList.add("trang");
      anh.classList.add("img");

      anh.setAttribute("src", data[item].thumbnail);
      title.innerText = data[item].title;

      card.appendChild(anh);
      card.appendChild(title);
      trangban.appendChild(card);
      document.getElementById(data[item].id).addEventListener("click", () => {
        localStorage.setItem("API", data[item].id);
        window.location.href = "trangcon.html";
      });
    }
  });

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
