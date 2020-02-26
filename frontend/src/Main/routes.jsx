import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashbord from '../dashbord/dashbord'
import BillingCycle from '../billingCycle/billingCycle'

export default props=>(
    <Router history={hashHistory}>
        <Route path="/" component={Dashbord}/>
        <Route path="/billingCycles" component={BillingCycle}/>
        <Redirect from="*" to="/" />
    </Router>
)