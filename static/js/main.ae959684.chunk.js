(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var a,c,r,i,o,s,d,l,b,u,j,h,p,x,m=t(0),g=t.n(m),O=t(21),f=t.n(O),k=t(12),v=t(2),w=t(3),y=t(4),S=y.b.div(a||(a=Object(w.a)(["\n    background: var(--darkGrey);\n    padding: 0 20px;\n   \n"]))),C=y.b.div(c||(c=Object(w.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n    color: white;\n    text-decoration: none;\n    outline:none;\n    cursor: pointer;\n\n\n    .links{\n        text-decoration: none;\n\n    }\n    .links:hover{\n        opacity: 0.8;\n    }\n    \n;\n"]))),z=t(1),N=function(){return Object(z.jsx)(S,{children:Object(z.jsxs)(C,{children:[Object(z.jsx)(k.b,{className:"links",to:"/",children:Object(z.jsx)("h1",{children:"Home"})}),Object(z.jsx)(k.b,{className:"links",to:"/game",children:Object(z.jsx)("h1",{children:"Black Jack"})})]})})},B=t(25),G=y.b.div(r||(r=Object(w.a)(["\n    position: absolute;\n    background: black;\n    height: 100vh fit-content;\n    width: 100%;\n    overflow: hidden;\n    \n    .messageDiv{\n        text-align: center;\n        margin-top: 100px;\n        @media screen and (min-width: 1000px){\n            font-size: 50px;\n        }\n        \n    }\n    \n"]))),D=y.b.div(i||(i=Object(w.a)([" \n    display: block;\n    background-color: rgb(0, 125, 0);\n    border: solid 10px brown;\n    padding-bottom: 5px;\n    border-radius: 25%;\n    max-width: 100%;\n    min-height: 80vh;    \n        \n    @media screen and (max-width: 768px)\n    {\n       padding-bottom: 60px;\n    }\n    @media screen and (min-width: 1200px){\n        margin: 50px;\n        padding: 50px;\n        \n    }\n   \n"]))),A=t.p+"static/media/cardBackground.3d9067ea.jpg",I=y.b.div(o||(o=Object(w.a)([" \n    display: inline-block;\n    margin: 20px;\n    color: var(--darkGrey);\n    background: var(--white);\n    border-radius: 15px;\n    height: 200px;\n    width: 150px;\n\n    .background{\n        background-image: url(",");\n        background-position: center;\n        background-size:cover;\n    }\n   \n   .card-red{\n       color: red;\n   }\n   @media screen and (max-width: 760px){\n        height: 150px;\n        width: 90px;\n   }\n"])),A),J=y.b.div(s||(s=Object(w.a)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    position: relative;\n    font-size: 30px;\n    vertical-align: middle;\n\n    @media screen and (min-width: 1000px){\n        font-size: 50px;\n    }\n\n    .topRank{\n        position: absolute;\n        text-align: left;\n        top:5px;\n        left: 5px;\n\n   }\n   .bottomRank{\n       position: absolute;\n       bottom: 5px;\n       right: 5px;\n       text-align: right;\n       \n   }\n   .suit{\n        position: absolute;\n        top: 35%;\n        width: 100%;\n        text-align: center;\n   }\n    \n"]))),T=function(n){var e=n.suit,t=n.rank,a="\u2666"===e||"\u2665"===e?"card-red":"card";return Object(z.jsx)(I,{children:Object(z.jsxs)(J,{className:e?"".concat(a):"background",children:[Object(z.jsx)("div",{className:"topRank",children:Object(z.jsx)("span",{children:t})}),Object(z.jsx)("div",{className:"suit",children:Object(z.jsx)("span",{children:e})}),Object(z.jsx)("div",{className:"bottomRank",children:Object(z.jsx)("span",{children:t})})]})})},F=y.b.div(d||(d=Object(w.a)(["\n    display: grid;\n    grid-template-columns:minmax(25%, 40%) repeat(auto-fill, minmax(200px, 60%));\n    grid-template-rows: auto;\n    grid-auto-flow: row;\n    justify-content: space-evenly;\n    justify-items: center;\n    align-content: space-evenly;\n    align-items: center;\n    box-sizing: border-box;\n    width: 100%;\n    height: 50vh;\n\n\n    @media screen and (max-width: 760px){\n        display: block;\n        text-align: center; \n        margin: 0 auto;      \n        \n    }\n   \n"]))),M=y.b.div(l||(l=Object(w.a)(["\n    box-sizing: border-box;\n    height: fit-content;\n    width: fit-content;\n    display: inline-flex;\n    \n\n    @media screen and (max-width: 760px){\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-evenly;\n        justify-items: center;\n        align-content: space-evenly;\n        align-items: center;\n        margin: 0 auto;\n    }\n    \n    \n    \n    \n"]))),P=function(n){var e=n.header,t=n.children;return Object(z.jsxs)(F,{children:[Object(z.jsx)("h2",{children:e}),Object(z.jsx)(M,{children:t})]})},R=y.b.div(b||(b=Object(w.a)([" \n    background: var(--medGrey);\n    text-align: center;\n    position: relative;\n    bottom: 0;\n\n\n"]))),E=y.b.div(u||(u=Object(w.a)(["\n    display: inline-block;\n    margin: 0 auto;\n    width: 100%;\n    .content.children{\n        width: 2fr;\n    }\n\n"]))),W=y.b.button(j||(j=Object(w.a)(["\n    display: inline-block;\n    min-width: 100px;\n    background: var(--darkGrey);\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 10px;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n   \n"]))),Y=y.b.div(h||(h=Object(w.a)([" \n    display: inline-block;\n    min-width: 100px;\n    height: 60px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 20px;\n"]))),H=function(n){n.money;var e=n.count,t=n.callbackOne,a=n.callbackTwo;return Object(z.jsx)(R,{children:Object(z.jsxs)(E,{children:[Object(z.jsx)(W,{className:"hit",type:"button",onClick:t,children:"Hit"}),Object(z.jsx)(W,{className:"stay",type:"button",onClick:a,children:"Stay"}),Object(z.jsxs)(Y,{children:["Count:",Object(z.jsx)("span",{children:" "+e})]})]})})},K=y.b.button(p||(p=Object(w.a)(["\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width: 200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n\n"]))),L=function(n){var e=n.text,t=n.callback;return Object(z.jsx)(K,{type:"button",onClick:t,children:e})},Q=t(14),q=t(6),U={cards:[],count:0},V={cards:[],count:0},X=function(){var n=Object(m.useState)(U),e=Object(q.a)(n,2),t=e[0],a=e[1],c=Object(m.useState)(V),r=Object(q.a)(c,2),i=r[0],o=r[1],s=Object(m.useState)({}),d=Object(q.a)(s,2),l=d[0],b=d[1],u=Object(m.useState)(!1),j=Object(q.a)(u,2),h=j[0],p=j[1],x=Object(m.useState)(!1),g=Object(q.a)(x,2),O=g[0],f=g[1],k=Object(m.useState)(!0),v=Object(q.a)(k,2),w=v[0],y=v[1],S=Object(m.useState)(200),C=Object(q.a)(S,2),z=C[0],N=C[1],B=Object(m.useState)(""),G=Object(q.a)(B,2),D=G[0],A=G[1],I=Object(m.useState)(!1),J=Object(q.a)(I,2),T=J[0],F=J[1],M=Object(m.useState)(!1),P=Object(q.a)(M,2),R=P[0],E=P[1],W=["\u2666","\u2663","\u2665","\u2660"],Y=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],H=[],K=[],L={cards:[],count:0},X={cards:[],count:0},Z=[],$=function(){O&&R?21===t.count&&i.count<21?(F(!0),A("BlackJack!! You Won!")):t.count>i.count&&t.count<=21?(F(!0),A("You beat the Dealer!")):i.count>21?(F(!0),A("Dealer Bust! Nice Stay!")):t.count<=i.count&&(F(!0),A("Dealer won..")):t.count>21&&(F(!0),A("Bust... better luck next time."))},_=function(n){var e=[];return n.forEach((function(n){"A"===n.rank?e.push(n):n.rank&&e.unshift(n)})),e.reduce((function(n,e){return"J"===e.rank||"Q"===e.rank||"K"===e.rank?n+10:"A"===e.rank?n+11<=21?n+11:n+1:n+e.rank}),0)};return Object(m.useEffect)((function(){w?(!function(){for(var n=0;n<W.length;n++)for(var e=0;e<Y.length;e++)H.push({rank:Y[e],suit:W[n]});for(var t=0;t<52;t++){var a=H[t],c=Math.floor(52*Math.random());H[t]=H[c],H[c]=a}}(),function(n){for(var e=0;e<n;e++){Z=H,L.cards.push({rank:Z[e].rank,suit:Z[e].suit});var t=Z.slice(1);X.cards.push({rank:t[e].rank,suit:t[e].suit}),H=t.slice(1),console.log(H),b(H)}a({cards:L.cards,count:_(L.cards)}),o({cards:X.cards,count:_(X.cards)})}(2),b(H),y(!1)):w||!h||O?O&&!R?(i.count<18?(K=l[1],console.log("temp "+K),X.cards.push({rank:K.rank,suit:K.suit}),H=l.slice(1),o((function(n){return{cards:[].concat(Object(Q.a)(n.cards),[X.cards[0]]),count:_([].concat(Object(Q.a)(n.cards),[X.cards[0]]))}})),i.count<18&&E(!0)):E(!0),b(H),$()):$():(K=l[1],console.log("temp "+K),L.cards.push({rank:K.rank,suit:K.suit}),H=l.slice(1),b(H),a((function(n){return{cards:[].concat(Object(Q.a)(n.cards),[L.cards[0]]),count:_([].concat(Object(Q.a)(n.cards),[L.cards[0]]))}})),$(),b(H),p(!1))}),[H,w,h,X,L]),{player:t,dealer:i,purse:z,gameComplete:T,message:D,setIsAddingCards:p,setIsStaying:f,startNewGame:function(){a(U),o(V),b({}),p(!1),f(!1),y(!0),N(200),A(""),F(!1),E(!1)}}},Z=function(){var n=X(),e=n.player,t=n.dealer,a=(n.purse,n.gameComplete),c=n.message,r=n.setIsAddingCards,i=n.setIsStaying,o=n.startNewGame;Object(B.a)();return console.log("Player: "+e.count),console.log("Dealer: "+t.count),Object(z.jsxs)(G,{children:[Object(z.jsxs)(D,{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(P,{header:"Dealer's Cards",children:t.cards.map((function(n,e){return Object(z.jsx)(T,{rank:n.rank,suit:n.suit},e)}))}),Object(z.jsx)(P,{header:"Your Cards",children:e.cards.map((function(n,e){return Object(z.jsx)(T,{rank:n.rank,suit:n.suit},e)}))})]}),a?Object(z.jsxs)("div",{className:"messageDiv",children:[Object(z.jsx)("h1",{children:c}),Object(z.jsxs)("p",{children:["Player Count:",Object(z.jsx)("span",{children:e.count})]}),Object(z.jsxs)("p",{children:["Dealer Count: ",Object(z.jsx)("span",{children:t.count})]})]}):Object(z.jsx)("span",{})]}),a?Object(z.jsx)("div",{children:Object(z.jsx)(L,{text:"New Game",value:"#",callback:function(){return o()}})}):Object(z.jsx)(H,{count:e.count,callbackOne:function(){return r(!0)},callbackTwo:function(){return i(!0)}})]})},$=function(){return Object(z.jsx)("div",{})},_=function(){return Object(z.jsx)("div",{children:"Opps.... This page is not found!"})},nn=Object(y.a)(x||(x=Object(w.a)(["\n    :root{\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }       \n    *{\n        box-sizing: border-box;\n        font-family: 'Abel', sans-serif;\n    }\n    body{\n        margin: 0;\n        padding: 0;\n        \n        h1{\n            font-size: 2rem;\n            font-weight: 600;\n            color: var(--white)\n        }\n        h3{\n            font-size: 1.1rem;\n            font-weight: 600;\n\n        }\n        p{\n            font-size: 1rem;\n            color: var(--white)\n        }\n\n    }\n    \n"]))),en=function(){return Object(z.jsxs)(k.a,{children:[Object(z.jsx)(N,{path:"#"}),Object(z.jsxs)(v.c,{children:[Object(z.jsx)(v.a,{path:"/",element:Object(z.jsx)($,{})}),Object(z.jsx)(v.a,{path:"/game",element:Object(z.jsx)(Z,{})}),Object(z.jsx)(v.a,{path:"/*",element:Object(z.jsx)(_,{})})]}),Object(z.jsx)(nn,{})]})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),c(n),r(n),i(n)}))};f.a.render(Object(z.jsx)(g.a.StrictMode,{children:Object(z.jsx)(en,{})}),document.getElementById("root")),tn()}},[[37,1,2]]]);
//# sourceMappingURL=main.ae959684.chunk.js.map