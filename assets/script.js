var input = document.querySelector("#start");
var Btn = document.querySelector(".button");
var horoscopeDetails = document.querySelector(".horoscopeDetails");

console.log(input);

//     Btn.addEventListener('click', function () {


// horoscope gen aztro
input.addEventListener('change', function () {
    fetch("https://ffa.aakhilv.me/json", {
        "method": "GET",
        
    })
        .then(response => {
            console.log(response.json());
            // var horoscopeValue = innerHTML
        })
        .catch(err => {
            console.error(err);
        });

    // fun fact gen

    Btn.addEventListener('click', function () {

            fetch("https://ffa.aakhilv.me/json", {
                "method": "GET",
            })
                .then(response => {
                    console.log(response.json());
                })
                .catch(err => {
                    console.error(err)
                });
        })
    })

<<<<<<< HEAD
    .catch(error => alert('City Name Does Not Exist'))
});})
=======
>>>>>>> f1e49f84bb7e3d3011e3ca6603f7e35203d25cff
