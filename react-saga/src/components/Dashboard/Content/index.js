import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles';
class Content extends Component {
    render() {
        return (
            <div>
                Dashboard
            </div>
        )
    }
}
export default withStyles(styles)(Content)