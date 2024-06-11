import { DECREMENT, INCREMENT } from "./constant"

export const inc = ()=>({
    type:INCREMENT, 
})
export const dec = ()=>({
    type:DECREMENT,
})