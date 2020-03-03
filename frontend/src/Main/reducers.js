import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastReducer } from 'react-redux-toastr'

import dashbordReducer from '../dashbord/dashbordReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducers = combineReducers({
    dashbord: dashbordReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastReducer
})

export default rootReducers