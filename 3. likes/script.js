const likes1 = document.querySelector('#likes1');
const likes2 = document.querySelector('#likes2');
const likes3 = document.querySelector('#likes3');

let numLikes1= 10;
let numLikes2= 13;
let numLikes3= 10;

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