import React, { Component } from 'react'
import TopicContainer from '../src/containers/topic';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSiteTopic, getUser } from "../src/actions/data";
import Head from 'next/head';
import Router from "next/router";




class Topic extends Component {
	state = {
    loading: true
  }
  
  static async getInitialProps({ query }) {

    let topics = await axios.get(config.api + '/topic/' + query.topicObjId)
    let dataTopic = JSON.stringify(topics.data.content);

    return {
      dataTopic
    }
  }

  async componentDidMount() {
    const { dataTopic, getSiteTopic, getUser } = this.props;
    // console.log(JSON.parse(dataTopic));
    let token = localStorage.getItem('token');
    let user = sessionStorage.getItem("user");

    try {
      if (token) {
        if (!user) {
          const options = {
            method: "GET",
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token": token
            },
            url: config.api + "/users/me"
          };
          let user = await axios(options);
          getUser(user.data[0]);
          sessionStorage.setItem(
            "user",
            JSON.stringify(user.data[0])
          );
        } else {
          // check if the user details is already saved and stop the loading
          getUser(JSON.parse(user));
        }
      }

      // send request to the server to save the user ip
      this.recordViews(JSON.parse(dataTopic));

      if (dataTopic) {
        getSiteTopic(JSON.parse(dataTopic));

        this.setState({
          loading: false
        });
      }
    } catch (error) {
      if (error.response.data.error) {
        localStorage.removeItem("token");
        Router.push("/login?sE=true");
      }
    }
  }
  
  
  recordViews = async (topic) => {
    const options = {
      method: 'POST',
      data: JSON.stringify({ topicObjId: topic[0]._id }),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      url: config.api + '/topic/views'
    }
    await axios(options);
  }
	

	render() {
    const { loading } = this.state;
    const { dataTopic } = this.props;
    // console.log("SITE TOPIC dataTopic", );
    const topic = JSON.parse(dataTopic);
		return (
			<div>
        <Head>
          <title>
            Tipestry | {topic[0].title} 
          </title>
          <meta charSet="UTF-8" />
          <meta name="description" content={topic[0].title} />
        </Head>
        {
          loading ? 
            <Preloader />
          :
				    <TopicContainer />
        }
			</div>
		)
	}
}
// export default Topic;
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    getUser: getUser,
		getSiteTopic: getSiteTopic
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);