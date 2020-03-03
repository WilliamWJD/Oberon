import React from 'react'
import ReactDOM from 'react-dom'
import App from './Main/app'

import { applyMiddleware ,createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import reducers from './Main/reducers'

const store=applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))
