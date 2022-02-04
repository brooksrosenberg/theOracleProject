// 1. Convert month to string 2. Typecast day to int 3. var sign = zodiac_sign(day,
//     month) 4. var url = "http:.../sign=" + sign + "&day=today" 5. fetch(url, { )

var input = document.querySelector("#start");
var Btn = document.querySelector(".button");
var horoscopeDetails = document.querySelector(".horoscopeDetails");
var inputValue = document.querySelector(".inputValue");
var color = document.querySelector('.color')
var sign = document.querySelector('.sign')
var facts = document.querySelector('.facts')
var luckyNumber = document.querySelector('.luckyNumber')
var luckyTime = document.querySelector('.luckyTime')
var mood = document.querySelector('.mood')
var x = document.getElementById("start").value;
console.log(x)
x.split("-")
var day = x[2]
var month = x[1]
// var dateRange = document.querySelector()

console.log(input);

var randomfact = document.querySelector('.randomfact')

//     Btn.addEventListener('click', function () {


// horoscope gen aztro
input.addEventListener('change', function () {
    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
        }

    })
         
         .then(response =>response.json()) 
             // var horoscopeValue = innerHTML
        .then(data => {
            console.log(data)
            var redValue = data['color']
            var signValue = data['compatibility']
            var faqValue = data['description']
            var lucknValue = data['lucky_number']
            var lucktValue = data['lucky_time']
            var mooodValue = data['mood']
            
            var dataRange =data['data_range']


            color.innerHTML = redValue;
            sign.innerHTML =signValue;
            facts.innerHTML =faqValue;
            luckyNumber.innerHTML =lucknValue;
            luckyTime.innerHTML= lucktValue;
            mood.innerHTML= mooodValue


})
        .catch(err => {
            console.error(err);
        });

    // fun fact gen
    
 });
Btn.addEventListener('click', function () {    
fetch("https://random-facts2.p.rapidapi.com/getfact", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "random-facts2.p.rapidapi.com",
		"x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
	}
})
.then(response => {
	return response.json()
})
.then(data => {
        console.log(data)
        var randomfactValue = data['Fact']
        
        console.log(value)
        console.log(data['Fact'])

        randomfact.innerHTML = randomfactValue;
     })
var value = ['year']['month']['day'];
});
function zodiacSign(day, month)
    {
        let astro_sign="";
           
        // checks month and date within the
        // valid range of a specified zodiac
        if (month == Number("december")){
            console.log(month);
               
            if (day < 22)
            astro_sign = "Sagittarius";
            else
            astro_sign ="capricorn";
        }
               
        else if (month == "january"){
            if (day < 20)
            astro_sign = "Capricorn";
            else
            astro_sign = "aquarius";
        }
               
        else if (month == "february"){
            if (day < 19)
            astro_sign = "Aquarius";
            else
            astro_sign = "pisces";
        }
               
        else if(month == "march"){
            if (day < 21)
            astro_sign = "Pisces";
            else
            astro_sign = "aries";
        }
        else if (month == "april"){
            if (day < 20)
            astro_sign = "Aries";
            else
            astro_sign = "taurus";
        }
               
        else if (month == "may"){
            if (day < 21)
            astro_sign = "Taurus";
            else
            astro_sign = "gemini";
        }
               
        else if( month == "june"){
            if (day < 21)
            astro_sign = "Gemini";
            else
            astro_sign = "cancer";
        }
               
        else if (month == "july"){
            if (day < 23)
            astro_sign = "Cancer";
            else
            astro_sign = "leo";
        }
               
        else if( month == "august"){
            if (day < 23)
            astro_sign = "Leo";
            else
            astro_sign = "virgo";
        }
               
        else if (month == "september"){
            if (day < 23)
            astro_sign = "Virgo";
            else
            astro_sign = "libra";
        }
               
        else if (month == "october"){
            if (day < 23)
            astro_sign = "Libra";
            else
            astro_sign = "scorpio";
        }
               
        else if (month == "november"){
            if (day < 22)
            astro_sign = "scorpio";
            else
            astro_sign = "sagittarius";
        }
               
        document.write(astro_sign);
    }