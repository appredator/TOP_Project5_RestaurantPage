const menuPageModule = function(){
    const content = document.querySelector("#content");

    const menuBox = document.createElement("div");
    menuBox.id="menuBox";
    menuBox.innerHTML = "Menu Item 1"
    content.appendChild(menuBox);



    // const test = document.createElement("span");
    // test.innerHTML = "TEST TEST"
    // content.appendChild(test)


}

export default menuPageModule;