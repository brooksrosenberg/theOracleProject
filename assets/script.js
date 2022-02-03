var input = document.querySelector("#start");
var Btn = document.querySelector(".button");
    
    console.log(input);

//     Btn.addEventListener('click', function () {
// fetch("https://tic-tac-toe-ai.p.rapidapi.com/move", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"x-rapidapi-host": "tic-tac-toe-ai.p.rapidapi.com",
// 		"x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
// 	},
// 	"body": {
// 		"player": "X",
// 		"0-0": "X",
// 		"0-1": "X",
// 		"0-2": "O",
// 		"1-0": "O",
// 		"1-1": "O",
// 		"1-2": "X",
// 		"2-0": "X",
// 		"2-1": "O"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
//     });
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
        console.log(response.json());
    })
    .catch(err => {
        console.error(err);
    });

//     fetch("https://horoscopeapi-horoscope-v1.p.rapidapi.com/daily?date=today", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "horoscopeapi-horoscope-v1.p.rapidapi.com",
//             "x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
//         }
//     })
//         .then(response => {
//             console.log(response.json());
//         })
//         .catch(err => {
//             console.error(err);
//         });

// });

// birthday cake gen

Btn.addEventListener('click', function () {
    fetch("https://birthday-cake-with-name-generator.p.rapidapi.comendpoint/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "birthday-cake-with-name-generator.p.rapidapi.com",
            "x-rapidapi-key": "23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(error => alert('City Name Does Not Exist'))
});})
