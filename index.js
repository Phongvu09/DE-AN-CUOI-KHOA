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
    for (item in data) {
      console.log(data[item]);

      let card = document.createElement("div");
      let anh = document.createElement("img");
      let title = document.createElement("h5");
      let trangban = document.getElementById("trangban");
      card.setAttribute("href", "trangcon.html");
      card.classList.add("trang");
      anh.classList.add("img");

      anh.setAttribute("src", data[item].thumbnail);
      title.innerText = data[item].title;

      card.appendChild(anh);
      card.appendChild(title);
      trangban.appendChild(card);
      card.addEventListener("click", () => {
        localStorage.setItem("API", data[item].id);
        window.location.href = "trangcon.html";
      });
    }
  });
