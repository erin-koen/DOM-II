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
    e.target.style.display = 'none';
});

aboutUsLink.addEventListener('mousedown', e => {
    e.target.style.color = 'red';
});

blogLink.addEventListener('mouseup', e => {
    TweenMax.to(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut
    });
});

contactLink.addEventListener('dragend', e => {
    TweenMax.to(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut
    });
});

// image element assignent

const funBusImg = document.querySelector('.fun-bus-img');
const adventureImg = document.querySelector('.adventure-img');
console.log(adventureImg);
const funImg = document.querySelector('.fun-img');
console.log(funImg);
const destinationImg = document.querySelector('.destination-img');
console.log(destinationImg);

// assigning eventListeners to each image

funBusImg.addEventListener('load', e => {
    TweenMax.from(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut,
        repeat:2,
        yoyo:true,    
    });
});

adventureImg.addEventListener('mouseleave', e => {
    TweenMax.from(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut
    });
});

funImg.addEventListener('mouseenter', e => {
    TweenMax.to(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut
    });
});

destinationImg.addEventListener('dragstart', e => {
    TweenMax.to(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut
    });
});

// button element assignment

// NVM got rid of buttons
 
// Selecting text sections to mess around with nested eventlisteners and stopping propagation

let bigTxt = document.querySelector('.test-content');
let lilTxt = document.querySelector('.test-content h2');

console.log(bigTxt);
console.log(lilTxt);

bigTxt.addEventListener('cut', e => {
    e.target.style.border = '1px solid red';
});

lilTxt.addEventListener('cut', e => {
    e.stopPropagation();
    e.target.style.color = 'red';
})