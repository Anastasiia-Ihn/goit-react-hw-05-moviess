"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{81:function(n,t,r){r.d(t,{GZ:function(){return u},Qg:function(){return p},ap:function(){return s},rQ:function(){return o},sw:function(){return l}});var e=r(861),a=r(687),i=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={language:"en-US",api_key:"84201912ed7e3ce22261b9e0387010b4"};var o=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/".concat(t,"/credits?"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query= ".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},237:function(n,t,r){r.d(t,{T:function(){return d}});var e,a,i=r(689),c=r(87),o=r(168),u=r(867),s=u.ZP.ul(e||(e=(0,o.Z)(["\n  color: ",";\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 50px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(n){return n.theme.colors.active})),p=u.ZP.li(a||(a=(0,o.Z)(["\n  background-color: ",";\n  border-radius: 5px;\n  box-shadow: 10px 11px 10px 2px rgba(34, 60, 80, 0.2);\n  overflow: hidden;\n  height: 418px;\n  :focus,\n  :hover {\n    cursor: pointer;\n  }\n  & img {\n    display: block;\n\n    width: 100%;\n  }\n  & h3 {\n    padding: 8px 12px;\n    line-height: 1.36;\n\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: wrap;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n"])),(function(n){return n.theme.colors.darkPurple})),l=r(585),f=r(184),d=function(n){var t=n.list,r=(0,i.TH)();return(0,f.jsx)(s,{children:t.map((function(n){return(0,f.jsx)(p,{children:(0,f.jsxs)(c.rU,{to:"/movies/".concat(n.id),state:{from:r},children:[(0,f.jsx)("img",{src:n.poster_path?"".concat(l.f).concat(n.poster_path):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",alt:n.original_title,width:226,height:339}),(0,f.jsx)("h3",{children:n.title})]})},n.id)}))})}},304:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e,a=r(861),i=r(439),c=r(687),o=r.n(c),u=r(81),s=r(237),p=r(791),l=r(168),f=r(867).ZP.h1(e||(e=(0,l.Z)(["\n  text-align: center;\n  font-size: 60px;\n  margin-bottom: 60px;\n"]))),d=r(184);function h(){var n=(0,p.useState)([]),t=(0,i.Z)(n,2),r=t[0],e=t[1];return(0,p.useEffect)((function(){function n(){return(n=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.rQ)();case 3:t=n.sent,e(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("err");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{children:"Trending today"}),r&&(0,d.jsx)(s.T,{list:r})]})}},585:function(n,t,r){r.d(t,{f:function(){return e}});var e="https://image.tmdb.org/t/p/w500/"}}]);
//# sourceMappingURL=304.b25c2108.chunk.js.map