import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Nav from '../../components/Nav/Nav';
import Jumbo from '../../components/Jumbo/Jumbo';
import {usersBlogData} from '../../utils/helpers';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData:[]
        }
    }

    componentDidMount(){
        this.init()
    }

    init(){
        usersBlogData().then(function(data){
            this.setState({
                blogData: data.data
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
