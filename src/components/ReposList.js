import React, {Component} from 'react';
import Repo from "./Repo";
import '../App.css';

class ReposList extends Component {
    render() {
        const repos = this.props.userData.map(content => <Repo key={content.id} content={content}/>);
        return (
            <div className="RepoList">
                {repos}
            </div>
        );
    }
}

export default ReposList;