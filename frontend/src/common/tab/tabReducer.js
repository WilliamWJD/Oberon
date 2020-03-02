const INITAL_STATE={selected:'', visible:{}}

export default (state = INITAL_STATE, action)=>{
    switch(action.type){
        case 'TAB_SELECTED':
            return {...state, selected: action.payload}
        case 'TAB_SHOWED':
            return {...state, visible: action.payload}  
        default:
            return state    
    }
}