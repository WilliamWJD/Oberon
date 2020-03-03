import api from '../services/api'
import { toastr } from 'react-redux-toastr'

export function getList(){
    const response=api.get('/billingCycles')
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: response
    }
}

export function create(values){
    api.post('/billingCycles', values)
        .then(resp=>{
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return{
        type: 'TEMP'
    }
}