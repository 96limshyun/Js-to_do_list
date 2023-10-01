const addBtn = document.querySelector(".add-btn");
let toDoCheck = true;

addBtn.addEventListener("click", addList);

function addList () {
    const searchValue = document.querySelector(".search-el").value;
    let addText = document.createTextNode(searchValue);
    const addDiv = document.createElement("div");
    const addInput = document.createElement("input");
    addInput.type = "checkbox";
    const addSpan = document.createElement("span");
    addSpan.appendChild(addText);
    const modifiBtn = document.createElement("button");
    modifiBtn.textContent = "수정";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "제거";

    if (searchValue === "") {
        alert("할 일을 입력하세요!");
    } else {
        document.querySelector(".ul-el").appendChild(addDiv);
    addDiv.append(addInput, addSpan, modifiBtn, removeBtn);

    // 줄긋기
    addInput.addEventListener("click", (e) => {
        if (e.target.checked) {
            addSpan.style.textDecoration = "line-through";
        } else {
            addSpan.style.textDecoration = "none";
        }
    })
    // 수정 이벤트 리스너
    modifiBtn.addEventListener("click", (e) => {
        console.log(e.target.textContent);
    })
    // 제거 이벤트 리스너
    removeBtn.addEventListener("click", () => {
        addDiv.remove();
    })
    }

    
}
