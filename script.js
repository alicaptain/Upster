'use strict';

const adjuster = document.getElementById('adjuster');

let meUpped = 0;
let result = 0;
let meGrow = 100;
let meGrown;

adjuster.addEventListener('click', counter);



let PseudoBefore = window.getComputedStyle(adjuster, '::before');

let meUp = PseudoBefore.getPropertyValue('content');

function counter() {
   meUpped = meUpped+1;
   meGrow = meGrow+3;

   result = `'`+meUpped+`'`;
   meGrown = `scale(${meGrow}%)`;

   document.querySelector(':root').style.setProperty('--contenter', result);

   document.querySelector(':root').style.setProperty('--grower', meGrown);

   return;

}

