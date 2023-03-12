import { format, differenceInDays } from "date-fns";
const { ru } = require("date-fns/locale");

const toursID = document.getElementById("tours");




let hamb = document.getElementById("icon-menu");
let close = document.getElementById("icon-close");

hamb.addEventListener("click", function () {
  document.getElementById('header').classList.toggle('hidden');
});  

close.addEventListener("click", function () {
  document.getElementById('header').classList.toggle('hidden');
});  

function openMenu () {

  hamb.classList.toggle('hidden')
  close.classList.toggle('hidden')

}

hamb.addEventListener('click', openMenu)
close.addEventListener('click', openMenu)





async function loadTours() {
  const respons = await fetch(
    "https://www.bit-by-bit.ru/api/student-projects/tours"
  );
  const data = await respons.json();

  return data;
}


function renderTours(tours) {
  toursID.innerHTML = "";
  tours.forEach((tour) => {
    let night = differenceInDays(
      new Date(tour.endTime),
      new Date(tour.startTime)
    );
    toursID.innerHTML += `
    <div class="bg-white rounded-lg overflow-hidden border border-solid border-gray-300 p-3 drop-shadow">
      <img class="h-96 w-full object-cover" src="${tour.image}">
      <div class="px-1">
      <div id="stars" class="py-2"> Рейтинг отеля: ${tour.rating}</div>
      <div class="gap-4 flex flex-col">
        <h3 class="font-bold h-8">${tour.hotelName}</h3>
        <p class="pt-1">${tour.country}, ${tour.city}</p>
      </div>
      <div>
      <p class="py-4 px-1 text-gray-400">${format(
        new Date(tour.startTime),
        "dd MMMM",
        { locale: ru }
      )} - ${format(new Date(tour.endTime), "dd MMMM", {
      locale: ru,
    })}</br>на ${night} ночей </p> 
      </div>
      <div class="flex justify-between items-center">
        <button class="sm:text-lg text-base border border-solid border-gray-300 rounded-lg py-1 px-3 bg-[#22b499] text-white hover:bg-[#1b8a75]">Подробнее</button>
        <div class="flex justify-end">
          <p class="px-2 sm:text-2xl text-xl">${
            tour.price
          }<span class="text-base"> руб</span></p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-7 h-7 hover:fill-[#f30c4b]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
      </div>
      </div>
    </div>
    `;
  });
}

const countries = document.getElementById('select')

function filtredCountry(tours, country) {
  if (country) {
  const filtredTours = tours.filter((tour) => {
    return tour.country === countries.value
  })
  renderTours(filtredTours)
} else {
  renderTours(tours)
}
}

function sortLowPrice (tours) {
  tours.sort(function (min, max) {
    return parseFloat(max.price) - parseFloat(min.price)
  })

renderTours(tours)
}

function sortHeightPrice (tours) {
  tours.sort(function (min, max) {
    return parseFloat(min.price) - parseFloat(max.price)
  })

renderTours(tours)
}

async function init() {
  const tours = await loadTours();
  renderTours(tours);

  document.getElementById('find').addEventListener('click', () => filtredCountry(tours, countries.value))
  document.getElementById('hight-price').addEventListener('change', () => sortLowPrice(tours, "По убыванию"))
  document.getElementById('low-price').addEventListener('change', () => sortHeightPrice(tours, "По возрастанию"))
}



init();
