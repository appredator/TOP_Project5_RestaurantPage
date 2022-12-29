const contactPageModule = function(){

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
    buttonThree.id = 'contacts'
    buttonThree.className = 'buttonBar'
    buttonThree.innerHTML = "Contact"
    buttonDiv.appendChild(buttonThree)

    // contact Box 1
    const contactBox = document.createElement("div");
    contactBox.id="contactBox";
    content.appendChild(contactBox);

    const contactItemHeaderOne = document.createElement("h3");
    contactItemHeaderOne.id="contactItemHeader";
    contactItemHeaderOne.innerHTML = "Contact Information"
    contactBox.appendChild(contactItemHeaderOne);


    const contactItemText = document.createElement("p");
    contactItemText.id="contactItemText";
    contactItemText.innerHTML = "Actually, nevermind."
    contactBox.appendChild(contactItemText);


    

}

export default contactPageModule;