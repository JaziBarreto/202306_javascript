const cookie = document.querySelector('.cookiesContainer');

const min1 = document.getElementById('min1');
const max1 = document.getElementById('max1');

const min2 = document.getElementById('min2');
const max2 = document.getElementById('max2');

const min3 = document.getElementById('min3');
const max3 = document.getElementById('max3');

const min4 = document.getElementById('min4');
const max4 = document.getElementById('max4');

let tempMode = 'c';

function removeCookie() {
    cookie.style.display = 'none'
};

function changeToF(){
    if (tempMode == 'c') {
        min1.innerHTML = temps[0].minf
        max1.innerHTML = temps[0].maxf

        min2.innerHTML = temps[1].minf
        max2.innerHTML = temps[1].maxf

        min3.innerHTML = temps[2].minf
        max3.innerHTML = temps[2].maxf

        min4.innerHTML = temps[3].minf
        max4.innerHTML = temps[3].maxf

        tempMode = 'f'
    }

    else {
        min1.innerHTML = temps[0].minc
        max1.innerHTML = temps[0].maxc

        min2.innerHTML = temps[1].minc
        max2.innerHTML = temps[1].maxc

        min3.innerHTML = temps[2].minc
        max3.innerHTML = temps[2].maxc

        min4.innerHTML = temps[3].minc
        max4.innerHTML = temps[3].maxc

        tempMode = 'c'
    }
};


let temps = [{
        maxc:'24°',
        minc:'23°',
        maxf:'75°',
        minf:'65°'
    },
    {
        maxc:'24°',
        minc:'23°',
        maxf:'80°',
        minf:'66°'
    },
    {
        maxc:'24°',
        minc:'23°',
        maxf:'69°',
        minf:'61°'
    },
    {
        maxc:'24°',
        minc:'23°',
        maxf:'78°',
        minf:'70°'
    },];