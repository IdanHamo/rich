const cardContainer = document.getElementsByClassName("container")[0];

let people = [
  {
    flag: 0,
    name: "Bill Gates",
    worth: "$90B",
    birth_year: "1955",
    source: "microsoft",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813",
  },
  {
    flag: 0,
    name: "Warren Buffett",
    worth: "$84B",
    birth_year: "1931",
    source: "Berkshire Hathaway",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806",
  },
  {
    flag: 0,
    name: "Mark Zuckerberg",
    worth: "$71B",
    birth_year: "1984",
    source: "Facebook",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044",
  },
  {
    flag: 0,
    name: "Larry Ellison",
    worth: "$57B",
    birth_year: "1945",
    source: "Sun, Oracle",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228",
  },
  {
    flag: 0,
    name: "Michael Bloomberg",
    worth: "$50B",
    birth_year: "1942",
    source: "Bloomberg",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784",
  },
];

const mapped = people.map((person) => render(person));

const cards = Array.from(document.getElementsByClassName("card"));
console.log(cards);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("hi");
    cardContainer.innerHTML = "";
    console.log(card);

    const found = people.find(
      (person) => person.name == card.children[1].children[0].innerText
    );
    console.log(found);

    found.flag = 1;
    const filtered = people.filter((person) => person.flag == 0);
    const filteredMap = filtered.map((person) => render(person));
  });
});

function render(obj) {
  cardContainer.innerHTML += `<div class="card" style="width: 18rem">
    <img src="${obj.image}" class="card-img-top" alt="image of ${obj.name}" />
    <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">worth - ${obj.worth}</li>
          <li class="list-group-item">worth source = ${obj.source}</li>`;
}
