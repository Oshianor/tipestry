/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Homepage from '../src/containers/homepage';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopics, getUser, getToken, setPageNumber } from "../src/actions/data";
// import Bottom from '../src/components/reuseable/bottom';
import BottomScrollListerer from 'react-bottom-scroll-listener';
// import CircularProgress from '@material-ui/core/CircularProgress';
import CookieConsent from "react-cookie-consent";
import { Lang } from '../lang';



class Index extends React.Component {
  state = {
    loading: true,
    more: false
  }
  
  static async getInitialProps({ req }) {
    // console.log('req', req);
    
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    let topics = await axios.get(config.api + '/topic?pageNumber=1&dataType=hot')
    let dataTopics = JSON.stringify(topics.data.content);

    return {
      // userAgent,
      dataTopics
    }
  }

  async componentDidMount() {
    const { dataTopics, getTopics, getUser } = this.props;
    // console.log(data);
    let token = localStorage.getItem('token');

    if (token) {
      // get me 
      
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/users/me'
      }
      let user = await axios(options);
      getUser(user.data[0]);
      // this.props.getToken(token)
    }
    
    if (dataTopics) {
      getTopics(JSON.parse(dataTopics));

      this.setState({
        loading: false
      })
    }
  }


  handleFetchMoreTopics = async () => {
    // const { pageNumber } = this.state;
    const { data, getTopics, setPageNumber } = this.props;
    let topicsCont = await axios.get(config.api + '/topic?pageNumber=' + data.pageNumber);
    if (!topicsCont.data.error) {
      topicsCont.data.content.topic.forEach(obj => {
        data.topics.topic.push(obj);
      })
      getTopics({ topic: data.topics.topic, total: topicsCont.data.content.total });
      let num = Number(data.pageNumber) + 1;
      setPageNumber(num);
    }
  }

  render() {
    const { loading, more } = this.state;
    // console.log(this.state);
    
    return (
      <div>
        {
          loading ? 
            <Preloader />
          :
            <BottomScrollListerer onBottom={this.handleFetchMoreTopics} >
              <Homepage />
              <CookieConsent
                style={{ zIndex: 99999, background: 'rgb(146, 95, 126)' }}
                buttonStyle={{ background: 'rgb(255, 255, 255)' }}
              >
                {Lang.m3}
                  {/* This website uses cookies to enhance the user experience.It is your responsibility to keep the coins you earn safe by withdrawing them to your own wallet. */}
              </CookieConsent>
            </BottomScrollListerer>
        }
      </div>
    );
  }
}

// { email: "1904303852@qq.com" }
 
// export default Index;
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTopics: getTopics,
      getUser: getUser,
      getToken: getToken,
      setPageNumber: setPageNumber
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);


        {/* {
          more && 
            <div style={{
              marginTop: 30,
              left: "45%",
              right: "20%",
              bottom: 0,
              position: 'absolute',
              zIndex: 999999,
              height: 50
            }} >
              <CircularProgress color="secondary" />
            </div>
        } */}