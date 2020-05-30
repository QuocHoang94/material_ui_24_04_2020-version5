import React, { Component } from 'react';
import { withStyles, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import styles from './style';
import { Link } from 'react-router-dom';
class SignupPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.signup}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Đăng ký tài khoản
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
                                <TextField
                                    id="cpassword"
                                    label="Confirm Password"
                                    className={classes.TextField}
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                >
                                </TextField>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="agree"
                                        />}
                                    label="Đồng ý điều khoản"
                                    className={classes.fullWidth}
                                >

                                </FormControlLabel>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    type="submit"
                                >Signup
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/login">
                                        <Button>Đã có tài khoản?</Button>
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
SignupPage.propTypes = {
    classes: PropTypes.object,
}
export default withStyles(styles)(SignupPage);