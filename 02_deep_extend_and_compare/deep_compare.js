"use strict";

function isObject (obj) {
    return obj != null && typeof obj === 'object';
}

function deepCompare(first, second) {
    if (first === second) {
        return true;
    }

    if ((isObject(first)) && (isObject(second))) {
        for (let key in first) {
            if(!deepCompare(first[key], second[key])) {return false};
        }
    }
    else {
        return false;
    }
    return true;
}

module.exports = deepCompare;