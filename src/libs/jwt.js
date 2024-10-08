import {TOKEN_SECRET} from '../config.js'
import jwt from 'jsonwebtoken'

export function createAccesToken(payload){
    return new Promise((resolve, reject)=> {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn:"id",
            },
            (err, token) => {
                if(err) reject(err)
                    resolve(token)
            }
        )
    })
}