const btnColor1 = document.getElementById("tab1-button")
const btnColor2 = document.getElementById("tab2-button")
const btnColor3 = document.getElementById("tab3-button")

const contentHide1 = document.getElementById("tab1-content")
const contentHide2 = document.getElementById("tab2-content")
const contentHide3 = document.getElementById("tab3-content")

function clickLondon() {
    const contentShow = document.getElementById("tab1-content")
    btnColor1.classList.add("btn-color");
    btnColor2.classList.remove("btn-color");
    btnColor3.classList.remove("btn-color");
    contentShow.classList.remove("displayProperty");
    contentHide2.classList.add("displayProperty");
    contentHide3.classList.add("displayProperty");
}

function clickParis() {
    const contentShow = document.getElementById("tab2-content")
    btnColor2.classList.add("btn-color");
    btnColor1.classList.remove("btn-color");
    btnColor3.classList.remove("btn-color");
    contentShow.classList.remove("displayProperty");
    contentHide1.classList.add("displayProperty");
    contentHide3.classList.add("displayProperty");
}

function clickTokyo() {
    const contentShow = document.getElementById("tab3-content")
    btnColor1.classList.remove("btn-color");
    btnColor2.classList.remove("btn-color");
    btnColor3.classList.add("btn-color");
    contentShow.classList.remove("displayProperty");
    contentHide1.classList.add("displayProperty");
    contentHide2.classList.add("displayProperty");
}