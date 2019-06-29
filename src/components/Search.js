import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

class Search extends Component {
    render() {
        const useStyles = makeStyles(theme => ({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            dense: {
                marginTop: theme.spacing(2),
            },
            menu: {
                width: 200,
            },
        }));

        return (
            <div>
                <TextField
                    id="outlined-search"
                    label="username"
                    type="search"
                    className={useStyles.textField}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        );
    }
}

export default Search;