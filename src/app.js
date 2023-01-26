let count = 0

let tours = [
  {
    id: count++,
    hotel: "KALIMA RESORT & VILLAS KHAO LAK",
    location: "Таиланд, Као Лак",
    image: "/images/hotel-1.jpg",
    text: "18 янв, 7 ночей",
    stars: 4,
    price: "76 288",
  },
  {
    id: count++,
    hotel: "GREEN SHADOWS BEACH",
    location: "Калутара, Шри-Ланка",
    image: "/images/hotel-2.jpg",
    text: "22 янв, 9 ночей",
    stars: 3,
    price: "159 533",
  },
  {
    id: count++,
    hotel: "KAANI GRAND SEAVIEW",
    location: "Мальдивы, Мальдивы",
    image: "/images/hotel-3.jpg",
    text: "23 янв, 6 ночей",
    stars: 4,
    price: "182 111",
  },
  {
    id: count++,
    hotel: "NOVOTEL PHU QUOC RESORT",
    location: "Фукуок, Вьетнам",
    image: "/images/hotel-4.jpg",
    text: "19 фев, 10 ночей",
    stars: 5,
    price: "255 482",
  },
  {
    id: count++,
    hotel: "IBEROSTAR LAGUNA AZUL",
    location: "Куба, Варадеро",
    image: "/images/hotel-5.jpg",
    text: "17 мая, 7 ночей",
    stars: 5,
    price: "230 006",
  },
  {
    id: count++,
    hotel: "LE PACHA RESORT",
    location: "Египет, Хургада",
    image: "/images/hotel-6.jpg",
    text: "25 янв, 7 ночей",
    stars: 4,
    price: "64 573",
  },
  {
    id: count++,
    hotel: "SPLASH BEACH RESORT PHUKET",
    location: "Таиланд, Пхукет, Марке",
    image: "/images/hotel-7.jpg",
    text: "21 янв, 7 ночей",
    stars: 5,
    price: "121 391",
  },
];

const toursID = document.getElementById("tours");

const starsID = document.getElementById('stars')


// function renderStars(id) {

 
//   const tur = tours.find((t) => {
//     return t.id === id
//   })
//     let t = 1
//     let svg_star = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6 fill-yellow-500">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
//     </svg>
//     `
//     tours.forEach((tour) => {
//       while (t<=tour.stars) {
//         svg_star ++
//       t++;
//     }
//     })
//     return svg_star

// }

function renderTours() {
  toursID.innerHTML = ""
  tours.forEach(tour => {
  toursID.innerHTML += `
    <div class="bg-white rounded-lg overflow-hidden border border-solid border-gray-300 p-3 drop-shadow">
      <img class="h-96 w-full object-cover" src="${tour.image}">
      <div id="stars" class="py-2">${tour.stars} звезды</div>
      <div>
        <h3 class="pb-1 px-1 font-bold">${tour.hotel}</h3>
        <p class="px-1">${tour.location}</p>
      </div>
      <div>
      <p class="py-4 px-1 text-gray-400">${tour.text}</br>из Москвы </p> 
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


renderTours()
// renderStars()
