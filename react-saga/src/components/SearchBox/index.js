import React, { Component } from 'react'
import styles from './styles';
import { withStyles, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
class SearchBox extends Component {
    render() {
        const { classes, handeChange } = this.props;
        return (
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        autoComplete='off'
                        className={classes.textField}
                        onChange={handeChange}
                        margin='normal'
                        placeholder="Enter your key"
                    />
                </form>
            </div>
        )
    }
}
SearchBox.propTypes = {
    classes: PropTypes.object,
    handeChange: PropTypes.func
}
export default withStyles(styles)(SearchBox);