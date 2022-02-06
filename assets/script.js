/// 1. Convert month to string 2. Typecast day to int 3. var sign = zodiac_sign(day,
// //     month) 4. var url = "http:.../sign=" + sign + "&day=today" 5. fetch(url, { )
// var input = document.querySelector("#start");
// // var Btn = document.querySelector(".button");
// var horoscopeDetails = document.querySelector(".horoscopeDetails");
// var inputValue = document.querySelector(".inputValue");
// var color = document.querySelector('.color')
// var sign = document.querySelector('.sign')
// var facts = document.querySelector('.facts')
// var luckyNumber = document.querySelector('.luckyNumber')
// var luckyTime = document.querySelector('.luckyTime')
// var mood = document.querySelector('.mood')
// var x = document.getElementById("start").value;
// console.log(x)
// var split = x.split("-")
// var dayString = split[2];
// var day = parseInt(dayString);
// console.log(typeof day)
// var month = split[1]
// console.log(day)
// console.log(split)
// var submitBtn = document.querySelector("#button");
// // var dateRange = document.querySelector()
// console.log(input);
// var randomfact = document.querySelector('.randomfact')
// //     Btn.addEventListener('click', function () {
// // horoscope gen aztro
// input.addEventListener('change', function () {
//     fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today", {
//         "method": "POST",
//         "headers": {
//             "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
//             "x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
//         }
//     })
//          .then(response =>response.json())
//              // var horoscopeValue = innerHTML
//         .then(data => {
//             console.log(data)
//             var redValue = data['color']
//             var signValue = data['compatibility']
//             var faqValue = data['description']
//             var lucknValue = data['lucky_number']
//             var lucktValue = data['lucky_time']
//             var mooodValue = data['mood']
//             var dataRange =data['data_range']
//             color.innerHTML = redValue;
//             sign.innerHTML =signValue;
//             facts.innerHTML =faqValue;
//             luckyNumber.innerHTML =lucknValue;
//             luckyTime.innerHTML= lucktValue;
//             mood.innerHTML= mooodValue
// })
//         .catch(err => {
//             console.error(err);
//         });
//     // fun fact gen
//  });
// // submitBtn.addEventListener('click', function () {
// // // var value = ['year']['month']['day'];
// // });
// function zodiacSign(day, month)
//     {
//         let astro_sign="";
//         // checks month and date within the
//         // valid range of a specified zodiac
//         if (month == 12){
//             console.log(month);
//             if (day < 22)
//             astro_sign = "Sagittarius";
//             else
//             astro_sign ="capricorn";
//         }
//         else if (month == 1){
//             if (day < 20)
//             astro_sign = "Capricorn";
//             else
//             astro_sign = "aquarius";
//         }
//         else if (month == 2){
//             if (day < 19)
//             astro_sign = "Aquarius";
//             else
//             astro_sign = "pisces";
//         }
//         else if(month == 3){
//             if (day < 21)
//             astro_sign = "Pisces";
//             else
//             astro_sign = "aries";
//         }
//         else if (month == 4){
//             if (day < 20)
//             astro_sign = "Aries";
//             else
//             astro_sign = "taurus";
//         }
//         else if (month == 5){
//             if (day < 21)
//             astro_sign = "Taurus";
//             else
//             astro_sign = "gemini";
//         }
//         else if( month == 6){
//             if (day < 21)
//             astro_sign = "Gemini";
//             else
//             astro_sign = "cancer";
//         }
//         else if (month == 7){
//             console.log("hello")
//             if (day < 23)
//             astro_sign = "Cancer";
//             else
//             astro_sign = "leo";
//         }
//         else if( month == 8){
//             if (day < 23)
//             astro_sign = "Leo";
//             else
//             astro_sign = "virgo";
//         }
//         else if (month == 9){
//             if (day < 23)
//             astro_sign = "Virgo";
//             else
//             astro_sign = "libra";
//         }
//         else if (month == 10){
//             if (day < 23)
//             astro_sign = "Libra";
//             else
//             astro_sign = "scorpio";
//         }
//         else if (month == 11){
//             if (day < 22)
//             astro_sign = "scorpio";
//             else
//             astro_sign = "sagittarius";
//         }
//         document.write(astro_sign);
//     }
//     submitBtn.addEventListener("click", function(event){
//            event.preventDefault();
//         console.log("button clicked")
//         // grab value of datepicker
//         // store value into var for day and month
//         // feed those variable to zodiac function
//         // take results and give it to horoscope api
//         // put results page
//         fetch("https://random-facts2.p.rapidapi.com/getfact", {
//  "method": "GET",
//  "headers": {
//      "x-rapidapi-host": "random-facts2.p.rapidapi.com",
//      "x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
//  }
// })
// .then(response => {
//  return response.json()
// })
// .then(data => {
//         console.log(data)
//         var randomfactValue = data['Fact']
//         // console.log(value)
//         console.log(data['Fact'])
//         randomfact.innerHTML = randomfactValue;
//      })
//        })
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
function fetchRandomFact() {
  fetch(randomFactApi(), randomFactHeaders)
    .then((res) => res.json())
    .then((data) => {
        randomFact.textContent = data.Fact
    })
    .catch((err) => console.error(err));
}
function fetchHoroscope(e) {
  e.preventDefault();
  fetchRandomFact();
  var star = starsOptions.value;
  var day = daysOptions.value;
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
}
searchButton.addEventListener("click", fetchHoroscope);