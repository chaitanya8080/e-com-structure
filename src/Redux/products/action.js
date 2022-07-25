


export const handleLaoding = ()=>({
    type:"IS_LOADING"
})
export const storeData = (payload)=>({
    type:"STORE_DATA",
    payload
})

export const handleError = ()=>({
    type:"IS_ERROR"
})