import { format, differenceInDays } from 'date-fns'
const { ru } = require("date-fns/locale");


const toursID = document.getElementById("tours");

async function loadTours() {
  
  const respons = await fetch('https://www.bit-by-bit.ru/api/student-projects/tours')
  const data = await respons.json()
 
 return data
 
}

function renderTours(tours) {
  toursID.innerHTML = ""
  tours.forEach(tour => {
  let night = differenceInDays(new Date(tour.endTime), new Date(tour.startTime))  
  toursID.innerHTML += 
  `
    <div class="bg-white rounded-lg overflow-hidden border border-solid border-gray-300 p-3 drop-shadow">
      <img class="h-96 w-full object-cover" src="${tour.image}">
      <div id="stars" class="py-2">${tour.rating}</div>
      <div>
        <h3 class="pb-1 px-1 font-bold h-8">${tour.hotelName}</h3>
        <p class="px-1">${tour.country}, ${tour.city}</p>
      </div>
      <div>
      <p class="py-4 px-1 text-gray-400">${format(new Date(tour.startTime), 'dd MMMM', {locale: ru})} - ${format(new Date(tour.endTime), 'dd MMMM', {locale: ru})}</br>на ${night} ночей </p> 
      </div>
      <div class="flex justify-between items-center">
        <button class="text-lg border border-solid border-gray-300 rounded-lg py-1 px-3 bg-[#22b499] text-white">Подробнее</button>
        <div class="flex justify-end">
          <p class="px-2 text-2xl">${tour.price}<span class="text-base"> руб</span></p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-7 h-7 hover:fill-[#f30c4b]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
      </div>
    </div>
    `
  });
}


async function init() {
  const tours = await loadTours()
  renderTours(tours)
}

init()

