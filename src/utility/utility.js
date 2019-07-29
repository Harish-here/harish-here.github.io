// bunch of utility functions

//string operation
export function stringClean(str){
    return String(str).trim()
}




//all check functions returns only boolean value
export function isString(str){
    return typeof str === "string"
}

export function isEmptyString(str){
    return stringClean(str).length === 0
}

export function isObject(obj){
    return stringClean(obj) === "[object Object]"
}

//error throw
export function throwError(str){
    if(isEmptyString(str)) return false
    throw new Error(str) 
}