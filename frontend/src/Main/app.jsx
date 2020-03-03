import '../common/template/dependencies'
import React from 'react'

import Routes from './routes'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

export default props=>(
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Footer/>
        <Messages />
    </div>
)