const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const dropdownBtn2 = document.getElementById("btn-2");
const dropdownMenu2 = document.getElementById("dropdown-2");
const toggleArrow2 = document.getElementById("arrow-2");

const dropdownBtn3 = document.getElementById("btn-3");
const dropdownMenu3 = document.getElementById("dropdown-3");
const toggleArrow3 = document.getElementById("arrow-3");

const dropdownBtn4 = document.getElementById("btn-4");
const dropdownMenu4 = document.getElementById("dropdown-4");
const toggleArrow4 = document.getElementById("arrow-4");

const dropdownBtn5 = document.getElementById("btn-5");
const dropdownMenu5 = document.getElementById("dropdown-5");
const toggleArrow5 = document.getElementById("arrow-5");

const dropdownBtn6 = document.getElementById("btn-6");
const dropdownMenu6 = document.getElementById("dropdown-6");
const toggleArrow6 = document.getElementById("arrow-6");

const dropdownBtn7 = document.getElementById("btn-7");
const dropdownMenu7 = document.getElementById("dropdown-7");
const toggleArrow7 = document.getElementById("arrow-7");

const dropdownBtn8 = document.getElementById("btn-8");
const dropdownMenu8 = document.getElementById("dropdown-8");
const toggleArrow8 = document.getElementById("arrow-8");

const dropdownBtn9 = document.getElementById("btn-9");
const dropdownMenu9 = document.getElementById("dropdown-9");
const toggleArrow9 = document.getElementById("arrow-9");

const container1 = document.querySelector(".container")
const container2 = document.querySelector(".container-2")
const container3 = document.querySelector(".container-3")
const container4 = document.querySelector(".container-4")
const container5 = document.querySelector(".container-5")
const container6 = document.querySelector(".container-6")
const container7 = document.querySelector(".container-7")
const container8 = document.querySelector(".container-8")
const container9 = document.querySelector(".container-9")


runToEvent()

function runToEvent() {
    dropdownBtn.addEventListener("click", toggleDropdown);
    dropdownBtn2.addEventListener("click", toggleDropdown2);
    dropdownBtn3.addEventListener("click", toggleDropdown3);
    dropdownBtn4.addEventListener("click", toggleDropdown4);
    dropdownBtn5.addEventListener("click", toggleDropdown5);
    dropdownBtn6.addEventListener("click", toggleDropdown6);
    dropdownBtn7.addEventListener("click", toggleDropdown7);
    dropdownBtn8.addEventListener("click", toggleDropdown8);
    dropdownBtn9.addEventListener("click", toggleDropdown9);
}

function toggleDropdown(e) {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
    if (e.target) {
        console.log(true);
        container1.classList.toggle("top")
    }
}
function toggleDropdown2(e) {
    dropdownMenu2.classList.toggle("show-2");
    toggleArrow2.classList.toggle("arrow-2");
    if (e.target) {
        
        container2.classList.toggle("top")
    }
}
function toggleDropdown3(e) {
    dropdownMenu3.classList.toggle("show-3");
    toggleArrow3.classList.toggle("arrow-3");
    if (e.target) {
        container3.classList.toggle("top")
    }
}

function toggleDropdown4(e) {
    dropdownMenu4.classList.toggle("show-4");
    toggleArrow4.classList.toggle("arrow-4");
    if (e.target) {
        console.log(true);
        container4.classList.toggle("top")
    }

}
function toggleDropdown5(e) {
    dropdownMenu5.classList.toggle("show-5");
    toggleArrow5.classList.toggle("arrow-5");
    if (e.target) {
        console.log(true);
        container5.classList.toggle("top")
    }

}
function toggleDropdown6(e) {
    dropdownMenu6.classList.toggle("show-6");
    toggleArrow6.classList.toggle("arrow-6");
    if (e.target) {
        console.log(true);
        container6.classList.toggle("top")
    }

}
function toggleDropdown7(e) {
    dropdownMenu7.classList.toggle("show-7");
    toggleArrow7.classList.toggle("arrow-7");
    if (e.target) {
        console.log(true);
        container7.classList.toggle("top")
    }

}
function toggleDropdown8(e) {
    dropdownMenu8.classList.toggle("show-8");
    toggleArrow8.classList.toggle("arrow-8");
    if (e.target) {
        console.log(true);
        container8.classList.toggle("top")
    }

}
function toggleDropdown9(e) {
    dropdownMenu9.classList.toggle("show-9");
    toggleArrow9.classList.toggle("arrow-9");
    if (e.target) {
        container9.classList.toggle("top")
    }

}