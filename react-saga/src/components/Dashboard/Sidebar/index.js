import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Drawer from '@material-ui/core/Drawer';
import { ADMIN_ROUTES } from './../../../constants/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }
    toggleDrawer = (value) => {
        this.setState({
            open: value
        })
    }
    renderList() {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <div className={classes.list}>
                <List component="div">
                    {ADMIN_ROUTES.map(item => {
                        return (
                            <ListItem key={item.path} className={classes.menuItem} button>
                                {item.name}
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
        return xhtml;
    }
    render() {
        const { open } = this.state;
        const {classes} = this.props;
        return (
            <Drawer
                open={open}
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant='persistent'
            >
                {this.renderList()}
            </Drawer>
        )
    }
}
Sidebar.propTypes = {
    classes: PropTypes.object,
}
export default withStyles(styles)(Sidebar)