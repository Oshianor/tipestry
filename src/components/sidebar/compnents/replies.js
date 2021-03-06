import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Thumbnails from '../../reuseable/thumbnails';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/EditRounded';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Link from 'next/link';
import { connect } from 'react-redux';
import Moment from "moment";
import axios from 'axios';
import { config } from '../../../../config';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Lang } from '../../../../lang';
import Linkify from 'linkifyjs/react';
import Replycompose from './replycompose';
import ThumbComment from "./thumbComment";
import CommentCoin from "./commentCoin";
import TopicCoins from "./topicCoins";

const styles = theme => ({
	semicard: {
		marginLeft: '10%',
		marginTop: 5,
		// boxShadow: '0px 1px 2px -1px',
		boxShadow: "1px 4px 0px -4px",
    // backgroundColor: "white",
    // backgroundColor: "rgb(230, 236, 240)",
		borderRadius: 5
	},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
	},
	time: {
		fontSize: 12,
		margin: "0px 1"
	},
  actions: {
		display: 'flex',
		padding: "0px 25px",
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
  }
});

class Repiles extends React.Component {
	state = {
		edit: null,
		content: '',
		replyValues: [],
		replyTotal: 0
	}

	componentDidMount = async () => {
		const { totalReplies, commentId } = this.props;
		// we check if the comment as reply before we query for replies
		if (totalReplies > 0) {
			try {
				let getReply = await axios.get(config.api + "/commentReply/reply/" + commentId + "/limit");
				// console.log('getReply.data.content[0].reply', getReply.data.content);

				if (!getReply.data.error) {
					// handleReply(getReply.data.content.total, getReply.data.content.replies)
					this.setState({
						replyTotal: getReply.data.content.total,
						replyValues: getReply.data.content.replies
					})
				}
			} catch (error) {
				// console.log(error);
			}
		}
	}

	handleUpdateReply = (val, total) => {
		this.setState({
			replyValues: val,
			replyTotal: total
		})
	}

	handleReplyEdit = async () => {
		const { commentId, commentObjId, handleUpdateReply } = this.props;
		const { edit, content } = this.state;

		let token = localStorage.getItem('token');
		if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({
        	commentId,
					replyObjId: edit,
					content
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/commentReply/reply/edit'
      }

      let comment = await axios(options);
      // console.log("CHANGEING VOTES", comment);
      if (comment.data.error === false) {
				handleUpdateReply(comment.data.content, commentObjId);
				this.setState({
					edit: null,
					content: ''
				})
      }
      
    }
	}

	handleChange = (event) => {
		this.setState({
			content: event.target.value,
		});
	};

	identifyLinks(text) {
		var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		return ReactHtmlParser(text.replace(exp, "<a style='text-decoration: none;' href='$1'> $1 </a>"));
	}


	handleDeleteReply = async (replyObjId) => {
		const { commentId, commentObjId, handleUpdateReply } = this.props;

		let token = localStorage.getItem('token');
		if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({
					commentId,
					replyObjId
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/commentReply/reply/delete'
      }

      let comment = await axios(options);
      // console.log("CHANGEING VOTES", comment);
      if (comment.data.error === false) {
				// update the reply state
				handleUpdateReply(comment.data.content, commentObjId);
      }
      
    }
	}

	enableEdit(ObjId, body) {
		this.setState({
			edit: ObjId,
			content: body
		})
	}

	displayReplyForm() {
		const { reply, commentObjId, commentId, username } = this.props;
		if (reply === commentObjId) {
			return (
				<Replycompose 
					commentObjId={commentObjId} 
					commentId={commentId} 
					username={username} 
					handleUpdateReply={this.handleUpdateReply} 
				/>
			)
		}
	}

	handleLoadReply = async () => {
		const { commentId } = this.props;
		const { replyTotal } = this.state;
		// we check if the comment as reply before we query for replies
		if (replyTotal  > 0) {
			try {
				let getReply = await axios.get(config.api + "/commentReply/reply/" + commentId + "/all");
				// console.log('yes     getReply.data.content[0].reply', getReply.data.content);

				if (!getReply.data.error) {
					// handleReply(getReply.data.content.total, getReply.data.content.replies)
					this.setState({
						replyTotal: getReply.data.content.total,
						replyValues: getReply.data.content.replies
					})
				}
			} catch (error) {
				// console.log(error);
			}
		}
	}

	displayLoadMoreButton = () => {
		const { replyTotal, replyValues } = this.state;
		if (replyTotal !== replyValues.length) {
			return (
				<div style={{ display: 'flex', backgroundColor: '#fafafa' }}>
					<div style={{ flexGrow: 1 }} />
						<div style={{ backgroundColor: 'white', padding: '2px 20px' }}>
							<Typography 
								onClick={this.handleLoadReply}
								style={{ color: '#78afe8', fontSize: 12, cursor: 'pointer' }} 
							>
								Load All
							</Typography>
						</div>
				</div>
			)
		}
	}

