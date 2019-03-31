(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),s=a(24),o=a(11),i=a(94),u=(a(105),Object(s.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";switch((arguments.length>1?arguments[1]:void 0).type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"SET_WALKS"===t.type?t.payload:e},h=Object(s.c)({errors:u,loginMode:m,user:p,dogWalkReducer:d}),g=a(5),E=a.n(g),b=a(7),f=a(21),O=a.n(f),v=E.a.mark(j),y=E.a.mark(k),w=E.a.mark(N);function j(e){var t;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(b.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,O.a.post("api/user/login",e.payload,t);case 6:return a.next=8,Object(b.b)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(b.b)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(b.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}},v,null,[[0,10]])}function k(e){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,O.a.post("api/user/logout",t);case 4:return e.next=6,Object(b.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}},y,null,[[0,8]])}function N(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)("LOGIN",j);case 2:return e.next=4,Object(b.d)("LOGOUT",k);case 4:case"end":return e.stop()}},w)}var _=N,T=E.a.mark(C),R=E.a.mark(S);function C(e){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,O.a.post("api/user/register",e.payload);case 5:return t.next=7,Object(b.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(b.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(b.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}},T,null,[[0,11]])}function S(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)("REGISTER",C);case 2:case"end":return e.stop()}},R)}var x=S,I=E.a.mark(A),L=E.a.mark(M);function A(){var e,t;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,O.a.get("api/user",e);case 4:return t=a.sent,a.next=7,Object(b.b)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}},I,null,[[0,9]])}function M(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)("FETCH_USER",A);case 2:case"end":return e.stop()}},L)}var D=M,G=E.a.mark(H),U=E.a.mark(P),F=E.a.mark(K),W=E.a.mark(z);function H(e){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("api/dog",e.payload);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("Error with user registration:",t.t0);case 8:case"end":return t.stop()}},G,null,[[0,5]])}function P(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("api/dog");case 3:return e=t.sent,t.next=6,Object(b.b)({type:"SET_WALKS",payload:e.data});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error with user registration:",t.t0);case 11:case"end":return t.stop()}},U,null,[[0,8]])}function K(e){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("post item",e.payload),t.next=4,O.a.delete("api/dog/"+e.payload);case 4:return t.next=6,Object(b.b)({type:"GET_WALKS"});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("this was an error with the delete");case 11:case"end":return t.stop()}},F,null,[[0,8]])}function z(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("ADD_WALK",H);case 2:return e.next=4,Object(b.c)("GET_WALKS",P);case 4:return e.next=6,Object(b.c)("DELETE_ITEM",K);case 6:case"end":return e.stop()}},W)}var B=z,V=E.a.mark(J);function J(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([_(),x(),D(),B()]);case 2:case"end":return e.stop()}},V)}var Q=a(8),Y=a(9),q=a(12),X=a(10),Z=a(13),$=a(237),ee=a(239),te=a(236),ae=a(238),ne=(a(127),a(235)),re=Object(o.b)()(function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")}),ce=(a(128),function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))}),le=(a(129),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(ce,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(ne.a,{className:"nav-link",to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(ne.a,{className:"nav-link",to:"/walk"},"Walk")),r.a.createElement("li",null,r.a.createElement(ne.a,{className:"nav-link",to:"/history"},"History")),r.a.createElement("li",null,r.a.createElement(ne.a,{className:"nav-link",to:"/map"},"Map")),r.a.createElement("li",null,r.a.createElement(re,{className:"nav-link"}))))))}),se=(a(130),Object(o.b)(function(e){return{user:e.user}})(function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(ne.a,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(ne.a,{to:"/walk"},"Walk")),r.a.createElement("li",null,r.a.createElement(ne.a,{to:"/history"},"History")),r.a.createElement("li",null,r.a.createElement(ne.a,{to:"/map"},"Map")),r.a.createElement("li",null,r.a.createElement(re,{className:"logOutButton"})),r.a.createElement("li",null,r.a.createElement("img",{src:"../images/doge_icon.png",className:"sideBarDoge",alt:"cool doge"}))))})),oe=(a(131),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),ie=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},a.backdropClickHandler=function(){a.setState({sideDrawerOpen:!1})},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(oe,{click:this.backdropClickHandler})),r.a.createElement("div",{style:{height:"100%"}},this.props.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{drawerClickHandler:this.drawerToggleClickHandler})),r.a.createElement(se,{show:this.state.sideDrawerOpen}),e,r.a.createElement("main",{style:{marginTop:"64px"}}))}}]),t}(n.Component),ue=Object(o.b)(function(e){return{user:e.user}})(ie),me=(a(132),function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"copyright"},"Design by Marcus \xa9 2019"))}),pe=a(95),de=a(53),he=a(28),ge=a.n(he),Ee=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={on:!1},a.toggle=function(){a.setState({on:!a.state.on})},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{onClick:this.toggle,src:"../images/doge2.png",className:"doge",alt:"doge"}),this.state.on&&r.a.createElement("img",{src:"../images/cool_doge.png",alt:"cool doge"}))}}]),t}(n.Component),be=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.login=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"LOGIN",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"LOGIN_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(de.a)({},e,t.target.value))}},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.loginMessage),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("h1",{className:"title"},"Dog Go!"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement(ge.a,{type:"submit",name:"submit"},"LogIn"))),r.a.createElement("center",null,r.a.createElement(Ee,null),r.a.createElement(ge.a,{variant:"outlined",type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register")))}}]),t}(n.Component),fe=Object(o.b)(function(e){return{errors:e.errors}})(be),Oe=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.registerUser=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"REGISTER",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(de.a)({},e,t.target.value))}},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("form",{onSubmit:this.registerUser},r.a.createElement("h1",null,"Register User"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement(ge.a,{type:"submit",name:"submit",value:"Register"}," Register"))),r.a.createElement("center",null,r.a.createElement(Ee,null),r.a.createElement(ge.a,{variant:"outlined",type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Login")))}}]),t}(n.Component),ve=Object(o.b)(function(e){return{errors:e.errors}})(Oe),ye=Object(o.b)(function(e){return{user:e.user,loginMode:e.loginMode}})(function(e){var t,a=e.component,n=e.user,c=e.loginMode,l=Object(pe.a)(e,["component","user","loginMode"]);return t=n.id?a:"login"===c?fe:ve,r.a.createElement(ae.a,Object.assign({},l,{component:t}))}),we=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.dispatch({type:"GET_WALKS"})},a.deleteButton=function(e){return function(){console.log("id:",e),a.props.dispatch({type:"DELETE_ITEM",payload:e})}},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"doggoList",value:function(){var e=this;if(this.props.dogWalkReducer&&this.props.dogWalkReducer.length>0)return this.props.dogWalkReducer.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null," ",t.walk_date," "),r.a.createElement("td",null," ",t.time_elapsed," "),r.a.createElement("td",null,t.ones),r.a.createElement("td",null,t.twos),r.a.createElement("td",null,r.a.createElement(ge.a,{onClick:e.deleteButton(t.id),className:"deleteButton"},r.a.createElement("img",{className:"miniIcon",src:"../images/delete.png",alt:""}))))})}},{key:"render",value:function(){return console.log(this.props.dogWalkReducer),r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," ",r.a.createElement("img",{className:"icon",src:"../images/calendar.png",alt:""})),r.a.createElement("th",null," ",r.a.createElement("img",{className:"icon",src:"../images/time.png",alt:""})),r.a.createElement("th",null,r.a.createElement("img",{className:"icon",src:"../images/hydrant.png",alt:""})),r.a.createElement("th",null,r.a.createElement("img",{className:"icon",src:"../images/poop.png",alt:""})),r.a.createElement("th",null,r.a.createElement("img",{className:"icon",src:"../images/delete.png",alt:""})))),r.a.createElement("tbody",null,this.doggoList())))}}]),t}(n.Component),je=Object(o.b)(function(e){return e})(we),ke=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.dispatch({type:"GET_WALKS"})},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"doggoList",value:function(){if(this.props.dogWalkReducer.length>0)return"Your last walk was on "+this.props.dogWalkReducer[0].walk_date+"."}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{id:"welcome"},"Hi ",this.props.user.username,"!"),r.a.createElement("h3",null," ",this.doggoList()),r.a.createElement("br",null),r.a.createElement(ne.a,{to:"/walk"},r.a.createElement("h2",null,"Go Walking")," ",r.a.createElement("br",null))),r.a.createElement("iframe",{src:"https://i.giphy.com/media/sHytgXD2vlNVC/giphy.webp",width:"300",height:"300",frameBorder:"0",title:"deal with it doge"}))}}]),t}(n.Component),Ne=Object(o.b)(function(e){return e})(ke),_e=a(37),Te=a(29),Re=a.n(Te),Ce=a(93),Se=a.n(Ce),xe=a(26),Ie=a.n(xe),Le=function(e){function t(){return Object(Q.a)(this,t),Object(q.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Re.a,{onClick:this.props.submit,variant:"extended",color:"primary",className:e.fab},r.a.createElement(Se.a,{className:Ie()(e.leftIcon,e.iconSmall)}),"Save"))}}]),t}(n.Component),Ae=Object(_e.withStyles)(function(e){return{fab:{margin:e.spacing.unit}}})(Object(o.b)(function(e){return e})(Le)),Me=function(e){function t(){return Object(Q.a)(this,t),Object(q.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bathroom"},r.a.createElement(Re.a,{color:"primary",size:"medium","aria-label":"Add",onClick:this.props.handlePlus1},r.a.createElement("img",{className:"icon",src:"../images/hydrant.png",alt:""})),r.a.createElement("h2",null,this.props.countOne)),r.a.createElement("div",{className:"bathroom"},r.a.createElement(Re.a,{color:"primary",size:"medium","aria-label":"Add",onClick:this.props.handlePlus2},r.a.createElement("img",{className:"icon",src:"../images/poop.png",alt:""})),r.a.createElement("h2",null,this.props.countTwo)," ",r.a.createElement("br",null)))}}]),t}(n.Component),De=function(e){function t(e){var a;return Object(Q.a)(this,t),(a=Object(q.a)(this,Object(X.a)(t).call(this,e))).handleClick=function(){a.setState({clicked:!0,selectedMessage:a.state.messages[Math.floor(Math.random()*a.state.messages.length)]})},a.state={messages:[r.a.createElement("img",{src:"../images/message.png",className:"message",alt:"don't forget poop bags"}),r.a.createElement("img",{src:"../images/message_muchready.png",className:"message",alt:"much ready"}),r.a.createElement("img",{src:"../images/message_wow.png",className:"message",alt:"wow"}),r.a.createElement("img",{src:"../images/message_treat.png",className:"message",alt:"treat plz"}),""],selectedNote:null,clicked:!1},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{onClick:this.handleClick,src:"../images/legs.png",className:"legs",alt:"doge"}),r.a.createElement("span",null,this.state.clicked&&this.state.selectedMessage))}}]),t}(n.Component),Ge=Object(_e.createMuiTheme)({palette:{primary:{light:"#aed581",main:"#689f38",dark:"#33691e",contrastText:"#000"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{fontFamily:["-apple-system","Roboto Mono",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),fontSize:"13",useNextVariants:!0}}),Ue=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={countOne:0,countTwo:0,secondsElapsed:0},a.componentDidMount=function(){a.props.dispatch({type:"GET_WALKS"})},a.handlePlus1=function(){console.log("clicked!"),a.setState({countOne:a.state.countOne+1})},a.handlePlus2=function(){console.log("clicked!"),a.setState({countTwo:a.state.countTwo+1})},a.handleSubmit=function(){console.log("submit!"),a.props.dispatch({type:"ADD_WALK",payload:a.state}),a.setState({countOne:0,countTwo:0,secondsElapsed:0})},a.handleStartClick=function(){a.incrementer=setInterval(function(){a.setState({secondsElapsed:a.state.secondsElapsed+1})},1e3)},a.handleStopClick=function(){clearInterval(a.incrementer)},a.getSeconds=function(){return("0"+a.state.secondsElapsed%60).slice(-2)},a.getMinutes=function(){return Math.floor(a.state.secondsElapsed/60)},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(_e.MuiThemeProvider,{theme:Ge},r.a.createElement(De,null),r.a.createElement("div",{className:"App"},r.a.createElement(Re.a,{color:"primary","aria-label":"Add",onClick:this.handleStartClick,className:e.fab},"Go"),r.a.createElement(Re.a,{color:"primary",size:"large","aria-label":"Add",onClick:this.handleStopClick,className:e.fab},"Stop"),r.a.createElement("h1",null,this.getMinutes(),":",this.getSeconds()),r.a.createElement(Me,{countOne:this.state.countOne,countTwo:this.state.countTwo,handlePlus1:this.handlePlus1,handlePlus2:this.handlePlus2}),r.a.createElement(Ae,{submit:this.handleSubmit})))}}]),t}(n.Component),Fe=Object(_e.withStyles)(function(e){return{fab:{margin:e.spacing.unit}}})(Object(o.b)(function(e){return e})(Ue)),We=a(56),He=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(q.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={userLocation:{lat:45,lng:-45},loading:!0},a}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){var a=t.coords,n=a.latitude,r=a.longitude;e.setState({userLocation:{lat:n,lng:r},loading:!1}),new window.google.maps.Marker({position:{lat:n,lng:r},map:We.Map})},function(){e.setState({loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.userLocation,n=this.props.google;return t?null:r.a.createElement(We.Map,{google:n,initialCenter:a,zoom:16})}}]),t}(n.Component),Pe=Object(We.GoogleApiWrapper)({apiKey:"AIzaSyDf4NU_rGOmsUaQj0HVAQsV2Uxb0xieWY0"})(He),Ke=(a(232),function(e){function t(){return Object(Q.a)(this,t),Object(q.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement($.a,null,r.a.createElement("div",null,r.a.createElement(ue,null),r.a.createElement(ee.a,null,r.a.createElement(te.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(ye,{exact:!0,path:"/history",component:je}),r.a.createElement(ye,{exact:!0,path:"/home",component:Ne}),r.a.createElement(ye,{exact:!0,path:"/walk",component:Fe}),r.a.createElement(ye,{exact:!0,path:"/map",component:Pe}),r.a.createElement(ae.a,{render:function(){return r.a.createElement("h1",null,"404")}})),r.a.createElement(me,null)))}}]),t}(n.Component)),ze=Object(o.b)()(Ke),Be=Object(i.a)(),Ve=[Be],Je=Object(s.d)(h,s.a.apply(void 0,Ve));Be.run(J),l.a.render(r.a.createElement(o.a,{store:Je},r.a.createElement(ze,null)),document.getElementById("react-root"))},96:function(e,t,a){e.exports=a(233)}},[[96,1,2]]]);
//# sourceMappingURL=main.1593e640.chunk.js.map