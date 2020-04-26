import React, { Component } from 'react'
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TaskItem from '../TaskItem';
class TaskList extends Component {
    render() {
        const { classes,status,task } = this.props;
        return (
            <Grid key={task.id} item md={4} xs={12}>
                <div className={classes.status}>
                    <Box mt={2} mb={2}><div className={classes.status}>{status.label}</div></Box>
                </div>
                <div className={classes.warpperListTask}>{
                    task.map(task => {
                        const { title } = task;
                        return (
                           <TaskItem task={task} status={status} key={task.id}/>
                        )
                    })
                }</div>
            </Grid>
        )
    }
}
export default withStyles(styles)(TaskList)