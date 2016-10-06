import React, {Component} from 'react'
import { Router, Route, browserHistory, Link } from 'react-router'
import First from './First'
import Second from './Second'


// const First = () => <div>Hello World!<Link to="second">Second</Link></div>
// const Second = () => <div>Second<Link to="/">First</Link></div>

export default class App extends Component {
    render(){
        return (
              <Router history={browserHistory}>
                <Route path='/' component={First} />
                <Route path='second' component={Second} />
              </Router>
            )
    }
}
