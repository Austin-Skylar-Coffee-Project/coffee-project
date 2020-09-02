"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += coffee.name;
    html += ' ';
    html += coffee.roast;
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "All"){
            filteredCoffees.push(coffee);
        }
        ;
        tbody.innerHTML = renderCoffees(filteredCoffees);
    })
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var allCoffees = document.querySelector('#all-coffees')
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

// allCoffees.addEventListener('click', function () {
//     tbody.innerHTML = renderCoffees(coffees);
// });
roastSelection.addEventListener('change',updateCoffees);
submitButton.addEventListener('click', updateCoffees);

// var coffeeLight = document.querySelector("#coffee-light");
// var coffeeMedium = document.querySelector("#coffee-med");
// var coffeeDark = document.querySelector("#coffee-dark");

var coffeeName = document.getElementById('coffeeName');
coffeeName.addEventListener("keyup", function(){
    //TODO: Include an if statement that counts the characters in the search bar before starting the new array
    var newSearch = [];
    var selectedRoast = roastSelection.value;
    for(var i = 0; i < coffees.length; i++){
        if(coffees[i].name.toLowerCase().indexOf(coffeeName.value) > -1 && (coffees[i].roast === selectedRoast || selectedRoast === "All")){
            newSearch.push("<li>" + coffees[i].name + " " + coffees[i].roast + "</li>");
        }
        tbody.innerHTML = newSearch.join(" ");
    }
});

// coffeeLight.addEventListener("click", )
//
// function coffeeUpdater(update){
//     console.log(coffeeName.value)
//     coffees.map(function(algo){
//         update.split(" ").map(function (word){
//             if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
//                 //TODO: finish real-time search function.
//             }
//         })
//     });

    // for(var i = 0; i < coffeeName.value.length; i++){
    //
//     // }
// }