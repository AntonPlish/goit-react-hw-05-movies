"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{4377:function(t,e,r){r.d(e,{IQ:function(){return w},Jh:function(){return y},Pg:function(){return g},XT:function(){return l},fO:function(){return m}});var n=r(5861),c=r(7757),a=r.n(c),u=r(4569),s=r.n(u),i="1cd7fff4942b0a82f9d2c241c5225c79",p="https://api.themoviedb.org/3",o="".concat(p,"/trending/movie/week"),f="".concat(p,"/search/movie"),h="".concat(p,"/movie/");function l(){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(f,"?api_key=").concat(i,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(h).concat(e,"/credits?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.message);case 10:case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},1247:function(t,e,r){r.r(e);var n=r(885),c=r(2791),a=r(6871),u=r(4377),s=r(184);e.default=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)(null),r=(0,n.Z)(e,2),i=r[0],p=r[1];return(0,c.useEffect)((function(){(0,u.IQ)(t).then(p)}),[t]),i?(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:i.data.cast.map((function(t){var e=t.character,r=t.name,n=t.profile_path,c=t.id;return n&&(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(n),alt:"",width:150}),(0,s.jsx)("p",{children:r}),(0,s.jsxs)("p",{children:["Character: ",e]})]},c)}))})}):null}}}]);
//# sourceMappingURL=247.998fda67.chunk.js.map