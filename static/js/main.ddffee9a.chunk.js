(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,d,s,l,b,h,u,j,p,x,g,m,O,f,v,k,w,y=t(0),S=t.n(y),C=t(17),B=t.n(C),z=t(12),G=t(2),N=t(3),I=t(4),A=I.b.div(a||(a=Object(N.a)(["\n    background: var(--darkGrey);\n    padding: 0 20px;\n    overflow: hidden;\n    \n   \n"]))),D=I.b.div(i||(i=Object(N.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n    color: white;\n    font-size: 20px;\n    text-decoration: none;\n    outline:none;\n    cursor: pointer;\n\n\n    .links{\n        text-decoration: none;\n        color: black;\n    }\n    .links:hover{\n        opacity: 0.8;\n    }\n    .dropLink{\n        background-color: var(--medGrey);\n    }\n    ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n        background-color: #333;\n    }\n\n    li {\n        float: left;\n    }\n\n    li a, .dropdownButton {\n        display: inline-block;\n        color: white;\n        text-align: center;\n        background-color: var(--darkGrey);\n        padding: 14px 16px;\n        text-decoration: none;\n    }\n\n    li a:hover, .dropdown:hover .dropdownButton {\n        background-color: var(--darkGrey) ;\n        \n    }\n\n    li.dropdown {\n        display: inline-block;\n    }\n    .dropdownContent {\n        display: none;\n        position: absolute;\n        right: 0;\n        background-color: #f9f9f9;\n        min-width: 160px;\n        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n        z-index: 1;\n    }\n\n    .dropdownContent a {\n        color: white;\n        padding: 12px 16px;\n        text-decoration: none;\n        display: block;\n        text-align: center;\n    }\n\n    .dropdownContent a:hover   {\n        background-color: var(--medGrey);\n    }\n\n    .dropdown:hover .dropdownContent {\n        display: block;\n    }\n    \n;\n"]))),R=t(1),H=function(){return Object(R.jsx)(A,{children:Object(R.jsxs)(D,{children:[Object(R.jsx)(z.b,{className:"links",to:"/",children:Object(R.jsx)("h1",{children:"Home"})}),Object(R.jsx)("ul",{children:Object(R.jsxs)("li",{className:"dropdown",children:[Object(R.jsx)("a",{href:"javascript:void(0)",className:"dropdownButton",children:"More Options"}),Object(R.jsxs)("div",{className:"dropdownContent",children:[Object(R.jsx)(z.b,{className:"links dropLink",to:"/game",children:Object(R.jsx)("h1",{children:"Play Blackjack"})}),Object(R.jsx)("a",{href:"https://austdobe.github.io",target:"_blank",rel:"noreferrer",children:"My Portfolio"}),Object(R.jsx)("a",{href:"https://www.github.com/austdobe",target:"_blank",rel:"noreferrer",children:"My Github Profile"})]})]})})]})})},P=t(25),M=I.b.div(r||(r=Object(N.a)(["\n    position: absolute;\n    background: black;\n    height: 100vh fit-content;\n    width: 100%;\n    overflow: hidden;\n    \n    .messageDiv{\n        text-align: center;\n        margin-top: 100px;\n        @media screen and (min-width: 1000px){\n            font-size: 50px;\n        }\n        \n    }\n    \n"]))),T=I.b.div(c||(c=Object(N.a)([" \n    display: block;\n    background-color: rgb(0, 125, 0);\n    border: solid 10px brown;\n    padding-bottom: 5px;\n    border-radius: 25%;\n    max-width: 100%;\n    min-height: 80vh;\n    margin: 50px;\n    padding: 50px;\n            \n        \n    @media screen and (max-width: 768px)\n    {\n       padding-bottom: 60px;\n    }\n    @media screen and (min-width: 1200px){\n       \n    }\n   \n"]))),J=t.p+"static/media/cardBackground.3d9067ea.jpg",W=I.b.div(o||(o=Object(N.a)([" \n    display: inline-block;\n    margin: 20px;\n    color: var(--darkGrey);\n    background: var(--white);\n    border-radius: 15px;\n    height: 200px;\n    width: 150px;\n\n    .background{\n        background-image: url(",");\n        background-position: center;\n        background-size:cover;\n    }\n   \n   .card-red{\n       color: red;\n   }\n   @media screen and (max-width: 760px){\n        height: 150px;\n        width: 90px;\n   }\n"])),J),F=I.b.div(d||(d=Object(N.a)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    position: relative;\n    font-size: 30px;\n    vertical-align: middle;\n\n    @media screen and (min-width: 1000px){\n        font-size: 50px;\n    }\n\n    .topRank{\n        position: absolute;\n        text-align: left;\n        top:5px;\n        left: 5px;\n\n   }\n   .bottomRank{\n       position: absolute;\n       bottom: 5px;\n       right: 5px;\n       text-align: right;\n       \n   }\n   .suit{\n        position: absolute;\n        top: 35%;\n        width: 100%;\n        text-align: center;\n   }\n    \n"]))),_=function(n){var e=n.suit,t=n.rank,a="\u2666"===e||"\u2665"===e?"card-red":"card";return Object(R.jsx)(W,{children:Object(R.jsxs)(F,{className:e?"".concat(a):"background",children:[Object(R.jsx)("div",{className:"topRank",children:Object(R.jsx)("span",{children:t})}),Object(R.jsx)("div",{className:"suit",children:Object(R.jsx)("span",{children:e})}),Object(R.jsx)("div",{className:"bottomRank",children:Object(R.jsx)("span",{children:t})})]})})},E=I.b.div(s||(s=Object(N.a)(["\n    display: grid;\n    grid-template-columns:minmax(25%, 40%) repeat(auto-fill, minmax(200px, 60%));\n    grid-template-rows: auto;\n    grid-auto-flow: row;\n    justify-content: space-evenly;\n    justify-items: center;\n    align-content: space-evenly;\n    align-items: center;\n    box-sizing: border-box;\n    width: 100%;\n    height: fit-content;\n\n\n    @media screen and (max-width: 760px){\n        display: block;\n        text-align: center; \n        margin: 0 auto;      \n        \n    }\n   \n"]))),Q=I.b.div(l||(l=Object(N.a)(["\n    box-sizing: border-box;\n    height: fit-content;\n    width: fit-content;\n    display: inline-flex;\n    \n\n    @media screen and (max-width: 760px){\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-evenly;\n        justify-items: center;\n        align-content: space-evenly;\n        align-items: center;\n        margin: 0 auto;\n    }\n    \n    \n    \n    \n"]))),q=function(n){var e=n.header,t=n.children;return Object(R.jsxs)(E,{children:[Object(R.jsx)("h2",{children:e}),Object(R.jsx)(Q,{children:t})]})},L=I.b.div(b||(b=Object(N.a)([" \n    background: var(--medGrey);\n    text-align: center;\n    position: relative;\n    height: 100px;\n    bottom: 0;\n\n\n"]))),Y=I.b.div(h||(h=Object(N.a)(["\n    display: inline-block;\n    margin: 0 auto;\n    width: 100%;\n    .content.children{\n        width: 2fr;\n    }\n\n"]))),K=I.b.button(u||(u=Object(N.a)(["\n    display: inline-block;\n    min-width: 100px;\n    background: var(--darkGrey);\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 10px;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n   \n"]))),U=I.b.div(j||(j=Object(N.a)([" \n    display: inline-block;\n    min-width: 100px;\n    height: 60px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 20px;\n"]))),V=function(n){n.money;var e=n.count,t=(n.win,n.lose,n.callbackOne),a=n.callbackTwo;return Object(R.jsx)(L,{children:Object(R.jsxs)(Y,{children:[Object(R.jsx)(K,{className:"hit",type:"button",onClick:t,children:"Hit"}),Object(R.jsx)(K,{className:"stay",type:"button",onClick:a,children:"Stay"}),Object(R.jsxs)(U,{children:["Count:",Object(R.jsx)("span",{children:" "+e})]})]})})},X=I.b.button(p||(p=Object(N.a)(["\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width: 200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n\n"]))),Z=function(n){var e=n.text,t=n.callback;return Object(R.jsx)(X,{type:"button",onClick:t,children:e})},$=t(14),nn=t(6),en={cards:[],count:0},tn={cards:[],count:0},an=function(){var n=Object(y.useState)(en),e=Object(nn.a)(n,2),t=e[0],a=e[1],i=Object(y.useState)(tn),r=Object(nn.a)(i,2),c=r[0],o=r[1],d=Object(y.useState)({}),s=Object(nn.a)(d,2),l=s[0],b=s[1],h=Object(y.useState)(!1),u=Object(nn.a)(h,2),j=u[0],p=u[1],x=Object(y.useState)(!1),g=Object(nn.a)(x,2),m=g[0],O=g[1],f=Object(y.useState)(!1),v=Object(nn.a)(f,2),k=v[0],w=v[1],S=Object(y.useState)(!0),C=Object(nn.a)(S,2),B=C[0],z=C[1],G=Object(y.useState)(200),N=Object(nn.a)(G,2),I=N[0],A=N[1],D=Object(y.useState)(""),R=Object(nn.a)(D,2),H=R[0],P=R[1],M=Object(y.useState)(!1),T=Object(nn.a)(M,2),J=T[0],W=T[1],F=Object(y.useState)(!1),_=Object(nn.a)(F,2),E=_[0],Q=_[1],q=Object(y.useState)(0),L=Object(nn.a)(q,2),Y=L[0],K=(L[1],Object(y.useState)(0)),U=Object(nn.a)(K,2),V=U[0],X=(U[1],["\u2666","\u2663","\u2665","\u2660"]),Z=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],an=[],rn=[],cn={cards:[],count:0},on={cards:[],count:0},dn=[],sn=function(){m&&E?21===t.count&&c.count<21?(W(!0),P("BlackJack!! You Won!")):t.count>c.count&&t.count<=21?(W(!0),P("You beat the Dealer!")):c.count>21?(W(!0),P("Dealer Bust! Nice Stay!")):t.count<=c.count&&(W(!0),P("Dealer won..")):t.count>21&&(W(!0),P("Bust... better luck next time."))},ln=function(n){var e=[];return n.forEach((function(n){"A"===n.rank?e.push(n):n.rank&&e.unshift(n)})),e.reduce((function(n,e){return"J"===e.rank||"Q"===e.rank||"K"===e.rank?n+10:"A"===e.rank?n+11<=21?n+11:n+1:n+e.rank}),0)};return Object(y.useEffect)((function(){B?(!function(){for(var n=0;n<X.length;n++)for(var e=0;e<Z.length;e++)an.push({rank:Z[e],suit:X[n]});for(var t=0;t<52;t++){var a=an[t],i=Math.floor(52*Math.random());an[t]=an[i],an[i]=a}}(),function(n){for(var e=0;e<n;e++){dn=an,cn.cards.push({rank:dn[e].rank,suit:dn[e].suit});var t=dn.slice(1);on.cards.push({rank:t[e].rank,suit:t[e].suit}),an=t.slice(1),console.log(an),b(an)}a({cards:cn.cards,count:ln(cn.cards)}),o({cards:on.cards,count:ln(on.cards)})}(2),b(an),z(!1)):B||!j||m?m&&!E?(c.count<18?(rn=l[1],console.log("temp "+rn),on.cards.push({rank:rn.rank,suit:rn.suit}),an=l.slice(1),o((function(n){return{cards:[].concat(Object($.a)(n.cards),[on.cards[0]]),count:ln([].concat(Object($.a)(n.cards),[on.cards[0]]))}})),c.count<18&&Q(!0)):Q(!0),b(an),sn()):sn():(rn=l[1],console.log("temp "+rn),cn.cards.push({rank:rn.rank,suit:rn.suit}),an=l.slice(1),b(an),a((function(n){return{cards:[].concat(Object($.a)(n.cards),[cn.cards[0]]),count:ln([].concat(Object($.a)(n.cards),[cn.cards[0]]))}})),sn(),b(an),p(!1))}),[an,B,j,on,cn]),{player:t,dealer:c,purse:I,gameComplete:J,message:H,wins:Y,losses:V,isStaying:m,deckIsSet:k,setIsAddingCards:p,setIsStaying:O,startNewGame:function(){a(en),o(tn),b([]),p(!1),z(!0),O(!1),w(!1),A(200),P(""),W(!1),Q(!1)}}},rn=function(){var n=an(),e=n.player,t=n.dealer,a=(n.wins,n.losses,n.purse,n.gameComplete),i=n.message,r=(n.isStaying,n.deckIsSet,n.setIsAddingCards),c=n.setIsStaying,o=n.startNewGame;Object(P.a)();return console.log("Player: "+e.count),console.log("Dealer: "+t.count),Object(R.jsxs)(M,{children:[Object(R.jsxs)(T,{children:[Object(R.jsxs)("div",{children:[Object(R.jsx)(q,{header:"Dealer's Cards",children:t.cards.map((function(n,e){return Object(R.jsx)(_,{rank:n.rank,suit:n.suit},e)}))}),Object(R.jsx)(q,{header:"Your Cards",children:e.cards.map((function(n,e){return Object(R.jsx)(_,{rank:n.rank,suit:n.suit},e)}))})]}),a?Object(R.jsxs)("div",{className:"messageDiv",children:[Object(R.jsx)("h1",{children:i}),Object(R.jsxs)("p",{children:["Player Count:",Object(R.jsx)("span",{children:e.count})]}),Object(R.jsxs)("p",{children:["Dealer Count: ",Object(R.jsx)("span",{children:t.count})]})]}):Object(R.jsx)("span",{})]}),a?Object(R.jsx)("div",{children:Object(R.jsx)(Z,{text:"New Game",value:"#",callback:function(){return o()}})}):Object(R.jsx)(V,{count:e.count,callbackOne:function(){return r(!0)},callbackTwo:function(){return c(!0)}})]})},cn=I.b.div(x||(x=Object(N.a)(["\n    width: 100%;\n    margin: 0 auto;\n    background: rgb(0, 0, 0);\n    background-size: 100%;\n    overflow: hidden;\n\n    h1 {        \n        @media screen and (max-width: 768px){\n            font-size: var(--fontBig)\n        }\n    }\n    p {\n        color: var(--white);\n        \n        @media screen and (max-width: 768px){\n            font-size: var(--fontBig)\n        }\n    }\n    \n    \n"]))),on=I.b.div(g||(g=Object(N.a)(["\n    display: block;\n    max-width: var(--maxWidth);\n    justify-items: center;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n\n    .profileCard{\n        width: 50%;\n        margin: 0 auto;\n        padding: 20px;\n        background-color: var(--medGrey);\n        display:block;\n        text-align: center;\n        border-radius: 60px;\n        @media screen and (max-width: 768px){\n            width: 100%\n        }\n        ul{\n            justify-items: center;\n            justify-content: center;\n            align-items: center;\n            align-content: center;\n            \n        }\n        \n        li{\n            \n            list-style: none;\n            display: inline-flex;\n            border-radius: 10px;\n            cursor: pointer;\n            padding: 5px 10px;\n            @media screen and (max-width: 768px){\n                \n                padding: 0 10px;\n                \n            }\n            @media screen and (min-width: 800px){\n                margin: 0 20px;\n            }\n        }\n        li:hover{\n            background-color: var(--darkGrey);\n            opacity: 0.6;\n        }\n        a{\n            text-decoration: none;\n            color: white;\n        }\n    \n        \n    }\n    .rules{\n        width: 100%;\n        text-align: center;\n        ul{\n            justify-items: center;\n            justify-content: center;\n            align-items: center;\n            align-content: center;\n            \n        }\n        li{\n            padding: 5px;\n            list-style: armenian;\n            display: inline-flex;\n        }\n        div{\n            display: inline-block;\n            width: 50%;\n            @media screen and (max-width: 768px){\n                display: block;\n                width: 100%;\n                \n            }\n        }\n        .rulesImage{\n            display: inline-block;\n            width: 50%;\n            padding-top: 20px;\n        }\n       \n        @media screen and (max-width: 768px){\n            width: 100%\n        }\n    }\n    .underHood{\n        width: 100%;\n        margin: 20px;\n        text-align: center;\n       \n        li{\n            padding-left: 5px;\n            list-style: none;\n            display: inline-flex;\n        }\n\n\n        @media screen and (max-width: 768px){\n            margin: 0;\n            line-height: 20px;\n        }\n    }\n\n"]))),dn=I.b.div(m||(m=Object(N.a)(["  \n    width: 100%;\n    display: inline-block;\n    padding: 20px 30px;\n"]))),sn=I.b.img(O||(O=Object(N.a)([" \n    display: inline-block;\n    width: 50%;\n    max-height: 400px;\n    object-fit: contain;\n    border-radius: 15px;\n"]))),ln=I.b.div(f||(f=Object(N.a)(["\n    background: linear-gradient(\n        to bottom, rgba(0, 0, 0, .25)\n        41%, rgba( 0, 0, 0, 0.85)\n        100%\n    ), \n    url(","), var(--darkGrey);\n    background-size: 100%, cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animateWelcomeImage 2s;\n\n    @keyframes animateWelcomeImage {\n        from{\n            opacity: 0;\n        } to{\n            opacity: 1\n        }\n    }\n"])),(function(n){return n.image})),bn=I.b.div(v||(v=Object(N.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n\n"]))),hn=I.b.div(k||(k=Object(N.a)(["\n    z-index: 100;\n    max-width: 700px;\n    background: linear-gradient(\n        to bottom, rgba(0, 0, 0, .85)\n        41%, rgba( 0, 0, 0, 0.45)\n        100%\n    );\n    border-radius: 25%;\n    padding: 10px 20px;\n    vertical-align: middle;\n    text-align: center;\n    min-height: 100px;\n    color: var(--white);\n    justify-content: space-evenly;\n    justify-items: center;\n    align-content: space-evenly;\n    align-items: center;\n    \n    h1{\n        font-size: var(--fontSuperBig);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontBig)\n\n        }\n    \n    }\n    p{\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontSmall)\n        }\n    }\n    @media screen and (max-width: 720px){\n        max-width: 100%\n    }\n\n"]))),un=function(n){var e=n.image,t=n.title,a=n.text;return Object(R.jsx)(ln,{image:e,children:Object(R.jsx)(bn,{children:Object(R.jsxs)(hn,{children:[Object(R.jsx)("h1",{children:t}),Object(R.jsx)("p",{children:a})]})})})},jn=t.p+"static/media/welcome.8a9caeb1.PNG",pn=t.p+"static/media/Headshot.0ccfa9dc.jpg",xn=t.p+"static/media/blackjack.5b369a8e.jpg",gn=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(un,{id:"welcome",image:jn,title:"Welcome to Blackjack",text:"Are the odds in your favor?"}),Object(R.jsx)(cn,{children:Object(R.jsxs)(on,{children:[Object(R.jsxs)(dn,{className:"rules",id:"rules",children:[Object(R.jsxs)("div",{children:["                ",Object(R.jsx)("h3",{children:"Blackjack Rules"}),Object(R.jsx)("h4",{children:"Objective: Get your cards as close to 21 without going over, while also having a higher count than the dealer."}),Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:"Card Count: All numbered cards equate to the number that they show. Face cards such as Jack, Queen and King all Equate to 10. Ace is your savior card. It will equate to 11 or 1 depending on what your score is. If you go over 21 and you have an Ace, it drops to 1. If you have a face card and an ace. Congrats, you got blackjack."}),Object(R.jsx)("li",{children:"Once the initial cards are dealt. You have the option to Hit, or to Stay. If you choose to Hit, you are given a random card out of the deck. This card is added to your total. If you go over 21, you bust and lose the round. If you choose to stay, the dealer has the choice to Hit or to stay."}),Object(R.jsx)("li",{children:"Once both decide to stay, the value of the cards are determined and the player closest to 21 without going over wins."}),Object(R.jsx)("li",{children:"Tie always goes to the dealer. If you both have a card count of 20. The dealer wins."})]})]}),Object(R.jsx)(sn,{className:"rulesImage",src:xn})]}),Object(R.jsxs)(dn,{className:"underHood",id:"aboutBuild",children:[Object(R.jsx)("h2",{children:"Under The Hood"}),Object(R.jsx)("h4",{children:"Technologies used"}),Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:"React |"}),Object(R.jsx)("li",{children:"React Hooks |"}),Object(R.jsx)("li",{children:"React Router Dom V6 (Currently in Beta) |"}),Object(R.jsx)("li",{children:"Styled Components |"}),Object(R.jsx)("li",{children:"Custom CSS |"}),Object(R.jsx)("li",{children:"Javascript / JSX |"})]})]}),Object(R.jsxs)(dn,{className:"profileCard",id:"meetMe",children:[Object(R.jsx)("h2",{children:"Meet the Developer"}),Object(R.jsxs)("div",{children:[Object(R.jsx)(sn,{src:pn,alt:"personal-head-shot"}),Object(R.jsx)("h3",{children:"Austin Dober"}),Object(R.jsx)("p",{children:"Merging years of customer service and healthcare experience with Full Stack Development. I help bring clarity and quality to technical problems and their users."}),Object(R.jsx)("p",{children:"Recent Graduate of the University of North Carolina Full Stack Boot Camp. I have deployed and coded over 20 different web applications."}),Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)("a",{href:"https://www.austdobe.github.io",target:"_blank",rel:"noreferrer",children:"Portfolio"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{href:"www.github.com/austobe",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(R.jsx)("li",{children:Object(R.jsx)("a",{href:"https://docs.google.com/document/d/1_xVJg0XkSRHm0WnBOPPfeAEx8eOQtpS4RPgH-AxphxQ/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"Resume"})})]})]})]})]})})]})},mn=function(){return Object(R.jsx)("div",{children:"Opps.... This page is not found!"})},On=Object(I.a)(w||(w=Object(N.a)(["\n    :root{\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }       \n    *{\n        box-sizing: border-box;\n        font-family: 'Abel', sans-serif;\n    }\n    body{\n        margin: 0;\n        padding: 0;\n        color: var(--white);\n        \n        h1{\n            font-size: 2rem;\n            font-weight: 600;\n            color: var(--white)\n        }\n        h3{\n            font-size: 1.1rem;\n            font-weight: 600;\n\n        }\n        p{\n            font-size: 1rem;\n            color: var(--white)\n        }\n\n    }\n    \n"]))),fn=function(){return Object(R.jsxs)(z.a,{children:[Object(R.jsx)(H,{path:"#"}),Object(R.jsxs)(G.c,{children:[Object(R.jsx)(G.a,{path:"/",element:Object(R.jsx)(gn,{})}),Object(R.jsx)(G.a,{path:"/game",element:Object(R.jsx)(rn,{})}),Object(R.jsx)(G.a,{path:"/*",element:Object(R.jsx)(mn,{})})]}),Object(R.jsx)(On,{})]})},vn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};B.a.render(Object(R.jsx)(S.a.StrictMode,{children:Object(R.jsx)(fn,{})}),document.getElementById("root")),vn()}},[[37,1,2]]]);
//# sourceMappingURL=main.ddffee9a.chunk.js.map