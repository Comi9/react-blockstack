(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(e,n,t){e.exports=t(594)},270:function(e,n){},272:function(e,n){},288:function(e,n){},291:function(e,n){},525:function(e,n){},594:function(e,n,t){"use strict";t.r(n);var i=t(13),s=t.n(i),a=t(247),o=t.n(a),r=t(248),c=t(249),u=t(251),l=t(250),d=t(252),g=t(95),p=new g.AppConfig(["store_write","publish_data"]),h=function(e){function n(){var e;return Object(r.a)(this,n),(e=Object(u.a)(this,Object(l.a)(n).call(this))).redirectToSignIn=function(){return e.userSession.redirectToSignIn()},e.userSession=new g.UserSession({appConfig:p}),e.state={isSignInPending:e.userSession.isSignInPending(),isUserSignedIn:e.userSession.isUserSignedIn()},e}return Object(d.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.userSession;!n.isUserSignedIn()&&n.isSignInPending()&&n.handlePendingSignIn().then(function(t){if(e.setState({userData:t}),!t.username)throw new Error("This app requires a username.");e.setState({isUserSignedIn:n.isUserSignedIn(),isSignInPending:n.isSignInPending()})})}},{key:"signOut",value:function(e){e.preventDefault(),this.userSession.signUserOut(),window.location="/"}},{key:"render",value:function(){var e=this,n=this.state,t=n.isUserSignedIn,i=n.isSignInPending;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{style:{width:"80%",margin:"0 auto"}},s.a.createElement("header",{style:{display:"flex",fontFamily:"monospace"}},s.a.createElement("h1",null,"React Blockstack app"),s.a.createElement("section",{style:{marginLeft:"auto",lineHeight:"60px"}},s.a.createElement("span",{style:{display:"inline-block",marginRight:"10px",borderRadius:"50%",width:"8px",height:"8px",background:t?"green":"red",lineHeight:"60px"}}),s.a.createElement("span",null,t?"Connected":i?"Loading...":"Not connected"))),s.a.createElement("article",null,s.a.createElement("section",null,!t&&s.a.createElement("button",{onClick:function(){return e.redirectToSignIn()},type:"submit"},"Login with Blockstack"),t&&s.a.createElement("button",{onClick:function(n){return e.signOut(n)},type:"submit"},"Sign out")))))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[253,1,2]]]);
//# sourceMappingURL=main.2ba5d316.chunk.js.map