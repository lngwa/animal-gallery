(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(1)),i=n(2),s=n(4),u=n(3),h=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200X200"),alt:"robo"}),r.a.createElement("div",null,r.a.createElement("h3",null,n),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(h,{key:t,id:e.id,name:e.name,email:e.email})})))},d=function(e){var t=e.onSearch;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"Search",placeholder:"Search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:800}},e.children)},b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isfailure:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({isfailure:!0})}},{key:"render",value:function(){return this.state.isfailure?r.a.createElement("h1",null,"Oooops something went wrong!"):r.a.createElement(a.Fragment,null,this.props.children)}}]),n}(a.Component),p=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearch=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length<1?r.a.createElement("h1",null,"Loading ..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Friends"),r.a.createElement(d,{onSearch:this.onSearch}),r.a.createElement("hr",null),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(m,{robots:t}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.82af5808.chunk.js.map