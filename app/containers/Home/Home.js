import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Nav from '../../components/Nav/Nav';
import Jumbo from '../../components/Jumbo/Jumbo';
import {getMyData} from '../../utils/helpers';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myinfo:{}
        }
    }

    componentDidMount(){
        this.init()
    }

    init(){
        getMyData().then(function(data){
            console.log(data.data)
            this.setState({
                myinfo: data.data
            })
        }.bind(this));
    }

    render() {
        return (
            <div className="container">
                <Nav  />
                <Jumbo myinfo={this.state.myinfo} />
            </div>
        )
    }
}

export default Home
