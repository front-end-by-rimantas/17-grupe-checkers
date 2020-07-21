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
            let color = '';
            // if ( i % 2 === 0 ) {
            //     if ( k % 2 === 0 ) {
            //         color = 'white';
            //     } else {
            //         color = 'black';
            //     }
            // } else {
            //     if ( k % 2 === 0 ) {
            //         color = 'black';
            //     } else {
            //         color = 'white';
            //     }
            // }
            
            // if ( (i + k) % 2 === 0 ) {
            //     color = 'white';
            // } else {
            //     color = 'black';
            // }
            cellHTML += `<div class="cell ${ (i+k)%2 === 0 ? 'white' : 'black' }">${k}, ${i}</div>`;
        }

        // sugeneruotas celes iterpiame i eilute ir eilute prijungiame prie pilno HTML
        HTML += `<div class="row">${cellHTML}</div>`;
    }

    return DOM.innerHTML = HTML;
}