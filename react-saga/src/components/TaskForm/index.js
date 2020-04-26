import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class TaskForm extends Component {
    render() {
        return (
            <Dialog open={false} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Them moi cong viec</DialogTitle>
                <DialogContent>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Cancel
                    </Button>
                    <Button color="primary">
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
export default withStyles(styles)(TaskForm)