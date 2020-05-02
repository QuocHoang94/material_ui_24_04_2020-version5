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
import * as taskActions from './../../actions/task';
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';
import renderSelectField from '../../components/FormHelper/Select';
import { MenuItem } from '@material-ui/core';
class TaskForm extends Component {
    handleSubmitForm = (data) => {
        console.log('data:', data);
        const { taskActionsCreators,taskEditing } = this.props;
        const { addTask,updateTask } = taskActionsCreators;
        const { title, description,status } = data;
        if(taskEditing && taskEditing.id){
            updateTask(title,description,status);
        }else{
            addTask(title,description);
        }
        // addTask(title, description);
    }
    required = (value) => {
        let error = 'vui long nhap tieu de';
        if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
            error = null;

        }
        return error;
    }
    minLength5 = (value) => {
        let error = null;
        if (value.length < 5) {
            error = 'Tieu de phai tu 5 ky tu';
        }
        return error;
    }
    renderStatusSelection = () => {
        let xhtml = null;
        const { taskEditing, classes } = this.props;
        if (taskEditing && taskEditing.id) {
            xhtml = (
                <Field
                    id="status"
                    label="Trang Thai"
                    className={classes.select}
                    name="status"
                    component={renderSelectField}
                >
                <MenuItem value={0}>READY</MenuItem>
                <MenuItem value={1}>INPROGRESS</MenuItem>
                <MenuItem value={2}>COMPLETED</MenuItem>
                </Field>
            )
        }
        return xhtml;
    }
    render() {
        console.log('this.props:,', this.props);
        const { classes,
            modalActionCreators,
            handleSubmit,
            invalid,
            submitting,
            // taskEditing
        } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>

                <Grid container >
                    <Grid item md={12}>
                        <Field
                            id="title"
                            label="Tieu de"
                            className={classes.textField}
                            margin="normal"
                            name="title"
                            component={renderTextField}
                            validate={[this.required, this.minLength5]}
                            // value={taskEditing ? taskEditing.title : ''}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            id="description"
                            label="Mo Ta"
                            multiline
                            rowsMax="4"
                            className={classes.textField}
                            margin="normal"
                            name="description"
                            component={renderTextField}
                            // value={taskEditing ? taskEditing.description : ''}
                        />
                    </Grid>
                    {this.renderStatusSelection()}


                    <Grid item md={12}>
                        <Box flexDirection="row-reverse" display="flex" mt={2}>
                            <Button variant="contained" onClick={hideModal}>Cancel</Button>
                            <Box ml={1}>
                                <Button disabled={invalid || submitting}
                                    variant="contained" color='primary' type='submit'>Save</Button>
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
    taskActionsCreators: PropTypes.shape({
        addTask: PropTypes.func,
        updateTask: PropTypes.func,
    }),
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    taskEditing: PropTypes.object
}

const mapStateToProps = state => {
    return {
        taskEditing: state.task.taskEditing,
        initialValues: {
            title: state.task.taskEditing ? state.task.taskEditing.title : null,
            description: state.task.taskEditing ? state.task.taskEditing.description : null,
            status: state.task.taskEditing ? state.task.taskEditing.status : null,
        },
    }
};
const mapDispatchToProps = dispatch => {
    return {
        modalActionCreators: bindActionCreators(modalActions, dispatch),
        taskActionsCreators: bindActionCreators(taskActions, dispatch)
    };
};

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(TaskForm);