(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{16:function(e,s,t){},19:function(e,s,t){},20:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),i=t(9),n=t.n(i),r=(t(16),t(2)),l=t(3),o=t(5),j=t(4),d=t(8),h=t(10),b=t.n(h),m=(t(19),function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,a=this.props.data.address.city,i=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsxs)("header",{id:"home",children:[Object(c.jsxs)("nav",{id:"nav-wrap",children:[Object(c.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(c.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(c.jsxs)("ul",{id:"nav",className:"nav",children:[Object(c.jsx)("li",{className:"current",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(c.jsx)("div",{className:"row banner",children:Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsx)("h1",{className:"responsive-headline",children:e}),Object(c.jsxs)("h3",{children:["is a ",a," based ",Object(c.jsx)("span",{children:s}),". ",t,"."]}),Object(c.jsx)("hr",{}),Object(c.jsx)("ul",{className:"social",children:i})]})}),Object(c.jsx)("p",{className:"scrolldown",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(c.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component)),O=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"twelve columns",children:[Object(c.jsx)("ul",{className:"social-links",children:e}),Object(c.jsx)("ul",{className:"copyright",children:Object(c.jsx)("li",{children:"\xa9 Copyright 2020 Gideon Crawley"})})]}),Object(c.jsx)("div",{id:"go-top",children:Object(c.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(c.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),u=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="./images/./profilepic.jpg",t=this.props.data.bio,a=this.props.data.address.street,i=this.props.data.address.city,n=this.props.data.address.state,r=this.props.data.address.zip,l=this.props.data.phone,o=this.props.data.email,j=this.props.data.resumedownload;return Object(c.jsx)("section",{id:"about",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"three columns",children:Object(c.jsx)("img",{className:"profilepic",src:s,alt:"Gideon Crawley Profile Pic"})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:t}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"columns contact-details",children:[Object(c.jsx)("h2",{children:"Contact Details"}),Object(c.jsxs)("p",{className:"address",children:[Object(c.jsx)("span",{children:e}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:[a,Object(c.jsx)("br",{}),i," ",n,", ",r]}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:l}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:o})]})]}),Object(c.jsx)("div",{className:"columns download",children:Object(c.jsx)("p",{children:Object(c.jsxs)("a",{href:j,className:"button",children:[Object(c.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),t}(a.Component),p=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.school}),Object(c.jsxs)("p",{className:"info",children:[e.degree," ",Object(c.jsx)("span",{children:"\u2022"}),Object(c.jsx)("em",{className:"date",children:e.graduated})]}),Object(c.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.company}),Object(c.jsxs)("p",{className:"info",children:[e.title,Object(c.jsx)("span",{children:"\u2022"})," ",Object(c.jsx)("em",{className:"date",children:e.years})]}),Object(c.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var s="bar-expand ".concat(e.name.toLowerCase());return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{width:e.level},className:s}),Object(c.jsx)("em",{children:e.name})]},e.name)}));return Object(c.jsxs)("section",{id:"resume",children:[Object(c.jsxs)("div",{className:"row education",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Education"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:Object(c.jsx)("div",{className:"row item",children:Object(c.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(c.jsxs)("div",{className:"row work",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Work"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(c.jsxs)("div",{className:"row skill",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Skills"})})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("div",{className:"bars",children:Object(c.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),t}(a.Component),x=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,a=this.props.data.address.state,i=this.props.data.address.zip,n=this.props.data.phone,r=(this.props.data.email,this.props.data.contactmessage);return Object(c.jsxs)("section",{id:"contact",children:[Object(c.jsxs)("div",{className:"row section-head",children:[Object(c.jsx)("div",{className:"two columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Get In Touch."})})}),Object(c.jsx)("div",{className:"ten columns",children:Object(c.jsx)("p",{className:"lead",children:r})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"eight columns",children:[Object(c.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"submit",children:"Submit"}),Object(c.jsx)("span",{id:"image-loader",children:Object(c.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(c.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(c.jsxs)("div",{id:"message-success",children:[Object(c.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(c.jsx)("br",{})]})]}),Object(c.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(c.jsxs)("div",{className:"widget widget_contact",children:[Object(c.jsx)("h4",{children:"Address and Phone"}),Object(c.jsxs)("p",{className:"address",children:[e,Object(c.jsx)("br",{}),s," ",Object(c.jsx)("br",{}),t,", ",a," ",i,Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:n})]})]}),Object(c.jsxs)("div",{className:"widget widget_tweets",children:[Object(c.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(c.jsxs)("ul",{id:"twitter",children:[Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{children:["This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(c.jsx)("a",{href:"#",children:"http://t.co/CGIrdxIlI3"})]}),Object(c.jsx)("b",{children:Object(c.jsx)("a",{href:"#",children:"2 Days Ago"})})]}),Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(c.jsx)("a",{href:"#",children:"http://t.co/CGIrdxIlI3"})]}),Object(c.jsx)("b",{children:Object(c.jsx)("a",{href:"#",children:"3 Days Ago"})})]})]})]})]})]})]})}}]),t}(a.Component),f=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("blockquote",{children:[Object(c.jsx)("p",{children:e.text}),Object(c.jsx)("cite",{children:e.user})]})},e.user)}));return Object(c.jsx)("section",{id:"testimonials",children:Object(c.jsx)("div",{className:"text-container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"two columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Client Testimonials"})})}),Object(c.jsx)("div",{className:"ten columns flex-container",children:Object(c.jsx)("ul",{className:"slides",children:e})})]})})})}}]),t}(a.Component),v=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var s="./images/portfolio/"+e.image;return Object(c.jsx)("div",{className:"columns portfolio-item",children:Object(c.jsx)("div",{className:"item-wrap",children:Object(c.jsxs)("a",{href:e.url,title:e.title,children:[Object(c.jsx)("img",{alt:e.title,src:s}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"portfolio-item-meta",children:[Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.category})]})}),Object(c.jsx)("div",{className:"link-icon",children:Object(c.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(c.jsx)("section",{id:"portfolio",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"twelve columns collapsed",children:[Object(c.jsx)("h1",{children:"Check Out Some of My Works."}),Object(c.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),t}(a.Component),N=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(l.a)(t,[{key:"getResumeData",value:function(){b.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{data:this.state.resumeData.main}),Object(c.jsx)(u,{data:this.state.resumeData.main}),Object(c.jsx)(p,{data:this.state.resumeData.resume}),Object(c.jsx)(v,{data:this.state.resumeData.portfolio}),Object(c.jsx)(f,{data:this.state.resumeData.testimonials}),Object(c.jsx)(x,{data:this.state.resumeData.main}),Object(c.jsx)(O,{data:this.state.resumeData.main})]})}}]),t}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(c.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/gideoncrawley",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/gideoncrawley","/service-worker.js");g?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.8aae358e.chunk.js.map