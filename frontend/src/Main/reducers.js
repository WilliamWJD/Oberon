import { combineReducers } from 'redux'

import dashbordReducer from '../dashbord/dashbordReducer'

const rootReducers = combineReducers({
    dashbord: dashbordReducer
})

export default rootReducers