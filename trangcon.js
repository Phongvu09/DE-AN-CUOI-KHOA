const trang = localStorage.getItem("API");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ed23e17862msh695cac1642ce76ep1aa4fdjsn16b7c59ea9ce",
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

const trangban = document.getElementById("trangban");

fetch(`https://gamerpower.p.rapidapi.com/api/giveaway?id=${trang}`, options)
  .then((response) => response.json())
  .then((data) => {
    let card = document.createElement("div");
    let anh = document.createElement("img");
    let title = document.createElement("h5");
    let description = document.createElement("h7");
    let gia = document.createElement("h6");

    card.classList.add("trang");
    anh.classList.add("img");

    anh.setAttribute("src", data.thumbnail);
    description.innerText = data.description;
    title.innerText = data.title;
    gia.innerText = data.worth;

    card.appendChild(anh);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(gia);
    trangban.appendChild(card);
  });
