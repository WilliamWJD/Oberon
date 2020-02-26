import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashbord extends Component {
    render(){
        return(
            <div>
                <ContentHeader title="Dashbord" small="Versão 1.0"/>
                <Content>
                    Dashbord
                </Content>
            </div>
        )
    }
}

export default Dashbord