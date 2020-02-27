import api from '../services/api'

export function getSummary(){
    const response = api.get('/billingCycles/summary')
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: response
    }
}