import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import styles from './style';
import {Link} from 'react-router-dom';
class LoginPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng nhập để tiếp tục
                                    </Typography>
                                </div>
                                <TextField
                                    id="email"
                                    label="Email"
                                    className={classes.TextField}
                                    fullWidth
                                    margin="normal"
                                >
                                </TextField>
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.TextField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >Login
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/signup">
                                        <Button>Đăng kí tài khoản mới</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
LoginPage.propTypes = {
    classes: PropTypes.object,
}
export default withStyles(styles)(LoginPage);