const params = new URLSearchParams(window.location.search);
const title = params.get("title");

const movies = JSON.parse(localStorage.getItem("moviesData"));

const movie = movies.find(m => m.title === title);

document.getElementById("title").textContent = movie.title;
document.getElementById("poster").src = "images/posters/" + movie.img;
document.getElementById("description").textContent = movie.description;
document.getElementById("lang").textContent = movie.lang;
document.getElementById("year").textContent = movie.year;

const dateSelect = document.getElementById("dateSelect");
const timesDiv = document.getElementById("times");

Object.keys(movie.dates).forEach(date => {

const option = document.createElement("option");
option.value = date;
option.textContent = date;

dateSelect.appendChild(option);

});

function showTimes(date){

timesDiv.innerHTML = "";

movie.dates[date].forEach(time => {

const btn = document.createElement("button");

btn.textContent = time;

btn.onclick = () => {

document.querySelectorAll(".times button")
.forEach(b => b.style.background="#6a5acd");

btn.style.background="#ff7a18";

};

timesDiv.appendChild(btn);

});

}

dateSelect.addEventListener("change", () => {

showTimes(dateSelect.value);

});

showTimes(Object.keys(movie.dates)[0]);

const seatsContainer = document.getElementById("seats");

for(let i=1;i<=40;i++){

const seat=document.createElement("div");

seat.className="seat";

seat.dataset.number=i;

if(Math.random()<0.2){
seat.classList.add("taken");
}

seat.onclick=()=>{
if(seat.classList.contains("taken")) return;
seat.classList.toggle("selected");
};

seatsContainer.appendChild(seat);

}

function confirmBooking(){

const selectedSeats = document.querySelectorAll(".seat.selected");

if(selectedSeats.length === 0){
alert("اختر مقعد واحد على الأقل");
return;
}

const seats = [];

selectedSeats.forEach(seat=>{
seats.push(seat.dataset.number);
});

const date = document.getElementById("dateSelect").value;

const timeBtn = document.querySelector(".times button[style*='255']");

const time = timeBtn ? timeBtn.textContent : "غير محدد";

const booking = {
movie: movie.title,
seats: seats,
date: date,
time: time,
price: seats.length * 25
};

localStorage.setItem("bookingData", JSON.stringify(booking));

window.location.href="payment.html";

}