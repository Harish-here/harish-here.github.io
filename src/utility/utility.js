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

export function isEmptyObject(obj){
    return isObject(obj) && Object.keys(obj).length === 0
}
////---
export function formatDate(obj = new Date()){
    let month = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec"
    }

    return obj.getDate() + " " + month[obj.getMonth()] + " " + obj.getFullYear()
}
//array utility
export function spliceArray(arr,element){

     arr.splice(arr.indexOf(element),1)
     return arr
}
//error throw
export function throwError(str){
    if(isEmptyString(str)) return false
    throw new Error(str) 
}