import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';



// components
import Thumbnails from '../reuseable/thumbnails';
import CardActionsIcons from './components/CardActionIcons';




// icons

// outlined
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlined from '@material-ui/icons/ChatBubbleOutlineOutlined';



// filled
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubble from '@material-ui/icons/ChatBubble';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


// static icons svg
// import Comments from "/stat"

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
    borderTop: '.5px solid gray'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
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
    margin: '0 8px'
  }
});

class Post extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    console.log(this.state);
    
    return (
      <Grid container justify="center">
        <Grid
          container
          className={classes.demo}
          alignItems="center"
          justify="center"
        >
          {
            [0,1,2,3,4,5, 6, 7, 8, 9].map((test) => (
              <Grid item style={{ margin: "5px" }}>
                <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Thumbnails />
                  }
                  action={
                    <React.Fragment>
                      <Button variant="outlined" size="small" color="primary" className={classes.button}>
                        Follow
                      </Button>
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </React.Fragment>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image="/static/images/login.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                </CardContent>

                  {/* card action icons */}
                  <CardActionsIcons 
                    handleExpandClick={this.handleExpandClick.bind(this)} 
                    expanded={expanded} 
                  />


                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                      minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                      heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                      chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                      salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                      minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                      without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                      to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                      cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))
          }
        </Grid>
      </Grid>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);