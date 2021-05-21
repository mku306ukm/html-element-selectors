
//1.Single element selector
let element = document.getElementById('myfirst');
// element = element.className
// element = element.childNodes
// element = element.parentNode

element.style.color = 'red'
element.innerText = 'Ram is a good boy'
element.innerHTML = '<b>Ram is a good boy</b>'
// console.log(element);

let sel = document.querySelector('#myfirst4');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green'
// console.log(sel);

//multi element selector
 let elems = document.getElementsByClassName('child');
 elems = document.getElementsByTagName('div');
 console.log(elems);

 Array.from(elems).forEach(element => {
     console.log(Element);
     element.style.color = 'blue';
 });


