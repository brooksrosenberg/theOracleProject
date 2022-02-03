var input = document.querySelector("#start");
var Btn = document.querySelector(".button");
var horoscopeDetails = document.querySelector(".horoscopeDetails");
var inputValue = document.querySelector(".inputValue");
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
        .then(response => {
            console.log(response.json())
            // var horoscopeValue = innerHTML
        })
        .catch(err => {
            console.error(err);
        });

    // fun fact gen
    
});
    Btn.addEventListener('click', function () {
        fetch("https://api.adviceslip.com/advice
      
      
      
      
      
        fetch("https://baby-names-finder.p.rapidapi.com/detail/"+inputValue.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "baby-names-finder.p.rapidapi.com",
		"x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
	}
})
.then(response => {
	console.log(response.json())
})
.then(function(data){
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var windValue = data['wind']['speed'];
    var humidityValue = data['main']['humidity']; 
            
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
    

