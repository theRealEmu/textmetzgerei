console.log("index.js  is online:)");

//IMPORTS
import { insertHeader } from "./snippets.js"
import { insertFooter } from "./snippets.js"

//IMPORTED FUNCTIONS
//Insert the Header into any document
insertHeader();
//Insert the Footer into any document
insertFooter();

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item')

// State of the overlay
let showmenu = false;

//Add events
menuBtn.addEventListener('click', toggleMenu);


//Click Menu Btn
function toggleMenu(e) {

  if(!showmenu) {
    console.log("Showmenu ist true!");
    menuBtn.classList.add('close');
    menu.classList.add('open');
    menuNav.classList.add('open');
    menuBranding.classList.add('open');

    navItems.forEach(item => {
      item.classList.add('open');
    })

    //Change state
    showmenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('open');
    menuNav.classList.remove('open');
    menuBranding.classList.remove('open');

    navItems.forEach(item => {
      item.classList.remove('open');
    })

    //Change state
    showmenu = false;
  }
  console.log("addhow() was clicked");
  // e.preventDefault();
}


//TESTS

// var lis =  document.querySelectorAll("li.nav-item");
// lis.forEach(li => {
//   console.log(`adding "current" to ${li}`);  
//   li.classList.remove("current");
// });
// lis[3].classList.add("current");

// const currentUrl = window.location.pathname;
// const filename = currentUrl.substring(currentUrl.lastIndexOf('/')+1);
// console.log(filename);