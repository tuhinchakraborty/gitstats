import React, {Component} from 'react';
import '../App.css';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        flexGrow: 0,
        height: 100,
        width: 300,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

class Repo extends Component {
    render() {
        return (
            <Grid container className={useStyles.root} spacing={5}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Paper className={useStyles.paper}>
                            <Typography color="textPrimary">
                                {this.props.content.full_name}
                            </Typography>
                            <Typography color="textSecondary">
                                {this.props.content.description}
                            </Typography>
                            <Button color="primary" onClick={() => console.log(this.props.content.full_name)}>Details</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Repo;