(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var c,a,r,i,o,s,d,l,b,u,j,h,p,x,g=t(0),O=t.n(g),m=t(16),f=t.n(m),k=t(7),v=t(2),w=t(3),y=t(4),S=y.b.div(c||(c=Object(w.a)(["\n    background: var(--darkGrey);\n    padding: 0 20px;\n   \n"]))),C=y.b.div(a||(a=Object(w.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n    color: white;\n    text-decoration: none;\n    outline:none;\n    cursor: pointer;\n    \n   \n"]))),B=t(1),z=function(){return Object(B.jsx)(S,{children:Object(B.jsxs)(C,{children:[Object(B.jsx)(k.b,{to:"/",children:Object(B.jsx)("h1",{children:"Home"})}),Object(B.jsx)(k.b,{to:"/game",children:Object(B.jsx)("h1",{children:"Black Jack"})})]})})},G=y.b.div(r||(r=Object(w.a)(["\n    position: absolute;\n    background: black;\n    height: 100vh fit-content;\n    width: 100%;\n    overflow: hidden;\n    \n    \n    .messageDiv{\n        text-align: center;\n        margin-top: 100px;\n        \n    }\n    \n"]))),N=y.b.div(i||(i=Object(w.a)([" \n    display: block;\n    background-color: rgb(0, 125, 0);\n    border: solid 10px brown;\n    padding-bottom: 5px;\n    border-radius: 25%;\n    max-width: var(--maxwidth);\n    min-height: 100vh;\n    @media screen and (max-width: 768px)\n    {\n        padding-bottom: 60px;\n    }\n    @media screen and (min-width: 1200px){\n        margin: 50px;\n        padding: 50px;\n        \n    }\n   \n"]))),D=t.p+"static/media/cardBackground.3d9067ea.jpg",A=y.b.div(o||(o=Object(w.a)([" \n    display: inline-block;\n    margin: 20px;\n    color: var(--darkGrey);\n    background: var(--white);\n    border-radius: 15px;\n    height: 200px;\n    width: 150px;\n\n    .background{\n        background-image: url(",");\n        background-position: center;\n        background-size:cover;\n    }\n   \n   .card-red{\n       color: red;\n   }\n   @media screen and (max-width: 760px){\n        height: 150px;\n        width: 90px;\n   }\n"])),D),I=y.b.div(s||(s=Object(w.a)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    position: relative;\n    font-size: 30px;\n    vertical-align: middle;\n\n    .topRank{\n        position: absolute;\n        text-align: left;\n        top:5px;\n        left: 5px;\n\n   }\n   .bottomRank{\n       position: absolute;\n       bottom: 5px;\n       right: 5px;\n       text-align: right;\n       \n   }\n   .suit{\n        position: absolute;\n        top: 35%;\n        width: 100%;\n        text-align: center;\n   }\n    \n"]))),J=function(n){var e=n.suit,t=n.rank,c="\u2666"===e||"\u2665"===e?"card-red":"card";return Object(B.jsx)(A,{children:Object(B.jsxs)(I,{className:e?"".concat(c):"background",children:[Object(B.jsx)("div",{className:"topRank",children:Object(B.jsx)("span",{children:t})}),Object(B.jsx)("div",{className:"suit",children:Object(B.jsx)("span",{children:e})}),Object(B.jsx)("div",{className:"bottomRank",children:Object(B.jsx)("span",{children:t})})]})})},T=y.b.div(d||(d=Object(w.a)(["\n    display: grid;\n    grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));\n    grid-template-rows: auto;\n    grid-auto-flow: row;\n    justify-content: space-evenly;\n    justify-items: center;\n    align-content: space-evenly;\n    align-items: center;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    \n   \n    \n    \n    \n    \n    \n\n    @media screen and (max-width: 760px){\n        display: block;\n        text-align: center; \n        margin: 0 auto;       \n        \n    }\n   \n"]))),F=y.b.div(l||(l=Object(w.a)(["\n    box-sizing: border-box;\n    height: fit-content;\n    width: fit-content;\n    display: inline-flex;\n\n    @media screen and (max-width: 760px){\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-evenly;\n        justify-items: center;\n        align-content: space-evenly;\n        align-items: center;\n        margin: 0 auto;\n    }\n    \n    \n    \n    \n"]))),M=function(n){var e=n.header,t=n.children;return Object(B.jsxs)(T,{children:[Object(B.jsx)("h3",{children:e}),Object(B.jsx)(F,{children:t})]})},P=y.b.div(b||(b=Object(w.a)([" \n    background: var(--medGrey);\n    text-align: center;\n    position: relative;\n    bottom: 0;\n\n\n"]))),R=y.b.div(u||(u=Object(w.a)(["\n    display: inline-block;\n    margin: 0 auto;\n    width: 100%;\n    .content.children{\n        width: 2fr;\n    }\n\n"]))),E=y.b.button(j||(j=Object(w.a)(["\n    display: inline-block;\n    min-width: 100px;\n    background: var(--darkGrey);\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 10px;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n   \n"]))),W=y.b.div(h||(h=Object(w.a)([" \n    display: inline-block;\n    min-width: 100px;\n    height: 60px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 20px;\n"]))),Y=function(n){n.money;var e=n.count,t=n.callbackOne,c=n.callbackTwo;return Object(B.jsx)(P,{children:Object(B.jsxs)(R,{children:[Object(B.jsx)(E,{className:"hit",type:"button",onClick:t,children:"Hit"}),Object(B.jsx)(E,{className:"stay",type:"button",onClick:c,children:"Stay"}),Object(B.jsxs)(W,{children:["Count:",Object(B.jsx)("span",{children:" "+e})]})]})})},H=y.b.button(p||(p=Object(w.a)(["\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width: 200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n\n"]))),K=function(n){var e=n.text,t=n.callback;return Object(B.jsx)(H,{type:"button",onClick:t,children:e})},L=t(9),Q=t(5),q={cards:[],count:0},U={cards:[],count:0},V=function(){var n=Object(g.useState)(q),e=Object(Q.a)(n,2),t=e[0],c=e[1],a=Object(g.useState)(U),r=Object(Q.a)(a,2),i=r[0],o=r[1],s=Object(g.useState)({}),d=Object(Q.a)(s,2),l=d[0],b=d[1],u=Object(g.useState)(!1),j=Object(Q.a)(u,2),h=j[0],p=j[1],x=Object(g.useState)(!1),O=Object(Q.a)(x,2),m=O[0],f=O[1],k=Object(g.useState)(!0),v=Object(Q.a)(k,2),w=v[0],y=v[1],S=Object(g.useState)(200),C=Object(Q.a)(S,2),B=C[0],z=C[1],G=Object(g.useState)(""),N=Object(Q.a)(G,2),D=N[0],A=N[1],I=Object(g.useState)(!1),J=Object(Q.a)(I,2),T=J[0],F=J[1],M=Object(g.useState)(!1),P=Object(Q.a)(M,2),R=P[0],E=P[1],W=["\u2666","\u2663","\u2665","\u2660"],Y=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],H=[],K=[],V={cards:[],count:0},X={cards:[],count:0},Z=[],$=function(){m&&R?21===t.count&&i.count<21?(F(!0),A("BlackJack!! You Won!")):t.count>i.count&&t.count<=21?(F(!0),A("You beat the Dealer!")):i.count>21?(F(!0),A("Dealer Bust! Nice Stay!")):t.count<=i.count&&(F(!0),A("Dealer won..")):t.count>21&&(F(!0),A("Bust... better luck next time."))},_=function(n){var e=[];return n.forEach((function(n){"A"===n.rank?e.push(n):n.rank&&e.unshift(n)})),e.reduce((function(n,e){return"J"===e.rank||"Q"===e.rank||"K"===e.rank?n+10:"A"===e.rank?n+11<=21?n+11:n+1:n+e.rank}),0)};return Object(g.useEffect)((function(){w?(!function(){for(var n=0;n<W.length;n++)for(var e=0;e<Y.length;e++)H.push({rank:Y[e],suit:W[n]});for(var t=0;t<52;t++){var c=H[t],a=Math.floor(52*Math.random());H[t]=H[a],H[a]=c}}(),function(n){for(var e=0;e<n;e++){Z=H,V.cards.push({rank:Z[e].rank,suit:Z[e].suit});var t=Z.slice(1);X.cards.push({rank:t[e].rank,suit:t[e].suit}),H=t.slice(1),console.log(H),b(H)}c({cards:V.cards,count:_(V.cards)}),o({cards:X.cards,count:_(X.cards)})}(2),b(H),y(!1)):w||!h||m?m&&!R?(i.count<18?(K=l[1],console.log("temp "+K),X.cards.push({rank:K.rank,suit:K.suit}),H=l.slice(1),E(!0),o((function(n){return{cards:[].concat(Object(L.a)(n.cards),[X.cards[0]]),count:_([].concat(Object(L.a)(n.cards),[X.cards[0]]))}}))):E(!0),b(H),$()):$():(K=l[1],console.log("temp "+K),V.cards.push({rank:K.rank,suit:K.suit}),H=l.slice(1),b(H),c((function(n){return{cards:[].concat(Object(L.a)(n.cards),[V.cards[0]]),count:_([].concat(Object(L.a)(n.cards),[V.cards[0]]))}})),$(),b(H),p(!1))}),[H,w,h,X,V]),{player:t,dealer:i,purse:B,gameComplete:T,message:D,setIsAddingCards:p,setIsStaying:f,startNewGame:function(){c(q),o(U),b({}),p(!1),f(!1),y(!0),z(200),A(""),F(!1),E(!1)}}},X=function(){var n=V(),e=n.player,t=n.dealer,c=(n.purse,n.gameComplete),a=n.message,r=n.setIsAddingCards,i=n.setIsStaying,o=n.startNewGame;return console.log("Player: "+e.count),console.log("Dealer: "+t.count),Object(B.jsxs)(G,{children:[Object(B.jsxs)(N,{children:[Object(B.jsxs)("div",{children:[Object(B.jsx)(M,{header:"Dealer's Cards",children:t.cards.map((function(n,e){return Object(B.jsx)(J,{rank:n.rank,suit:n.suit},e)}))}),Object(B.jsx)(M,{header:"Your Cards",children:e.cards.map((function(n,e){return Object(B.jsx)(J,{rank:n.rank,suit:n.suit},e)}))})]}),c?Object(B.jsxs)("div",{className:"messageDiv",children:[Object(B.jsx)("h1",{children:a}),Object(B.jsxs)("p",{children:["Player Count:",Object(B.jsx)("span",{children:e.count})]}),Object(B.jsxs)("p",{children:["Dealer Count: ",Object(B.jsx)("span",{children:t.count})]})]}):Object(B.jsx)("span",{})]}),c?Object(B.jsx)("div",{children:Object(B.jsx)(K,{text:"New Game",callback:function(){return o()}})}):Object(B.jsx)(Y,{count:e.count,callbackOne:function(){return r(!0)},callbackTwo:function(){return i(!0)}})]})},Z=function(){return Object(B.jsx)("div",{})},$=function(){return Object(B.jsx)("div",{children:"Opps.... This page is not found!"})},_=Object(y.a)(x||(x=Object(w.a)(["\n    :root{\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }       \n    *{\n        box-sizing: border-box;\n        font-family: 'Abel', sans-serif;\n    }\n    body{\n        margin: 0;\n        padding: 0;\n        \n        h1{\n            font-size: 2rem;\n            font-weight: 600;\n            color: var(--white)\n        }\n        h3{\n            font-size: 1.1rem;\n            font-weight: 600;\n\n        }\n        p{\n            font-size: 1rem;\n            color: var(--white)\n        }\n\n    }\n    \n"]))),nn=function(){return Object(B.jsxs)(k.a,{children:[Object(B.jsx)(z,{}),Object(B.jsxs)(v.c,{children:[Object(B.jsx)(v.a,{path:"/",element:Object(B.jsx)(Z,{})}),Object(B.jsx)(v.a,{path:"/game",element:Object(B.jsx)(X,{})}),Object(B.jsx)(v.a,{path:"/*",element:Object(B.jsx)($,{})})]}),Object(B.jsx)(_,{})]})},en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),c(n),a(n),r(n),i(n)}))};f.a.render(Object(B.jsx)(O.a.StrictMode,{children:Object(B.jsx)(nn,{})}),document.getElementById("root")),en()}},[[29,1,2]]]);
//# sourceMappingURL=main.68cf510b.chunk.js.map