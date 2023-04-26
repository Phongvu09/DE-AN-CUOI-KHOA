const trang = localStorage.getItem("API");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ed23e17862msh695cac1642ce76ep1aa4fdjsn16b7c59ea9ce",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

fetch(`https://gamerpower.p.rapidapi.com/api/giveaway?id=${trang}`, options)
  .then((response) => response.json())
  .then((data) => {
    let card = document.createElement("div");
    let anh = document.createElement("img");
    let title = document.createElement("h5");
    let trangban = document.getElementById("trangban");
    card.classList.add("trang");
    anh.classList.add("img");

    anh.setAttribute("src", data.thumbnail);
    title.innerText = data.title;

    card.appendChild(anh);
    card.appendChild(title);
    trangban.appendChild(card);
  });
