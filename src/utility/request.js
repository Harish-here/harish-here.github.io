import request from 'superagent'
import { isEmptyString, isObject, throwError, isString } from '../utility/utility'

export async function post(url,param = {}){
    // check the arguments are valid
    if(!isString(url) || isEmptyString(url)){
        throwError('URL should be valid String')
        return
    }

    if(!isObject(param)){
        throwError("Parameters should be an object")
    }

    const data = await request.post(url).send({...param}) 
    return data
}

export async function get(url){
    // check the arguments are valid
    if(!isString(url) || isEmptyString(url)){
        throwError('URL should be valid String and not be empty')
        return
    }

    const data = await request("get",url) 
    return data
    
}