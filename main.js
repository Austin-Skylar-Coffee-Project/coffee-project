"use strict"

function renderCoffee(coffee) {
    var html = '<li class="coffee">';
    html += '<span class="nameStyle">';
    html += coffee.name;
    html += '</span>';
    html += ' ';
    html += '<span class="roastStyle">';
    html += coffee.roast;
    html += '</span>';
    html += '</li>';
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


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change',updateCoffees);
submitButton.addEventListener('click', updateCoffees);


var coffeeName = document.getElementById('coffeeName');
coffeeName.addEventListener("keyup", function(){
    //TODO: Include an if statement that counts the characters in the search bar before starting the new array
    var newSearch = [];
    var selectedRoast = roastSelection.value;
    for(var i = 0; i < coffees.length; i++){
        if(coffees[i].name.toLowerCase().indexOf(coffeeName.value) > -1 && (coffees[i].roast === selectedRoast || selectedRoast === "All")){
            //TODO Add spans to roast with class to apply styles
            newSearch.push("<li class='selectedCoffee'>" + "<span class='nameStyle'>" + coffees[i].name +"</span>" +  " " + "<span class='roastStyle'>" + coffees[i].roast +"</span>"+ "</li>");
        }
        tbody.innerHTML = newSearch.join(" ");
    }
});

var addSelection = document.getElementById('addSelection');
var newCoffee = document.getElementById('newCoffee');
var submitAdd = document.getElementById('submitAdd');
function newCoffeeAdd(id, name, roast){
    var newEntry = {
        id: id,
        name: name,
        roast: roast,
    }
    coffees.push(newEntry);
    tbody.innerHTML = renderCoffees(coffees);
}
function coffeeSubmit(){
    newCoffeeAdd(coffees.length + 1, newCoffee.value, addSelection.value);
}

submitAdd.addEventListener('click', coffeeSubmit);

submitAdd.addEventListener('click', coffeeSubmit);

window.onload = function () {
    var fadeIn = document.getElementsByClassName("fadeIn");
    fadeIn[0].style.opacity = 1;
}