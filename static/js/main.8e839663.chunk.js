(this.webpackJsonpleimo=this.webpackJsonpleimo||[]).push([[0],{30:function(e,a,t){e.exports=t(67)},53:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),m=t.n(c),r=(t(35),t(6)),o=t(10),s=t(24),i=t.n(s),u=t(9),d=t.n(u),E=(t(53),t(4)),f=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),c=t[0],m=t[1];Object(n.useEffect)((function(){i.a.get("".concat("https://api.unsplash.com","/photos/random?client_id=").concat("QoEvgU3mzCYi7gzUQ2FwTVIvLtmuy_8rthApGgutBrg","&count=10")).then((function(e){return m([].concat(Object(r.a)(c),Object(r.a)(e.data)))}))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container gallery my-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h1",{className:"mt-2"},l.a.createElement("u",null,"Gallery"))),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-dark float-right py-2 my-2","data-tip":"Refresh To Get New Images",onClick:function(){window.location.reload()}},l.a.createElement(d.a,null),l.a.createElement("u",{className:"mx-2"},"Refresh"))))),c.map((function(a){return l.a.createElement("img",{src:a.urls.thumb,id:a.id,alt:"img",className:"rounded float-left img-thumbnail py-2 px-2 my-1 mx-auto","data-tip":"Tap To Move To Canvas ",onClick:function(){var t,n;t=a.id,n=a.urls.thumb,console.log(t,n),e.ShowImg(t,n)}})})),l.a.createElement(E.a,{globalEventOff:"click"}))},g=t(27),p=(t(60),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row justify-content-center","data-tip":"Tap To Zoom Image"},l.a.createElement("div",{className:"col-4"},l.a.createElement(g.a,null,l.a.createElement("img",{alt:"pic",src:e.pic,width:"200","data-tip":"Tap To Zoom Image",className:"shadow-lg rounded float-left img-thumbnail py-2 px-2 my-1"})))),l.a.createElement(E.a,{globalEventOff:"click"}))}),v=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),c=t[0],m=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center my-4 "},l.a.createElement("u",null,"Image Gallery!!")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-sm-9 col-md-6 col-lg-7 mx-auto",style:{background:"#B33771"}},l.a.createElement("div",{className:"container canvas_head my-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h1",{className:"mt-2"},l.a.createElement("u",null,"Canvas"))),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-dark float-right py-2 my-2","data-tip":"Refresh To Clear Canvas",onClick:function(){window.location.reload()}},l.a.createElement(d.a,null),l.a.createElement("u",{className:"mx-2"},"Refresh"))),l.a.createElement(E.a,{globalEventOff:"click"}))),c.map((function(e,a){return l.a.createElement(p,{key:a,pic:e})}))),l.a.createElement("div",{class:"col-sm-3 col-md-6 col-lg-5 mx-auto",style:{background:"#e66767"}},l.a.createElement(f,{ShowImg:function(e,a){console.log("clicked"),console.log(e,a),m((function(e){return[].concat(Object(r.a)(e),[a])}))}})))))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null))};m.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8e839663.chunk.js.map