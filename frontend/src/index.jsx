import React from 'react'
import ReactDOM from 'react-dom'
import App from './Main/app'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './Main/reducers'

const store=createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))
