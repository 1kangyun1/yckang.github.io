(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{39:function(e,n,t){e.exports=t.p+"static/media/background.a6898b95.png"},47:function(e,n,t){e.exports=t.p+"static/media/0.a8844a19.png"},48:function(e,n,t){e.exports=t.p+"static/media/0.b5de3507.png"},49:function(e,n,t){e.exports=t.p+"static/media/0.80746cf3.png"},50:function(e,n,t){e.exports=t.p+"static/media/0.55996be2.png"},51:function(e,n,t){e.exports=t.p+"static/media/0.19f4d0cd.png"},52:function(e,n,t){e.exports=t.p+"static/media/0.781e9cc4.png"},53:function(e,n,t){e.exports=t.p+"static/media/resume final.7c465210.pdf"},63:function(e){e.exports=JSON.parse('[{"id":1,"name":"Todo App","language":["HTML"],"numImages":2,"description":"Todo application using react and api"},{"id":2,"name":"Todo App2","language":["HTML"],"numImages":1,"description":"Todo application using react and api"},{"id":3,"name":"HomeLight","language":["Unreal Engine"],"numImages":5,"description":"Todo application using react and api"},{"id":4,"name":"PengwinRun","language":["unity"],"numImages":3,"description":"Todo application using react and api"},{"id":5,"name":"WavePong","language":["Unity"],"numImages":2,"description":"Todo application using react and api"}]')},65:function(e,n,t){e.exports=t(90)},70:function(e,n,t){},71:function(e,n,t){},79:function(e,n,t){var a={"./HomeLight/0.png":47,"./PengwinRun/0.png":48,"./Todo App/0.png":49,"./Todo App2/0.png":50,"./Todo App3/0.png":51,"./WavePong/0.png":52};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=79},80:function(e,n,t){var a={"./HomeLight/0.png":47,"./HomeLight/1.png":81,"./HomeLight/2.png":82,"./HomeLight/3.png":83,"./HomeLight/4.png":84,"./PengwinRun/0.png":48,"./PengwinRun/1.png":85,"./PengwinRun/2.png":86,"./Todo App/0.png":49,"./Todo App/1.png":87,"./Todo App2/0.png":50,"./Todo App3/0.png":51,"./WavePong/0.png":52,"./WavePong/1.png":88,"./background/background.png":39};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=80},81:function(e,n,t){e.exports=t.p+"static/media/1.1242f413.png"},82:function(e,n,t){e.exports=t.p+"static/media/2.fc246027.png"},83:function(e,n,t){e.exports=t.p+"static/media/3.eb5e17c5.png"},84:function(e,n,t){e.exports=t.p+"static/media/4.78e26eb3.png"},85:function(e,n,t){e.exports=t.p+"static/media/1.48c0ab16.png"},86:function(e,n,t){e.exports=t.p+"static/media/2.dab93b41.png"},87:function(e,n,t){e.exports=t.p+"static/media/1.fc1b991a.png"},88:function(e,n,t){e.exports=t.p+"static/media/1.5e5bbf61.png"},90:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(18),i=t.n(r),c=(t(70),t(13)),p=t(14),s=t(17),l=t(16),u=(t(71),t(32)),m=t(23),g=t(64),d=t(94),h=t(93),f=t(53),v=t.n(f);function w(){return o.a.createElement(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"pl-lg-5"},o.a.createElement(u.b,{className:"navbar-brand",to:"/"},"Brian Kang"),o.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(h.a,{className:"mr-auto"},o.a.createElement(u.b,{className:"nav-link",to:"/projects"},"Projects"),o.a.createElement("a",{href:v.a,target:"_blank",rel:"noopener noreferrer",className:"nav-link"},"Resume"))))}var b=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Development Corner"),o.a.createElement("h4",null,"Who am I?"),o.a.createElement("p",null,"A passionate coder who enjoys learning new ways to code, improving how I work, and making games."),o.a.createElement("h4",null,"What am I working on right now?"),o.a.createElement("p",null,"Finishing up my Software Engineering bachelor's degree, and working on as many side projects as possible."),o.a.createElement("h4",null,"What can you find here?"),o.a.createElement("p",null,"Many of favourite projects that I enjoyed working on! Some even have source code!"))}}]),t}(a.Component),E=t(62),j=t(30),y=t(59),k=function(e){Object(s.a)(a,e);var n=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).onClick=function(n){e.props.setShow(!0),e.props.setShowNum(e.props.proj.id)},e}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement(j.a,{style:{width:"18rem"}},o.a.createElement(j.a.Img,{variant:"top",src:t(79)("./"+this.props.proj.name+"/0.png")}),o.a.createElement(j.a.Body,null,o.a.createElement(j.a.Title,null,this.props.proj.name),o.a.createElement(j.a.Text,null,this.props.proj.description),o.a.createElement(y.a,{variant:"primary",onClick:this.onClick},"More")))}}]),a}(a.Component),O=t(34),x=t(44),T=function(e){Object(s.a)(a,e);var n=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,i=new Array(r),p=0;p<r;p++)i[p]=arguments[p];return(e=n.call.apply(n,[this].concat(i))).onHide=function(n){e.props.setShow(!1)},e.createCarousel=function(){for(var n=[],a=0;a<e.props.proj.numImages;a++)n.push(o.a.createElement(x.a.Item,null,o.a.createElement("img",{className:"d-block w-100",src:t(80)("./"+e.props.proj.name+"/"+String(a)+".png"),alt:""})));return n},e}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement(O.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.show,onHide:this.onHide},o.a.createElement(O.a.Header,{closeButton:!0},o.a.createElement(O.a.Title,{id:"contained-modal-title-vcenter"},this.props.proj.name)),o.a.createElement(O.a.Body,null,o.a.createElement(x.a,null,this.createCarousel()),this.props.proj.description))}}]),a}(a.Component),S=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={showNum:-1,show:!1},e.setShow=function(n){e.setState({show:n})},e.setShowNum=function(n){e.setState({showNum:n})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,this.props.projs.map((function(n){return n.id===e.state.showNum&&e.state.show?o.a.createElement(T,{proj:n,show:e.state.show,setShow:e.setShow}):null})),o.a.createElement(E.a,null,this.props.projs.map((function(n){return o.a.createElement(k,{key:n.id,proj:n,setShow:e.setShow,setShowNum:e.setShowNum})}))))}}]),t}(a.Component);function N(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Invalid page"))}var I=t(63),C=t(39),A=t.n(C),H=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement(w,null),o.a.createElement(g.a,{styles:{backgroundImage:"url(".concat(A.a,")")}},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:b}),o.a.createElement(m.a,{exact:!0,path:"/projects",render:function(e){return o.a.createElement(S,{projs:I})}}),o.a.createElement(m.a,{component:N})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(89);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.dd87a351.chunk.js.map