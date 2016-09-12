"use strict";

function isObject (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

function deepExtend(target) {
    for (let i = 1; i < arguments.length; i++)
        {
            let from = arguments[i]
            Object.keys(from).forEach(function(key) {
                if (isObject(target[key]) && isObject(from[key]))
                {
                    deepExtend(target[key], from[key])
                }
                else
                {
                    target[key] = from[key]
                }
            })
        }
    return target
}

module.exports = deepExtend