import React from 'react'
import ReactDOM from 'react-dom'
import App from './Main/app'

import { applyMiddleware ,createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './Main/reducers'

const store=applyMiddleware(multi, thunk, promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))
