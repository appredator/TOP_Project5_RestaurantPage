// import contactPageModule from './contact.js';
import menuPageModule from './menu.js';


  const homePageModule = function(){
    const content = document.querySelector("#content");

    const title = document.createElement("h2");
    title.id="restaurantTitle";
    title.innerHTML = "Fresh Pressed Juice Co."
    content.appendChild(title);

    const imageBanner = document.createElement("img");
    content.appendChild(imageBanner)


}

homePageModule();
menuPageModule();



