const menuPageModule = function(){
    
    const content = document.querySelector("#content");
    
    buttonDiv.remove();
    homeDiv.remove();
    
    const buttonDivMenu = document.createElement("div");
    buttonDivMenu.id = 'buttonDiv'
    content.appendChild(buttonDivMenu)

    const buttonOneMenu = document.createElement("button");
    buttonOneMenu.id = 'home'
    buttonOneMenu.className = 'buttonBar'
    buttonOneMenu.innerHTML = "Home"
    buttonDiv.appendChild(buttonOneMenu)

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

    const menuBox = document.createElement("div");
    menuBox.id="menuBox";
    menuBox.innerHTML = "Menu Item 1"
    content.appendChild(menuBox);

}

export default menuPageModule;