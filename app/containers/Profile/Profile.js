import React from 'react';
import Nav from '../../components/Nav/Nav';
import Posts from '../../components/Posts/Posts';
import {getPosts} from '../../utils/helpers';

class Profile extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        posts:[]

    }
}

    componentDidMount(){
        this.init()
    }

    init(){
        getPosts().then(function(data){
            console.log(data.data);
            this.setState({
                posts: data.data
            })
        }.bind(this));
    }

    render(){
        return (
            <div>
                <Nav />
                <Posts posts={this.state.posts}/>
                <h1> Hello From Profile </h1>
            </div>
        )
    }
}

export default Profile
