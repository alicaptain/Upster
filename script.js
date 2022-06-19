'use strict';

const adjuster = document.getElementById('adjuster');


adjuster.addEventListener('click', counter);



let PseudoBefore = window.getComputedStyle(adjuster, '::before');

let meUp = PseudoBefore.getPropertyValue('content');

function counter() {

   let meUpped = 36;

   document.querySelector(':root').style.setProperty('--contenter', meUpped);


}

