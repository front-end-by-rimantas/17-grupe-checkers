"use strict";

function renderBoard( data ) {
    console.log( data );

    const DOM = document.querySelector(data.selector);

    let HTML = '';
    // generuojame eiluts
    for ( let i=0; i<data.height; i++ ) {

        // generuojame eilutes celes
        let cellHTML = '';
        for ( let k=0; k<data.width; k++ ) {
            // nusprendziam kokia bus langelio spalva
            cellHTML += `<div class="cell ${ (i+k)%2 === 0 ? 'white' : 'black' }" style="width: ${100 / data.width}%;"></div>`;
        }

        // sugeneruotas celes iterpiame i eilute ir eilute prijungiame prie pilno HTML
        HTML += `<div class="row" style="height: ${100 / data.height}%;">${cellHTML}</div>`;
    }

    return DOM.innerHTML = HTML;
}