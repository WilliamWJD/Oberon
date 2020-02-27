import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layoult/row'

class Dashbord extends Component {
    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashbord" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$: ${credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$: ${debt}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$: ${credit-debt}`} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  summary:state.dashbord.summary
});

export default connect(mapStateToProps)(Dashbord)