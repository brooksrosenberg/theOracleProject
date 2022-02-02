var input = document.querySelector("#start");

console.log(input);


input.addEventListener('change', function () {
    
    fetch("https://horoscopeapi-horoscope-v1.p.rapidapi.com/daily?date=today", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "horoscopeapi-horoscope-v1.p.rapidapi.com",
		"x-rapidapi-key": "b8b3941824msh99ac9bf94bf5049p11d616jsnb3a99dcc21ad"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

    // fetch("https://history-events-of-a-day.p.rapidapi.com/api/getevents/june/28", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "history-events-of-a-day.p.rapidapi.com",
    //         "x-rapidapi-key": "b8b3941824msh99ac9bf94bf5049p11d616jsnb3a99dcc21ad"
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });

//     fetch('https://history-events-of-a-day.p.rapidapi.com/api/getevents?q='+input.value+'&appid=23498756d1msh8f2c810f2e947a2p133e8ejsn204782b3f173')
	
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
});


// "method": "POST",
// 	"headers": {
// 		"content-type": "application/json",
// 		"x-rapidapi-host": "history-events-of-a-day.p.rapidapi.com",
// 		"x-rapidapi-key": "b8b3941824msh99ac9bf94bf5049p11d616jsnb3a99dcc21ad"
// 	},
// 	"body": {
// 		"month": "june",
// 		"day": "28"




// fetch("https://birthday-cake-with-name-generator.p.rapidapi.comendpoint/", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "birthday-cake-with-name-generator.p.rapidapi.com",
//             "x-rapidapi-key": "b8b3941824msh99ac9bf94bf5049p11d616jsnb3a99dcc21ad"
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });