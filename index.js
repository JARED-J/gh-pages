"use strict";

function setActive() {
    // Expands or collapses nav hamburger menu on mobile/tablet screens
    let items = document.getElementsByClassName("item");
    for (let i = 0;i < items.length; i++){
        items[i].classList.contains('active') ?
        items[i].classList.remove('active') :
        items[i].classList.add('active');
    }
}
