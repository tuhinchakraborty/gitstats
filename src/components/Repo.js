import React, {Component} from 'react';

class Repo extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.content.full_name}</h3>
            </div>
        );
    }
}

export default Repo;