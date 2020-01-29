const BillingCycle=require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators:true})

BillingCycle.route('count',(req,res,nex)=>{
    BillingCycle.count((error, value)=>{
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json({value})
        }
    })
})

module.exports=BillingCycle