  render() {
		const { classes, data } = this.props;
		const { edit, content, replyValues, topicObjId } = this.state;
		console.log("PPPPPPPPP", replyValues);
		

    return (
      <div style={{ backgroundColor: "#fafafa" }}>
        {this.displayReplyForm()}
        {replyValues.map((reply, index) => (
          <Card className={classes.semicard} key={index}>
            <CardHeader
              classes={{
                title: classes.time,
                subheader: classes.time // class name, e.g. `classes-nesting-root-x`
              }}
              avatar={
                reply.user_id ? (
                  <Link
                    href={
                      "/profile/" +
                      reply.user[0]._id +
                      "/@" +
                      reply.user[0].username
                    }
                  >
                    <a style={{ textDecoration: "none" }}>
                      <Thumbnails
                        size="xs"
                        borderColor="black"
                        borderWidth={1}
                        name={reply.user[0].username}
                        url={
                          // check if user profile image exist
                          reply.user[0].profileimage === "" ||
                          !reply.user[0].profileimage
                            ? null
                            : config.profileimage + reply.user[0].profileimage
                        }
                      />
                    </a>
                  </Link>
                ) : (
                  <Thumbnails
                    size="xs"
                    borderColor="black"
                    borderWidth={1}
                    name="Anon"
                    url={null}
                  />
                )
              }
              titleTypographyProps={{ fontSize: 12 }}
              style={{ padding: "8px 25px" }}
              action={
                <CardActions className={classes.actions} disableActionSpacing>
                  <div style={{ flexGrow: 1 }} />
                  {reply.user_id && data.user._id === reply.user[0]._id && (
                    <IconButton
                      aria-label="Thumbs Up"
                      onClick={this.enableEdit.bind(
                        this,
                        reply._id,
                        reply.content
                      )}
                      className={classes.iconspacing}
                    >
                      <Edit style={{ fontSize: 14 }} />
                    </IconButton>
                  )}

                  {data.user.is_admin === 1 && (
                    <IconButton
                      aria-label="delete"
                      onClick={this.handleDeleteReply.bind(this, reply._id)}
                      className={classes.iconspacing}
                    >
                      <RemoveCircle style={{ fontSize: 14 }} />
                    </IconButton>
                  )}
                </CardActions>
              }
              title={
                reply.user_id ? (
                  <Link
                    href={
                      "/profile/" +
                      reply.user[0]._id +
                      "/@" +
                      reply.user[0].username
                    }
                  >
                    <a style={{ color: "#1F7BD8", textDecoration: "none" }}>
                      <strong style={{ color: "gray" }}>@</strong>
                      {reply.user[0].username}
                    </a>
                  </Link>
                ) : (
                  <Typography>Anonymous</Typography>
                )
              }
              subheader={
                <p style={{ fontSize: 10, margin: 0 }}>
                  {Moment(reply.created_at)
                    .locale(Lang.locale)
                    .fromNow()}
                </p>
              }
            />
            <CardContent
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 25,
                paddingRight: 25
              }}
            >
              {edit && edit === reply._id ? (
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label={<span style={{ fontSize: 12 }}>Edit Reply</span>}
                    style={{ margin: 8, marginTop: -5, fontSize: 12 }}
                    onChange={this.handleChange}
                    fullWidth
                    value={content}
                    margin="normal"
                    multiline
                  />
                  <Button
                    color="secondary"
                    style={{ marginTop: 27, marginTop: -5 }}
                    className={classes.button}
                    onClick={this.handleReplyEdit}
                  >
                    Save
                  </Button>
                </form>
              ) : (
                <Typography
                  component="p"
                  style={{ fontSize: 15, fontWeight: "lighter" }}
                >
                  <Linkify tagName="p">
                    {/* {reply.content} */}
                    {reply.content.split("\n").map(function(item, key) {
                      return (
                        <span key={key}>
                          {item}
                          <br />
                        </span>
                      );
                    })}
                  </Linkify>
                </Typography>
              )}
            </CardContent>
            <CardActions>
              <ThumbComment
                commentObjId={reply._id}
                votes={reply.votesCount}
                // votes={0}
              />

              {reply.user_id && (
                <CommentCoin
                  // topic object id
                  topicObjId={topicObjId}
                  // comment id
                  commentId={reply.id}
                  // handleOpen={this.handleNotLoggedIn}
                  // comment owner id
                  commentUserId={reply.user_id && reply.user[0]._id}
                />
              )}
            </CardActions>

            {/* tips for comment */}
            {typeof reply.gifts !== "undefined" && (
              <TopicCoins gift={reply.gifts} />
            )}
          </Card>
        ))}
        {this.displayLoadMoreButton()}
      </div>
    );
  }
}

Repiles.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}
export default connect(mapStateToProps, )(withStyles(styles)(Repiles));
