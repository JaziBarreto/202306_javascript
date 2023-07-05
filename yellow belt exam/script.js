// this function is for donate, on the header//
function removeBtn(btnDonate) {
    btnDonate.classList.add("hidden");
}

// this function is for the select element on the type of animal//
function showSelectedOption(selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    alert("You are looking for: " + selectedOption);
}


//this function is for the likes in each post//
const likes1 = document.querySelector('#likes1');
const likes2 = document.querySelector('#likes2');
const likes3 = document.querySelector('#likes3');

let numLikes1 = 4;
let numLikes2 = 6;
let numLikes3 = 9;

function addLikes1(){
    likes1.innerHTML=numLikes1;
    numLikes1 ++;
}

function addLikes2(){
    likes2.innerHTML=numLikes2;
    numLikes2 ++;
}

function addLikes3(){
    likes3.innerHTML=numLikes3;
    numLikes3 ++;
}