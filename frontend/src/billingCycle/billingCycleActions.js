import api from '../services/api'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const INITIAL_VALUES = {}

export function getList() {
    const response = api.get('/billingCycles')
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: response
    }
}

export function create(values) {
    return dispath => {
        api.post('/billingCycles', values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispath(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init(){
    return[
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}