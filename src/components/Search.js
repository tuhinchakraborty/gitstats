import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ReposList from "./ReposList";
import '../App.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
    amber, blue,
    blueGrey,
    brown,
    deepOrange,
    deepPurple,
    green,
    grey,
    lightGreen,
    lime,
    purple,
    red
} from "@material-ui/core/colors";
import { ThemeProvider } from '@material-ui/styles';

class Search extends Component {

    state = {
        searchText: "",
        allRepos: [],
        ownedRepos:[],
        showForkedRepos: false
    };

    handleSubmit = () => {
        if (this.state.searchText !== "") {
            let userReposJson = fetch("https://api.github.com/users/" + this.state.searchText + "/repos")
                .then(response => response.json());

            userReposJson.then(json => {
                    this.setState({
                        allRepos: json
                    })
                });

            userReposJson.then(json => json.filter(obj => !JSON.parse(obj.fork)))
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
        const limeTheme = createMuiTheme({
            palette: {
                primary: lime,
            },
        });
        const blueTheme = createMuiTheme({
            palette: {
                primary: blue,
            },
        });
        return (
            <div>
                <div className="div">
                    <ThemeProvider theme={limeTheme}>
                        <TextField
                            inputProps={{ style: { fontFamily: 'Geneva', color: 'white'}}}
                            style={{ flex: 1, margin: '0 20px 10px 0', color: 'white'}}
                            error={this.state.searchText === ""}
                            id="outlined-search"
                            label="username"
                            type="search"
                            margin="normal"
                            variant="outlined"
                            onChange={event => this.handleChange(event)}
                        />
                    </ThemeProvider>
                    <ThemeProvider theme={blueTheme}>
                        <Button variant="contained" color="primary" onClick={() => this.handleSubmit()}>
                            Submit
                        </Button>
                    </ThemeProvider>
                </div>
                <div className="switch">
                    <FormControlLabel
                        value="forked"
                        control={
                            <ThemeProvider theme={limeTheme}>
                                <Switch color="primary" onChange={() => this.handleSwitchChanged()}/>
                            </ThemeProvider>
                        }
                        labelPlacement="end"
                    />
                    <h4>Show Forked</h4>
                </div>
                <div>
                    <ReposList repos={this.state.showForkedRepos ? this.state.allRepos : this.state.ownedRepos}/>
                </div>
            </div>
        );
    }
}

export default Search;