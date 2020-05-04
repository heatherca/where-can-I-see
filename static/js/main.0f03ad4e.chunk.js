(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),c=(a(24),a(18)),m=a(7),o=a(2),i=a(3),u=a(5),h=a(4),d=a(6),p=a.n(d);var E=function(e){return e.amsterdam>e.boston?r.a.createElement("span",null," Amsterdam"):e.boston>e.amsterdam?r.a.createElement("span",null," Boston"):r.a.createElement("span",null," Boston and Amsterdam")};var f=function(e){return 0===e.countme.length||0===e.shuffled.length?r.a.createElement("p",{className:"tryagain"},"Did you enter anything? Maybe try a new search."):r.a.createElement("ul",null,e.shuffled.map((function(e){return e})))},v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleUinput=function(t){e.setState({userInput:t.target.value,amsterdam:0,boston:0})},e.state={userInput:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{action:"",onSubmit:function(t){e.props.handleSubmit(t,e.state.userInput),e.setState({userInput:""})}},r.a.createElement("label",{htmlFor:"searchArt",className:"sr-only"},"Input query here"),r.a.createElement("input",{type:"text",id:"searchArt",value:this.state.userInput,onChange:this.handleUinput,placeholder:"eg: lion, france, sun"}),r.a.createElement("button",{type:"submit"},"Take a Look"))}}]),a}(n.Component),b=(a(42),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSubmit=function(t,a){t.preventDefault(),p()({url:"https://api.harvardartmuseums.org/object",method:"GET",responseType:"json",params:{apikey:"ac6514d0-8a6f-11ea-a066-95faa1e6fe57",hasimage:1,sort:"random",person:"any",title:a,q:"imagepermissionlevel:0"}}).then((function(t){var n=t.data.records.map((function(t){return r.a.createElement("li",{key:t.id,className:"boston"},r.a.createElement("div",{className:"pic"},r.a.createElement("img",{src:t.primaryimageurl,alt:t.title})),r.a.createElement("div",{className:"picInfo",tabIndex:"0"},r.a.createElement("h2",null,r.a.createElement("span",null,t.title)),r.a.createElement("p",null,r.a.createElement("span",null,t.people[0].name)),r.a.createElement("label",{htmlFor:t.id,className:"sr-only"},"Check to like art"),r.a.createElement("input",{type:"checkbox",id:t.id,className:"boston",onChange:e.handleCheck})))}));e.setState({bostonli:n,userInput:a})})),p()({url:"https://www.rijksmuseum.nl/api/en/collection",method:"GET",responseType:"json",params:{key:"dF0gsdz1",imgonly:!0,s:"relevance",q:"title:"+a}}).then((function(t){var a=t.data.artObjects.map((function(t){return r.a.createElement("li",{key:t.id,className:"amsterdam"},r.a.createElement("div",{className:"pic"},r.a.createElement("img",{src:t.webImage.url,alt:t.title})),r.a.createElement("div",{className:"picInfo",tabIndex:"0"},r.a.createElement("h2",null,r.a.createElement("span",null,t.title)),r.a.createElement("p",null,r.a.createElement("span",null,t.principalOrFirstMaker)),r.a.createElement("label",{htmlFor:t.id,className:"sr-only"},"Check to like art"),r.a.createElement("input",{type:"checkbox",id:t.id,className:"amsterdam",onChange:e.handleCheck,tabIndex:"0"})))}));e.setState({amsterdamli:a},(function(){var t=e.shuffleArray([].concat(Object(m.a)(e.state.amsterdamli),Object(m.a)(e.state.bostonli)));e.setState({shuffleli:t})}))})),e.setState({amsterdam:0,boston:0})},e.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},e.handleCheck=function(t){var a=t.target.className,n=e.state[a];t.target.checked?n++:n--,e.setState(Object(c.a)({},a,n))},e.state={userInput:"",amsterdam:0,boston:0,bostonli:[],amsterdamli:[],shuffleli:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{id:"#top"},"Where can I see...?"),r.a.createElement("p",null,"Input a query and browse through the results. Hover or tap over each piece to find out more and heart which items you are drawn to. At the end see if Amsterdam or Boston is the city for you. "))),r.a.createElement("main",null,r.a.createElement("section",{className:"search"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(v,{handleSubmit:this.handleSubmit}))),r.a.createElement("section",{className:"results"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(f,{shuffled:this.state.shuffleli,countme:this.state.userInput}))),r.a.createElement("section",{className:"where"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null," You should visit:",r.a.createElement(E,{amsterdam:this.state.amsterdam,boston:this.state.boston}))),r.a.createElement("div",{className:"pics"},r.a.createElement("div",{className:"city cA"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.rijksmuseum.nl/en"},"Rijksmuseum"),r.a.createElement("p",null,this.state.amsterdam))),r.a.createElement("div",{className:"city cB"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.harvardartmuseums.org/"},"Harvard Art Museums"),r.a.createElement("p",null,this.state.boston)))),r.a.createElement("div",{className:"searchAgain"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("a",{href:"#top"},"Search Again"))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Made By: ",r.a.createElement("a",{href:"http://www.heatherandreadis.com/"},"Heather Andreadis")," with data from ",r.a.createElement("a",{href:"https://github.com/harvardartmuseums/api-docs"},"Harvard Art Museums API")," and ",r.a.createElement("a",{href:"https://data.rijksmuseum.nl/object-metadata/api/"},"RijksData API")),r.a.createElement("p",null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.0f03ad4e.chunk.js.map