import React, {Component} from 'react';
import '../App.css';
import GithubChart from "./GithubChart";
import Modal from "@material-ui/core/Modal";

class Repo extends Component {

    state = {
        displayCharts: false
    };

    handleOpen = () => {
        this.setState({
            displayCharts: !this.state.displayCharts
        })
    }

    handleClose = () => {
        this.setState({
            displayCharts: false
        })
    }

    render() {
        return (
            <div className="div">
                <div className="cards-list">
                    <div className="card" onClick={this.handleOpen}>
                        <div className="card_title title-slategray">
                            <p>{this.props.content.name}</p>
                        </div>
                        <div className="card_description title-darkgrey">
                            <p>{this.props.content.description}</p>
                        </div>
                        <div className="card_repo_language title-cadetblue">
                            <p>{this.props.content.language}</p>
                        </div>
                        <div>
                            <Modal open={this.state.displayCharts} onClose={this.handleClose}>
                                <div className="modal">
                                    <h1>{this.props.content.name}</h1>
                                    {this.state.displayCharts ?
                                        <GithubChart fullName={this.props.content.full_name}/> : null}
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repo;