(this.webpackJsonplzh=this.webpackJsonplzh||[]).push([[0],{22:function(e,n,a){e.exports=a(34)},27:function(e,n,a){},28:function(e,n,a){},34:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(16),i=a.n(o),c=(a(27),a(28),{primaryColor:"#111D2B",primaryFontColor:"#D9F2FF",primaryColorComplimentary:"#85704D",secondaryColor:"#BED6F1",btnHoverBackgroundColor:"rgba(235,216,183,0.7)",btnHoverFontColor:"#172639",lightTextColorComplimentary:"#FFEAC7",darkTextColor:"#172639",complimentaryTextColor:"#A18F6F",logoColor:"#E3C084",lightTextColor:"#E0EFFF",skillCardBackgroundColor:"#284263"}),l=a(1),s=a(7),m=a.n(s),d=a(8),p=function(){return r.a.createElement("div",{className:m.a.navbarContainer},r.a.createElement("div",{className:m.a.navbar},r.a.createElement("h1",null,r.a.createElement("a",{href:"http://zehao99.github.io/"},r.a.createElement("img",{src:"".concat("/portfolio","/img/logo-light.png")}))),r.a.createElement("div",{className:m.a.navbarLinks},r.a.createElement(d.b,{to:"/collections",className:m.a.btn},"Collections"),r.a.createElement(d.b,{to:"/about",className:m.a.btn},"Portfolio"),r.a.createElement(d.b,{to:"/about",className:m.a.btn},"About"),r.a.createElement("a",{className:m.a.btn,href:"/lzh"},"Calories"))))},u=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"sns-icons"},r.a.createElement("a",{href:"https://www.instagram.com/zehao99/"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"far fa-envelope fa-2x"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/zehao-li-49ab9615b/"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),r.a.createElement("p",null,"Zehao Li, 2020 \xa9 all rights reserved.")),r.a.createElement("style",{jsx:!0},"\n        .footer-container {\n          text-align: center;\n        }\n        .footer-container .sns-icons {\n          margin-top: 1rem;\n        }\n        .footer-container .sns-icons a {\n          padding: 0 1rem;\n          color: ".concat(c.primaryColorComplimentary,";\n          transition: all 0.3s ease-in-out;\n        }\n\n        .footer-container .sns-icons a:hover {\n          color: ").concat(c.lightTextColorComplimentary,";\n        }\n\n        .footer-container p {\n          padding: 1rem;\n        }\n      ")))},g=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p,null)),r.a.createElement("section",{className:"App-body"},r.a.createElement(u,null)))},h={maxWidth:"1200px"},f=a(5),x=a(18),E=a(19),b=a(21),v=a(20),y=function(e){return function(n){Object(b.a)(t,n);var a=Object(v.a)(t);function t(){var e;Object(x.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={loading:!0},e.ref=r.a.createRef(),e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=this.ref.current;this.observer=new IntersectionObserver((function(a,t){a.forEach((function(a){a.isIntersecting&&(e.setState({loading:!1}),t.unobserve(n))}))})),this.observer.observe(n)}},{key:"componentWillUnmount",value:function(){this.observer.disconnect()}},{key:"render",value:function(){if(this.state.loading){var n=this.props.Loading||"loading";return r.a.createElement("div",{ref:this.ref,style:{color:"".concat(c.primaryColor)}},n)}return r.a.createElement(e,this.props)}}]),t}(r.a.Component)},k=y((function(e){return r.a.createElement("div",{className:"projectcard-container"},r.a.createElement(f.a.div,{animate:{scale:[.5,1.05,1],borderRadius:["50%",0,0],overflow:"hidden"},transition:{duration:.3}},r.a.createElement("a",{href:e.url},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"".concat("/portfolio","/").concat(e.name,".jpg")}),r.a.createElement("div",{className:"card-text"},r.a.createElement("p",null,e.imgText))))),r.a.createElement("style",{jsx:!0},'\n          .projectcard-container {\n            max-width: 200px;\n            max-height: 200px;\n            margin: 1rem;\n            transition: all 0.3s ease-in-out;\n          }\n          .projectcard-container .card {\n            position: relative;\n            overflow: hidden;\n          }\n\n          .projectcard-container .card::after {\n            content: "";\n            position: absolute;\n            display: block;\n            background: '.concat(c.secondaryColor,';\n            opacity: 0.9;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            transform: scale(2) translateX(-75%) translateY(-75%) rotate(-25deg);\n            transition: transform 0.8s cubic-bezier(0.2, 1, 1, 1);\n          }\n\n          .projectcard-container .card:hover::after {\n            transform: scale(2) translateX(0) translateY(0) rotate(-25deg);\n          }\n          .projectcard-container .card img {\n            width: 100%;\n            height: 100%;\n            transition: transform 0.4s ease-in-out;\n          }\n          .projectcard-container .card:hover img {\n            transform: scale(1.05);\n          }\n\n          .projectcard-container .card .card-text {\n            font-family: "Sora", sans-serif;\n            font-size: 1rem;\n            z-index: 100;\n            opacity: 0;\n            padding: 2rem;\n            position: absolute;\n            text-align: center;\n            top: 50%;\n            left: 0;\n            right: 0;\n            color: ').concat(c.complimentaryTextColor,";\n            transform: translateY(-50%);\n            transition: all 0.6s ease-in-out 0.15s ease-in-out;\n          }\n          .projectcard-container .card:hover .card-text {\n            opacity: 1;\n          }\n        ")))})),C=y((function(e){return r.a.createElement(f.a.div,{initial:{x:-500,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"educard-container"},r.a.createElement("h4",null,e.major),r.a.createElement("h5",null,e.time," ",r.a.createElement("span",{className:"interval"}," | "),e.school),r.a.createElement("p",{className:"location"},e.location),r.a.createElement("p",null,r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.info))),r.a.createElement("style",{jsx:!0},"\n        .educard-container {\n          position: relative;\n          background: #44546c;\n          padding: 1rem;\n          margin: 1rem auto;\n          max-width: 500px;\n          border-left: 5px solid ".concat(c.primaryColorComplimentary,';\n          border-radius: 3px;\n          box-shadow: 3px 3px 5px rgba(1, 1, 1, 0.3);\n        }\n\n        .educard-container::after {\n          content: "";\n          width: 10px;\n          height: 10px;\n          position: absolute;\n          top: 10px;\n          left: -12.4px;\n          background: ').concat(c.primaryColor,";\n          border: 5px solid ").concat(c.primaryColorComplimentary,";\n          border-radius: 50%;\n        }\n\n        .educard-container h4 {\n          color: ").concat(c.lightTextColor,";\n          margin: 0.5rem auto;\n          font-size: 1.2rem;\n        }\n        .educard-container h5 {\n          color: ").concat(c.logoColor,";\n          font-size: 1.2rem;\n          margin: 0.5rem auto;\n        }\n        .educard-container h5 span {\n          color: ").concat(c.darkTextColor,";\n          font-size: 1.2rem;\n        }\n        .educard-container .location {\n          font-style: italic;\n        }\n        .educard-container p {\n          color: ").concat(c.lightTextColor,";\n          margin: 0.5rem auto;\n        }\n        .educard-container a {\n          text-decoration: none;\n          color: ").concat(c.lightTextColor,";\n        }\n      ")))})),N=y((function(e){return r.a.createElement(f.a.div,{initial:{x:-100,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"title"},r.a.createElement("h3",{className:"subtitles"},e.text),r.a.createElement("div",{className:"underline"})),r.a.createElement("style",{jsx:!0},"\n        .title {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        .title .subtitles {\n          text-align: center;\n          padding: 2rem;\n          padding-bottom: 0.3rem;\n          font-weight: 400;\n          font-size: 1.5rem;\n        }\n        .title .underline {\n          background: ".concat(c.primaryColorComplimentary,";\n          height: 5px;\n          width: 30px;\n          border-radius: 2.5px;\n          margin-bottom: 1rem;\n        }\n      ")))})),w=y((function(e){return r.a.createElement(f.a.div,{initial:{x:-100,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"skillcard-container"},r.a.createElement("div",{className:"skill-name"},e.skillName),r.a.createElement("div",{className:"skill-info"},e.skillInfo)),r.a.createElement("style",{jsx:!0},"\n        .skillcard-container {\n          background: ".concat(c.skillCardBackgroundColor,';\n          width: 80%;\n          display: grid;\n          grid-template-areas: "name info";\n          grid-template-columns: 1fr 1fr;\n          margin: 0 auto;\n        }\n\n        .skillcard-container .skill-name {\n          grid-area: name;\n          padding: 0.75rem;\n          font-family: "Sora", sans-serif;\n          text-align: center;\n          width: 100%;\n          color: ').concat(c.lightTextColorComplimentary,';\n        }\n        .skillcard-container .skill-info {\n          grid-area: info;\n          padding: 0.8rem;\n          text-align: center;\n          width: 100%;\n        }\n\n        @media (max-width: 800px) {\n          .skillcard-container {\n            grid-template-areas:\n              "name"\n              "info";\n            grid-template-columns: 1fr;\n          }\n          .skillcard-container .skill-info {\n            padding: 0.25rem 1rem;\n            padding-bottom: 0.75rem;\n          }\n        }\n      ')))})),j=y((function(e){return r.a.createElement(f.a.div,null,r.a.createElement("div",{className:"textcard-container"},r.a.createElement("p",null,e.text)),r.a.createElement("style",{jsx:!0},"\n        .textcard-container {\n          background: ".concat(c.skillCardBackgroundColor,";\n          width: 80%;\n          margin: 0 auto;\n          text-align: ").concat(e.textAlign,";\n          padding: 1rem;\n        }\n        .textcard-container p {\n          margin-top: 0.5rem;\n          margin-bottom: 0.4rem;\n          font-style: ").concat(e.textStyle,";\n        }\n      ")))})),A=function(){return r.a.createElement("div",{className:"intro-container"},r.a.createElement(f.a.div,{initial:{x:-100,scale:0},animate:{x:0,scale:1},transition:{duration:.4}},r.a.createElement("div",{className:"about-container"},r.a.createElement("h3",null,"About Me"),r.a.createElement("p",{className:"about-text"},"I'm currently a master degree student at University of Tokyo, working in the field of robot-human interfaces. Photography is my hobby. I like challenging new things and making discoveries."))),r.a.createElement("div",{className:"past-info-container"},r.a.createElement("div",{className:"edu-container"},r.a.createElement(N,{text:"Education Background"}),r.a.createElement(C,{className:"edu-1",time:"2019.09. - Now",school:"University of Tokyo",major:"MS in Precision Engineering",location:"Tokyo, Japan",info:"AML Laboratory",link:"https://aml.t.u-tokyo.ac.jp/"}),r.a.createElement(C,{className:"edu-1",time:"2015.09.-2019.06.",school:"Shanghai Jiao Tong University",major:"BS in Mechanical Engineering",location:"Shanghai, China",info:"Minor in Finance"})),r.a.createElement("div",{className:"exp-container"},r.a.createElement(N,{text:"Experiences"}),r.a.createElement(C,{className:"exp-1",time:"2018.06.-2018.09.",school:"Microport Inc.",major:"CAE Engineer Intern",location:"Shanghai, China",info:"Cardiovascular stent contract and expand simulation",link:"http://www.microport.com"}),r.a.createElement(C,{className:"exp-1",time:"2017.06.-2018.06.",school:"SJTU Photography Association",major:"President of SJTUPA",location:"Shanghai, China",info:"One of the 10 'Five-Star Students' Associations in campus"}))),r.a.createElement("div",{className:"projects-container"},r.a.createElement("div",{className:"title-area",style:{gridArea:"subtitles"}},r.a.createElement(N,{text:"Projects"}),r.a.createElement("p",{style:{padding:"2rem",textAlign:"center",width:"70%",margin:"auto"}},"Now I'm working in the field of robot-human interfaces")),r.a.createElement(k,{name:"EIT",imgText:"Flexible Proximity Sensor With Tomographic Approach",style:{gridArea:"card"}}),r.a.createElement(k,{name:"UWBAGV",imgText:"Positioning System for Port AGVs using UWB",style:{gridArea:"card"}}),r.a.createElement(k,{name:"Calories",imgText:"Calories Search",url:"https://calories.page",style:{gridArea:"card"}})),r.a.createElement("div",{className:"skill-container text-container"},r.a.createElement(N,{text:"Skills",className:"title"}),r.a.createElement(w,{skillName:"Language",skillInfo:"Python, C++, MATLAB, Javascript, HTML&CSS"}),r.a.createElement(w,{skillName:"CAE & Modelling",skillInfo:"Solidworks, ABAQUS"}),r.a.createElement(w,{skillName:"Creative",skillInfo:"Photoshop, Premiere Pro"})),r.a.createElement("div",{className:"pub-container text-container"},r.a.createElement(N,{text:"Publications"}),r.a.createElement(j,{text:'Zehao Li, Shunshuke Yoshimoto and Akio Yamamoto, "Tomographic Approach for Proximity Imaging using Conductive Sheet", IECON 2020. (Accepted)',textStyle:"italic"})),r.a.createElement("div",{className:"award-container text-container"},r.a.createElement(N,{text:"Awards"}),r.a.createElement(j,{text:"The First Prize of Annual Photography Contest of VCG and 500px, 2016",textAlign:"center",textStyle:"italic"})),r.a.createElement("style",{jsx:!0},"\n          .intro-container {\n            margin: auto;\n            max-width: ".concat(h.maxWidth,";\n          }\n        \n          \n          .intro-container .about-container{\n              background: rgba(23,38,57, 0.6);\n              position: relative;\n              width: 100%;\n              height: 200px;\n              overflow: hidden;\n              display: flex;\n              flex-direction:column;\n              align-items:center;\n              justify-content:center;\n              color:").concat(c.lightTextColorComplimentary,'\n          }\n\n          .intro-container .about-container::before{\n              content: "";\n              position: absolute;\n              display: block;\n              background: url("').concat("/portfolio",'/about_bg.jpg") no-repeat center center/cover;\n              width: 100%;\n              height: 100%;\n              top: 0;\n              left: 0;\n              z-index: -1;\n          }\n\n          .intro-container .about-container h3{\n            display: block;\n            width: 100%;\n            max-width: 800px;\n            align-self: center;\n            margin: 1rem 3rem;\n            margin-top: 0.5rem;\n        }\n\n          .intro-container .about-container p{\n            background: rgba(255,242,219,0.75);\n            color: ').concat(c.primaryColor,';\n            max-width: 800px;\n            margin: 0 3rem;\n            padding: 1rem;\n            line-height: 1.5rem;\n        }\n\n        .intro-container .past-info-container{\n          display: grid;\n          grid-template-column: 1fr 1fr;\n          grid-template-areas: "edu exp";\n        }\n        .intro-container .past-info-container .edu-container{\n          grid-area:"edu";\n          padding:0 2rem;\n        }\n        .intro-container .past-info-container .exp-container{\n          grid-area:"exp";\n          padding:0 2rem;\n        }\n\n          .intro-container .projects-container {\n            margin: 1rem 0;\n            display: grid;\n            width: 100%;\n            grid-template-areas: "subtitles card card card";\n            grid-template-columns: 1fr 1fr 1fr 1fr;\n            justify-items: center;\n          }\n\n          .intro-container .edu-background-container {\n          }\n\n          .intro-container .text-container{\n            margin-top: 1rem;\n          }\n\n          .intro-container .text-container title{\n            margin-top: 1rem;\n          }\n\n          .intro-container .award-container {\n            margin-bottom: 3rem;\n          }\n          @media (max-width:916px){\n            .intro-container .about-container h3{\n              display: block;\n              width: 100%;\n              padding: 0 3rem;\n            }\n            .intro-container .past-info-container{\n              display: grid;\n              grid-template-column: 1fr;\n              grid-template-areas: "edu" "exp";\n            }\n          }\n\n          @media (max-width:800px) and (min-width:600px){\n            .intro-container .about-container{\n                height: 250px;\n            }\n\n            .intro-container .projects-container {\n              grid-template-areas:\n                "subtitles" "card"\n                "card" "card";\n              grid-template-columns: 1fr 1fr;\n            }\n\n          }\n\n\n          @media (max-width: 600px) {\n            .intro-container .projects-container {\n              grid-template-areas:\n                "subtitles"\n                "card"\n                "card"\n                "card";\n              grid-template-columns: 1fr;\n              justify-items: center;\n            }\n\n            .intro-container .about-container{\n                height: 400px;\n            }\n          }\n        '),")"))},T=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p,null)),r.a.createElement("section",{className:"App-body"},r.a.createElement(A,null),r.a.createElement(u,null)))},S=function(e){return r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/collections",component:function(){return r.a.createElement("h1",null,"Hi")}}),r.a.createElement(l.a,{path:"/landscape",component:function(){return r.a.createElement("h1",null,"Hi")}}),r.a.createElement(l.a,{path:"/about",component:T}),r.a.createElement(l.a,{path:"/",component:g}))},F=function(e){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement("style",{jsx:!0},"\n          body {\n            color: ".concat(c.primaryFontColor,";\n          }\n        "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,a){e.exports={navbarContainer:"Navbar_navbarContainer__2-s-m",navbar:"Navbar_navbar__ZV8bY",navbarLinks:"Navbar_navbarLinks__kVieN"}}},[[22,1,2]]]);
//# sourceMappingURL=main.af3f0425.chunk.js.map