import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Thumbnails from '../../reuseable/thumbnails';
import { connect } from 'react-redux';
import Moment from "moment";
import Link from 'next/link';
import CardActionIcons from "../../post/components/CardActionIcons";

const styles = theme => ({
  card: {
		margin: '2px 5%',
    boxShadow: "0px 0px 0px 0px",
    backgroundColor: 'navajowhite'
  },
  actions: {
		display: 'flex',
		padding: "0px 25px"
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    // marginLeft: 'auto',
    marginRight: "2%",
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  badge: {
    top: 0,
    right: -19,
    width: 27,
    height: 27,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  iconspacing: {
    margin: '0 3%',
    [theme.breakpoints.down('xs')]: {
      margin: '0 1%',
    },
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class SiteAbout extends React.Component {
  render() {
    const { classes, data, token } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Link href={"/profile/@" + data.siteTopic[0].user[0].username}>
              <a style={{ textDecoration: 'none' }}>
                <Thumbnails borderColor="black" borderWidth={2} name={data.siteTopic[0].user[0].username} />
              </a>
            </Link>
          }
          title={
            <Link href={"/profile/@" + data.siteTopic[0].user[0].username} >
              <a style={{ color: '#1F7BD8', textDecoration: 'none' }}>
                <strong style={{ color: 'gray' }}>@</strong>
                {typeof data.siteTopic[0].user[0] !== "undefined" ? `${data.siteTopic[0].user[0].username}` : "@No name"}
              </a>
            </Link>
          }
          subheader={
            <p style={{ fontSize: 10, margin: 0 }} >
              {Moment(data.siteTopic[0].created_at).fromNow()}
            </p>
          }
        />
        <CardContent style={{ padding: "0px 25px" }}>
          <Typography component="p" >
            {data.siteTopic[0].message}
          </Typography>
        </CardContent>

        <CardActionIcons
          votes={data.siteTopic[0].votes}
          comment={data.siteTopic[0].comment.length}
          topicId={data.siteTopic[0].id}
          token={token}
          topicObjId={data.siteTopic[0]._id}
        />
      </Card>
    );
  }
}

SiteAbout.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(SiteAbout));