'use strict';

const adjuster = document.getElementById('adjuster');

let meUpped = 0;
let result = 0;

adjuster.addEventListener('click', counter);



let PseudoBefore = window.getComputedStyle(adjuster, '::before');

let meUp = PseudoBefore.getPropertyValue('content');

function counter() {
   meUpped = meUpped+1;
   result = `'`+meUpped+`'`;


   document.querySelector(':root').style.setProperty('--contenter', result);
   return;

}

