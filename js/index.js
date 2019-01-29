// Your code goes here

// nav link element assignment - creating an array-like object of the individual links then breaking them out

const navLinks = document.querySelectorAll('.nav a');
const homeLink = navLinks[0];
const aboutUsLink = navLinks[1];
const blogLink = navLinks[2];
const contactLink = navLinks[3];

// assigning eventListeners to each link
console.log(navLinks);
homeLink.addEventListener('mouseover', e => {
    homeLink.style.display = 'none';
});

aboutUsLink.addEventListener('mousedown', e => {
    aboutUsLink.style.color = 'red';
});

blogLink.addEventListener('mouseup', e => {

});

contactLink.addEventListener('drag / drop', e => {

});

// image element assignent

const funBusImg = document.querySelector('.fun-bus-img');
const adventureImg = document.querySelector('adventure-img');
const funImg = document.querySelector('fun-img');
const destinationImg = document.querySelector('destination-img');

// assigning eventListeners to each image

funBusImg.addEventListener('load', e => {

});

funBusImg.addEventListener('focus', e => {

});

funBusImg.addEventListener('resize', e => {

});

funBusImg.addEventListener('dragstart', e => {

});

// button element assignment

const signUpBtns = document.querySelectorAll('.btn');
console.log(signUpBtns);

signUpBtns[0].addEventListener('select', e => {

});

signUpBtns[1].addEventListener('dbclick', e => {

});

signUpBtns[2].addEventListener('contextmenu', e => {

});
