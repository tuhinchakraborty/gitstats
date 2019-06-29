import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';

class Search extends Component {

    state = {
        searchText: ""
    };

    handleChange = (event) => {
        let eventTarget = event.target;
        this.setState({
            searchText: eventTarget.value
        })
    };

    render() {
        return (
            <div>
                <TextField
                    id="outlined-search"
                    label="username"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    onChange={event => this.handleChange(event)}
                />
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        );
    }
}

export default Search;