(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,d,u,l,b,j,h,p=t(1),x=t.n(p),g=t(12),O=t.n(g),m=t(2),k=t(3),f=k.b.div(a||(a=Object(m.a)(["\n\n    background-color: black;\n    height: 100%;\n    overflow: hidden;\n    .messageDiv{\n        text-align: center;\n        margin-top: 100px;\n        overflow: hidden;\n    }\n    \n    \n    \n"]))),v=k.b.div(r||(r=Object(m.a)([" \n    display: block;\n    background-color: rgb(0, 125, 0);\n    border: solid 10px brown;\n    padding-bottom: 5px;\n    border-radius: 25%;\n    max-width: var(--maxwidth);\n    min-height: 500px;\n    @media screen and (max-width: 768px){\n        padding-bottom: 60px;\n    }\n   \n     \n"]))),w=t.p+"static/media/cardBackground.3d9067ea.jpg",y=k.b.div(c||(c=Object(m.a)([" \n    color: var(--darkGrey);\n    background: var(--white);\n    border-radius: 15px;\n    height: 200px;\n    width: 150px;\n\n    .background{\n        background-image: url(",");\n        background-position: center;\n        background-size:cover;\n    }\n   \n   .card-red{\n       color: red;\n   }\n   @media screen and (max-width: 760px){\n        height: 150px;\n        width: 90px;\n   }\n"])),w),S=k.b.div(i||(i=Object(m.a)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    position: relative;\n    font-size: 30px;\n\n    .topRank{\n        position: absolute;\n        text-align: left;\n        top:5px;\n        left: 5px;\n\n   }\n   .bottomRank{\n       position: absolute;\n       bottom: 5px;\n       right: 5px;\n       text-align: right;\n       \n   }\n   .suit{\n        position: absolute;\n        top: 35%;\n        width: 100%;\n        text-align: center;\n   }\n    \n"]))),C=t(0),B=function(n){var e=n.suit,t=n.rank,a="\u2666"===e||"\u2665"===e?"card-red":"card";return Object(C.jsx)(y,{children:Object(C.jsxs)(S,{className:e?"".concat(a):"background",children:[Object(C.jsx)("div",{className:"topRank",children:Object(C.jsx)("span",{children:t})}),Object(C.jsx)("div",{className:"suit",children:Object(C.jsx)("span",{children:e})}),Object(C.jsx)("div",{className:"bottomRank",children:Object(C.jsx)("span",{children:t})})]})})},N=k.b.div(o||(o=Object(m.a)(["\n    max-width: 1000px;\n    margin: 0 auto;\n    padding: 10px 30px;\n    text-align: center;\n\n    @media screen and (max-width: 760px){\n        padding: 0 20px;\n    }\n   \n"]))),G=k.b.div(s||(s=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(150px, 200px));\n    grid-gap: 1rem;\n    \n    @media screen and (max-width: 760px){\n        grid-template-columns: repeat(auto-fill, minmax(75px, 100px));\n        grid-gap: 1rem;\n    }\n    \n    \n"]))),z=function(n){var e=n.header,t=n.children;return Object(C.jsxs)(N,{children:[Object(C.jsx)("h3",{children:e}),Object(C.jsx)(G,{children:t})]})},D=k.b.div(d||(d=Object(m.a)([" \n    background: var(--medGrey);\n    text-align: center;\n\n\n"]))),A=k.b.div(u||(u=Object(m.a)(["\n    display: inline-block;\n    margin: 0 auto;\n    width: 100%;\n    .content.children{\n        width: 2fr;\n    }\n\n"]))),I=k.b.button(l||(l=Object(m.a)(["\n    display: inline-block;\n    min-width: 100px;\n    background: var(--darkGrey);\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 10px;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n   \n"]))),J=k.b.div(b||(b=Object(m.a)([" \n    display: inline-block;\n    min-width: 100px;\n    height: 60px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px 20px;\n"]))),F=function(n){n.money;var e=n.count,t=n.callbackOne,a=n.callbackTwo;return Object(C.jsx)(D,{children:Object(C.jsxs)(A,{children:[Object(C.jsx)(I,{className:"hit",type:"button",onClick:t,children:"Hit"}),Object(C.jsx)(I,{className:"stay",type:"button",onClick:a,children:"Stay"}),Object(C.jsxs)(J,{children:["Count:",Object(C.jsx)("span",{children:" "+e})]})]})})},M=k.b.button(j||(j=Object(m.a)(["\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width: 200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover{\n        opacity: 0.8\n    }\n\n"]))),P=function(n){var e=n.text,t=n.callback;return Object(C.jsx)(M,{type:"button",onClick:t,children:e})},R=t(6),T=t(4),E={cards:[],count:0},Y={cards:[],count:0},K=function(){var n=Object(p.useState)(E),e=Object(T.a)(n,2),t=e[0],a=e[1],r=Object(p.useState)(Y),c=Object(T.a)(r,2),i=c[0],o=c[1],s=Object(p.useState)({}),d=Object(T.a)(s,2),u=d[0],l=d[1],b=Object(p.useState)(!1),j=Object(T.a)(b,2),h=j[0],x=j[1],g=Object(p.useState)(!1),O=Object(T.a)(g,2),m=O[0],k=O[1],f=Object(p.useState)(!0),v=Object(T.a)(f,2),w=v[0],y=v[1],S=Object(p.useState)(200),C=Object(T.a)(S,2),B=C[0],N=C[1],G=Object(p.useState)(""),z=Object(T.a)(G,2),D=z[0],A=z[1],I=Object(p.useState)(!1),J=Object(T.a)(I,2),F=J[0],M=J[1],P=Object(p.useState)(!1),K=Object(T.a)(P,2),L=K[0],Q=K[1],W=["\u2666","\u2663","\u2665","\u2660"],H=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"],q=[],U=[],V={cards:[],count:0},X={cards:[],count:0},Z=[],$=function(){m&&L?21===t.count&&i.count<21?(M(!0),A("BlackJack!! You Won!")):t.count>i.count&&t.count<=21?(M(!0),A("You beat the Dealer!")):i.count>21?(M(!0),A("Dealer Bust! Nice Stay!")):t.count<=i.count&&(M(!0),A("Dealer won..")):t.count>21&&(M(!0),A("Bust... better luck next time."))},_=function(n){var e=[];return n.forEach((function(n){"A"===n.rank?e.push(n):n.rank&&e.unshift(n)})),e.reduce((function(n,e){return"J"===e.rank||"Q"===e.rank||"K"===e.rank?n+10:"A"===e.rank?n+11<=21?n+11:n+1:n+e.rank}),0)};return Object(p.useEffect)((function(){w?(!function(){for(var n=0;n<W.length;n++)for(var e=0;e<H.length;e++)q.push({rank:H[e],suit:W[n]});for(var t=0;t<52;t++){var a=q[t],r=Math.floor(52*Math.random());q[t]=q[r],q[r]=a}}(),function(n){for(var e=0;e<n;e++){Z=q,V.cards.push({rank:Z[e].rank,suit:Z[e].suit});var t=Z.slice(1);X.cards.push({rank:t[e].rank,suit:t[e].suit}),q=t.slice(1),console.log(q),l(q)}a({cards:V.cards,count:_(V.cards)}),o({cards:X.cards,count:_(X.cards)})}(2),l(q),y(!1)):w||!h||m?m&&!L?(i.count<18?(U=u[1],console.log("temp "+U),X.cards.push({rank:U.rank,suit:U.suit}),q=u.slice(1),Q(!0),o((function(n){return{cards:[].concat(Object(R.a)(n.cards),[X.cards[0]]),count:_([].concat(Object(R.a)(n.cards),[X.cards[0]]))}}))):Q(!0),l(q),$()):$():(U=u[1],console.log("temp "+U),V.cards.push({rank:U.rank,suit:U.suit}),q=u.slice(1),l(q),a((function(n){return{cards:[].concat(Object(R.a)(n.cards),[V.cards[0]]),count:_([].concat(Object(R.a)(n.cards),[V.cards[0]]))}})),$(),l(q),x(!1))}),[q,w,h,X,V]),{player:t,dealer:i,purse:B,gameComplete:F,message:D,setIsAddingCards:x,setIsStaying:k,startNewGame:function(){a(E),o(Y),l({}),x(!1),k(!1),y(!0),N(200),A(""),M(!1),Q(!1)}}},L=function(){var n=K(),e=n.player,t=n.dealer,a=(n.purse,n.gameComplete),r=n.message,c=n.setIsAddingCards,i=n.setIsStaying,o=n.startNewGame;return console.log("Player: "+e.count),console.log("Dealer: "+t.count),Object(C.jsxs)(f,{children:[Object(C.jsxs)(v,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(z,{header:"Dealer's Cards",children:t.cards.map((function(n,e){return Object(C.jsx)(B,{rank:n.rank,suit:n.suit},e)}))}),Object(C.jsx)(z,{header:"Your Cards",children:e.cards.map((function(n,e){return Object(C.jsx)(B,{rank:n.rank,suit:n.suit},e)}))})]}),a?Object(C.jsxs)("div",{className:"messageDiv",children:[Object(C.jsx)("h1",{children:r}),Object(C.jsxs)("p",{children:["Player Count:",Object(C.jsx)("span",{children:e.count})]}),Object(C.jsxs)("p",{children:["Dealer Count: ",Object(C.jsx)("span",{children:t.count})]})]}):Object(C.jsx)("span",{})]}),a?Object(C.jsx)("div",{children:Object(C.jsx)(P,{text:"New Game",callback:function(){return o()}})}):Object(C.jsx)(F,{count:e.count,callbackOne:function(){return c(!0)},callbackTwo:function(){return i(!0)}})]})},Q=Object(k.a)(h||(h=Object(m.a)(["\n    :root{\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }       \n    *{\n        box-sizing: border-box;\n        font-family: 'Abel', sans-serif;\n    }\n    body{\n        margin: 0;\n        padding: 0;\n        \n        h1{\n            font-size: 2rem;\n            font-weight: 600;\n            color: var(--white)\n        }\n        h3{\n            font-size: 1.1rem;\n            font-weight: 600;\n\n        }\n        p{\n            font-size: 1rem;\n            color: var(--white)\n        }\n\n    }\n    \n"])));var W=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(L,{}),Object(C.jsx)(Q,{})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};O.a.render(Object(C.jsx)(x.a.StrictMode,{children:Object(C.jsx)(W,{})}),document.getElementById("root")),H()}},[[23,1,2]]]);
//# sourceMappingURL=main.4dfd61c0.chunk.js.map