import React, {Component} from 'react';
import Repo from "./Repo";

class ReposList extends Component {
    render() {
        const repos = this.props.userData.map(content => <Repo key={content.id} content={content}/>);
        return (
            <div>
                {repos}
            </div>
        );
    }
}

export default ReposList;