"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[990],{288:function(n,e,t){t.d(e,{IQ:function(){return p},Jh:function(){return d},pv:function(){return s},t2:function(){return u},z1:function(){return o}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1591).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7ff77d6c83d2307b93a470517dba345c"}}),s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie?query=".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1552:function(n,e,t){t.d(e,{$:function(){return s},Y:function(){return o}});var r,a,i=t(168),c=t(9202),s=c.Z.section(r||(r=(0,i.Z)(["\n  margin-top: 44px;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  width: 100%;\n"]))),o=c.Z.div(a||(a=(0,i.Z)(["\n  padding-left: 15px;\n  padding-right: 15px;\n"])))},1149:function(n,e,t){var r,a=t(168),i=t(5216).ZP.div(r||(r=(0,a.Z)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  box-shadow: 0px 1px 5px #98ced5;\n"])));e.Z=i},8652:function(n,e,t){var r,a=t(168),i=t(5216).ZP.div(r||(r=(0,a.Z)(["\n  padding-bottom: 15px;\n  padding-top: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  /* max-width: 800px; */\n"])));e.Z=i},8990:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r=t(5861),a=t(9439),i=t(4687),c=t.n(i),s=t(8059),o=t(7029),u=t(288),p=t(7666),d=t(1774),l=t(476),f=t(1552),x=t(7689),h=t(1087),v=t(184),m=function(){var n,e,t,r,a=(0,x.TH)();return(0,v.jsx)(f.$,{children:(0,v.jsxs)(f.Y,{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(d.Z,{children:(0,v.jsx)(h.OL,{to:"cast",state:{from:null!==(n=null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"},style:{color:"#405164"},children:(0,v.jsx)(l.Z,{style:{color:"#405164"},children:(0,v.jsx)("h4",{style:{margin:"0"},children:"Cast"})})})}),(0,v.jsx)(d.Z,{children:(0,v.jsx)(h.OL,{to:"reviews",state:{from:null!==(t=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},style:{color:"#405164"},children:(0,v.jsx)(l.Z,{style:{color:"#405164"},children:(0,v.jsx)("h4",{style:{margin:"0"},children:"Reviews"})})})})]})]})})},j=t(1149),g=t(8652),Z=function(n){var e=n.data,t=e.title,r=e.poster_path,a=e.vote_average,i=e.overview,c=e.genres,s=e.release_date.slice(0,4);return(0,v.jsxs)(j.Z,{children:[(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",width:250,alt:"poster"}),(0,v.jsxs)(g.Z,{children:[(0,v.jsxs)("h2",{children:[t," (",s,")"]}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*a),"% "]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:i}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:c.map((function(n){return n.name})).join(" ")})]})]})},w=t(2791),b=function(){var n=(0,w.useState)(null),e=(0,a.Z)(n,2),t=e[0],i=e[1],p=(0,w.useState)(null),d=(0,a.Z)(p,2),l=d[0],h=d[1],j=(0,x.UO)().movieId,g=(0,x.TH)(),b=(0,w.useRef)(g),y=(0,x.s0)();(0,w.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.t2)(j);case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),h(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();j&&n()}),[j]);return t&&(0,v.jsx)(f.$,{children:(0,v.jsxs)(f.Y,{children:[l&&(0,v.jsx)("p",{children:l}),(0,v.jsx)(s.Z,{onClick:function(){var n;y(null!==(n=b.current.state)&&void 0!==n?n:"/")},variant:"soft",size:"sm",children:"Go back"}),(0,v.jsx)(Z,{data:t}),(0,v.jsx)(m,{}),(0,v.jsx)(o.Z,{}),(0,v.jsx)(x.j3,{})]})})}}}]);
//# sourceMappingURL=990.afb33c90.chunk.js.map