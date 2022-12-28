// import contactPageModule from './contact.js';
import menuPageModule from './menu.js';


  const homePageModule = function(){
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.id="restaurantTitle";
    title.innerHTML = "Fresh Pressed Juice Co."
    content.appendChild(title);

    const imageBanner = document.createElement("img");
    imageBanner.id = "imageBanner"
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

    const homeDiv = document.createElement("div");
    homeDiv.id = 'homeDiv'
    content.appendChild(homeDiv)

    const homeMiddleTitle = document.createElement("h3");
    homeMiddleTitle.id = 'homeMiddleTitle'
    homeMiddleTitle.innerHTML = "The most fresh juices and smoothies in town!"
    homeDiv.appendChild(homeMiddleTitle)

    const homeMiddleText = document.createElement("p");
    homeMiddleText.id = 'homeMiddleText'
    homeMiddleText.innerHTML = "We were established in 2005 with the idea that no one would provide more robust and healthy smoothies and juices in the Coffee County Area. We work really hard with our produce and fruit vendors to ensure the ingredients we use on a daily basis are second to none! Come on out and support a local business with the best intentions around."
    homeDiv.appendChild(homeMiddleText)

    //Add two line breaks to space center image
    const breakOne = document.createElement("br");
    homeDiv.appendChild(breakOne)
    const breakTwo = document.createElement("br");
    homeDiv.appendChild(breakTwo)

    // Big Middle Image
    const imageMiddle = document.createElement("img");
    imageMiddle.id = 'imageMiddle'
    homeDiv.appendChild(imageMiddle)

}

homePageModule();

const menuButton = document.querySelector("#menu")

menuButton.addEventListener('click', menuPageModule);



