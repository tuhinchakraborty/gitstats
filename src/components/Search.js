import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ReposList from "./ReposList";
import '../App.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Search extends Component {

    state = {
        searchText: "",
        userData: [],
        ownedRepos:[],
        showForkedRepos: false
    };

    handleSubmit = () => {
        if (this.state.searchText !== "") {
            fetch("https://api.github.com/users/" + this.state.searchText + "/repos")
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        userData: json
                    })
                });

            fetch("https://api.github.com/users/" + this.state.searchText + "/repos")
                .then(response => response.json())
                .then(json => json.filter(obj => !JSON.parse(obj.fork)))
                .then(json => {
                    this.setState({
                        ownedRepos: json
                    })
                });
        }
    };

    handleChange = event => {
        let eventTarget = event.target;
        this.setState({
            searchText: eventTarget.value
        })
    };

    handleSwitchChanged = () => {
        this.setState({
            showForkedRepos: !this.state.showForkedRepos,
        })
    }

    render() {
        return (
            <div>
                <div className="div">
                    <TextField
                        error={this.state.searchText === ""}
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
                    <FormControlLabel
                        value="forked"
                        control={<Switch color="primary" onChange={() => this.handleSwitchChanged()}/>}
                        label="Show Forked Repos"
                        labelPlacement="end"
                    />
                </div>
                <div>
                    <ReposList userData={this.state.showForkedRepos ? this.state.userData : this.state.ownedRepos}/>
                </div>
            </div>
        );
    }
}

export default Search;