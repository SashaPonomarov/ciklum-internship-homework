"use strict";

function isObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

function deepExtend(target) {
    if (!isObject(target)) throw new TypeError('Target is (' + target + '), not an Object')
    for (let i = 1; i < arguments.length; i++)
        {
            let from = arguments[i]
            if (!isObject(from)) throw new TypeError('Argument ' + (i+1) + ' is (' + from + '), not an Object')
            Object.keys(from).forEach(function(key) {
                if (isObject(target[key]) && isObject(from[key])) {
                    deepExtend(target[key], from[key])
                }
                else {
                    target[key] = from[key]
                }
            })
        }
    return target
}

module.exports = deepExtend