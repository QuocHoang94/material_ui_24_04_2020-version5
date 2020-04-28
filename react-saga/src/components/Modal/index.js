import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Modal } from '@material-ui/core';
import * as modalActions from '../../actions/modal';
import styles from './styles';
class CommonModal extends Component {
    render() {
        const { classes, open, component, modalActionCreators, title } = this.props;
        // const {hideModal} = modalActionCreators;
        return (
            <Modal open={open} >
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>
                            {title}
                        </span>
                        <CloseIcon className={classes.icon}  />
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        )
    }
}
CommonModal.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    title:PropTypes.string,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
    component: PropTypes.object
}

const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title:state.modal.title
});
const mapDispatchToProps = dispatch => {
    modalActionCreators: bindActionCreators(modalActions, dispatch)
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect
)(CommonModal);
