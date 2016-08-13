import React from 'react';
import Nav from '../../components/Nav/Nav';
import {getProjectInfo} from '../../utils/helpers';

class Profile extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        projectInfo:[]

    }
}

    componentDidMount(){
        this.init()

    }

    init() {
        getProjectInfo(this.props.params.projectId)
            .then(function(data) {
                this.setState({
                    projectInfo: data.data
                })
            }.bind(this))
    }

    render(){
        let imgUrl = this.state.projectInfo.link ? this.state.projectInfo.link : "";
        let backgroundStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        };

        return (
            <div>
                <div className="cover cover--02 js-cover" style={backgroundStyle}>
                    <div className="container cover__container--02">
                        <div className="cover__pic_box--02"></div>
                        <div className="cover__text_box--02">
                            <h2 className="cover__title--02">
                                <span className="cover__title_text--02">{this.state.projectInfo.name}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
