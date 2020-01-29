import React, { Component } from 'react';
import Axios from 'axios';
import { config } from '../../../config';
import Preloader from '../preloader/preloader';
import YouTube from 'react-youtube';
import isURL from 'validator/lib/isURL';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";



 class Embed extends Component {
  state = {
    load: 'open', //img, youtube, open, close, "twitter", "tweet"
    videoId: ''
  }

  async componentDidMount() {
    const { url, screenshot } = this.props;
    // console.log(this.getQuery('v', url));
    // console.log(this.checkIfUrl(url));
    if (this.checkIfUrl(url)) {
      if(this.checkIfItYouTube(url) == "youtube.com" && this.getQuery('v', url) != null) {
        this.setState({
          load: "youtube",
          videoId: this.getQuery('v', url)
        })
      }
      if (this.checkIfItYouTube(url) == "youtu.be") {
        this.setState({
          load: "youtube",
          videoId: url.substring(url.lastIndexOf("/") + 1)
        });
      }

      if (this.checkIfItYouTube(url) == "twitter.com") {
        const arr = url.split("/");
        if (arr[4] === "status") {
          this.setState({
            load: "tweet",
            videoId: arr[arr.length - 1]
          });
        } else if (arr.length === 4) {
          this.setState({
            load: "tweet",
            videoId: arr[arr.length - 1]
          });
        }
        
      }
    }
  }

  checkIfUrl = (url) => {
    let yes = isURL(url, { protocols: ['http','https'], require_valid_protocol: true, require_protocol: true} );
    // console.log('yes', yes);
    
    return yes ? yes : null
  }


  checkIfItYouTube = (url) => {
     var pathname = new URL(url).hostname;
     let improved = pathname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
     return improved;
  }

  getQuery(name, url) {
    // if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }


  displayYoutube = () => {
    const { url, height } = this.props;
    const { load, videoId } = this.state;
    const opts = {
      height: '500px',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    if (load === 'youtube') {
      return (
        <div style={{ marginTop: 70 }}>
          <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
        </div>
      );
    }
  }

  displayIframe = () => {
    const { height, top, site } = this.props;
    const { load } = this.state;
    if (site && load !== "youtube") {
      if (site.screen_path === "") {
        return (
          <iframe
            id="frame"
            style={{
              borderRight: "10px solid gray",
              width: "100%",
              height: height ? height : "70vh",
              marginTop: top ? top : 0
            }}
            // title="Inline Frame Example"
            width="300"
            height="200"
            src={this.props.url}
            allow="fullscreen"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        );
      } else {
        return (
          <img
            src={
              "//image.thum.io/get/iphoneX/noanimate/hidePopovers/auth/3228-www.tipestry.com/" +
              site.url
            }
            style={{
              // borderRight: "10px solid gray",
              width: "auto",
              // width: "100%",
              height: "auto",
              // marginTop: 70,
              marginTop: top ? top : 0
            }}
          />
        );
      }
    }
    return (
      <iframe
        id="frame"
        style={{
          borderRight: "10px solid gray",
          width: "100%",
          height: height ? height : "70vh",
          marginTop: top ? top : 0
        }}
        // title="Inline Frame Example"
        width="300"
        height="200"
        src={this.props.url}
        onLoad={this.error}
        allow="fullscreen"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
	render() {
    const { height, top, img } = this.props;
    const { load, videoId } = this.state;
    // console.log(this.state, "=======>", this.props);
    
		return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {load === "youtube" && this.displayYoutube()}
        {load === "img" && this.displayIframe()}
        {load === "twitter" && (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={videoId}
            options={{ height: 400 }}
          />
        )}
        {load === "tweet" && (
          <TwitterTweetEmbed tweetId={videoId} />
        )}
        {/* {this.displayYoutube()}
        {this.displayIframe()}     */}
      </div>
    );
	}
}
export default Embed;