(this.webpackJsonplzh=this.webpackJsonplzh||[]).push([[0],{12:function(e,n,t){e.exports={navbarContainer:"NavbarMobile_navbarContainer__2Gqi2",background:"NavbarMobile_background__1W7Y_",refresh:"NavbarMobile_refresh__3RXMb",navbar:"NavbarMobile_navbar__1jfKW",navbarToggleIcon:"NavbarMobile_navbarToggleIcon__1M6Ru",subUl:"NavbarMobile_subUl__37dB8",subLi:"NavbarMobile_subLi__3NEey",listicon:"NavbarMobile_listicon__Gjija"}},14:function(e,n,t){e.exports={navbarContainer:"NavbarWide_navbarContainer__1XQgj",navbar:"NavbarWide_navbar__1ZoRI",navbarLinks:"NavbarWide_navbarLinks__qVLVb",navbarElement:"NavbarWide_navbarElement__1-Oxg",navbarLink:"NavbarWide_navbarLink__369f5"}},15:function(e,n,t){e.exports={bkImage:"HomePage_bkImage__3h47d",bkImageBefore:"HomePage_bkImageBefore__2y6Eq",HomePageHeader:"HomePage_HomePageHeader__3FHTk",HomePageContent:"HomePage_HomePageContent__1o-d_",HomePagePrompt:"HomePage_HomePagePrompt__29XaD",HomePageBtn:"HomePage_HomePageBtn__Ofj9Y"}},28:function(e,n,t){e.exports={LatestWorkContent:"LatestWork_LatestWorkContent__1WHww",LatestWorkTitle:"LatestWork_LatestWorkTitle__1x4_M"}},29:function(e,n,t){e.exports={LatestWorkContent:"LatestWorkContent_LatestWorkContent__3vcqw",ContentContainer:"LatestWorkContent_ContentContainer__20P8D"}},37:function(e,n,t){e.exports={NavTag:"NavTag_NavTag__4jfP9"}},41:function(e,n,t){e.exports={ImageGalleryPhotos:"PhotoComp_ImageGalleryPhotos__-dgXR"}},47:function(e,n,t){e.exports=t(69)},52:function(e,n,t){},53:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(17),o=t.n(i),c=(t(52),t(53),{primaryColor:"#111D2B",primaryFontColor:"#D9F2FF",primaryColorComplimentary:"#85704D",secondaryColor:"#BED6F1",btnHoverBackgroundColor:"rgba(235,216,183,0.7)",btnHoverFontColor:"#172639",lightTextColorComplimentary:"#FFEAC7",darkTextColor:"#172639",complimentaryTextColor:"#A18F6F",logoColor:"#E3C084",lightTextColor:"#E0EFFF",skillCardBackgroundColor:"#284263"}),l=t(6),s=t(9);function m(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function d(){var e=Object(a.useState)(m()),n=Object(s.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){function e(){r(m())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}var h=t(12),u=t.n(h),p=t(3),g=function(e){return a.createElement(p.a.path,Object.assign({fill:"transparent",strokeWidth:"3",stroke:"hsl(0, 0%, 18%)",strokeLinecap:"round"},e))},f=function(e){var n=e.toggle;return a.createElement("button",{onClick:n},a.createElement("svg",{width:"23",height:"23",viewBox:"0 0 23 23"},a.createElement(g,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),a.createElement(g,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),a.createElement(g,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})))},v=t(10),b=t(23),E=t(27),x={open:{y:0,position:"relative",opacity:1,margin:20,height:"auto",cursor:"pointer",transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:100,opacity:0,margin:0,height:0,cursor:"default",transition:{y:{stiffness:1e3}}}},w=function(e){var n=e.elem,t=Object(a.useState)(n.show),i=Object(s.a)(t,2),o=i[0],c=i[1],l={position:"relative"};return r.a.createElement(p.a.li,{variants:x,whileHover:{scale:1.1,color:"#284263"},whileTap:{scale:.95,color:"#284263"},onClick:function(){c(!o)}},n.isExternalLink?r.a.createElement("a",{href:n.url,style:l},n.id):0===n.content.length?r.a.createElement(v.b,{to:n.url,style:l},n.id):r.a.createElement("div",null,n.id,o?r.a.createElement(b.a,{style:{width:"18px",height:"18px",margin:"5px 10px"},icon:E.b,size:"1x"}):r.a.createElement(b.a,{style:{width:"18px",height:"18px",margin:"5px 10px"},icon:E.a,size:"1x"})),o?r.a.createElement(p.a.div,{className:u.a.subUl,animate:{opacity:[0,1]}},n.content.map((function(e){return r.a.createElement(p.a.div,{key:e.name,className:u.a.subLi,whileHover:{scale:1.1,color:"#284263"}},r.a.createElement(v.b,{to:e.url},e.name))}))):null)},y={open:{opacity:1,height:600,transition:{staggerChildren:.07,delayChildren:.2}},closed:{opacity:0,height:0,padding:0,transition:{staggerChildren:.05,staggerDirection:-1}}},k=function(e){return a.createElement(p.a.ul,{className:u.a.mainUl,variants:y},e.navContent.map((function(e){return a.createElement(w,{elem:e,key:e.id})})))},C=function(e){var n=Object(p.b)(!1,!0),t=Object(s.a)(n,2),i=t[0],o=t[1],c=(Object(a.useRef)(null),d()),l=(c.width,c.height),m={open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return{clipPath:"circle(".concat(2*e+200,"px at left 40px top 40px )"),width:"600vw",height:"600vh",transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at left 40px top 40px )",overflow:"hidden",width:80,height:80,transition:{delay:.5,type:"spring",stiffness:400,damping:40}}};return r.a.createElement("div",{className:u.a.navbarContainer},r.a.createElement("div",{className:u.a.navbar},r.a.createElement(p.a.nav,{initial:!1,animate:i?"open":"closed",custom:l,variants:{open:{width:"100vw",height:"100vh",position:"absolute",top:0,right:0,bottom:0,transition:{duration:.1}},closed:{width:80,height:80}}},r.a.createElement(p.a.div,{className:u.a.background,variants:m}),r.a.createElement(k,{isOpen:i,navContent:e.navContent}),r.a.createElement(f,{toggle:function(){return o()}})),r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"".concat("/portfolio","/img/logo-light-light.png")})))))},j=t(31),N=t(14),_=t.n(N),L=t(37),P=t.n(L),H=function(e){return r.a.createElement("div",{className:P.a.NavTag},r.a.createElement(v.b,{to:e.url},r.a.createElement("p",null,e.name)))},O={zIndex:"100",position:"absolute",display:"block",minWidth:"160px",boxShadow:"rgba(0,0,0,0.4) 0.3rem 0.3rem 0.3rem"},T={position:"absolute",display:"block",minWidth:"160px",boxShadow:"rgba(0,0,0,0.4) 0.3rem 0.3rem 0.3rem",right:0},W=function(e){return e.show?r.a.createElement(p.a.div,{style:e.isRight?T:O,animate:{opacity:[0,1]},translate:{duration:.7}},void 0===e.content?null:e.content.map((function(e){return r.a.createElement(H,{key:e.url,url:e.url,name:e.name})}))):null},S=function(e){var n=Object(a.useState)(e.navContent),t=Object(s.a)(n,2),i=t[0],o=t[1],c=function(e){o((function(n){return n.map((function(n){n.id===e&&(n.show=!0)})),Object(j.a)(n)}))},l=function(e){o((function(n){return n.map((function(n){n.id===e&&(n.show=!1)})),Object(j.a)(n)}))};return r.a.createElement("div",{className:_.a.navbarContainer},r.a.createElement("div",{className:_.a.navbar},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"".concat("/portfolio","/img/logo-light-light.png")}))),r.a.createElement("div",{className:_.a.navbarLinks},i.map((function(e){return r.a.createElement("div",{key:e.id,className:_.a.navbarElement,onMouseEnter:c.bind(void 0,e.id),onMouseLeave:l.bind(void 0,e.id)},r.a.createElement("div",{className:_.a.navbarLink},e.isExternalLink?r.a.createElement("a",{className:_.a.btn,href:e.url},e.id):r.a.createElement(v.b,{to:e.url,className:_.a.btn},e.id)),r.a.createElement(W,{show:e.show,content:e.content,isRight:e.isRight}))})))))},A=[{id:"Latest Works",content:[],show:!1,isRight:!1,isExternalLink:!1,url:"/latestworks"},{id:"Landscape",content:[{name:"Xinjiang \u65b0\u7586",url:"/landscape/xinjiang"},{name:"Japan \u65e5\u672c",url:"/landscape/japan"},{name:"Zhejiang \u6d59\u6c5f",url:"/landscape/zhejiang"}],show:!1,isRight:!1,isExternalLink:!1,url:"/landscape"},{id:"Collections",content:[{name:"Back to Desert",url:"/collections/backtodesert"},{name:"\u685cX\u96ea",url:"/collections/sakurayuki"},{name:"The weird",url:"/collections/theweird"},{name:"Japan Stories",url:"/collections/japanstories"},{name:"Road Trip",url:"/collections/roadtrip"}],show:!1,isRight:!1,isExternalLink:!1,url:"/collections"},{id:"About Me",content:[],show:!1,isRight:!1,isExternalLink:!1,url:"/about"},{id:"Calories",content:[],show:!1,isRight:!1,isExternalLink:!0,url:"https://calories.page"}],M=function(){var e=d();e.height;return e.width>700?r.a.createElement(S,{navContent:A}):r.a.createElement(C,{navContent:A})},I=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"sns-icons"},r.a.createElement("a",{href:"https://www.instagram.com/zehao99/"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"far fa-envelope fa-2x"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/zehao-li-49ab9615b/"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("p",null,"Zehao Li, 2020 \xa9 all rights reserved.")),r.a.createElement("style",{jsx:!0},"\n        .footer-container {\n          text-align: center;\n        }\n        .footer-container .sns-icons {\n          margin-top: 1rem;\n        }\n        .footer-container .sns-icons a {\n          padding: 0 1rem;\n          color: ".concat(c.primaryColorComplimentary,";\n          transition: all 0.3s ease-in-out;\n        }\n\n        .footer-container .sns-icons a:hover {\n          color: ").concat(c.lightTextColorComplimentary,";\n        }\n\n        .footer-container p {\n          padding: 1rem;\n        }\n      ")))},F=t(15),R=t.n(F),B=function(e){var n=d();n.height,n.width;return r.a.createElement(p.a.div,{animate:{opacity:[0,1]},transition:{duration:.1}},r.a.createElement("div",{className:R.a.bkImage}),r.a.createElement("div",{className:R.a.bkImageBefore}),r.a.createElement("div",{className:R.a.HomePageHeader},r.a.createElement(M,null)),r.a.createElement(p.a.div,{animate:{opacity:[0,1]},transition:{delay:.5,duration:.5}},r.a.createElement("div",{className:R.a.HomePageContent},r.a.createElement("div",{className:R.a.HomePagePrompt},r.a.createElement("h1",null,"Hey~ Welcome!"),r.a.createElement("h2",null,"Philip Li"),r.a.createElement("p",null,"Photography | Landscape | Life"),r.a.createElement(v.b,{className:R.a.HomePageBtn,to:"/latestworks"},"Latest Works")))),r.a.createElement("div",{className:R.a.HomePageBody},r.a.createElement(I,null)))},z={maxWidth:"1200px"},U=t(38),D=t(39),J=t(46),q=t(43),G=function(e){return function(n){Object(J.a)(a,n);var t=Object(q.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0},e.ref=r.a.createRef(),e}return Object(D.a)(a,[{key:"componentDidMount",value:function(){var e=this,n=this.ref.current;this.observer=new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(e.setState({loading:!1}),a.unobserve(n))}))})),this.observer.observe(n)}},{key:"componentWillUnmount",value:function(){this.observer.disconnect()}},{key:"render",value:function(){if(this.state.loading){var n=this.props.Loading||"loading";return r.a.createElement("div",{ref:this.ref,style:{color:"".concat(c.primaryColor)}},n)}return r.a.createElement(e,this.props)}}]),a}(r.a.Component)},X=G((function(e){return r.a.createElement("div",{className:"projectcard-container"},r.a.createElement(p.a.div,{animate:{scale:[.5,1.05,1],borderRadius:["50%",0,0],overflow:"hidden"},transition:{duration:.3}},r.a.createElement("a",{href:e.url},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"".concat("/portfolio","/").concat(e.name,".jpg")}),r.a.createElement("div",{className:"card-text"},r.a.createElement("p",null,e.imgText))))),r.a.createElement("style",{jsx:!0},'\n          .projectcard-container {\n            max-width: 200px;\n            max-height: 200px;\n            margin: 1rem;\n            transition: all 0.3s ease-in-out;\n          }\n          .projectcard-container .card {\n            position: relative;\n            overflow: hidden;\n          }\n\n          .projectcard-container .card::after {\n            content: "";\n            position: absolute;\n            display: block;\n            background: '.concat(c.secondaryColor,';\n            opacity: 0.9;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            transform: scale(2) translateX(-75%) translateY(-75%) rotate(-25deg);\n            transition: transform 0.8s cubic-bezier(0.2, 1, 1, 1);\n          }\n\n          .projectcard-container .card:hover::after {\n            transform: scale(2) translateX(0) translateY(0) rotate(-25deg);\n          }\n          .projectcard-container .card img {\n            width: 100%;\n            height: 100%;\n            transition: transform 0.4s ease-in-out;\n          }\n          .projectcard-container .card:hover img {\n            transform: scale(1.05);\n          }\n\n          .projectcard-container .card .card-text {\n            font-family: "Sora", sans-serif;\n            font-size: 1rem;\n            z-index: 10;\n            opacity: 0;\n            padding: 2rem;\n            position: absolute;\n            text-align: center;\n            top: 50%;\n            left: 0;\n            right: 0;\n            color: ').concat(c.complimentaryTextColor,";\n            transform: translateY(-50%);\n            transition: all 0.6s ease-in-out 0.15s ease-in-out;\n          }\n          .projectcard-container .card:hover .card-text {\n            opacity: 1;\n          }\n        ")))})),Y=G((function(e){return r.a.createElement(p.a.div,{initial:{x:-500,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"educard-container"},r.a.createElement("h4",null,e.major),r.a.createElement("h5",null,e.time," ",r.a.createElement("span",{className:"interval"}," | "),e.school),r.a.createElement("p",{className:"location"},e.location),r.a.createElement("p",null,r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.info))),r.a.createElement("style",{jsx:!0},"\n        .educard-container {\n          position: relative;\n          background: #44546c;\n          padding: 1rem;\n          margin: 1rem auto;\n          max-width: 500px;\n          border-left: 5px solid ".concat(c.primaryColorComplimentary,';\n          border-radius: 3px;\n          box-shadow: 3px 3px 5px rgba(1, 1, 1, 0.3);\n        }\n\n        .educard-container::after {\n          content: "";\n          width: 10px;\n          height: 10px;\n          position: absolute;\n          top: 10px;\n          left: -12.4px;\n          background: ').concat(c.primaryColor,";\n          border: 5px solid ").concat(c.primaryColorComplimentary,";\n          border-radius: 50%;\n        }\n\n        .educard-container h4 {\n          color: ").concat(c.lightTextColor,";\n          margin: 0.5rem auto;\n          font-size: 1.2rem;\n        }\n        .educard-container h5 {\n          color: ").concat(c.logoColor,";\n          font-size: 1.2rem;\n          margin: 0.5rem auto;\n        }\n        .educard-container h5 span {\n          color: ").concat(c.darkTextColor,";\n          font-size: 1.2rem;\n        }\n        .educard-container .location {\n          font-style: italic;\n        }\n        .educard-container p {\n          color: ").concat(c.lightTextColor,";\n          margin: 0.5rem auto;\n        }\n        .educard-container a {\n          text-decoration: none;\n          color: ").concat(c.lightTextColor,";\n        }\n      ")))})),V=G((function(e){return r.a.createElement(p.a.div,{initial:{x:-100,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"title"},r.a.createElement("h3",{className:"subtitles"},e.text),r.a.createElement("div",{className:"underline"})),r.a.createElement("style",{jsx:!0},"\n        .title {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        .title .subtitles {\n          text-align: center;\n          padding: 2rem;\n          padding-bottom: 0.3rem;\n          font-weight: 400;\n          font-size: 1.5rem;\n        }\n        .title .underline {\n          background: ".concat(c.primaryColorComplimentary,";\n          height: 5px;\n          width: 30px;\n          border-radius: 2.5px;\n          margin-bottom: 1rem;\n        }\n      ")))})),Z=G((function(e){return r.a.createElement(p.a.div,{initial:{x:-100,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"skillcard-container"},r.a.createElement("div",{className:"skill-name"},e.skillName),r.a.createElement("div",{className:"skill-info"},e.skillInfo)),r.a.createElement("style",{jsx:!0},"\n        .skillcard-container {\n          background: ".concat(c.skillCardBackgroundColor,';\n          width: 80%;\n          display: grid;\n          grid-template-areas: "name info";\n          grid-template-columns: 1fr 1fr;\n          margin: 0 auto;\n        }\n\n        .skillcard-container .skill-name {\n          grid-area: name;\n          padding: 0.75rem;\n          font-family: "Sora", sans-serif;\n          text-align: center;\n          width: 100%;\n          color: ').concat(c.lightTextColorComplimentary,';\n        }\n        .skillcard-container .skill-info {\n          grid-area: info;\n          padding: 0.8rem;\n          text-align: center;\n          width: 100%;\n        }\n\n        @media (max-width: 800px) {\n          .skillcard-container {\n            grid-template-areas:\n              "name"\n              "info";\n            grid-template-columns: 1fr;\n          }\n          .skillcard-container .skill-info {\n            padding: 0.25rem 1rem;\n            padding-bottom: 0.75rem;\n          }\n        }\n      ')))})),Q=G((function(e){return r.a.createElement(p.a.div,null,r.a.createElement("div",{className:"textcard-container"},r.a.createElement("p",null,e.text)),r.a.createElement("style",{jsx:!0},"\n        .textcard-container {\n          background: ".concat(c.skillCardBackgroundColor,";\n          width: 80%;\n          margin: 0 auto;\n          text-align: ").concat(e.textAlign,";\n          padding: 1rem;\n        }\n        .textcard-container p {\n          margin-top: 0.5rem;\n          margin-bottom: 0.4rem;\n          font-style: ").concat(e.textStyle,";\n        }\n      ")))})),K=function(){return r.a.createElement("div",{className:"intro-container"},r.a.createElement(p.a.div,{initial:{x:-100,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"about-container"},r.a.createElement("h3",null,"About Me"),r.a.createElement("p",{className:"about-text"},"I'm currently a master degree student at University of Tokyo, working in the field of robot-human interfaces. Photography is my hobby. I like challenging new things and making discoveries."))),r.a.createElement("div",{className:"past-info-container"},r.a.createElement("div",{className:"edu-container"},r.a.createElement(V,{text:"Education Background"}),r.a.createElement(Y,{className:"edu-1",time:"2019.09. - Now",school:"University of Tokyo",major:"MS in Precision Engineering",location:"Tokyo, Japan",info:"AML Laboratory",link:"https://aml.t.u-tokyo.ac.jp/"}),r.a.createElement(Y,{className:"edu-1",time:"2015.09.-2019.06.",school:"Shanghai Jiao Tong University",major:"BS in Mechanical Engineering",location:"Shanghai, China",info:"Minor in Finance"})),r.a.createElement("div",{className:"exp-container"},r.a.createElement(V,{text:"Experiences"}),r.a.createElement(Y,{className:"exp-1",time:"2018.06.-2018.09.",school:"Microport Inc.",major:"CAE Engineer Intern",location:"Shanghai, China",info:"Cardiovascular stent contract and expand simulation",link:"http://www.microport.com"}),r.a.createElement(Y,{className:"exp-1",time:"2017.06.-2018.06.",school:"SJTU Photography Association",major:"President of SJTUPA",location:"Shanghai, China",info:"One of the 10 'Five-Star Students' Associations in campus"}))),r.a.createElement("div",{className:"projects-container"},r.a.createElement("div",{className:"title-area",style:{gridArea:"subtitles"}},r.a.createElement(V,{text:"Projects"}),r.a.createElement("p",{style:{padding:"2rem",textAlign:"center",width:"70%",margin:"auto"}},"Now I'm working in the field of robot-human interfaces")),r.a.createElement(X,{name:"EIT",imgText:"Flexible Proximity Sensor With Tomographic Approach",style:{gridArea:"card"}}),r.a.createElement(X,{name:"UWBAGV",imgText:"Positioning System for Port AGVs using UWB",style:{gridArea:"card"}}),r.a.createElement(X,{name:"Calories",imgText:"Calories Search",url:"https://calories.page",style:{gridArea:"card"}})),r.a.createElement("div",{className:"skill-container text-container"},r.a.createElement(V,{text:"Skills",className:"title"}),r.a.createElement(Z,{skillName:"Language",skillInfo:"Python, C++, MATLAB, Javascript, HTML&CSS"}),r.a.createElement(Z,{skillName:"CAE & Modelling",skillInfo:"Solidworks, ABAQUS"}),r.a.createElement(Z,{skillName:"Creative",skillInfo:"Photoshop, Premiere Pro"})),r.a.createElement("div",{className:"pub-container text-container"},r.a.createElement(V,{text:"Publications"}),r.a.createElement(Q,{text:'Zehao Li, Shunshuke Yoshimoto and Akio Yamamoto, "Tomographic Approach for Proximity Imaging using Conductive Sheet", IECON 2020. (Accepted)',textStyle:"italic"})),r.a.createElement("div",{className:"award-container text-container"},r.a.createElement(V,{text:"Awards"}),r.a.createElement(Q,{text:"The First Prize of Annual Photography Contest of VCG and 500px, 2016",textAlign:"center",textStyle:"italic"})),r.a.createElement("style",{jsx:!0},"\n          .intro-container {\n            margin: auto;\n            max-width: ".concat(z.maxWidth,";\n          }\n        \n          \n          .intro-container .about-container{\n              background: rgba(23,38,57, 0.6);\n              position: relative;\n              width: 100%;\n              height: 200px;\n              overflow: hidden;\n              display: flex;\n              flex-direction:column;\n              align-items:center;\n              justify-content:center;\n              color:").concat(c.lightTextColorComplimentary,'\n          }\n\n          .intro-container .about-container::before{\n              content: "";\n              position: absolute;\n              display: block;\n              background: url("').concat("/portfolio",'/about_bg.jpg") no-repeat center center/cover;\n              width: 100%;\n              height: 100%;\n              top: 0;\n              left: 0;\n              z-index: -1;\n          }\n\n          .intro-container .about-container h3{\n            display: block;\n            width: 100%;\n            max-width: 800px;\n            align-self: center;\n            margin: 1rem 3rem;\n            margin-top: 0.5rem;\n        }\n\n          .intro-container .about-container p{\n            background: rgba(255,242,219,0.75);\n            color: ').concat(c.primaryColor,';\n            max-width: 800px;\n            margin: 0 3rem;\n            padding: 1rem;\n            line-height: 1.5rem;\n        }\n\n        .intro-container .past-info-container{\n          display: grid;\n          grid-template-column: 1fr 1fr;\n          grid-template-areas: "edu exp";\n        }\n        .intro-container .past-info-container .edu-container{\n          grid-area:"edu";\n          padding:0 2rem;\n        }\n        .intro-container .past-info-container .exp-container{\n          grid-area:"exp";\n          padding:0 2rem;\n        }\n\n          .intro-container .projects-container {\n            margin: 1rem 0;\n            display: grid;\n            width: 100%;\n            grid-template-areas: "subtitles card card card";\n            grid-template-columns: 1fr 1fr 1fr 1fr;\n            justify-items: center;\n          }\n\n          .intro-container .edu-background-container {\n          }\n\n          .intro-container .text-container{\n            margin-top: 1rem;\n          }\n\n          .intro-container .text-container title{\n            margin-top: 1rem;\n          }\n\n          .intro-container .award-container {\n            margin-bottom: 3rem;\n          }\n          @media (max-width:916px){\n            .intro-container .about-container h3{\n              display: block;\n              width: 100%;\n              padding: 0 3rem;\n            }\n            .intro-container .past-info-container{\n              display: grid;\n              grid-template-column: 1fr;\n              grid-template-areas: "edu" "exp";\n            }\n          }\n\n          @media (max-width:800px) and (min-width:600px){\n            .intro-container .about-container{\n                height: 250px;\n            }\n\n            .intro-container .projects-container {\n              grid-template-areas:\n                "subtitles" "card"\n                "card" "card";\n              grid-template-columns: 1fr 1fr;\n            }\n\n          }\n\n\n          @media (max-width: 600px) {\n            .intro-container .projects-container {\n              grid-template-areas:\n                "subtitles"\n                "card"\n                "card"\n                "card";\n              grid-template-columns: 1fr;\n              justify-items: center;\n            }\n\n            .intro-container .about-container{\n                height: 400px;\n            }\n          }\n        '),")"))},$=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(M,null)),r.a.createElement("section",{className:"App-body"},r.a.createElement(K,null),r.a.createElement(I,null)))},ee=t(28),ne=t.n(ee),te=t(29),ae=t.n(te),re=t(45),ie=t(40),oe=t(13),ce=t(1),le=t.n(ce),se={cursor:"pointer"},me=(le.a.shape({key:le.a.string,src:le.a.string.isRequired,width:le.a.number.isRequired,height:le.a.number.isRequired,alt:le.a.string,title:le.a.string,srcSet:le.a.oneOfType([le.a.string,le.a.array]),sizes:le.a.oneOfType([le.a.string,le.a.array])}),function(e){var n=e.index,t=e.onClick,a=e.photo,i=e.margin,o=e.direction,c=e.top,l=e.left,s=e.key,m={margin:i,display:"block"};"column"===o&&(m.position="absolute",m.left=l,m.top=c);return r.a.createElement(p.a.img,Object.assign({animate:{scale:[0,1.05,1]},whileTap:{scale:[1,.8,.9]},transition:{duration:.2},key:s,style:t?Object(oe.a)(Object(oe.a)({},m),se):m},a,{onClick:t?function(e){t(e,{photo:a,index:n})}:null}))}),de=function(e,n){return n||(n=0),Number(Math.round(e+"e"+n)+"e-"+n)},he=function(e){var n=e.width,t=e.height;return de(n/t,2)};function ue(e){this.content=[],this.scoreFunction=e}ue.prototype={push:function(e){this.content.push(e),this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0],n=this.content.pop();return this.content.length>0&&(this.content[0]=n,this.sinkDown(0)),e},remove:function(e){for(var n=this.content.length,t=0;t<n;t++)if(this.content[t]==e){var a=this.content.pop();if(t==n-1)break;this.content[t]=a,this.bubbleUp(t),this.sinkDown(t);break}},size:function(){return this.content.length},bubbleUp:function(e){for(var n=this.content[e],t=this.scoreFunction(n);e>0;){var a=Math.floor((e+1)/2)-1,r=this.content[a];if(t>=this.scoreFunction(r))break;this.content[a]=n,this.content[e]=r,e=a}},sinkDown:function(e){for(var n=this.content.length,t=this.content[e],a=this.scoreFunction(t);;){var r=2*(e+1),i=r-1,o=null;if(i<n){var c=this.content[i],l=this.scoreFunction(c);l<a&&(o=i)}if(r<n){var s=this.content[r];this.scoreFunction(s)<(null==o?a:l)&&(o=r)}if(null==o)break;this.content[e]=this.content[o],this.content[o]=t,e=o}}};var pe=function(e,n,t){return function(e,n){for(var t=[],a=n;a;)t.push(a),e[a],a=e[a];return t.reverse()}(function(e,n,t){var a={},r={},i={};i[n]=0;var o=new ue((function(e){return e.weight}));for(o.push({id:n,weight:0});o.size();){var c=o.pop(),l=c.id;if(!r[l]){var s=e(l)||{};for(var m in r[l]=1,s){var d=c.weight+s[m];("undefined"===typeof i[m]||i[m]>d)&&(i[m]=d,o.push({id:m,weight:d}),a[m]=l)}}}if("undefined"===typeof i[t])throw new Error("There is no path from ".concat(n," to ").concat(t));return a}(e,n,t),t)},ge=function(e,n,t){return(n-e.length*(2*t))/e.reduce((function(e,n){return e+he(n)}),0)},fe=function(e,n,t,a,r,i){var o=e.slice(n,t),c=ge(o,a,i);return Math.pow(Math.abs(c-r),2)},ve=function(e){var n=e.containerWidth,t=e.limitNodeSearch,a=e.targetRowHeight,r=e.margin,i=e.photos,o=function(e,n,t,a,r){return function(i){var o={};o[+(i=+i)]=0;for(var c=i+1;c<t.length+1&&!(c-i>a);++c)o[c.toString()]=fe(t,i,c,n,e,r);return o}}(a,n,i,t,r),c=pe(o,"0",i.length);c=c.map((function(e){return+e}));for(var l=1;l<c.length;++l)for(var s=i.slice(c[l-1],c[l]),m=ge(s,n,r),d=c[l-1];d<c[l];++d)i[d].width=de(m*he(i[d]),1),i[d].height=m;return i},be=r.a.memo((function(e){var n=e.photos,t=e.onClick,i=e.direction,o=e.margin,c=e.limitNodeSearch,l=e.targetRowHeight,m=e.columns,d=e.renderImage,h=Object(a.useState)(0),u=Object(s.a)(h,2),g=u[0],f=u[1],v=Object(a.useRef)(null);Object(a.useLayoutEffect)((function(){var e=null,n=new ie.a((function(n){var t=n[0].contentRect.width;g!==t&&(e=window.requestAnimationFrame((function(){f(Math.floor(t))})))}));return n.observe(v.current),function(){n.disconnect(),window.cancelAnimationFrame(e)}}));var b=function(e,a){var r=a.index;t(e,{index:r,photo:n[r],previous:n[r-1]||null,next:n[r+1]||null})};if(!g)return r.a.createElement("div",{ref:v},"\xa0");var E,x,w=g-1;"row"===i&&("function"===typeof c&&(c=c(g)),"function"===typeof l&&(l=l(g)),void 0===c&&(c=2,g>=450&&(c=function(e){var n=e.targetRowHeight,t=e.containerWidth;return de(t/n/1.5)+8}({containerWidth:g,targetRowHeight:l}))),E={display:"flex",flexWrap:"wrap",flexDirection:"row"},x=ve({containerWidth:w,limitNodeSearch:c,targetRowHeight:l,margin:o,photos:n})),"column"===i&&("function"===typeof m&&(m=m(g)),void 0===m&&(m=1,g>=500&&(m=1),g>=900&&(m=3),g>=1500&&(m=4)),E={position:"relative"},x=function(e){for(var n=e.photos,t=e.columns,a=e.containerWidth,r=e.margin,i=(a-2*r*t)/t,o=n.map((function(e){var n=e.height/e.width*i;return Object(oe.a)(Object(oe.a)({},e),{},{width:de(i,1),height:de(n,1)})})),c=[],l=[],s=0;s<t;s++)c[s]=de(s*(i+2*r),1),l[s]=0;return o.map((function(e){var n=l.reduce((function(e,n,t){return e=n<l[e]?t:e}),0);e.top=l[n],e.left=c[n],l[n]=l[n]+e.height+2*r;var t=l.reduce((function(e,n,t){return e=n>l[e]?t:e}),0);return e.containerHeight=l[t],e}))}({containerWidth:w,columns:m,margin:o,photos:n}),E.height=x[x.length-1].containerHeight);var y=d||me;return r.a.createElement("div",{className:"react-photo-gallery--gallery"},r.a.createElement(p.a.div,{ref:v,style:E},x.map((function(e,n){var a=e.left,r=e.top,c=e.containerHeight,l=Object(re.a)(e,["left","top","containerHeight"]);return y({left:a,top:r,key:e.key||e.src,containerHeight:c,index:n,margin:o,direction:i,onClick:t?b:null,photo:l})}))))}));be.defaultProps={margin:2,direction:"row",targetRowHeight:300};var Ee=be,xe=t(41),we=t.n(xe),ye={cursor:"pointer"},ke=function(e){var n=e.index,t=e.onClick,a=e.photo,i=e.margin,o=e.direction,c=e.top,l=e.left,s={margin:i};"column"===o&&(s.position="absolute",s.left=l,s.top=c);return r.a.createElement(p.a.img,Object.assign({animate:{scale:[0,1.05,1]},className:we.a.ImageGalleryPhotos,whileHover:{scale:1.2,boxShadow:"black 0.8rem 1.2rem 1rem",zIndex:2},transition:{duration:.3},style:t?Object(oe.a)(Object(oe.a)({},s),ye):s},a,{onClick:t?function(e){t(e,{photo:a,index:n})}:null,alt:"img"}))},Ce=t(42),je=t.n(Ce),Ne=t(30),_e=[{src:"https://philipliart.files.wordpress.com/2019/11/img_3289.jpg",width:3,height:2},{src:"https://philipliart.files.wordpress.com/2019/11/img_3457.jpg",width:3,height:2},{src:"https://philipliart.files.wordpress.com/2019/10/img_2043.jpg",width:3,height:2},{src:"https://philipliart.files.wordpress.com/2019/10/img_1032.jpg",width:3,height:2},{src:"https://philipliart.files.wordpress.com/2019/10/img_5697.jpg",width:5,height:3},{src:"https://philipliart.files.wordpress.com/2019/10/img_0279.jpg",width:3,height:2},{src:"https://philipliart.files.wordpress.com/2019/10/img_0310.jpg",width:3,height:2},{src:"https://philipliart.files.wordpress.com/2019/10/img_1916.jpg",width:4,height:3},{src:"https://philipliart.files.wordpress.com/2019/10/img_1049.jpg",width:3,height:2},{src:"https://philipliart.files.wordpress.com/2019/10/img_1058.jpg",width:16,height:9},{src:"https://philipliart.files.wordpress.com/2019/10/img_3872.jpg",width:2,height:3},{src:"https://philipliart.files.wordpress.com/2019/10/img_5324.jpg",width:16,height:9},{src:"https://philipliart.files.wordpress.com/2019/10/img_1161.jpg",width:16,height:9}],Le=Object(Ne.b)((function(e){return r.a.createElement(ke,e)})),Pe=Object(Ne.a)((function(e){var n=e.items;return r.a.createElement(Ee,{photos:n,renderImage:function(e){return r.a.createElement(Le,e)}})})),He=function(e){var n=d(),t=n.width,i=(n.height,Object(a.useState)(_e)),o=Object(s.a)(i,2),c=o[0],l=o[1];return r.a.createElement("div",{className:ae.a.LatestWorkContent},r.a.createElement("div",{className:ae.a.ContentContainer},t>600?r.a.createElement(Pe,{items:c,onSortEnd:function(e){var n=e.oldIndex,t=e.newIndex;l(je()(c,n,t))},axis:"xy"}):r.a.createElement(Ee,{photos:c})))},Oe=t(44),Te=function(e){var n=Object(Oe.a)(),t=Object(s.a)(n,2),i=t[0],o=t[1];return Object(a.useEffect)((function(){var e=28*(1-o),n=42*(1-o),t=63*(1-o);document.body.style.background="rgb(".concat(e,", ").concat(n,",").concat(t,")")}),[o]),r.a.createElement(p.a.div,{ref:i,animate:{opacity:[0,1]},transition:{duration:.1}},r.a.createElement("div",null,r.a.createElement(M,null)),r.a.createElement("div",{className:ne.a.LatestWorkContent},r.a.createElement(p.a.div,{animate:{y:[10,-10,0],opacity:[0,1,1]},transition:{delay:.3,duration:.3}},r.a.createElement("h1",{className:ne.a.LatestWorkTitle},"Latest Works")),r.a.createElement(He,null)),r.a.createElement("div",null,r.a.createElement(I,null)))},We=function(e){return r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/latestworks",component:function(){return r.a.createElement(Te,null)}}),r.a.createElement(l.a,{path:"/collections",component:function(){return r.a.createElement("h1",null,"Hi")}}),r.a.createElement(l.a,{path:"/landscape",component:function(){return r.a.createElement("h1",null,"Hi")}}),r.a.createElement(l.a,{path:"/about",component:$}),r.a.createElement(l.a,{path:"/",component:B}))},Se=function(e){return r.a.createElement(v.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(We,null),r.a.createElement("style",{jsx:!0},"\n          body {\n            color: ".concat(c.primaryFontColor,";\n          }\n        "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.95859665.chunk.js.map