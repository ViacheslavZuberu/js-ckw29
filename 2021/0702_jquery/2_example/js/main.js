const dropDownList = document.querySelectorAll(".dropdown");
const dropDownItemList = document.querySelectorAll(".dropdown-list > .item");

function onDropDownClick(event) {
    console.log(event);

    const isOpened = this.dataset.isOpened;
    const list = this.querySelector(".dropdown-list");

    if (isOpened === undefined || isOpened === "false") {
        list.style.display = "block";
        this.dataset.isOpened = true;
    } else {
        list.style.display = "none";
        this.dataset.isOpened = false;
    }
}

function onItemClick() {
    const head = this.parentElement.parentElement.querySelector(".dropdown-head");
    head.textContent = this.textContent;
}

for (let dropdown of dropDownList) {
    dropdown.addEventListener("click", onDropDownClick);
}

for (let item of dropDownItemList) {
    item.addEventListener("click", onItemClick);
}

