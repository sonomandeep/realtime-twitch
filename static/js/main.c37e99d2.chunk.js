(this["webpackJsonprealtime-twitch"]=this["webpackJsonprealtime-twitch"]||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),i=a.n(c),o=(a(39),a(2)),s=a(8),l=a(28),u=a(29),m=a(5),f=a(11);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={search:{filters:[]},games:{topGames:[],searchedGame:{game:{},error:!1,streams:[]},isLoading:!0},streams:{}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_GAME_FETCH_LOADING":return p({},e,{games:p({},e.games,{isLoading:n})});case"SET_SEARCHED_GAME":return p({},e,{games:p({},e.games,{searchedGame:p({},e.games.searchedGame,{game:p({},n)})})});case"REMOVE_SEARCHED_GAME":return p({},e,{games:p({},e.games,{searchedGame:d.games.searchedGame})});case"SET_SEARCH_ERROR":return p({},e,{games:p({},e.games,{searchedGame:p({},e.games.searchedGame,{error:n})})});case"SET_FILTER":return p({},e,{search:p({},e.search,{filters:[].concat(Object(m.a)(e.search.filters),[n])})});case"REMOVE_FILTER":var r=e.search.filters.filter((function(e){return e!==n}));return p({},e,{search:p({},e.search,{filters:Object(m.a)(r)})});case"SET_TOP_GAMES":return p({},e,{games:p({},e.games,{topGames:Object(m.a)(n)})});case"SET_GAME_STREAMS":return p({},e,{streams:p({},e.streams,Object(f.a)({},n.game_id,n.streams))});default:return e}},g=Object(s.createStore)(h,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(u.a))),O=a(9),v=a(7),b=a.n(v),j=a(14),y=a(30),w=a.n(y).a.create({baseURL:"https://api.twitch.tv/helix/",timeout:1e4,headers:{"Client-ID":"0m7mjx5gk0km1ucct94bbafd0qub1s"}}),S=function(e){var t="";return e.forEach((function(e){t+="&".concat(e)})),t},_=function(e){return w.get("games?name=".concat(e))},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return w.get("streams?game_id=".concat(e).concat(S(t)))},T=function(e){return 0===Object.keys(e).length};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){return function(t){t({type:"SET_GAME_FETCH_LOADING",payload:e})}},x=function(e){return function(t){t({type:"SET_SEARCH_ERROR",payload:e})}},P=function(e){return function(){var t=Object(j.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:n=t.sent,r=n.data,T(r.data)?a(x(!0)):(a({type:"SET_SEARCHED_GAME",payload:R({},r.data[0])}),a(D(r.data[0].id)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(){var e=Object(j.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("games/top");case 2:a=e.sent,(n=a.data).data.forEach((function(e){return t(D(e.id))})),t({type:"SET_TOP_GAMES",payload:Object(m.a)(n.data)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(j.a)(b.a.mark((function t(a,n){var r,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),a(A(!0)),t.next=4,G(e,r.search.filters);case 4:c=t.sent,i=c.data,a({type:"SET_GAME_STREAMS",payload:{streams:Object(m.a)(i.data),game_id:e}}),a(A(!1));case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},C=function(e){var t=e.title,a=e.filter,c=Object(n.useState)(!1),i=Object(O.a)(c,2),s=i[0],l=i[1],u=Object(o.b)();return Object(n.useEffect)((function(){u(s?function(e){return function(t,a){var n=a();t({type:"SET_FILTER",payload:e}),n.games.topGames.forEach((function(e){return t(D(e.id))}))}}(a):function(e){return function(t,a){var n=a();t({type:"REMOVE_FILTER",payload:e}),n.games.topGames.forEach((function(e){return t(D(e.id))}))}}(a))}),[s]),r.a.createElement("input",{className:s?"filter filter-active":"filter",onClick:function(){l(!s)},type:"button",value:t})},M=a(31);var I=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],i=Object(o.b)(),s=function(e){e.preventDefault(),a.trim()&&i(P(a))};return r.a.createElement("form",{onSubmit:s,className:"fullWidth flex flex-center",id:"searchForm"},r.a.createElement("input",{id:"searchField",type:"text",name:"cerca",placeholder:"Cerca un gioco...",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement(M.a,{size:"18px",color:"#6441a5",id:"searchIcon",onClick:s}))},L=a(12);var F=function(){return r.a.createElement("div",{className:"fullWidth searchSectionContainer"},r.a.createElement("div",{className:"search-field-container flex row center"},r.a.createElement(I,null)),r.a.createElement("div",{className:"filters"},r.a.createElement(C,{title:"Italiano",filter:"language=it"}),r.a.createElement(C,{title:"Inglese",filter:"language=en"})))},H=a(13),W=a.n(H),z=a(32),V=a.n(z),B=a(33);a(66);var J=function(e){var t=e.title,a=e.id,n=Object(o.c)((function(e){return e.streams[a]}))||[];return r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("h1",{className:"list-title"},t),r.a.createElement(V.a,{className:"streams-list flex row"},n.map((function(e){return r.a.createElement("div",{key:W()(),className:"list-element",onClick:function(){return console.log("Premuto")}},r.a.createElement("div",{className:"list-element-inner"},r.a.createElement(B.LazyLoadImage,{src:(t=e.thumbnail_url,t.replace("{width}",300).replace("{height}",150)),className:"list-element-image",effect:"opacoty"})),r.a.createElement("div",{className:"list-element-info"},r.a.createElement("h2",{className:"list-element-title"},e.title),r.a.createElement("div",{className:"list-element-info-inner flex row"},r.a.createElement("h3",{className:"list-element-channel-name"},e.user_name),r.a.createElement("h4",{className:"list-element-counter"},e.viewer_count))));var t}))))};var q=function(){return r.a.createElement("div",{className:"games-loading flex center middle"},r.a.createElement("h1",null,"Sto caricando i giochi..."))};var U=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1],i=Object(o.c)((function(e){return e.games.topGames})),s=Object(o.c)((function(e){return e.games.searchedGame})),l=Object(o.c)((function(e){return e.games.isLoading})),u=Object(o.b)();Object(n.useEffect)((function(){u(k())}),[]),Object(n.useEffect)((function(){c(s.error)}),[s.error]);var m=i.map((function(e){return r.a.createElement(J,{title:e.name,id:e.id,key:W()()})}));return r.a.createElement("div",{className:"games-section full-width"},r.a.createElement(K,{cancel:function(){c(!1),u(x(!1))},isActive:a}),l?r.a.createElement(q,null):T(s.game)?m:r.a.createElement($,null))};var $=function(){var e=Object(o.c)((function(e){return e.games.searchedGame.game}));return r.a.createElement(J,{title:e.name,id:e.id})};var K=function(e){var t=e.cancel,a=e.isActive;return r.a.createElement("div",{className:"game-not-found flex row"+(!a&&" hide")},r.a.createElement("p",null,"Gioco non trovato"),r.a.createElement(L.b,{className:"game-not-found-close",size:"30px",onClick:t}))},Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement((function(){return r.a.createElement(o.a,{store:g},r.a.createElement(Q,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c37e99d2.chunk.js.map