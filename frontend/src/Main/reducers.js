import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    dashbord: ()=>({summary: {credit:100, debt:50}})
})

export default rootReducers