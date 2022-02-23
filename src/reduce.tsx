export const initialState={
    name:'parth',
    age:25
}
type actionType={
    type:string
    payload:string
}

export const reducer=(state : typeof initialState,action:actionType)=>{

    if(action.type==='CHANGE_NAME'){
        return{
            ...state,
            name:action.payload
        }
    }
    if(action.type==='UPDATE_AGE'){
        return{
            ...state,
            name:action.payload
        }
    }


    return state

}