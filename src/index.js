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

    const buttonDiv = document.createElement("div");
    buttonDiv.id = 'buttonDiv'
    content.appendChild(buttonDiv)

    const buttonOne = document.createElement("button");
    buttonOne.id = 'home'
    buttonOne.className = 'buttonBar'
    buttonOne.innerHTML = "Home"
    buttonDiv.appendChild(buttonOne)

    const buttonTwo = document.createElement("button");
    buttonTwo.id = 'menu'
    buttonTwo.className = 'buttonBar'
    buttonTwo.innerHTML = "Menu"
    buttonDiv.appendChild(buttonTwo)

    const buttonThree = document.createElement("button");
    buttonThree.id = 'menu'
    buttonThree.className = 'buttonBar'
    buttonThree.innerHTML = "Contact"
    buttonDiv.appendChild(buttonThree)


}

homePageModule();

const menuButton = document.querySelector("#menu")

menuButton.addEventListener('click', menuPageModule);



