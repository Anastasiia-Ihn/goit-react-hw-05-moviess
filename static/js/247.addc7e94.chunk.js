"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{81:function(t,r,n){n.d(r,{GZ:function(){return o},Qg:function(){return p},ap:function(){return i},rQ:function(){return s},sw:function(){return f}});var e=n(861),a=n(687),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={language:"en-US",api_key:"84201912ed7e3ce22261b9e0387010b4"};var s=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day");case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r,"?"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/".concat(r,"/credits?"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r,"/reviews?"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query= ".concat(r));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},247:function(t,r,n){n.r(r),n.d(r,{default:function(){return h}});var e=n(861),a=n(439),u=n(687),c=n.n(u),s=n(791),o=n(689),i=n(596),p=n(81),f=n(585),d=n(184);function h(){var t=(0,o.UO)(),r=(0,s.useState)(),n=(0,a.Z)(r,2),u=n[0],h=n[1];return(0,s.useEffect)((function(){function r(){return(r=(0,e.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.ap)(t.movieById);case 3:n=r.sent,h(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Not found");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[t.movieById]),u?(0,d.jsx)("ul",{children:u.map((function(t){return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:"".concat(f.f).concat(t.profile_path),alt:t.name,width:200}),(0,d.jsx)("h3",{children:t.name}),(0,d.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))}):(0,d.jsx)("p",{children:"Sorry, not found"})}},585:function(t,r,n){n.d(r,{f:function(){return e}});var e="https://image.tmdb.org/t/p/w500/"}}]);
//# sourceMappingURL=247.addc7e94.chunk.js.map