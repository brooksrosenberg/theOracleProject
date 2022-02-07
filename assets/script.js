//variables
var randomFact = document.getElementById("random-fact");
var daysOptions = document.getElementById("days-options");
var starsOptions = document.getElementById("stars-options");
var searchButton = document.getElementById("search-button");
var faveColor = document.getElementById("favColor");
var favCompat = document.getElementById("favSign");
var favfacts = document.getElementById("favfacts");
var luckyNumber = document.getElementById("favluckyNumber");
var favmood = document.getElementById("favmood");
var signRange = document.getElementById("signRange");
var favluckyTime = document.getElementById("favluckyTime");

//API variables
var horoscopeHeaders = {
  method: "POST",
  headers: {
    "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    "x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173",
  },
};
var randomFactHeaders = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "random-facts2.p.rapidapi.com",
    "x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173",
  },
};


function randomFactApi() {
  return "https://random-facts2.p.rapidapi.com/getfact";
}



function horoscopeApi(star, day) {
  return `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${star}&day=${day}`;
}

// fetching first API
function fetchRandomFact() {


  fetch(randomFactApi(), randomFactHeaders)
    .then((res) => res.json())
    .then((data) => {
      randomFact.textContent = data.Fact
    })
    .catch((err) => console.error(err));
}

// fetching second API
function fetchHoroscope(e) {
  e.preventDefault();
  fetchRandomFact();
  var star = starsOptions.value;
  var day = daysOptions.value;
  var displaycolor = faveColor.value;
  //declaring data
  fetch(horoscopeApi(star, day), horoscopeHeaders)
    .then((res) => res.json())
    .then((data) => {
      var {
        color,
        compatibility,
        date_range,
        description,
        lucky_number,
        lucky_time,
        mood,
      } = data;
      faveColor.textContent = color;
      favCompat.textContent = compatibility;
      favfacts.textContent = description;
      luckyNumber.textContent = lucky_number;
      favmood.textContent = mood;
      signRange.textContent = date_range;
      favluckyTime.textContent = lucky_time;
    })
    .catch((err) => console.error(err));

  // local storage

  localStorage.setItem("date", JSON.stringify(day));
  console.log(localStorage);
  localStorage.setItem("sign", JSON.stringify(star));
  console.log(localStorage);
}
//search elements
searchButton.addEventListener("click", fetchHoroscope);