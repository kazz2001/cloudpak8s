(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),i=a("NmYn"),o=a.n(i),s=a("OKom"),b=a("k4MR"),c=a("TSYQ"),p=a.n(c),d=a("QH2O"),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},g=a("pEPl"),h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=g.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,i=r.subDirectory,o=l+"/edit/"+r.branch+i+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),l=r===n,i=new RegExp(n+"(?!-)"),s=a.replace(i,r);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(m.b)(N.Link,{className:f.link,to:""+s},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},n}(l.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,i=t.frontmatter,c=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,g=c.tabs,h=c.title,N=c.theme,f=c.description,v=c.keywords,C=n.data.site.pathPrefix,k=C?r.pathname.replace(C,""):r.pathname,P=g?k.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:g,homepage:!1,theme:N,pageTitle:h,pageDescription:f,pageKeywords:v,titleType:d},Object(m.b)(u,{title:l?Object(m.b)(l,null):h,label:"label",tabs:g}),g&&Object(m.b)(y,{slug:k,tabs:g,currentTab:P}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(j.a,{pageContext:t,location:r,slug:k,tabs:g,currentTab:P}),Object(m.b)(s.a,null))}},"9dlO":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=o("AnchorLinks"),b=o("AnchorLink"),c=o("InlineNotification"),p={_frontmatter:i},d=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(d,l({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Files to download"),Object(n.b)(b,{mdxType:"AnchorLink"},"CLI configuration"),Object(n.b)(b,{mdxType:"AnchorLink"},"Workload Requirements"),Object(n.b)(b,{mdxType:"AnchorLink"},"OCP Cluster Configuration Best-Practices")),Object(n.b)("h2",null,"Files to download"),Object(n.b)("p",null,"You will need one of the following downloads to perform the Cloud Pak installation"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CC644EN")," - IBM Cloud Pak For Integration 2020.1.1 On Openshift For Linux English"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CC645EN")," - IBM Cloud Pak For Integration 2020.1.1 On Openshift For Linux English Online Installer")),Object(n.b)("h2",null,"CLI configuration"),Object(n.b)("p",null,"The system you use to run the installation requires both Docker and the Open Container CLI.  Docker provides very intuitive instructions for installation.  The OC CLI code and installation instructions can be accessed ",Object(n.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/getting-started-cli.html"}),"here from RedHat OpenShift"),"."),Object(n.b)("h2",null,"Workload Requirements"),Object(n.b)("p",null,"General cluster sizing guidance is provided lower down in this page.  Avoid installing minimal environments.  Keep in mind that an realistic cluster running the Cloud Pak for Integration will contain multiple workloads from the below chart.  Your cluster will likely host other Cloud Pak workload or be shared with other non-Cloud Pak workload.  Of course, licensing for Cloud Paks only covers the exact equivalent licenses for the underlying OCP.  You can find discussion from this section in the ",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.1/install/sysreqs.html"}),"Requirements Knowledge Center article")," for the Cloud Pak for Integration."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Integration Capability"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"CPU"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Memory"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Disk space"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Platform Navigator"),":  The base product that will deploy as part of the installation"),Object(n.b)("td",l({parentName:"tr"},{align:null}),".25 cores"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"256 Mb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Not Required")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Common Services"),":  Required by the base product.  This can increase dramatically with usage depending on the enabled management services"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 cores"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 Gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"40 Gb")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"API Lifecycle and Management"),":  This capability is provided by deploying IBM API Connect. For specific requirements regarding this capability, see the ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSMNED_2018/com.ibm.apic.install.doc/overview_apimgmt_requirements.html?view=kc"}),"IBM API Connect system requirements")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"12 cores"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"48 Gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"550 Gb")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Queue Manager"),": This capability is provided by deploying IBM MQ. The values given are a general default assuming a single instance of this capability.  Generally, when sizing a larger modernization effort, the modernized workload will be roughly equivalent to the traditional workload.  For specific requirements see the ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=8360DD50895F11E5816C133BBD3A3812&osPlatforms=Linux"}),"IBM MQ system requirements")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"1 core"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"1 Gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"2 Gb")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Event Messaging"),": This capability is provided by deploying IBM Event Streams. For specific requirements regarding this capability, see the ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/links?url=https%3A%2F%2Fibm.github.io%2Fevent-streams%2Finstalling%2Fprerequisites%2F"}),"IBM Event Streams system requirements")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16.2 cores"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"25.2 Gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"1.5 Gb")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Application Integration"),": This capability is provided by deploying IBM App Connect.  The values given here are for default settings for a default flow example.  You should adjust the resource requirements for your flow after observing its behavior under usage.  To plan capacity for modernizing a large set of workload, assume that the modernize and traditional workload would use roughly the same amount of compute and memory.  App Connect workload does use a considerable amount of container storage.  For specific requirements regarding this capability, see the ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=9305DA803ED511E7BE8E09C6CE305F89&osPlatforms=Linux%7CWindows&duComponentIds=D002%7CS001&optionalCapIds=341%7C7%7C47%7C9%7C1%7C131%7C39%7C8%7C184%7C27%7C186%7C15%7C26"}),"IBM App Connect system requirements")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"1 core"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 Gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"2.3 Gb")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"High Speed File Transfer"),": This capability is provided by deploying IBM Aspera. For specific requirements regarding this capability, see the ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/links?url=http%3A%2F%2Fdownload.asperasoft.com%2Fdownload%2Fdocs%2Ffaspex%2F4.0.0%2Fadmin_linux%2Fwebhelp%2Fdita%2Finstallation_requirements.html"}),"IBM Aspera system requirements")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 cores"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 Gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Workload Dependent")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Asset Repository"),":  Optional asset management capability"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4.25 cores"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8.5 Gb"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"2 Gb")))),Object(n.b)("p",null,"Most of the capabilities provided by the Cloud Pak for Integration have state and thus require ",Object(n.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html"}),"Persistent Storage"),".  Your persistent storage provider will depend largely on the cloud environment you are deploying to.  Each ",Object(n.b)("strong",{parentName:"p"},"public cloud")," provider has their own storage services that can (and should) be used for your workload’s persistent storage.  These providers will easily match to the requirements in the chart below.  Take time to understand fully each column."),Object(n.b)("p",null,"There currently are more decisions to make when the solution is deployed into ",Object(n.b)("strong",{parentName:"p"},"private (on-premise) infrastructure"),".  OpenShift now has the industry leading solution for providing container storage called Red Hat OpenShift Container Storage (OCS).  See ",Object(n.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/persistent_storage/persistent-storage-ocs.html"}),"this document")," for a detailed explanation.  This solution is based upon Rook / Ceph and runs as an operator from within your cluster.  It can be used without license in your lower environments without support.  At the time of this article being written OCS licensing for support etc. ",Object(n.b)("strong",{parentName:"p"},"is not included with Cloud Pak licenses")," and must be purchased separately.  IBM Storage also has a hardware / software available for purchase to provide first-class persistent storage to your private cloud stateful containers.  Outside of these solutions using your enterprise NFS provides a decent option for providing ",Object(n.b)("strong",{parentName:"p"},"File")," storage and Rook / Ceph provide adequate support for most ",Object(n.b)("strong",{parentName:"p"},"Block Storage")," requirements.  For production workloads please consider the resilience of the persistent storage provider you chose.  In the near future OCS will be the preferred solution for production workload that require resilient on-premise storage."),Object(n.b)("p",null,"With this guidance in mind, use the following table to help make your persistent storage decisions and create the required ",Object(n.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html"}),"storage classes")," prior to deployment."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Integration Capability"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Storage Type"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Access Mode"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Performance"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Platform Navigator"),": Not persistent storage required"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"N/A"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"N/A"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"N/A")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Common Services"),":  Configured as part of Cloud Pak base installation"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Block"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RWO"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Minimum 4 IOPS/GB Recommended 10 IOPS/GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"API Lifecycle and Management")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Block"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RWO"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Minimum 4 IOPS/GB Recommend 10 IOPS/GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Queue Manager")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"File"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RWX"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/support/pages/testing-statement-ibm-mq-multi-instance-queue-manager-file-systems"}),"Affected by other limits applied to the file system"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Event Messaging"),": See the ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/links?url=https%3A%2F%2Fibm.github.io%2Fevent-streams%2Finstalling%2Fprerequisites%2F%23file-systems-for-storage"}),"IBM Event Streams storage documentation")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"File/Block"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RWO"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/links?url=https%3A%2F%2Fibm.github.io%2Fevent-streams%2Finstalling%2Fprerequisites%2F%23file-systems-for-storage"}),"Notes"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Application Integration"),": When deployed without including MQ capability no persistent volume is required.  This is the recommendation.  Whenever possible separate MQ into its own pods.  If MQ is included, the values here apply"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"File"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RWX"),Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/support/pages/testing-statement-ibm-mq-multi-instance-queue-manager-file-systems"}),"Affected by other limits applied to the file system"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"High Speed File Transfer")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"File"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RWX"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Not Specified")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Asset Repository")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"File & Block"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"RWX + RWO"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"Not Specified")))),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"A Couple Notes:")," RWX referes read-write-many meaning multiple containers can read and write to the storage volume simultaneously.  RWO refers to read-write-once stating that only a single container can access the storage simultaneously.  Finally, keep in mind that storage providers for public and private clouds are constantly evolving and you should be prepared to adjust your strategy.  Do not consider your choices for today to be the best decision for long term.  It is likely that improved options will make themselves available.")),Object(n.b)("h2",null,"OCP Cluster Configuration Best-Practices"),Object(n.b)("p",null,"This playbook contains a section that offers general OpenShift Cloud Platform configuration and installation procedures.  For environments that require resilience, the below is the best practice recommendation for hosting Cloud Pak for Integration on OCP 4.2 or 4.3.  You can configure smaller environments, but this is the getting-started suggestion.  Also, this cluster has a large enough control plane to grow in order to support a larger number of compute nodes for hosting additional workload."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:null}),"Node"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Nodes"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"vCPU"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"RAM"),Object(n.b)("th",l({parentName:"tr"},{align:null}),"Storage"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Control Plane Nodes (Masters)")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 vCPU"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"300 GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Compute Nodes (Workers)")),Object(n.b)("td",l({parentName:"tr"},{align:null}),"5"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 vCPU"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"200 GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Compute & Storage Nodes"),": For use on primarily on-premise cluster to host OCS or Rook / Ceph storage.  These can run both storage and general workload."),Object(n.b)("td",l({parentName:"tr"},{align:null}),"3"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 vCPU"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"32 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"200 GB & 500 GB 2nd Disk")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Install Node"),": For offline installations of the Cloud Pak. See your specific OCP version and deployment mode for specifics.  Note that the offline Pak installation for Integration requires this larger disk."),Object(n.b)("td",l({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 vCPU"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"16 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"200 GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Load Balancer(s)"),":  If you do not have enterprise load balancing available you can optionally install HA Proxy load balancers for managing internal and external load balancing.  Consider the resiliency you require.  You can accomplish this using a single load balancer, but your architecture may require further diligence."),Object(n.b)("td",l({parentName:"tr"},{align:null}),"1 or 2"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"4 vCPU"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"8 GB"),Object(n.b)("td",l({parentName:"tr"},{align:null}),"100 GB")))))}m.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-requirements-index-mdx-41d71673f453c1ca026f.js.map