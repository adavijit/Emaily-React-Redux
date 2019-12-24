import React, { Component } from 'react'
import { BrowserRouter , Route} from 'react-router-dom'
import Header from './Header'
import {connect} from 'react-redux'
import * as actions from '../actions'
const Dashboard = () => <h2> Dashboard</h2>
const SurveyNew = () => <h2> SurveyNew</h2>
const Landing = () => <h2> Landing</h2>
require('../setupProxy')
export class App extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact={true} component={Landing} path="/"></Route>
                    <Route exact component={Dashboard} path="/surveys"></Route>
                    <Route component={SurveyNew} path="/surveys/new"></Route>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default connect(null,actions)(App)

