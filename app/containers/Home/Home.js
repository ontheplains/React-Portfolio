import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Nav from '../../components/Nav/Nav';
import Jumbo from '../../components/Jumbo/Jumbo';
import Projects from '../../components/Projects/Projects';
import {getMyData, getMyProjects} from '../../utils/helpers';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myinfo:{},
            projectData:[]
        }
    }

    componentDidMount(){
        this.init()
    }

    init(){
        getMyData().then(function(data){
            this.setState({
                myinfo: data.data
            })
        }.bind(this));

        getMyProjects().then(function(data){
            this.setState({
                projectData: data.data
            })
        }.bind(this));
    }

    render() {
        return (
            <div className="container">
                <Nav  />
                <Jumbo myinfo={this.state.myinfo} />
                <Projects projectData={this.state.projectData}/>
            </div>
        )
    }
}

export default Home
