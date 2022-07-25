



const initState = {
    loading:false,
    error:false,
    products:[]
}


export const productReducer = (state = initState, action)=>{
    switch(action.type){
        case "IS_LOADING":
            return {...state, loading:true}
        case "STORE_DATA":
            return {...state, products:action.payload}
        case "IS_ERROR":
            return {...state, loading:false,error:true}

        default : return state
    }
}