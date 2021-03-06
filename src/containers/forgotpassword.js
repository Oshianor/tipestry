import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loginpath from '../components/forgot/forgotpath';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Hidden from '@material-ui/core/Hidden';



const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  }
});

class Login extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={5} xl={4} >
            <Loginpath />
          </Grid>
          <Hidden only={[ 'xs', 'sm' ]}>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={8} >
              <img src="/static/images/forget.png" width="100%" height="100%" />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Login);
export default compose(
  withStyles(styles),
  withWidth(),
)(Login);
