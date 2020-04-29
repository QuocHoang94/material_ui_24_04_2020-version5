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
import CloseIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from './../../actions/modal';
class TaskForm extends Component {
    onClose = () => {

    }
    render() {
        const { classes, modalActionCreators } = this.props;
        const { hideModal } = modalActionCreators;
        return (
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
                            label="Mô Tả"
                            className={classes.textField}
                            margin="normal"
                            name="title"

                        />
                    </Grid>

                    <Grid item md={12}>
                        <Box flexDirection="row-reverse" display="flex" mt={2}>
                            <Button variant="contained" onClick={hideModal}>Cancel</Button>
                            <Box ml={1}>
                                <Button variant="contained" color='primary'>Save</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        )
    }
}
TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
    return {
        modalActionCreators: bindActionCreators(modalActions, dispatch),
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect
)(TaskForm);