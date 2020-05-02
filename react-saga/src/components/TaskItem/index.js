import React, { Component } from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
class TaskItem extends Component {
    render() {
        const { classes, task, status,onClickEdit,onClickDelete } = this.props;
        const { id, title } = task;
        return (
            <Card key={id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            {title}
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    <p>{task.description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    {/* Event edit  */}
                    <Fab 
                    color="primary" 
                    aria-label="edit" 
                    size="small"
                    onClick={onClickEdit}
                    >
                        <Icon fontSize='small'>edit_icon</Icon>
                    </Fab>
                    {/* Event edit  */}
                    <Fab color="primary" aria-label="edit" size="small" onClick={onClickDelete}>
                        <Icon fontSize='small'>delete_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}
TaskItem.propTypes = {
    classes: PropTypes.object,
    task: PropTypes.object,
    status: PropTypes.object,
    onClickEdit: PropTypes.func,
    onClickDelete:PropTypes.func
}

export default withStyles(styles)(TaskItem);