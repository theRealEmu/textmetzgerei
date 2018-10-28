export function insertHeader() {
  console.log("Hello from header.js");
  const headerContent =  `<!-- MENU -->
  <!-- MENU-SYMBOL -->
  <div class="menu-btn">
    <div class="btn-line"></div>
    <div class="btn-line"></div>
    <div class="btn-line"></div>
  </div>
  <!-- MENU OVERLAY -->
  <nav class="menu">
    <div class="menu-branding">
        <div class="portrait"></div>
    </div>
    <ul class="menu-nav">
      <li class="nav-item current">
          <a href="index.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
          <a href="leistungen.html" class="nav-link">Leistungen & Preise</a>
      </li>
      <li class="nav-item"> 
          <a href="referenzen.html" class="nav-link">Referenzen</a>
      </li>
      <li class="nav-item"> 
          <a href="impressum.html" class="nav-link">Impressum</a>
      </li>
    </ul>
  </nav>
  <!-- END MENU -->`;

  document.getElementsByTagName("header")[0].innerHTML = headerContent;

  //Set current site in menu (link) to CSS Class "current"
  function setCurrent() {
    const currentUrl = window.location.pathname;
    const filename = currentUrl.substring(currentUrl.lastIndexOf('/')+1);

    switch(filename) {

      case "index.html":     
        console.log(filename);
        var lis =  document.querySelectorAll("li.nav-item");
        lis.forEach(li => {
          console.log(`adding "current" to ${li}`);  
          li.classList.remove("current");
        });
        lis[0].classList.add("current");
        break;

      case "leistungen.html":
        console.log(filename);
        var lis =  document.querySelectorAll("li.nav-item");
        lis.forEach(li => {
          console.log(`adding "current" to ${li}`);  
          li.classList.remove("current");
        });
        lis[1].classList.add("current");
        break;

      case "referenzen.html":
        console.log(filename);
        var lis =  document.querySelectorAll("li.nav-item");
        lis.forEach(li => {
          console.log(`adding "current" to ${li}`);  
          li.classList.remove("current");
        });
        lis[2].classList.add("current");
        break;

      case "impressum.html":
        console.log(filename);
        var lis =  document.querySelectorAll("li.nav-item");
        lis.forEach(li => {
          console.log(`adding "current" to ${li}`);  
          li.classList.remove("current");
        });
        lis[3].classList.add("current");
        break;
        
      default:
        console.log("Something went wrong with the switch");
    }
  };
  setCurrent();  
}


export function insertFooter() {
  const footerContent= `<div class="container grid">
      <div class="">
        <a href="#" title="Zur Homeseite" class="">textmetzgerei.de</a> <br> 
        <a href="mailto:manuela@textmetzgerei.de" title="Email">info@textmetzgerei.de</a> <br>
      </div>
      <div class="">
        Inhaltlich Verantwortlich: <br>Manuela Winbeck
      </div>
      <div class="">      
        Das Wetter ist so schön :) <br> 2018
      </div>
    </div>`;

    document.getElementsByTagName("footer")[0].innerHTML = footerContent;
}



