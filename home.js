// start date
var countDate = new Date("may 1, 2021 00:00:00").getTime();

function newYear() {
    "use strict";
    var now = new Date().getTime(),
        gap = now - countDate;
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    
    
    var d = Math.floor(gap / (day)),
        h = Math.floor((gap % (day)) / (hour)),
        m = Math.floor((gap % (hour)) / (minute)),
        s = Math.floor((gap % (minute)) / (second));
    
    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
        
}
setInterval(function () {
    "use strict";
    newYear();
}, 1000);

// start shopping cart

let shoppingCart = document.getElementsByClassName("add-to-cart");


let products = [
    {
        name: "New Shoe",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New T-shirt",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Watch",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Bike",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Shoes",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New T-shirt",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Watch",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Bike",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Bike",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Watch",
        price: 32.00,
        inCart: 0
    },
    {
        name: "New Bag",
        price: 32.00,
        inCart: 0
    },
];


for(let i=0; i < shoppingCart.length; i++) {
   
    shoppingCart[i].addEventListener("click", function() {
        cartNumber(products[i]);
        
    })
 
}
function onLoadCartNumbers() {
    let productNumber = localStorage.getItem("cartNumbers");
    if(productNumber) {
         document.querySelector("#cart").textContent = productNumber;
    }
   
}
function cartNumber(product) {
   console.log(product);
   let productnumber = localStorage.getItem("cartNumbers");
    productnumber = parseInt(productnumber)
    
    if(productnumber) {
        localStorage.setItem("cartNumbers", productnumber + 1);
        document.querySelector("#cart").textContent  = productnumber + 1;
    } else{
        localStorage.setItem("cartNumbers",  1);
        document.querySelector("#cart").textContent = 1;
    }
 
}

onLoadCartNumbers();




 