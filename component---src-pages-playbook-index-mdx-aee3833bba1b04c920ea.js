(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),o=a.n(r),i=a("NmYn"),c=a.n(i),b=a("OKom"),l=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},a)))))},f=a("pEPl"),O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=f.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),o=r===n,i=new RegExp(n+"(?!-)"),b=a.replace(i,r);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(g.Link,{className:N.link,to:""+b},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},n}(o.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,f=s.tabs,O=s.title,g=s.theme,N=s.description,w=s.keywords,k=n.data.site.pathPrefix,P=k?r.pathname.replace(k,""):r.pathname,C=f?P.split("/").filter(Boolean).slice(-1)[0]||c()(f[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:f,homepage:!1,theme:g,pageTitle:O,pageDescription:N,pageKeywords:w,titleType:d},Object(u.b)(m,{title:o?Object(u.b)(o,null):O,label:"label",tabs:f}),f&&Object(u.b)(v,{slug:P,tabs:f,currentTab:C}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(j.a,{pageContext:t,location:r,slug:P,tabs:f,currentTab:C}),Object(u.b)(b.a,null))}},lEpT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},b=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"IBM Cloud™ Paks are enterprise-ready, containerized software solutions\nthat give clients an open, fast and secure way to move core business\napplications to any cloud. Each IBM Cloud Pak™ runs on Red Hat® OpenShift®\non IBM Cloud, other public clouds, or on-premises. IBM Cloud Paks include\ncontainerized IBM middleware and common software services for development\nand management."),Object(n.b)("p",null,"The IBM Cloud Pak Playbook covers the following IBM Cloud Paks, running\non Red Hat OpenShift 4.2 or later:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Cloud Pak"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Version"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../apps/cp4a_overview/"}),"Cloud Pak for Applications")),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"4.1.0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../automation/introduction/"}),"Cloud Pak for Automation")),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"19.0.3")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../integration/cp4i-introduction/"}),"Cloud Pak for Integration")),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"2020.1.1")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../mcm/cp4mcm_introduction/"}),"Cloud Pak for Multicloud Management")),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"1.3")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../security/introduction/"}),"Cloud Pak for Security")),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"1.2")))),Object(n.b)("p",null,"This playbook is designed to complement the official documentation,\nadding best practices, scenario implementation guidance, and more\ndetailed technical information where needed. The official\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter"}),"IBM Knowledge Center"),"\nCloud Pak documentation should always be used as your first source of knowledge."),Object(n.b)("p",null,"The playbook is a living document following the principles of open source. It is presented AS IS to describe experiences working in specific environments.\nIf you find an error, please raise a ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s/issues"}),"github issue"),".\nYou are also invited to contribute following the instructions in the\n",Object(n.b)("a",o({parentName:"p"},{href:"https://ocp42.cloudpak8s.io/contribute/"}),"Contribution Guide"),"."))}l.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-playbook-index-mdx-aee3833bba1b04c920ea.js.map