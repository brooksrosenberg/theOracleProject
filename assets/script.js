var input = document.querySelector("#start");
var Btn = document.querySelector(".button");
var horoscopeDetails = document.querySelector(".horoscopeDetails");
var inputValue = document.querySelector(".inputValue");
var color = document.querySelector('.color')
var sign = document.querySelector('.sign')
var facts = document.querySelector('facts')
var luckyNumber = document.querySelector('luckyNumber')
var luckyTime = document.querySelector('luckyTime')
var moood = document.querySelector('mood')
console.log(input);

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
            var redValue = data['color']
            var signValue = data['compatibility']
            var faqValue = data['description']
            var lucknValue = data['lucky_number']
            var lucktValue = data['lucky_time']
            var mooodValue = data['mood']

            color.innerHTML = redValue;
            compatibility.innerHTML =signValue;
            description.innerHTML =faqValue;
            lucky_number.innerHTML =lucknValue;
            lucky_time.innerHTML= lucktValue;
            mood.innerHTML= mooodValue


})
        .catch(err => {
            console.error(err);
        });

    // fun fact gen
    
});
    Btn.addEventListener('click', function () {

        fetch("https://baby-names-finder.p.rapidapi.com/detail/"+inputValue.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "baby-names-finder.p.rapidapi.com",
		"x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});
            // fetch("https://ffa.aakhilv.me/json", {
            //     "method": "GET",
            // })
            //     .then(response => {
            //         console.log(response.json());
            //     })
            //     .catch(err => {
            //         console.error(err)
            //     });
        })
    

