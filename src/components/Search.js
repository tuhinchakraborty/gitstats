import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ReposList from "./ReposList";
import '../App.css';

class Search extends Component {

    state = {
        searchText: "",
        userData: []
    };

    handleSubmit = () => {
        fetch("https://api.github.com/users/" + this.state.searchText + "/repos")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    userData: json
                })
            });
    };

    handleChange = event => {
        let eventTarget = event.target;
        this.setState({
            searchText: eventTarget.value
        })
    };

    render() {
        return (
            <div>
                <div className="div">
                    <TextField
                        id="outlined-search"
                        label="username"
                        type="search"
                        margin="normal"
                        variant="outlined"
                        onChange={event => this.handleChange(event)}
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={() => this.handleSubmit()}>
                        Submit
                    </Button>
                </div>
                <div>
                    <ReposList userData={this.state.userData}/>
                </div>
            </div>
        );
    }
}

export default Search;