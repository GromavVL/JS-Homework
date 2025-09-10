'use strict';

function printNumbers(from, to, interval) {
    let current = from;

    const timer = setInterval(() => {
        console.log(current);
        if(current === to) {
            clearInterval(timer);
        }
        current++;
    }, interval);
}

printNumbers(1, 5, 1000);