const thumb = document.getElementsByClassName("thumb"),
      left = document.getElementById("left"),
      right = document.getElementById("right"),
      noor = document.getElementsByClassName("noor");
      
for(var i = 1; i < thumb.length; i++) {
    thumb[i].addEventListener("click", function() {
       
       if(noor.length > 0) {
           noor[0].classList.remove("noor");
       }
        this.classList.add("noor");
         document.getElementById("father").src = this.src;
    })
}
right.addEventListener("click", function() {
    document.getElementById("slid").scrollLeft += 150;
})

left.addEventListener("click", function() {
    document.getElementById("slid").scrollLeft -= 150;
})

// start price

var price =  document.getElementById("price-cart").textContent,
    quantity = document.getElementById("quantity"),
    reduce = document.getElementById("reduce"),
    rizeUp = document.getElementById("rize-up"),
    int = 0;
    
    
rizeUp.onclick = function() {
    "use strict";
    int += 1;  
    var salahWso = quantity.innerHTML = int;
    
    document.getElementById("total").innerHTML = price * salahWso;

    
}
reduce.onclick = function() {
    
   
     var salahWso = quantity.innerHTML = int;
  if(salahWso <= 0 ) {
      
      document.getElementById("total").innerHTML = 0;
      
  } else {
       int -= 1;
       document.getElementById("total").innerHTML = price * salahWso;
  }
   
}




 // start shopping cart


let cart = document.querySelector("#cart");


function onLoadCartNumbers() {
    let productNumber = localStorage.getItem("cartNumbers");
    if(productNumber) {
         document.querySelector("#cart").textContent = productNumber;
    }
   
}

onLoadCartNumbers();


//start review

let review = document.querySelectorAll(".detail ul li");
let ul = document.querySelector(".detail ul");
let spinner = document.getElementsByClassName("spinner");

review.forEach(el => {
    
    el.addEventListener("click", function() {
        
      
        ul.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        let momo = el.getAttribute("data-filter");
       
        for(let x=0; x < spinner.length; x++) {
            console.log(spinner[x]);
            let spin = spinner[x];
            console.log(spin);
            if(spin.classList.contains(momo)) {
               
                spin.style.display = 'block';
            } else {
                spin.style.display = "none";
            }
        }
    })
})


   


    
      
    