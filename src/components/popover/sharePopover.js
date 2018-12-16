

















import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FileCopy from '@material-ui/icons/FileCopy';

const styles = theme => ({
  root: {
    // flexGrow: 1,
    
  },
  paper: {
    maxWidth: 400,
    overflow: 'auto',
    padding: 10,
    borderRadius: 18,

  },
  iconspacing: {
    top: -14,
    margin: '0 3%',
    [theme.breakpoints.down('xs')]: {
      margin: '0 1%',
    },
  },
  popper: {
    zIndex: 1,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '17em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '17em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.common.white} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
      },
    },
  },
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  social: {
    margin: "20px 5px"
  }
});

class AnchorPlayground extends React.Component {
  state = {
    arrow: true,
    arrowRef: null,
    disablePortal: false,
    flip: true,
    open: false,
    placement: 'top',
    preventOverflow: 'scrollParent',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleChangeTarget = key => event => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleClickButton = node => event => {
    this.setState(state => ({
      open: !state.open,
      arrowRef: node,
    }));
  };

  openFace = () => {

  }

  render() {
    const { classes } = this.props;
    const { open, placement, disablePortal, flip, preventOverflow, arrow, arrowRef } = this.state;

    const id = open ? 'Share' : null;

    return (
      <div className={classes.iconspacing} >
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-label="Share" 
          aria-describedby={id}
          onClick={this.handleClickButton('arrow')}
          
        >
          <ShareIcon />
        </IconButton>
        <Popper
          id={id}
          open={open}
          anchorEl={this.anchorEl}
          placement={placement}
          disablePortal={disablePortal}
          className={classes.popper}
          modifiers={{
            flip: {
              enabled: flip,
            },
            arrow: {
              enabled: arrow,
              element: arrowRef,
            },
            preventOverflow: {
              enabled: preventOverflow !== 'disabled',
              boundariesElement:
                preventOverflow === 'disabled' ? 'scrollParent' : preventOverflow,
            },
          }}
        >
          {arrow ? <span className={classes.arrow} ref={this.handleArrowRef} /> : null}
          <Paper className={classes.paper}>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://tipestry.com" target="_blank" className={classes.social} >
              <img src="/static/social/facebook.png" width="25" height="25" />
            </a>
            <a href="https://twitter.com/share?text=visit&amp;url=https://tipestry.com" target="_blank" className={classes.social}>
              <img src="/static/social/twitter.png" width="25" height="25" />
            </a>
            <FileCopy style={{ cursor: 'pointer', color: 'red' }} />
          </Paper>
        </Popper>
      </div>
    );
  }
}

AnchorPlayground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnchorPlayground);
