import { combineReducers } from 'redux'

import dashbordReducer from '../dashbord/dashbordReducer'
import tabReducer from '../common/tab/tabReducer'

const rootReducers = combineReducers({
    dashbord: dashbordReducer,
    tab: tabReducer
})

export default rootReducers