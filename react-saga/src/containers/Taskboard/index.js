import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import SearchBox from '../../components/SearchBox';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import TaskForm from '../../containers/TaskForm';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import styles from "./styles";
import { Modal, Box } from '@material-ui/core'

class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    componentDidMount() {
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }
    handleEditTask = (task) => {
        const { taskActionCreators, modalActionCreators } = this.props;
        const { setTaskEditing } = taskActionCreators;
        setTaskEditing(task);
        const {
            showModal,
            changeModalTitle,
            changeModalContent
        } = modalActionCreators;
        showModal();
        changeModalTitle('Cap nhat cong viec');
        changeModalContent(<TaskForm />)
    }

    handleDeleteTask = (task) => {
        const { id } = task;
        const { taskActionCreators } = this.props;
        const { deleteTask } = taskActionCreators;
        deleteTask(id);
    }
    showModalDeleteTask = (task) => {
        const { taskActionCreators, modalActionCreators, classes } = this.props;
        const {
            showModal,
            hideModal,
            changeModalTitle,
            changeModalContent
        } = modalActionCreators;
        showModal();
        changeModalTitle('Xoa cong viec');
        changeModalContent(
            <div className={classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Ban chac chan muon xoa
                <span className={classes.modalConfirmTextBold}>{task.title}</span>?
                </div>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                        <Button variant="contained" onClick={hideModal}>No</Button>
                    </Box>
                    <Box ml={1}>
                        <Button variant="contained" color="primary" onClick={() => this.handleDeleteTask(task)}>
                            Yes
                        </Button>
                    </Box>
                </Box>
            </div>
        )
    }
    renderBoard = () => {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value)
                        return <TaskList
                            key={status.value}
                            task={taskFilter}
                            status={status}
                            onClickEdit={this.handleEditTask}
                            onClickDelete={this.showModalDeleteTask}
                        />
                    })
                }
            </Grid>
        );
        return xhtml;
    }
    renderForm = () => {
        let xhtml = null;
        xhtml = (
            <TaskForm />
        )
        return xhtml;
    }
    showToast = () => {
        toast.error('Thanh cong nha nha')
    }
    loadData = () => {
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }
    handeFilter = (e) => {
        console.log('e', e);
        const { value } = e.target;
        const { taskActionCreators } = this.props;
        const { filterTask } = taskActionCreators;
        filterTask(value);
    }
    renderSearchBox = () => {
        let xhtml = null;
        xhtml = (
            <SearchBox handeChange={this.handeFilter} />
        );
        return xhtml;
    }
    openForm = () => {
        // them moi cong viec
        const { modalActionCreators, taskActionCreators } = this.props;
        const { setTaskEditing } = taskActionCreators;
        setTaskEditing(null);
        const { showModal, hideModal, changeModalTitle, changeModalContent } = modalActionCreators;
        showModal();
        changeModalTitle('Them moi cong viec');
        changeModalContent(<TaskForm />)
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => this.openForm()}>
                    <AddIcon /> Them moi cong viec
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => this.loadData()}>
                    Load Data
                </Button>
                {/* <Box ml={1}><Button variant="contained" color="primary" onClick={() => this.showToast()}>showToast</Button></Box> */}
                {this.renderSearchBox()}
                {this.renderBoard()}

                {/* renden thua form input */}
                {/* {this.renderForm()} */}
            </div>
        )
    }
}
TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
        setTaskEditing: PropTypes.func,
        deleteTask: PropTypes.func
    }),
    modalActionCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func
    }),
    listTask: PropTypes.array
}
const mapStateToProps = state => {
    return {
        listTask: state.task.listTask
    }
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
        modalActionCreators: bindActionCreators(modalActions, dispatch)
    }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
