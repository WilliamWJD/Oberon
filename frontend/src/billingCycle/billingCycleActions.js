import api from '../services/api'

export function getList(){
    const response=api.get('/billingCycles')
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: response
    }
}

export function create(values){
    api.post('/billingCycles', values)
    return{
        type: 'TEMP'
    }
}