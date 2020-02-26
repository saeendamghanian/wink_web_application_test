(this.webpackJsonpwink_web_application_test=this.webpackJsonpwink_web_application_test||[]).push([[0],{41:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},47:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=(a(46),a(8)),i=a(9),o=a(11),u=a(10),p=a(12),m=(a(47),a(15)),h=a.n(m),g=a(18),E=a(6),f=a(38),b=a.n(f),d=function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=""===e?"all":e,t.next=3,b.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=40"));case 3:n=t.sent,a({type:"FETCH_SEARCH",payload:n.data.items});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t,a){return function(n){n({type:"PAGE_ELEMENTS",payload:t.slice(a*e-a,a*e),pageNum:e})}},O=function(e){return function(t){t({type:"PAGE_LIMIT",payload:e})}},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.handleInputChange=function(e){a.setState({input:e.target.value})},a.handleSearch=function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.props.fetchSearchReq(a.state.input);case 3:a.props.showPage(1,a.props.searchResult,a.props.maxPageLimit);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSelectChange=function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.props.getMaxPageLimit(parseInt(t.target.value));case 3:a.props.showPage(1,a.props.searchResult,a.props.maxPageLimit);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark  justify-content-between"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",value:this.state.input,onChange:this.handleInputChange,placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:this.handleSearch},"Search")),r.a.createElement("div",null,r.a.createElement("span",{className:"navbar-text text-white mr-2"},"Item per page"),r.a.createElement("select",{id:"maxPageLimit",className:"custom-select",onChange:this.handleSelectChange},r.a.createElement("option",{value:"5",defaultValue:!0},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"20"},"20")))))}}]),t}(r.a.Component),w=Object(E.b)(null,{fetchSearchReq:d,showPage:v,getMaxPageLimit:O})(j),y=a(22),N=function(e){var t=e.maxPageLimit,a=e.pageElements,n=e.pageNum;return(r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Authors"),r.a.createElement("th",{scope:"col"},"Published Date"))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",{scope:"row"},(n-1)*t+(a+1)),r.a.createElement("td",null,r.a.createElement(y.b,{to:"/book/".concat(e.id)},e.volumeInfo.title)),r.a.createElement("td",null,e.volumeInfo.authors),r.a.createElement("td",null,e.volumeInfo.publishedDate))})))))))},L=Object(E.b)(null,{showPage:v})((function(e){for(var t=e.searchResult,a=e.maxPageLimit,n=e.showPage,c=[],l=1;l<=Math.ceil(t.length/a);l++)c.push(l);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination justify-content-center"},c.map((function(e,c){return r.a.createElement("li",{key:c,className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#",onClick:function(){return n(c+1,t,a)}},c+1))}))))})),P=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{searchResult:this.props.searches,maxPageLimit:this.props.pageLimit}),r.a.createElement(L,{searchResult:this.props.searches,maxPageLimit:this.props.pageLimit}),r.a.createElement(N,{pageElements:this.props.pageElements,maxPageLimit:this.props.pageLimit,pageNum:this.props.pageNum}))}}]),t}(r.a.Component),k=Object(E.b)((function(e){return{searches:e.searches.searchResult,pageElements:e.pageElements.eachPageElements,pageLimit:e.pageLimit.eachPageLimit,pageNum:e.pageElements.pageNum}}),null)(P),_=a(14),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params,t=Object.assign({},this.props.searchResult.find((function(t){return t.id===e.id}))),a=Object.assign({},t.volumeInfo);return r.a.createElement("ul",{id:"book-info-container",className:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item"},"Title: ".concat(a.title)),r.a.createElement("li",{class:"list-group-item"},"Description: ".concat(a.description)),r.a.createElement("li",{class:"list-group-item"},"Publisher: ".concat(a.publisher)),r.a.createElement("li",{class:"list-group-item"},"PublishedDate: ".concat(a.publishedDate)),r.a.createElement("li",{class:"list-group-item"},"Language: ".concat(a.language)),r.a.createElement("li",{class:"list-group-item"},"InfoLink: ",r.a.createElement("a",{href:a.infoLink,target:"_blank"},"".concat(a.infoLink))))}}]),t}(r.a.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,null,r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",component:k,exact:!0}),r.a.createElement(_.a,{path:"/book/:id",render:function(t){return r.a.createElement(x,Object.assign({},t,{searchResult:e.props.searches}))}}))))}}]),t}(r.a.Component),S=Object(E.b)((function(e){return{searches:e.searches.searchResult}}),null)(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(71);var C=a(13),I=a(40),T=a(17),D={searchResult:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH":return Object(T.a)({},e,{searchResult:t.payload});default:return e}},M={eachPageElements:[],pageNum:0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAGE_ELEMENTS":return Object(T.a)({},e,{eachPageElements:t.payload,pageNum:t.pageNum});default:return e}},H={eachPageLimit:5},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAGE_LIMIT":return Object(T.a)({},e,{eachPageLimit:t.payload});default:return e}},q=Object(C.c)({searches:A,pageElements:G,pageLimit:X}),V=Object(C.e)(q,{},Object(C.d)(Object(C.a)(I.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));l.a.render(r.a.createElement(E.a,{store:V},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.26229bec.chunk.js.map