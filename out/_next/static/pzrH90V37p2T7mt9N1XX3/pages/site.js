(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{DJ9Z:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(a("dNlt"))},VGMq:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/site",function(){return a("hE7v")}])},VvZr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};t.default=n},dNlt:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=n(a("lSNA")),r=n(a("pVnL")),o=n(a("QILm")),s=n(a("q1tI")),l=(n(a("17x9")),n(a("TSYQ"))),c=n(a("Hk+Y")),u=n(a("n9Vf")),p=function(e){return{root:{width:36,height:36,fontSize:e.typography.pxToRem(18),marginRight:4},alignItemsFlexStart:{marginTop:4},icon:{width:20,height:20,fontSize:e.typography.pxToRem(20)}}};function d(e){var t=e.children,a=e.classes,n=e.className,c=(0,o.default)(e,["children","classes","className"]);return s.default.createElement(u.default.Consumer,null,(function(e){var o;return s.default.cloneElement(t,(0,r.default)({className:(0,l.default)((o={},(0,i.default)(o,a.root,e.dense),(0,i.default)(o,a.alignItemsFlexStart,"flex-start"===e.alignItems),o),n,t.props.className),childrenClassName:(0,l.default)((0,i.default)({},a.icon,e.dense),t.props.childrenClassName)},c))}))}t.styles=p,d.propTypes={},d.muiName="ListItemAvatar";var h=(0,c.default)(p,{name:"MuiListItemAvatar"})(d);t.default=h},hE7v:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),i=a.n(n),r=a("9Jkg"),o=a.n(r),s=a("0iUn"),l=a("sLSF"),c=a("MI3g"),u=a("a7VT"),p=a("AT/M"),d=a("Tit0"),h=a("vYYK"),g=a("q1tI"),m=a.n(g),f=a("vDqi"),b=a.n(f),y=a("/wFB"),O=a("obyI"),v=a("ANjH"),j=a("/MKj"),w=a("Rehh"),x=a("u1ig"),k=a("bM/q"),S=a.n(k),C=a("SPKb"),T=m.a.createElement,I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{load:"open",videoId:""}),Object(h.a)(Object(p.a)(a),"checkIfUrl",(function(e){var t=S()(e,{protocols:["http","https"],require_valid_protocol:!0,require_protocol:!0});return t||null})),Object(h.a)(Object(p.a)(a),"checkIfItYouTube",(function(e){return new URL(e).hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"")})),Object(h.a)(Object(p.a)(a),"displayYoutube",(function(){var e=a.props,t=(e.url,e.height,a.state),n=t.load,i=t.videoId;if("youtube"===n)return T("div",{style:{marginTop:70}},T(x.a,{videoId:i,opts:{height:"500px",width:"100%",playerVars:{autoplay:0}},onReady:a._onReady,autoplay:!1}))})),Object(h.a)(Object(p.a)(a),"displayIframe",(function(){var e=a.props,t=e.height,n=e.top,i=e.site,r=a.state.load;return i&&"youtube"!==r?""===i.screen_path?T("iframe",{id:"frame",style:{borderRight:"10px solid gray",width:"100%",height:t||"70vh",marginTop:n||0},width:"300",height:"200",src:a.props.url,onLoad:a.error,allow:"fullscreen"},T("p",null,"Your browser does not support iframes.")):T("img",{src:"//image.thum.io/get/iphoneX/noanimate/hidePopovers/auth/3228-www.tipestry.com/"+i.url,style:{width:"auto",height:"auto",marginTop:n||0}}):T("iframe",{id:"frame",style:{borderRight:"10px solid gray",width:"100%",height:t||"70vh",marginTop:n||0},width:"300",height:"200",src:a.props.url,onLoad:a.error,allow:"fullscreen"},T("p",null,"Your browser does not support iframes."))})),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e=this.props,t=e.url,e.screenshot,this.checkIfUrl(t)&&("youtube.com"==this.checkIfItYouTube(t)&&null!=this.getQuery("v",t)&&this.setState({load:"youtube",videoId:this.getQuery("v",t)}),"youtu.be"==this.checkIfItYouTube(t)&&this.setState({load:"youtube",videoId:t.substring(t.lastIndexOf("/")+1)}),"twitter.com"==this.checkIfItYouTube(t)&&("status"===(a=t.split("/"))[4]?this.setState({load:"tweet",videoId:a[a.length-1]}):4===a.length&&this.setState({load:"tweet",videoId:a[a.length-1]})));case 2:case"end":return n.stop()}}),null,this)}},{key:"getQuery",value:function(e,t){e=e.replace(/[\[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}},{key:"_onReady",value:function(e){e.target.pauseVideo()}},{key:"render",value:function(){var e=this.props,t=(e.height,e.top,e.img,this.state),a=t.load,n=t.videoId;return T("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:50}},"youtube"===a&&this.displayYoutube(),"open"===a&&this.displayIframe(),"twitter"===a&&T(C.a,{sourceType:"profile",screenName:n,options:{height:400}}),"tweet"===a&&T(C.b,{tweetId:n}))}}]),t}(g.Component),N=a("3ZzI"),A=a.n(N),D=a("Eg6Q"),F=a("nOHt"),E=a.n(F),L=a("SUMQ"),_=a("JgXy"),M=a.n(_),R=a("NABS"),z=a.n(R),P=a("4eE1"),W=a.n(P),G=a("DJ9Z"),U=a.n(G),q=a("6ZaM"),B=a.n(q),Y=a("YFqc"),V=a.n(Y),Z=a("wd/R"),J=a.n(Z),Q=a("VvZr"),H=a.n(Q),K=a("9NOM"),$=a("ZqOF"),X=a.n($),ee=a("1OZW"),te=a.n(ee),ae=a("DKSo"),ne=a.n(ae),ie=a("oLwl"),re=a("pPbJ"),oe=a.n(re),se=a("qJ/b"),le=a.n(se),ce=a("QGGi"),ue=a.n(ce),pe=m.a.createElement;var de=Object(L.withStyles)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap"},chip:{margin:1}}}))((function(e){var t=e.classes,a=e.chipData,n=e.handleDelete;return console.log("chipData",a),pe("div",{className:t.root},a.map((function(e){return pe(le.a,{size:"small",key:e.key,avatar:pe(ue.a,null,"#"),label:e.label,onDelete:function(){return n(e)},className:t.chip})})))})),he=a("0iCA"),ge=m.a.createElement,me=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),Object(h.a)(Object(p.a)(a),"handleClose",(function(){a.setState({open:!1})})),Object(h.a)(Object(p.a)(a),"handleChange",(function(e){return function(t){if("title"===e)return t.target.value.length<=140?void a.setState(Object(h.a)({},e,t.target.value)):void a.setState({open:!0,msg:K.a.p});a.setState(Object(h.a)({},e,t.target.value))}})),Object(h.a)(Object(p.a)(a),"handleHashtag",(function(e){e.preventDefault();var t=a.state,n=t.tag,i=t.chipData,r=[];i.forEach((function(e){r.push(e.label)})),!r.includes(n)&&i.length<=4&&(i.push({key:n+Math.floor(10*Math.random()+1),label:n.toLocaleLowerCase().replace(/[^A-Z0-9]+/gi,"")}),a.setState({chipData:i,tag:""}))})),Object(h.a)(Object(p.a)(a),"handleDelete",(function(e){var t=a.state.chipData;console.log(t.filter((function(t){return t.key!==e.key}))),a.setState({chipData:t.filter((function(t){return t.key!==e.key}))})})),Object(h.a)(Object(p.a)(a),"handleChangeTag",(function(e){if(console.log("e.keyCode",e.keyCode,"e.key",e.key),32===e.keyCode||" "===e.key||"Spacebar"===e.key){var t=a.state,n=t.tag,i=t.chipData,r=[];i.forEach((function(e){r.push(e.label)})),!r.includes(n)&&i.length<=4&&(i.push({key:n+Math.floor(10*Math.random()+1),label:n.toLocaleLowerCase().replace(/[^A-Z0-9]+/gi,"")}),a.setState({chipData:i,tag:""}))}})),a.recaptchaRef=m.a.createRef(),a.state={title:"",message:"",titleHelper:{err:!1,msg:""},loading:!1,open:!1,msg:"",tag:"",chipData:[],token:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.url,t=localStorage.getItem("token"),a=new URL(e).hostname;this.setState({chipData:[{key:a.toLocaleLowerCase().replace(/[^A-Z0-9]+/gi,"")+"-678",label:a.toLocaleLowerCase().replace(/[^A-Z0-9]+/gi,"")}],token:t})}},{key:"handleAddTopic",value:function(){var e,t,a,n,r,s,l,c,u,p,d,h;return i.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(e=this.state,t=e.title,a=e.message,n=e.chipData,r=this.props.url,s=localStorage.getItem("token"),0!==n.length){g.next=6;break}return this.setState({loading:!1,open:!0,msg:"Please ensure atleast one hashtag is added."}),g.abrupt("return",!1);case 6:if(!s||""===t){g.next=19;break}return this.setState({loading:!0}),l=[],n.forEach((function(e){l.push(e.label)})),c={method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":s},data:o()({url:r,title:t,message:a,tags:l}),url:O.a.api+"/topic"},g.next=13,i.a.awrap(b()(c));case 13:if((u=g.sent).data.error){g.next=16;break}return g.abrupt("return",E.a.push("/"));case 16:this.setState({loading:!1,open:!0,msg:u.data.msg}),g.next=31;break;case 19:if(""===this.recaptchaRef.current.getValue()){g.next=31;break}return this.setState({loading:!0}),p=[],n.forEach((function(e){p.push(e.label)})),d={method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},data:o()({url:r,title:t,message:a,tags:p}),url:O.a.api+"/topic/anonymous"},g.next=27,i.a.awrap(b()(d));case 27:if((h=g.sent).data.error){g.next=30;break}return g.abrupt("return",E.a.push("/"));case 30:this.setState({loading:!1,open:!0,msg:h.data.msg});case 31:case"end":return g.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.title,n=t.titleHelper,i=t.message,r=t.loading,o=t.msg,s=t.open,l=t.tag,c=t.chipData,u=t.token;return console.log("this.state",this.state),ge(oe.a,{className:e.container},ge(B.a,{style:{textAlign:"left",textTransform:"capitalize",marginTop:5,marginBottom:5,fontWeight:"400"},variant:"h6",className:e.textField},K.a.o),ge(X.a,{required:!0,id:"outlined-name",label:K.a.o2,error:n.err,className:e.textField,value:a,onChange:this.handleChange("title"),margin:"normal",size:"small",fullWidth:!0,helperText:n.msg,variant:"outlined"}),ge("div",{style:{display:"flex",marginTop:-10},className:e.textField},ge("p",{style:140-a.length<20?{color:"red",fontWeight:"600"}:{color:"black"},className:e.cnt},140-a.length)),ge(X.a,{id:"outlined-required",label:K.a.p2,value:i,fullWidth:!0,className:e.textField,onChange:this.handleChange("message"),margin:"normal",variant:"outlined",multiline:!0,rows:3}),ge("form",{onSubmit:this.handleHashtag,className:e.control},ge(de,{chipData:c,handleDelete:this.handleDelete}),ge(X.a,{required:!0,id:"outlined-name",onChange:this.handleChange("tag"),onKeyUp:this.handleChangeTag,label:K.a.e4,value:l,margin:"normal",placeholder:"Enter a hashtag and press the enter key or spacebar",size:"small",fullWidth:!0,variant:"outlined"})),!u&&ge("div",{style:{margin:"0 8%"}},ge(he.a,{ref:this.recaptchaRef,sitekey:"6LfC9q4UAAAAAMbyFnaZtaQyEOuiBKb1gI8QMZKx",onChange:this.onChange})),ge(te.a,{style:{margin:"10px 20px"},disabled:r,variant:"contained",color:"primary",onClick:this.handleAddTopic.bind(this)},r?ge(ne.a,{size:24,className:e.buttonProgress}):K.a.r),ge(ie.a,{open:s,message:o,handleClose:this.handleClose}))}}]),t}(g.Component),fe=Object(L.withStyles)((function(e){return{root:{width:"100%",margin:"0px 10% 0px 0px",padding:0},inline:{display:"inline"},container:{display:"flex",flexWrap:"wrap",margin:"10px 8%",boxShadow:"0px 0px 1px 0px",color:"#d9dadc",borderRadius:0},buttonProgress:{color:H.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},cnt:{fontSize:11},textField:{margin:"1px 20px"},control:{width:"100%",margin:"10px 4%"}}}))(me),be=a("1IiC"),ye=a.n(be),Oe=a("nwgO"),ve=a.n(Oe),je=a("n65s"),we=a.n(je),xe=a("5+5J"),ke=a.n(xe),Se=a("6lsK"),Ce=a.n(Se),Te=a("Ol6B"),Ie=a.n(Te),Ne=m.a.createElement,Ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{count:"",res:{error:!1,msg:"",content:{}}}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=this.props,t=e.data,e.votes,a=localStorage.getItem("token"),this.setState({token:a}),!a){o.next=9;break}return n={method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":a},url:O.a.api+"/votes/site/"+t.site.site._id},o.next=7,i.a.awrap(b()(n));case 7:0==(r=o.sent).data.error&&this.setState({res:r.data.content.siteVotes,count:r.data.content.count});case 9:case"end":return o.stop()}}),null,this)}},{key:"handleVote",value:function(e){var t,a,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=this.props,a=t.data,t.handleOpen,!(n=this.state.token)){l.next=8;break}return r={method:"POST",data:o()({votes:e,siteObjId:a.site.site._id}),headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":n},url:O.a.api+"/votes/site"},l.next=6,i.a.awrap(b()(r));case 6:!1===(s=l.sent).data.error&&this.setState({res:s.data.content.reply,count:s.data.content.count});case 8:case"end":return l.stop()}}),null,this)}},{key:"thumbup",value:function(){var e=this.state.res,t=this.props.data;return"undefined"!==typeof e.userId&&e.userId===t.user.id&&1===e.votes?Ne(ke.a,{style:{color:"#1F7BD8"}}):Ne(Ie.a,null)}},{key:"thumbDown",value:function(){var e=this.state.res,t=this.props.data;return"undefined"!==typeof e.userId&&e.userId===t.user.id&&0===e.votes?Ne(we.a,{style:{color:"#1F7BD8"}}):Ne(Ce.a,null)}},{key:"render",value:function(){var e=this.props,t=e.num,a=e.iconspacing,n=this.state,i=n.count;n.open;return Ne(m.a.Fragment,null,Ne(ve.a,{title:"Thumbs Up","aria-label":"Thumbs Up"},Ne(ye.a,{"aria-label":"Thumbs Up",className:a,onClick:this.handleVote.bind(this,1)},this.thumbup())),Ne("p",{className:t},0===i?"":i),"\xa0\xa0",Ne(ve.a,{title:"Thumbs Down","aria-label":"Thumbs Down"},Ne(ye.a,{"aria-label":"Thumbs Down",className:a,onClick:this.handleVote.bind(this,0)},this.thumbDown())))}}]),t}(m.a.Component);var De=Object(j.b)((function(e){return{data:e.data}}),(function(e){return Object(v.b)({getToken:w.k},e)}))(Object(L.withStyles)((function(e){return{button:{margin:e.spacing.unit},actions:{display:"flex",borderTop:".5px solid gray"}}}))(Ae)),Fe=m.a.createElement,Ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))),Object(h.a)(Object(p.a)(a),"state",{anchorEl:null,siteFollowing:[],token:null}),Object(h.a)(Object(p.a)(a),"handleClick",(function(e){a.setState({anchorEl:e.currentTarget})})),Object(h.a)(Object(p.a)(a),"handleClose",(function(){a.setState({anchorEl:null})})),Object(h.a)(Object(p.a)(a),"handleFollow",(function(){var e,t,n,r,s;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e=a.state,e.siteFollowing,t=e.token,n=a.props.data,!t){l.next=8;break}return r={method:"POST",data:o()({siteObjId:n.site.site._id}),headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":t},url:O.a.api+"/sites/follow"},l.next=6,i.a.awrap(b()(r));case 6:!1===(s=l.sent).data.error&&a.setState({siteFollowing:s.data.content.following});case 8:case"end":return l.stop()}}))})),Object(h.a)(Object(p.a)(a),"displayFollow",(function(){var e=a.props.data,t=a.state,n=t.siteFollowing;if(t.token)return-1===n.indexOf(e.user._id)?Fe(te.a,{variant:"outlined",size:"small",color:"primary",onClick:a.handleFollow,style:{padding:"5px",fontSize:11,margin:5}},K.a.f):Fe(te.a,{variant:"contained",size:"small",color:"primary",onClick:a.handleFollow,style:{padding:"5px",fontSize:11,margin:5}},K.a.g)})),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data,t=localStorage.getItem("token");this.setState({siteFollowing:e.site.site?e.site.site.following:[],token:t})}},{key:"render",value:function(){return Fe("div",null,this.displayFollow())}}]),t}(m.a.Component);var Le=Object(j.b)((function(e){return{data:e.data}}),(function(e){return Object(v.b)({getTopics:w.l},e)}))(Ee),_e=(a("4tL4"),a("0cs1")),Me=a.n(_e),Re=a("Wa2I"),ze=a.n(Re),Pe=a("kOwS"),We=a("0G56"),Ge=a.n(We),Ue=a("Sk/v"),qe=a.n(Ue),Be=a("SNP2"),Ye=a.n(Be),Ve=a("C+zi"),Ze=a.n(Ve),Je=a("MPIl"),Qe=a.n(Je),He=a("TSYQ"),Ke=a.n(He),$e=a("cUz1"),Xe=a.n($e),et=m.a.createElement;function tt(e){return et(Qe.a,Object(Pe.a)({direction:"up"},e))}var at=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))),Object(h.a)(Object(p.a)(a),"state",{amount:"",error:"",msgOpen:!1,msg:"",loading:!1}),Object(h.a)(Object(p.a)(a),"handleMsgClose",(function(){a.setState({msgOpen:!0})})),Object(h.a)(Object(p.a)(a),"handleGift",(function(){var e,t,n,r,s,l,c,u,p,d,h,g,m;return i.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(e=a.state.amount,t=a.props,n=t.siteUserId,r=t.type,s=t.handleClose,l=t.siteId,c=t.getUser,u=t.getSiteTopicList,p=localStorage.getItem("token"),a.setState({loading:!0}),!p){f.next=22;break}return d={method:"POST",data:o()({amount:e,coinType:r,userId:n,siteId:l}),headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":p},url:O.a.api+"/crypto/sites/gift"},f.next=8,i.a.awrap(b()(d));case 8:if((h=f.sent).data.error){f.next=20;break}return u({site:{},gift:[],topics:[]}),u(h.data.content),g={method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":p},url:O.a.api+"/users/me"},f.next=15,i.a.awrap(b()(g));case 15:m=f.sent,c(m.data[0]),a.setState({error:"",msgOpen:!0,msg:"Successfully tipped post",loading:!1}),f.next=21;break;case 20:a.setState({error:h.data.message,msgOpen:!0,msg:"Something went wrong...",loading:!1});case 21:s();case 22:case"end":return f.stop()}}))})),Object(h.a)(Object(p.a)(a),"handleChange",(function(e){return function(t){var n,i,r=a.props.currentCoin,o=Math.abs(ze()(t.target.value));r>=o&&0!==o?a.setState((n={},Object(h.a)(n,e,o),Object(h.a)(n,"error",""),n)):a.setState((i={},Object(h.a)(i,e,o),Object(h.a)(i,"error","You have insuficient balance to handle this transaction"),i))}})),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,n=e.image,i=e.handleClose,r=e.currentCoin,o=this.state,s=o.error,l=o.amount,c=o.msgOpen,u=o.msg,p=o.loading;return et(Ge.a,{open:a,TransitionComponent:tt,keepMounted:!0,onClose:function(){return i()},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},et(Ze.a,{id:"alert-dialog-slide-title"},et("div",{style:{display:"flex"}},et("img",{src:n,width:50,height:50}),et("div",{style:{flexGrow:1}}),et(B.a,{style:{margin:15}},"Balance: ",r))),et(Ye.a,null,et(X.a,{error:""!==s,id:"outlined-adornment-amount",className:Ke()(t.margin,t.textField),variant:"outlined",label:"Amount",type:"number",helperText:s,value:l,onChange:this.handleChange("amount"),InputProps:{startAdornment:et(Xe.a,{position:"start"},"$")}})),et(qe.a,null,et(te.a,{onClick:function(){return i()},color:"secondary"},"Maybe later"),et(te.a,{disabled:""!==s||p,onClick:this.handleGift,color:"primary"},p?et(ne.a,{size:20,className:t.buttonProgress}):"Gift")),et(ie.a,{handleClose:this.handleMsgClose,open:c,message:u}))}}]),t}(m.a.Component);var nt=Object(j.b)((function(e){return{data:e.data}}),(function(e){return Object(v.b)({getSiteTopicList:w.i,getUser:w.n},e)}))(Object(L.withStyles)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing.unit},textField:{flexBasis:200}}}))(at)),it=m.a.createElement,rt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{arrow:!0,arrowRef:null,disablePortal:!1,flip:!0,open:!1,placement:"bottom",preventOverflow:"scrollParent",img:null,gift:!1,type:"",currentCoin:0}),Object(h.a)(Object(p.a)(a),"handleChange",(function(e){return function(t,n){a.setState(Object(h.a)({},e,n))}})),Object(h.a)(Object(p.a)(a),"handleChangeTarget",(function(e){return function(t){a.setState(Object(h.a)({},e,t.target.value))}})),Object(h.a)(Object(p.a)(a),"handleClickButton",(function(e){return function(t){var n=a.props.handleOpen;localStorage.getItem("token")?a.setState((function(t){return{open:!t.open,arrowRef:e}})):n()}})),Object(h.a)(Object(p.a)(a),"handleClose",(function(){a.setState({open:!1})})),Object(h.a)(Object(p.a)(a),"handleGiftClose",(function(){a.setState({gift:!1})})),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleGift",value:function(e,t){var a=this.props,n=a.data,i=a.topicUserObjId;"undefined"!==typeof n.user.id&&(n.user._id!==i&&this.setState({img:"/static/tipcoins/"+e,type:t,gift:!0}),"bitcoin"===t?this.setState({currentCoin:"undefined"!==typeof n.user.btc[0]&&n.user.btc[0].balance}):"dogecoin"===t?this.setState({currentCoin:"undefined"!==typeof n.user.doge[0]&&n.user.doge[0].doge_balance}):"ethcoin"===t?this.setState({currentCoin:"undefined"!==typeof n.user.eth[0]&&n.user.eth[0].ethapibalance}):"ethtipc"===t?this.setState({currentCoin:"undefined"!==typeof n.user.eth[0]&&n.user.eth[0].tipcapibalance}):"ethtipcoin"===t?this.setState({currentCoin:"undefined"!==typeof n.user.eth[0]&&n.user.eth[0].tipapibalance}):"ethxrtcoin"===t&&this.setState({currentCoin:"undefined"!==typeof n.user.eth[0]&&n.user.eth[0].xrtapibalance}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=(t.topicId,t.topicUserId,t.site),i=t.data,r=this.state,o=r.currentCoin,s=r.open,l=r.placement,c=r.disablePortal,u=r.flip,p=r.preventOverflow,d=r.arrow,h=r.arrowRef,g=r.gift,m=r.img,f=r.type,b=s?"Share":null;return it("div",{className:a.iconspacing},"undefined"!==typeof n.claim&&"success"===n.claim.verified&&n.claim.userId!==i.user.id?it(ye.a,{buttonRef:function(t){e.anchorEl=t},"aria-label":"Share","aria-describedby":b,onClick:this.handleClickButton("arrow")},it("img",{src:"/static/icons/moneybag.svg",alt:"comments",width:"25",height:"25",style:{color:"#1F7BD8"}})):"done"===n.claim.verified&&it(te.a,{color:"secondary",disabled:!0,variant:"contained"},"Site Owner"),it(Me.a,{id:b,open:s,anchorEl:this.anchorEl,placement:l,disablePortal:c,className:a.popper,modifiers:{flip:{enabled:u},arrow:{enabled:d,element:h},preventOverflow:{enabled:"disabled"!==p,boundariesElement:"disabled"===p?"scrollParent":p}}},d?it("span",{className:a.arrow,ref:this.handleArrowRef}):null,it(oe.a,{className:a.paper},it("a",{className:a.lin,onClick:this.handleGift.bind(this,"bit.svg","bitcoin")},it("img",{src:"/static/tipcoins/bit.svg",width:"25",height:"25"})),it("a",{className:a.lin,onClick:this.handleGift.bind(this,"doge.svg","dogecoin")},it("img",{src:"/static/tipcoins/doge.svg",width:"25",height:"25"})),it("a",{className:a.lin,onClick:this.handleGift.bind(this,"eth.svg","ethcoin")},it("img",{src:"/static/tipcoins/eth.svg",width:"25",height:"25"})),it("a",{className:a.lin,onClick:this.handleGift.bind(this,"Tip-1.png","ethtipc")},it("img",{src:"/static/tipcoins/Tip-1.png",width:"25",height:"25"})),it("a",{className:a.lin,onClick:this.handleGift.bind(this,"Tip-2.png","ethtipcoin")},it("img",{src:"/static/tipcoins/Tip-2.png",width:"25",height:"25"})),it("a",{className:a.lin,onClick:this.handleGift.bind(this,"Tip-3.png","ethxrtcoin")},it("img",{src:"/static/tipcoins/Tip-3.png",width:"25",height:"25"})))),it(nt,{open:g,image:m,type:f,siteId:"undefined"!==typeof i.site.site&&i.site.site.id,currentCoin:o,siteUserId:"undefined"!==typeof i.site.site.claim&&i.site.site.claim.userId,handleClose:this.handleGiftClose}))}}]),t}(m.a.Component);var ot=Object(j.b)((function(e){return{data:e.data}}))(Object(L.withStyles)((function(e){var t,a;return{root:{},paper:{maxWidth:400,overflow:"auto",padding:10,borderRadius:18},iconspacing:(t={display:"flex",alignItems:"center"},Object(h.a)(t,e.breakpoints.only("xs"),{margin:"0 -3px"}),Object(h.a)(t,e.breakpoints.only("sm"),{margin:"0 4px"}),Object(h.a)(t,e.breakpoints.between("md","xl"),{margin:"0 10px"}),t),lin:{cursor:"pointer",margin:5},popper:{zIndex:1,'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.9em",width:"17em",height:"1em","&::before":{borderWidth:"0 1em 1em 1em",borderColor:"transparent transparent ".concat(e.palette.common.white," transparent")}},'&[x-placement*="top"] $arrow':(a={bottom:0,left:0,marginBottom:"-0.9em"},Object(h.a)(a,e.breakpoints.only("xs"),{width:"20"}),Object(h.a)(a,e.breakpoints.only("sm"),{width:"33em"}),Object(h.a)(a,e.breakpoints.between("md","xl"),{width:"36em"}),Object(h.a)(a,"height","1em"),Object(h.a)(a,"&::before",{borderWidth:"1em 1em 0 1em",borderColor:"".concat(e.palette.common.white," transparent transparent transparent")}),a),'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.9em",height:"3em",width:"1em","&::before":{borderWidth:"1em 1em 1em 0",borderColor:"transparent ".concat(e.palette.common.white," transparent transparent")}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.9em",height:"3em",width:"1em","&::before":{borderWidth:"1em 0 1em 1em",borderColor:"transparent transparent transparent ".concat(e.palette.common.white)}}},arrow:{position:"absolute",fontSize:7,width:"3em",height:"3em","&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},social:{margin:"20px 5px"}}}))(rt)),st=m.a.createElement,lt=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.site,n=e.token;return st(m.a.Fragment,null,"undefined"!==typeof a._id&&st(m.a.Fragment,null,n&&"start"===a.claim.verified&&st(B.a,{variant:"h6",className:t.text},"Do you own this site?",st(V.a,{href:"/site-verification/"+a._id+"/"+n},st("a",null," Claim it ")),"today and earn tips"),n&&"pending"===a.claim.verified&&st(B.a,{variant:"h6",className:t.text},"Site verification for this link is pending."),n&&"success"===a.claim.verified&&st("div",{style:{display:"flex",alignItems:"center",margin:"10px 8%"}},st("img",{src:"/static/icons/verified-badge.svg",style:{width:25,height:25}}),st(B.a,{variant:"h6",style:{fontSize:14}},"Site ownership was verified by: @",a.claim.username))))}}]),t}(g.Component);var ct=Object(j.b)((function(e){return{data:e.data}}))(Object(L.withStyles)((function(e){return{margin:{margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit},text:{textAlign:"center",margin:"10px 8%",fontSize:15}}}))(lt)),ut=a("qtdb"),pt=a.n(ut),dt=m.a.createElement,ht=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{btc:null,doge:null,eth:null,tipc:null,tip:null,xth:null}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.gift;if("undefined"!==typeof t[0]){var a=0,n=0,i=0,r=0,o=0,s=0;t.map((function(t){"btc"===t.currency&&(a=ze()(a)+ze()(t.amount),e.setState({btc:a.toFixed(5)}))})),t.map((function(t){"doge"===t.currency&&(n=ze()(n)+ze()(t.amount),e.setState({doge:n.toFixed(5)}))})),t.map((function(t){"ethcoin"===t.currency&&(i=ze()(i)+ze()(t.amount),e.setState({eth:i.toFixed(5)}))})),t.map((function(t){"ethtipc"===t.currency&&(r=ze()(r)+ze()(t.amount),e.setState({tipc:r.toFixed(5)}))})),t.map((function(t){"ethtipcoin"===t.currency&&(o=ze()(o)+ze()(t.amount),e.setState({tip:o.toFixed(5)}))})),t.map((function(t){"ethxrtcoin"===t.currency&&(s=ze()(s)+ze()(t.amount),e.setState({xth:s.toFixed(5)}))}))}}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.gift,n=this.state,i=n.btc,r=n.doge,o=n.eth,s=n.tipc,l=n.tip,c=n.xth;return"undefined"!==typeof a[0]?dt(pt.a,{className:t.actions},i&&dt(m.a.Fragment,null,dt("img",{src:"/static/tipcoins/bit.svg",className:t.img}),dt("p",{className:t.num},i)),r&&dt(m.a.Fragment,null,dt("img",{src:"/static/tipcoins/doge.svg",className:t.img}),dt("p",{className:t.num},r)),o&&dt(m.a.Fragment,null,dt("img",{src:"/static/tipcoins/eth.svg",className:t.img}),dt("p",{className:t.num},o)),s&&dt(m.a.Fragment,null,dt("img",{src:"/static/tipcoins/Tip-1.png",className:t.img}),dt("p",{className:t.num},this.state.tipc)),l&&dt(m.a.Fragment,null,dt("img",{src:"/static/tipcoins/Tip-2.png",className:t.img}),dt("p",{className:t.num},l)),c&&dt(m.a.Fragment,null,dt("img",{src:"/static/tipcoins/Tip-3.png",className:t.img}),dt("p",{className:t.num},c))):null}}]),t}(m.a.Component);var gt=Object(j.b)((function(e){return{data:e.data}}))(Object(L.withStyles)((function(e){var t,a;return a={button:{margin:e.spacing.unit},actions:{display:"flex",flexGrow:"wrap"},num:Object(h.a)({fontSize:15,fontWeight:"500",padding:0,color:"#403d3d",marginLeft:"-7px"},e.breakpoints.up("md"),{marginLeft:"-18px"}),img:{width:30,height:30,margin:3,marginLeft:"1%"}},Object(h.a)(a,"num",{fontSize:12,marginLeft:-3,color:"gray"}),Object(h.a)(a,"iconspacing",(t={},Object(h.a)(t,e.breakpoints.only("xs"),{margin:"0 -3px"}),Object(h.a)(t,e.breakpoints.only("sm"),{margin:"0 4px"}),Object(h.a)(t,e.breakpoints.between("md","xl"),{margin:"0 10px"}),t)),a}))(ht)),mt=m.a.createElement,ft=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{open:!1}),Object(h.a)(Object(p.a)(a),"handleOpen",(function(){a.setState({open:!0})})),Object(h.a)(Object(p.a)(a),"handleClose",(function(){a.setState({open:!1})})),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.site,a=(e.url,e.gift);return mt(oe.a,{style:{display:"flex",flexWrap:"wrap",alignItems:"center",margin:"10px 8%",boxShadow:"0px 0px 1px 0px",color:"#d9dadc",borderRadius:0}},mt(De,{siteObjId:t._id}),mt(Le,null),mt(ot,{site:t}),mt("br",null),mt(gt,{gift:a}))}}]),t}(g.Component),bt=a("u39b"),yt=m.a.createElement,Ot=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{btc:!1,doge:!1,eth:!1,tipc:!1,tip:!1,xth:!1}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.gift;"undefined"!==typeof t[0]&&t.map((function(t){"btc"===t.currency&&e.setState({btc:!0}),"doge"===t.currency&&e.setState({doge:!0}),"ethcoin"===t.currency&&e.setState({eth:!0}),"ethtipc"===t.currency&&e.setState({tipc:!0}),"ethtipcoin"===t.currency&&e.setState({tip:!0}),"ethxrtcoin"===t.currency&&e.setState({xth:!0})}))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.gift,n=this.state,i=n.btc,r=n.doge,o=n.eth,s=n.tipc,l=n.tip,c=n.xth;return"undefined"!==typeof a[0]?yt("span",{className:t.actions},i&&yt(m.a.Fragment,null,yt("img",{src:"/static/tipcoins/bit.svg",className:t.img})),r&&yt(m.a.Fragment,null,yt("img",{src:"/static/tipcoins/doge.svg",className:t.img})),o&&yt(m.a.Fragment,null,yt("img",{src:"/static/tipcoins/eth.svg",className:t.img})),s&&yt(m.a.Fragment,null,yt("img",{src:"/static/tipcoins/Tip-1.png",className:t.img})),l&&yt(m.a.Fragment,null,yt("img",{src:"/static/tipcoins/Tip-2.png",className:t.img})),c&&yt(m.a.Fragment,null,yt("img",{src:"/static/tipcoins/Tip-3.png",className:t.img}))):null}}]),t}(m.a.Component);var vt=Object(j.b)((function(e){return{data:e.data}}))(Object(L.withStyles)((function(e){var t,a;return a={button:{margin:e.spacing.unit},actions:{display:"inline-flex"},num:Object(h.a)({fontSize:15,fontWeight:"500",padding:0,color:"#403d3d",marginLeft:"-7px"},e.breakpoints.up("md"),{marginLeft:"-18px"}),img:{width:30,height:30,margin:3,marginLeft:"1%"}},Object(h.a)(a,"num",{fontSize:12,marginLeft:-3}),Object(h.a)(a,"iconspacing",(t={},Object(h.a)(t,e.breakpoints.only("xs"),{margin:"0 -3px"}),Object(h.a)(t,e.breakpoints.only("sm"),{margin:"0 4px"}),Object(h.a)(t,e.breakpoints.between("md","xl"),{margin:"0 10px"}),t)),a}))(Ot)),jt=m.a.createElement,wt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{title:"",message:"",titleHelper:{err:!1,msg:""},loading:!1,open:!1,msg:""}),Object(h.a)(Object(p.a)(a),"nutralizeTitle",(function(e){return e.toLocaleLowerCase().split(" ").join("-").replace(/[.*+?^$/{}()!%#>@=:;'|[\]\\]/g,"")})),Object(h.a)(Object(p.a)(a),"displayEmptyTopics",(function(){var e=a.state.token,t=a.props,n=t.url,i=t.site,r=t.gift;return jt("div",null,e?jt("div",null,"undefined"!==typeof i&&"undefined"!==typeof i.id&&jt(ft,{url:n,site:i,gift:r}),jt(fe,{url:n})):jt("div",null,jt(B.a,{variant:"button",style:{fontSize:20}},K.a.l2),jt(B.a,{variant:"caption",style:{fontSize:17}},K.a.m2,jt(V.a,{href:"/login"},jt("a",null,"\xa0",K.a.j,"\xa0")),K.a.n2)))})),Object(h.a)(Object(p.a)(a),"displayTopics",(function(){var e=a.props,t=e.classes;return e.topics.map((function(e){return jt(M.a,{className:t.root,key:e._id},jt(z.a,{alignItems:"flex-start"},jt(U.a,null,e.user_id?jt("a",{target:"_blank",href:"/topics/"+e._id+"/"+a.nutralizeTitle(e.title),style:{textDecoration:"none",margin:"6px -1px"}},jt(bt.a,{borderColor:"black",borderWidth:2,name:e.user[0].username,url:e.user[0].profileimage?O.a.profileimage+e.user[0].profileimage:null})):jt(bt.a,{borderColor:"black",borderWidth:2,name:"Ano",url:null})),jt(W.a,{primary:jt("a",{target:"_blank",href:"/topics/"+e._id+"/"+a.nutralizeTitle(e.title),style:{color:"#1F7BD8",textDecoration:"none",fontSize:18}},e.title.length>50?e.title.substr(0,40)+"...":e.title,jt(vt,{gift:e.gift})),secondary:jt(m.a.Fragment,null,jt(B.a,{component:"span",className:t.inline,color:"textPrimary"},"By \xa0",e.user_id?jt(V.a,{href:"/profile/"+e.user[0]._id+"/@"+e.user[0].username},jt("a",{style:{color:"#1F7BD8",textDecoration:"none"}},jt("strong",{style:{color:"gray"}},"@"),e.user[0].username)):jt(B.a,null,"Anonymous"),"\xa0"," ",J()(e.created_at).locale(K.a.locale).fromNow()))})))}))})),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");this.setState({token:e})}},{key:"render",value:function(){var e=this.props,t=e.site,a=e.topics,n=e.url,i=e.gift,r=e.classes,o=this.state.token;return jt("div",{style:{marginTop:80}},jt(ct,{token:o,site:t}),"undefined"!==typeof t.url&&jt(B.a,{style:{textAlign:"center",margin:"10px 8%"}},jt("a",{target:"_blank",href:t.url},t.url)),"undefined"===typeof a?this.displayEmptyTopics():jt(m.a.Fragment,null,"undefined"!==typeof t.id&&jt(ft,{url:n,site:t,gift:i}),jt(oe.a,{className:r.pap},jt(B.a,{variant:"h6",className:r.head},K.a.s),jt("div",null,jt("div",{style:{backgroundColor:"white",width:"100%"}},jt("div",{className:r.topic},this.displayTopics())))),jt(fe,{url:n})))}}]),t}(m.a.Component),xt=Object(L.withStyles)((function(e){return{root:{width:"100%",margin:"0px 10% 0px 0px",padding:0},inline:{display:"inline"},container:{display:"flex",flexWrap:"wrap",margin:"5px 10%"},buttonProgress:{color:H.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},cnt:{fontSize:11},pap:{margin:"10px 8%",boxShadow:"0px 0px 1px 0px",color:"#d9dadc",borderRadius:0},topic:{maxHeight:400,width:"100%",overflow:"auto"},head:{padding:"5px 12px",fontWeight:"400"}}}))(wt),kt=a("cgWl"),St=m.a.createElement,Ct=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{drawer:!1,stopScroll:!1}),Object(h.a)(Object(p.a)(a),"handleDrawerOpen",(function(){a.setState({drawer:!0})})),Object(h.a)(Object(p.a)(a),"handleDrawerClose",(function(){a.setState({drawer:!1})})),Object(h.a)(Object(p.a)(a),"trackScrolling",(function(e){return window.scrollY>240?(a.setState({stopScroll:!0}),!1):(a.setState({stopScroll:!1}),!1)})),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){removeEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){var e=this.props,t=e.router,a=e.data,n=this.state,i=n.stopScroll,r=n.drawer;return St("div",null,St(D.a,{drawer:r,handleDrawerOpen:this.handleDrawerOpen,handleDrawerClose:this.handleDrawerClose}),St(kt.a,{drawer:r,stopScroll:i,overlay:!1,handleDrawerOpen:this.handleDrawerOpen,handleDrawerClose:this.handleDrawerClose},St(A.a,{container:!0,spacing:24},St(A.a,{item:!0,xs:12,sm:12,md:6,lg:7,xl:7},St(I,{url:t.query.s,site:a.site.site,height:"95vh",top:70})),St(A.a,{item:!0,xs:12,sm:12,md:6,lg:5,xl:5},St(xt,{topics:a.site.topics,site:a.site.site,gift:a.site.gift,url:t.query.s})))))}}]),t}(g.Component);var Tt=Object(j.b)((function(e){return{data:e.data}}))(Object(F.withRouter)(Ct)),It=m.a.createElement,Nt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))),Object(h.a)(Object(p.a)(a),"state",{loading:!0}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r,s,l,c;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e=this.props,t=e.dataTopic,a=e.getSiteTopicList,n=e.getUser,r=localStorage.getItem("token"),s=sessionStorage.getItem("user"),u.prev=3,!r){u.next=15;break}if(s){u.next=14;break}return l={method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","x-auth-token":r},url:O.a.api+"/users/me"},u.next=9,i.a.awrap(b()(l));case 9:c=u.sent,n(c.data[0]),sessionStorage.setItem("user",o()(c.data[0])),u.next=15;break;case 14:n(JSON.parse(s));case 15:a(JSON.parse(t)),this.setState({loading:!1}),u.next=22;break;case 19:u.prev=19,u.t0=u.catch(3),u.t0.response.data.error&&(localStorage.removeItem("token"),E.a.push("/login?sE=true"));case 22:case"end":return u.stop()}}),null,this,[[3,19]])}},{key:"render",value:function(){var e=this.state.loading;return It("div",null,It(e?y.a:Tt,null))}}],[{key:"getInitialProps",value:function(e){var t,a,n,r;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.query,a={method:"POST",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"},data:o()({url:t.s}),url:O.a.api+"/sites/get"},s.next=4,i.a.awrap(b()(a));case 4:return n=s.sent,r=o()(n.data.content),s.abrupt("return",{dataTopic:r});case 7:case"end":return s.stop()}}))}}]),t}(g.Component);t.default=Object(j.b)((function(e){return{data:e.data}}),(function(e){return Object(v.b)({getUser:w.n,getSiteTopicList:w.i},e)}))(Nt)}},[["VGMq",1,2,0,3,4,5,6,7,8,9,10,11,12,13,14,17]]]);