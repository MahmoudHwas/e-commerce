let cart = document.querySelector("#cart");


function onLoadCartNumbers() {
    let productNumber = localStorage.getItem("cartNumbers");
    if(productNumber) {
         document.querySelector("#cart").textContent = productNumber;
    }
   
}

onLoadCartNumbers();