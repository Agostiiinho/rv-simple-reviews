// local reviews data
const reviews = [
  {
    id: 1,
    name: "Sus Amogus",
    job: "Professional Impostor Player",
    img: "vaca.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error alias totam dolorem ex molestias soluta necessitatibus, minima eveniet. Quis, tenetur nobis? Obcaecati sequi officiis saepe, esse unde dolor possimus.",
  },
  {
    id: 2,
    name: "Ricardo Milos",
    job: "Sexy Man",
    img: "milos.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Zaraki Kenpachi",
    job: "God",
    img: "kenpachi.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

//local variables
const image = document.getElementById("user-image");
const person = document.getElementById("name");
const job = document.getElementById("profession");
const review = document.getElementById("review");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];

  image.src = item.img;
  person.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.text;
});

function showPerson(pItem) {
  const item = reviews[pItem];

  image.src = item.img;
  person.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.text;
}

let nextPerson = () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
};

let previousPerson = () => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
};
