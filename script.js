let menu = document.getElementById("menu-bar");
let menuIcon = document.getElementById("menu-icon")
let closeIcon = document.getElementById("close-icon")

let hero = document.getElementById("hero");
let about = document.getElementById("About");
let services = document.getElementById("services");
let section1 = document.getElementById("section1");
let reels = document.getElementById("reels");
let contact = document.getElementById("contact");
let sideBar = document.getElementById("side-bar");
let footers = document.getElementById("footers");


menuIcon.addEventListener("click", (e)=>{
   about.style.display = "none";
   services.style.display = "none";
   section1.style.display = "none";
   reels.style.display = "none";
   contact.style.display = "none";
   sideBar.style.display = "none";
   
   menu.classList.add("display-menu")
   
})
closeIcon.addEventListener("click", (e)=>{
   menu.classList.remove("menu-out");
   about.style.display = "block";
   services.style.display = "block";
   section1.style.display = "block";
   reels.style.display = "block";
   contact.style.display = "block";
   sideBar.style.display = "block";
   menu.classList.remove("display-menu"); 
})

 function closeMenu(){
  
      about.style.display = "block";
      services.style.display = "block";
      section1.style.display = "block";
      reels.style.display = "block";
      contact.style.display = "block";
      sideBar.style.display = "block";
      menu.classList.add("menu-out");
      menu.classList.toggle("display-menu");
      setTimeout(function (e){
         menu.classList.remove("menu-out");
      },100)
       
 }
