import React, { Component } from 'react'
import { withStyles, Modal, Grid, Box } from '@material-ui/core'
import styles from './styles'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
class TaskForm extends Component {
    render() {
        const { open, classes, onClose } = this.props;
        return (
            <Modal open={true} onClose={onClose} >
                <div className={classes.modal}>
                    <form>
                        <Grid container >
                            <Grid item md={12}>
                                <TextField
                                    id="title"
                                    label="Tiêu đề"
                                    className={classes.textField}
                                    margin="normal"
                                    name="title"

                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    id="title"
                                    label="Tiêu đề"
                                    className={classes.textField}
                                    margin="normal"
                                    name="title"

                                />
                            </Grid>

                            <Grid item md={12}>
                                <Box flexDirection="row-reverse" display="flex" mt={2}>
                                    <Box ml={1}>
                                        <Button variant="contained" color='primary'>Save</Button>
                                    </Box>

                                    <Button variant="contained" onClick={onClose}>Cancel</Button>


                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        )
    }
}
TaskForm.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    onClose: PropTypes.func

}
export default withStyles(styles)(TaskForm)