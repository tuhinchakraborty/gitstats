import React from 'react';
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

const Repo = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={5}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={50}>
                    <Paper className={classes.paper}>
                        <Typography color="textPrimary">
                            {props.content.full_name}
                        </Typography>
                        <Typography color="textSecondary">
                            {props.content.description}
                        </Typography>
                        <Button color="primary">Details</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Repo;