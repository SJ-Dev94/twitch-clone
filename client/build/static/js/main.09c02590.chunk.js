(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){e.exports=n(243)},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(49),c=n.n(i),s=n(13),o=n(11),u=n(106),l=n(250),m=n(249),p=n(248),d=n(3),h=n(2),f=n(8),E=n(6),b=n(9),v=n(19),y=n.n(v),g=n(22),S=n(31),O=n(107),j=n.n(O).a.create({baseURL:"http://localhost:3001"}),I=n(108),k=n.n(I)()(),N=function(e){return function(){var t=Object(S.a)(y.a.mark(function t(n){var a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},w=n(245),C=n(244),A=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(i)))).renderInput=function(e){var t=e.input,a=e.label,i=e.meta;console.log(i);var c="field ".concat(i.error&&i.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(i))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(w.a,{name:"title",component:this.renderInput,label:"Enter Title"}),r.a.createElement(w.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(r.a.Component),T=Object(C.a)({form:"Stream Form",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(A),_=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create a Stream"),r.a.createElement(T,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),D=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(S.a)(y.a.mark(function t(n,a){var r,i;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,j.post("/streams",Object(g.a)({},e,{userId:r}));case 3:i=t.sent,n({type:"CREATE_STREAM",payload:i.data}),k.push("/");case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}})(_),R=n(246),x=function(e){return c.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visisble active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},M=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.props.deleteStream(t)},className:"ui button negative"},"Delete"),r.a.createElement(R.a,{to:"/",className:"ui button"},"Cancel"))}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete the stream: ".concat(this.props.stream.title):"Are you sure you want to delete this stream?"}},{key:"render",value:function(){return r.a.createElement(x,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return k.push("/")}})}}]),t}(r.a.Component),U=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N,deleteStream:function(e){return function(){var t=Object(S.a)(y.a.mark(function t(n){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),k.push("/");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(M),L=n(39),P=n.n(L),F=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return console.log(this.props),this.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null,"Edit a Stream"),r.a.createElement(T,{initialValues:P.a.pick(this.props.stream,"title","description"),onSubmit:this.onSubmit})):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),G=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N,editStream:function(e,t){return function(){var n=Object(S.a)(y.a.mark(function n(a){var r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),k.push("/");case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(F),H=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{className:"right floated content"},r.a.createElement(R.a,{className:"ui button primary",to:"streams/edit/".concat(e.id)},"Edit"),r.a.createElement(R.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map(function(t){return r.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},r.a.createElement(R.a,{to:"/streams/".concat(t.id),className:"header"},t.title),r.a.createElement("div",{className:"description"},t.description)))})}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(R.a,{to:"/streams/new",className:"ui button primary"},"Create Stream"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Streams"),r.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),t}(r.a.Component),q=Object(s.b)(function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchStreams:function(){return function(){var e=Object(S.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(H),B=n(110),J=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(E.a)(t).call(this,e))).videoRef=r.a.createRef(),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"componentWillUnmount",value:function(){this.player.destroy()}},{key:"buildPlayer",value:function(){if(!this.player&&this.props.stream){var e=this.props.match.params.id;this.player=B.a.createPlayer({type:"flv",url:"http://localhost:8000/live/".concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load()}}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),r.a.createElement("h1",null," ",this.props.stream.title),r.a.createElement("h5",null,"          ",this.props.stream.description)):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),V=Object(s.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:N})(J),X=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"732169580730-274cra0bjoll5abgotonl7rg9i0fd680.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),Y=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(X),K=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(R.a,{to:"/",className:"item"},"Streamer"),r.a.createElement("div",{className:"right menu"},r.a.createElement(R.a,{to:"/",className:"item"},"All Streams"),r.a.createElement(Y,null)))},W=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,{history:k},r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(m.a,null,r.a.createElement(p.a,{path:"/",exact:!0,component:q}),r.a.createElement(p.a,{path:"/streams/new",exact:!0,component:D}),r.a.createElement(p.a,{path:"/streams/edit/:id",exact:!0,component:G}),r.a.createElement(p.a,{path:"/streams/delete/:id",exact:!0,component:U}),r.a.createElement(p.a,{path:"/streams/:id",exact:!0,component:V})))))},z=n(247),Q={isSignedIn:null,userId:null},Z=n(30),$=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(g.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(g.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:z.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(g.a)({},e,P.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(g.a)({},e,Object(Z.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return P.a.omit(e,t.payload);default:return e}}}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,te=Object(o.e)($,ee(Object(o.a)(u.a)));c.a.render(r.a.createElement(s.a,{store:te},r.a.createElement(W,null)),document.querySelector("#root"))}},[[112,2,1]]]);
//# sourceMappingURL=main.09c02590.chunk.js.map