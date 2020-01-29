const express=require('express')

const BillingCycle=require('../app/billingCycle/billingCycleServer')

module.exports=(server)=>{
    const router=express.Router()
    server.use('/api', router)

    BillingCycle.register(router, '/billingCycles')
}