(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/0+H":function(e,t,n){"use strict";var a=n("hfKm"),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"4SYP":function(e,t,n){"use strict";var a=n("ln6h"),r=n.n(a),o=n("0iUn"),i=n("sLSF"),s=n("MI3g"),c=n("a7VT"),l=n("AT/M"),u=n("Tit0"),p=n("vYYK"),d=n("q1tI"),f=n.n(d),h=n("Eg6Q"),m=n("cgWl"),g=n("GZxu"),v=n("SUMQ"),b=n("Uve4"),y=n("3ZzI"),w=n.n(y),S=n("miEE"),x=n("x/uv"),O=n.n(x),k=n("vmpl"),j=n.n(k),C=n("XfWh"),T=n.n(C),I=n("lQIc"),M=n("/MKj"),D=n("2VVn"),N=n("gBbu"),_=n("ykXy"),A=n("1OZW"),P=n.n(A),E=n("pPbJ"),R=n.n(E),H=n("6ZaM"),V=n.n(H),W=n("obyI"),Q=n("ANjH"),Y=n("Rehh"),q=n("vDqi"),F=n.n(q),K=n("9NOM"),U=(n("2aQ2"),n("FSvF")),G=n("RvXx"),J=n("aBnd"),B=n("vAXE"),X=n("r/wR"),z=f.a.createElement,L=function(e){function t(e){var n;return Object(o.a)(this,t),n=Object(s.a)(this,Object(c.a)(t).call(this,e)),Object(p.a)(Object(l.a)(n),"handleDrawerOpen",(function(){n.setState({drawer:!0})})),Object(p.a)(Object(l.a)(n),"handleFetchMoreTopics",(function(){var e,t,a,o,i,s,c,l;return r.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,e=n.props,t=e.data,a=e.getTopics,o=e.setPageNumber,i=n.state.loading,n.setState({loading:!0}),i){u.next=11;break}return s=W.a.api+"/topic?pageNumber="+t.pageNumber+"&dataType="+t.type+"&pageSize=5",console.log("urlurlurl",s),u.next=9,r.a.awrap(F.a.get(s));case 9:(c=u.sent).data.error||(c.data.content.topic.forEach((function(e){t.topics.topic.push(e)})),n.setState({loading:!1}),a({topic:t.topics.topic,total:c.data.content.total}),l=Number(t.pageNumber)+1,o(l));case 11:u.next=16;break;case 13:u.prev=13,u.t0=u.catch(0),console.log("error",u.t0);case 16:case"end":return u.stop()}}),null,null,[[0,13]])})),Object(p.a)(Object(l.a)(n),"handleDrawerClose",(function(){n.setState({drawer:!1})})),Object(p.a)(Object(l.a)(n),"handleGetTags",(function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(F.a.get(W.a.api+"/topic/top/hashtag"));case 2:e=t.sent,n.setState({tag:e.data});case 4:case"end":return t.stop()}}))})),Object(p.a)(Object(l.a)(n),"trackScrolling",(function(e){return window.scrollY>240?(n.setState({stopScroll:!0}),!1):(n.setState({stopScroll:!1}),!1)})),Object(p.a)(Object(l.a)(n),"handleDialog",(function(){n.setState((function(e){return{open:!e.open}}))})),Object(p.a)(Object(l.a)(n),"handleClose",(function(){n.setState({uploadStatus:!1})})),n.timer=null,n.state={drawer:!1,stopScroll:!1,token:null,loading:!1,loadingMore:!1,open:!1,searchBy:"tag",tag:[]},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t,n,a,o,i,s=this;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return this.state.dataType,t=this.props,n=t.getTopics,t.data,a=t.setType,o=t.setPageNumber,clearInterval(this.timer),this.setState({loading:!0}),c.next=6,r.a.awrap(F.a.get(W.a.api+"/topic?pageNumber=1&dataType="+e+"&pageSize=5"));case 6:i=c.sent,n({total:0,topic:[]}),n(i.data.content),a(e),o(2),this.setState({loading:!1}),this.timer=setInterval((function(){s.handleFetchMoreTopics()}),3e3);case 13:case"end":return c.stop()}}),null,this)}},{key:"componentDidMount",value:function(){var e=this;this.setState({token:localStorage.getItem("token")}),this.handleGetTags(),addEventListener("scroll",this.trackScrolling),this.timer=setInterval((function(){e.handleFetchMoreTopics()}),3e3)}},{key:"componentWillUnmount",value:function(){removeEventListener("scroll",this.trackScrolling),clearInterval(this.timer)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.data;e.data.pageNumber!==n.pageNumber&&n.pageNumber>5&&clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.classes,a=this.state,r=a.stopScroll,o=a.drawer,i=a.token,s=a.open,c=(a.loading,a.searchBy,a.tag);return z(X.a,{onBottom:this.handleFetchMoreTopics},z("div",null,z(h.a,{drawer:o,handleDrawerOpen:this.handleDrawerOpen,handleDrawerClose:this.handleDrawerClose}),z(m.a,{drawer:o,stopScroll:r,overlay:!0,showOnLg:!0,top:228,handleDrawerOpen:this.handleDrawerOpen,handleDrawerClose:this.handleDrawerClose},z(w.a,{container:!0,justify:"center",spacing:8},z(w.a,{container:!0,justify:"space-evenly",alignItems:"baseline",className:n.demo},z(O.a,{mdDown:!0},z(w.a,{item:!0,lg:2,xl:2,style:{marginRight:25}},z("div",{style:{position:"absolute"}},z("div",{style:r?{position:"fixed",top:90}:{position:"fixed"}},i&&z(S.a,{handleOpen:this.handleDialog}),z(R.a,{className:n.wrapitRoot},z(V.a,{className:n.text,variant:"subheading"},"Top Hashtags"),z("div",{className:n.wrapit},"undefined"!==typeof c[0]&&z(U.a,{tags:c}))))))),z(w.a,{item:!0,lg:6,xl:6,md:6,sm:12,xs:12},z("div",{className:n.formControlNew},z(G.a,null),z("div",{className:n.formControl},z(V.a,{variant:"body1"},K.a.q3,"\xa0"),z(P.a,{style:{borderRadius:0},variant:"contained",color:"primary"},K.a.r3),z(P.a,{style:{borderRadius:0},href:"/recent",color:"primary"},K.a.s3))),z("div",{className:n.center},z(J.a,null),z(g.a,{topicValue:t.topics.topic,source:"topics"}))),z(O.a,{mdDown:!0},z(w.a,{item:!0,lg:3,xl:3,style:{marginLeft:-25}},z("div",{style:{position:"absolute"}},z("div",{style:r?{position:"fixed",top:90,maxWidth:300}:{position:"fixed",maxWidth:300}},z(B.a,null),z(b.a,null),z(I.a,null),z(D.a,null)))))))),z(N.a,{open:s,handleClose:this.handleDialog},z(_.a,null))))}}]),t}(d.Component);t.a=Object(M.b)((function(e){return{data:e.data}}),(function(e){return Object(Q.b)({getTopics:Y.l,getUser:Y.n,setType:Y.p,setPageNumber:Y.o},e)}))(T()(Object(v.withStyles)((function(e){return{root:{backgroundImage:"url('/static/homepage/headerBackground.svg')",width:"100%",height:"50vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"},wrapitRoot:{maxWidth:250,padding:5,boxShadow:"0px 0px 1px 0px",color:"grey",borderRadius:0,maxHeight:350},new:{marginTop:300},demo:Object(p.a)({marginTop:100},e.breakpoints.up("lg"),{width:1170}),top:Object(p.a)({marginTop:20},e.breakpoints.between("lg","xl"),{marginTop:300}),rela:{position:"relative"},formControl:{margin:e.spacing.unit,minWidth:120,display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",alignItems:"center"},formControlNew:{margin:e.spacing.unit,minWidth:120,display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},options:{display:"flex",alignItems:"center"}}})),j()())(L))},"8Kt/":function(e,t,n){"use strict";var a=n("ttDY"),r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=o(n("q1tI")),s=o(n("Xuae")),c=n("lwAK"),l=n("FYa8"),u=n("/0+H");function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=p;var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new a,t=new a,n=new a,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var p=o.props[u],d=r[u]||new a;d.has(p)?i=!1:(d.add(p),r[u]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var m=s.default();function g(e){var t=e.children;return i.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(m,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}g.rewind=m.rewind,t.default=g},CPHa:function(e,t,n){"use strict";var a=n("B4CS"),r=n("H8ru");e.exports=n("8vat")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},FYa8:function(e,t,n){"use strict";var a=n("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};a(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},GDVm:function(e,t,n){n("ER9p")("Set")},IrWQ:function(e,t,n){var a=n("0T/a");a(a.P+a.R,"Set",{toJSON:n("A0wl")("Set")})},OuPC:function(e,t,n){n("AS96")("Set")},PQJW:function(e,t,n){var a=n("d04V"),r=n("yLu3");e.exports=function(e){if(r(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a(e)}},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),o=n("9Jkg"),i=n.n(o),s=n("0iUn"),c=n("sLSF"),l=n("MI3g"),u=n("a7VT"),p=n("Tit0"),d=n("q1tI"),f=n.n(d),h=n("4SYP"),m=n("vDqi"),g=n.n(m),v=(n("/wFB"),n("obyI")),b=n("ANjH"),y=n("/MKj"),w=n("Rehh"),S=n("HUsl"),x=n.n(S),O=n("9NOM"),k=n("nOHt"),j=n.n(k),C=(n("8Kt/"),n("SUMQ")),T=f.a.createElement,I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).timer=null,n.state={loading:!0,loadingMore:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,a,o,s,c,l,u;return r.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(e=this.props,t=e.dataTopics,n=e.getTopics,a=e.getUser,o=e.getToken,s=localStorage.getItem("token"),c=sessionStorage.getItem("user"),this.setState({loading:!1}),n(JSON.parse(t)),p.prev=5,!s){p.next=21;break}if(c){p.next=17;break}return l={method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":s},url:v.a.api+"/users/me"},p.next=11,r.a.awrap(g()(l));case 11:u=p.sent,a(u.data[0]),sessionStorage.setItem("user",i()(u.data[0])),o(s),p.next=21;break;case 17:return a(JSON.parse(c)),this.setState({loading:!1}),n(JSON.parse(t)),p.abrupt("return");case 21:this.setState({loading:!1}),p.next=27;break;case 24:p.prev=24,p.t0=p.catch(5),p.t0.response.data.error&&(localStorage.removeItem("token"),j.a.push("/login?sE=true"));case 27:case"end":return p.stop()}}),null,this,[[5,24]])}},{key:"render",value:function(){var e=this.state;e.loading,e.loadingMore,this.props.classes;return T("div",null,T(h.a,null),T(x.a,{style:{zIndex:99999,background:"rgb(146, 95, 126)"},buttonStyle:{background:"rgb(255, 255, 255)"}},O.a.m3))}}],[{key:"getInitialProps",value:function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.req,a.next=3,r.a.awrap(g.a.get(v.a.api+"/topic?pageNumber=1&dataType=hot&pageSize=5"));case 3:return t=a.sent,n=i()(t.data.content),a.abrupt("return",{dataTopics:n});case 6:case"end":return a.stop()}}))}}]),t}(f.a.Component);t.default=Object(y.b)((function(e){return{data:e.data}}),(function(e){return Object(b.b)({getTopics:w.l,getUser:w.n,getToken:w.k,setPageNumber:w.o},e)}))(Object(C.withStyles)((function(e){return{root:{flexGrow:1,marginTop:100,minHeight:45},tab:{alignItems:"baseline",padding:10},pos:{},progress:{margin:2*e.spacing.unit}}}))(I))},TbGu:function(e,t,n){var a=n("fGSI"),r=n("PQJW"),o=n("2PDY");e.exports=function(e){return a(e)||r(e)||o()}},"V/f9":function(e,t,n){n("k8Q4"),n("YQlv"),e.exports=n("p9MR").Array.from},Xuae:function(e,t,n){"use strict";var a=n("/HRN"),r=n("ZDA2"),o=n("/+P4"),i=n("K47E"),s=n("WaGi"),c=n("N9n2"),l=n("TbGu"),u=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var p=n("q1tI"),d=!1;t.default=function(){var e,t=new u;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function u(e){var s;return a(this,u),s=r(this,o(u).call(this,e)),d&&(t.add(i(s)),n(i(s))),s}return c(u,l),s(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),s(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component)}},YQlv:function(e,t,n){"use strict";var a=n("vCXk"),r=n("0T/a"),o=n("AYVP"),i=n("nJOo"),s=n("widk"),c=n("pasi"),l=n("s+zB"),u=n("8Vlj");r(r.S+r.F*!n("Q2zc")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,p,d=o(e),f="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,v=0,b=u(d);if(g&&(m=a(m,h>2?arguments[2]:void 0,2)),void 0==b||f==Array&&s(b))for(n=new f(t=c(d.length));t>v;v++)l(n,v,g?m(d[v],v):d[v]);else for(p=b.call(d),n=new f;!(r=p.next()).done;v++)l(n,v,g?i(p,m,[r.value,v],!0):r.value);return n.length=v,n}})},d04V:function(e,t,n){e.exports=n("V/f9")},fGSI:function(e,t,n){var a=n("p0XB");e.exports=function(e){if(a(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var a=n("hfKm"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};a(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},ttDY:function(e,t,n){e.exports=n("vjmV")},vjmV:function(e,t,n){n("Ev2V"),n("k8Q4"),n("tCzM"),n("CPHa"),n("IrWQ"),n("GDVm"),n("OuPC"),e.exports=n("p9MR").Set},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18]]]);