let button = document.querySelector(".bars");
let menu = document.querySelector("ul");
let btn = document.querySelector("#close");

button.addEventListener("click",function(){
    menu.classList.toggle("ShowMenu");
})

btn.addEventListener("click",function(){
    menu.classList.toggle("ShowMenu")
})