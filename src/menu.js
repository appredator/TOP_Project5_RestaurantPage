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

    // Menu Box 1
    const menuBox = document.createElement("div");
    menuBox.id="menuBox";
    content.appendChild(menuBox);

    const menuItemHeaderOne = document.createElement("h3");
    menuItemHeaderOne.id="menuItemHeader";
    menuItemHeaderOne.innerHTML = "Green Machine"
    menuBox.appendChild(menuItemHeaderOne);


    const ingredients = document.createElement("span");
    ingredients.id="menuItemText";
    ingredients.innerHTML = "Ingredients:"
    menuBox.appendChild(ingredients);

    const menuItemText = document.createElement("p");
    menuItemText.id="menuItemText";
    menuItemText.innerHTML = "Lime, Lemon, Ginger, Spinach, Kale, and Pineapple"
    menuBox.appendChild(menuItemText);

     // Menu Box 2
     const menuBox2 = document.createElement("div");
     menuBox2.id="menuBox";
     content.appendChild(menuBox2);
 
     const menuItemHeaderTwo = document.createElement("h3");
     menuItemHeaderTwo.id="menuItemHeader";
     menuItemHeaderTwo.innerHTML = "Peach Fuzzy"
     menuBox2.appendChild(menuItemHeaderTwo);
 
 
     const ingredientsTwo = document.createElement("span");
     ingredientsTwo.id="menuItemText";
     ingredientsTwo.innerHTML = "Ingredients:"
     menuBox2.appendChild(ingredientsTwo);
 
     const menuItemTextTwo = document.createElement("p");
     menuItemTextTwo.id="menuItemText";
     menuItemTextTwo.innerHTML = "Apple, Orange, Ginger, Spinach, Kale, and Pineapple"
     menuBox2.appendChild(menuItemTextTwo);

    

}

export default menuPageModule;