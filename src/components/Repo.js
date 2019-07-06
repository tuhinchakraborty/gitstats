import React, {Component} from 'react';
import '../App.css';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GithubChart from "./GithubChart";

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

    state = {
        displayCharts: false
    };

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
                            <Button color="primary" onClick={() => this.setState({
                                displayCharts: !this.state.displayCharts
                            })}>Details</Button>
                        </Paper>
                        {this.state.displayCharts ? <GithubChart fullName={this.props.content.full_name}/> : null}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Repo;