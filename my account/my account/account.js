let li = document.querySelectorAll(".manage ul li");
let ul = document.querySelector(".manage ul");
let state = document.getElementsByClassName("state");
  
li.forEach(el => {
    
    el.addEventListener("click", function() {
        
          ul.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        
        var ahmed = el.getAttribute("data-filter");
       
        for(var i = 0; i < state.length; i++){
            var weso = state[i];
            if(weso.classList.contains(ahmed)) {
                
                weso.style.display = 'block';
            } else {
                weso.style.display = 'none';
            }
            
            
        }
        
      
    })
})

let cart = document.querySelector("#cart");


function onLoadCartNumbers() {
    let productNumber = localStorage.getItem("cartNumbers");
    if(productNumber) {
         document.querySelector("#cart").textContent = productNumber;
    }
   
}

onLoadCartNumbers();



