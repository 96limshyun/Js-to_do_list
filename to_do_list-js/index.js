const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", addList);

function addList () {
    const searchEl = document.querySelector(".search-el").value;
    const addElement = document.createElement("li");
    const addText = document.createTextNode(searchEl);
    addElement.appendChild(addText);
    document.querySelector(".ul-el").appendChild(addElement);
}
