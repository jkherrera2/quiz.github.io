function showHiddenDiv() {
    var hiddenDiv = document.getElementById('hiddenDiv');
    
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
}

function exitLetter() {
    var hiddenDiv = document.getElementById('hiddenDiv');
    
    if (hiddenDiv.style.display === 'block') {
        hiddenDiv.style.display = 'none';
    } else {
        hiddenDiv.style.display = 'block';
    }
}

var b = document.querySelector('button.no');
b.addEventListener("mouseover", no);

function no(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.left = i + "px";
    b.style.top = j + "px";
}

// Make the "no" button unclickable
document.querySelector('button.no').addEventListener('click', function(event) {
    event.preventDefault();
});

const open_btn = document.querySelector('.yes');
const close_btn = document.querySelector('.close');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');

open_btn.addEventListener('click', () => {
    popup.style.display = 'flex';
    main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

close_btn.addEventListener('click', () => {
    main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
});

window.addEventListener('click', (e) => {
    if(e.target == document.querySelector('.popup-overlay')){
        main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';

        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const blackout = document.querySelector(".blackout");
    
    blackout.addEventListener("animationend", function() {
        blackout.style.display = "none";
    });
});




