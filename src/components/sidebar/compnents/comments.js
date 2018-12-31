import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Thumbnails from '../../reuseable/thumbnails';
import Replies from './replies';
import IconButton from '@material-ui/core/IconButton';
import Reply from '@material-ui/icons/Reply';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Link from 'next/link';
import Replycompose from './replycompose';
import { connect } from 'react-redux';
import Moment from "moment";
import Axios from 'axios';
import { config } from '../../../../config';

const styles = theme => ({
  card: {
		maxWidth: "100%",
		marginTop: 5
	},
  actions: {
		display: 'flex',
		padding: "0px 25px",
		borderBottom: '2px solid gray'
  }
});

class Comments extends React.Component {
	state = {
		reply: null,
		replyValues: [],
		replyShow: null
	}

	handleDisplayReplyCompose(id) {
		const { reply } = this.state;
		if (id === reply) {
			this.setState({
				reply: null
			})
		} else {
			this.setState({
				reply: id
			})
		}
	}

	async handleFetchReply(commentObjId) {
		const { replyShow } = this.state;
		if (replyShow === commentObjId) {
			this.setState({
				replyShow: null
			})
		} else {
			let getReply = await Axios.get(config.api + "/commentReply/reply/" + commentObjId);
			if (!getReply.data.error) {
				this.setState({
					replyShow: commentObjId,
					replyValues: getReply.data.content[0].reply
				})
			}
		}
		
	}


	displayReplyForm(commentId) {
		const { reply } = this.state;
		if (reply === commentId) {
			return <Replycompose />;
		}
	}

  render() {
		const { classes, data } = this.props;
		const { replyValues, replyShow } = this.state;
		// console.log("COmment", data);
		
    return (
			<React.Fragment>
				{
					data.siteTopic[0].comment.map((comment, index) => (
						<Card className={classes.card} key={index}>
							<CardHeader
								avatar={
									<Link href={"/profile/@" + data.siteTopic[0].user[0].username}>
										<a style={{ textDecoration: 'none' }}>
											<Thumbnails borderColor="black" borderWidth={2} name={comment.commentUser[0].username} />
										</a>
									</Link>
								}
								title={
									<Link href={"/profile/@" + data.siteTopic[0].user[0].username} >
										<a style={{ color: '#1F7BD8', textDecoration: 'none' }}>
											<strong style={{ color: 'gray' }}>@</strong>
											{comment.commentUser[0].username}
										</a>
									</Link>
								}
								subheader={
									<p style={{ fontSize: 10, margin: 0 }} >
										{Moment(comment.created_at).fromNow()}
									</p>
								}
							/>
							<CardContent style={{ padding: "0px 25px" }}>
								<Typography component="p">
									{comment.content}
								</Typography>
							</CardContent>
							<CardActions className={classes.actions} disableActionSpacing>
								<IconButton aria-label="Thumbs Up" className={classes.iconspacing} >
									<ThumbUpAlt style={{ fontSize: 20 }} /> 
								</IconButton>
								<p style={{ fontSize: 12, marginLeft: -5, padding: 0 }} >12</p>
								&nbsp;&nbsp;

								<IconButton aria-label="Thumbs Down" className={classes.iconspacing} >
									<ThumbDownAlt style={{ fontSize: 20 }} /> 
								</IconButton>
								&nbsp;&nbsp;

								{/* reply icon */}
								<IconButton aria-label="Reply" onClick={this.handleDisplayReplyCompose.bind(this, comment._id)} >
									<Reply style={{ fontSize: 20 }} />
								</IconButton>
								&nbsp;&nbsp;

								{/* fetch replies for this comment */}
								{
									// if reply exist for this comment then show this 
									typeof comment.replyCount[0] !== "undefined" &&
										<Typography 
											onClick={this.handleFetchReply.bind(this, comment._id)} 
											style={{ cursor: 'pointer' }}
										>
											Replies
											&nbsp;
											{comment.replyCount[0].count}
										</Typography> 
								}

								&nbsp;&nbsp;
								<IconButton
									className={classes.iconspacing}
									aria-label="Show more"
								>
									<img src="/static/icons/moneybag.svg" alt="comments" width='20' height="20" />
								</IconButton>
							</CardActions>
							
							{/* display reply form */}
							{this.displayReplyForm(comment._id)}
							
							{
								replyShow === comment._id &&
									<Replies replyValues={replyValues} />
							}
						</Card>
					))
				}
			</React.Fragment>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Comments);
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

export default connect(mapStateToProps, )(withStyles(styles)(Comments));
