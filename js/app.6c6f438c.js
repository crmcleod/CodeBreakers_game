(function(e){function t(t){for(var r,i,c=t[0],o=t[1],d=t[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,d||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/CodeBreakers_game/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=o;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"009b":function(e,t,s){},"034f":function(e,t,s){"use strict";var r=s("85ec"),n=s.n(r);n.a},"0ab0":function(e,t,s){"use strict";var r=s("c432"),n=s.n(r);n.a},"0ebb":function(e,t,s){},1:function(e,t){},3607:function(e,t,s){"use strict";var r=s("009b"),n=s.n(r);n.a},"421b":function(e,t,s){},"4cbc":function(e,t,s){"use strict";var r=s("421b"),n=s.n(r);n.a},"507d":function(e,t,s){"use strict";var r=s("f152"),n=s.n(r);n.a},"56d7":function(e,t,s){"use strict";s.r(t),s.d(t,"eventBus",(function(){return oe})),s.d(t,"socketIo",(function(){return de}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("button",{attrs:{id:"toggle-game-button"},on:{click:e.toggleGameState}},[e._v(e._s(e.gameStateText))]),s("menu-button",{attrs:{id:"menu",teamAssigned1:e.teamAssigned1,teamAssigned2:e.teamAssigned2,gameOn:e.gameOn,blueWins:e.blueWins,redWins:e.redWins,round:e.round,redScore:e.redScore,blueScore:e.blueScore,assassinClicked:e.assassinClicked}}),s("score-bar",{attrs:{id:"score-bar",redScore:e.redScore,blueScore:e.blueScore,gameOn:e.gameOn}}),s("grid",{staticClass:"grid",class:{blueTurn:"Blue"===e.turn},attrs:{cards:e.cards,gameOn:e.gameOn}}),s("result-display",{attrs:{team:e.team,wonGame:e.wonGame}}),s("user",{attrs:{id:"user-bar",cards:e.cards,gameOn:e.gameOn}})],1)},a=[],i=(s("c975"),s("d81d"),s("d3b7"),s("3ca3"),s("ddb0"),s("5530")),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.gameOn?s("div",{attrs:{id:"cardsGrid"}},e._l(e.cards,(function(e,t){return s("card",{key:t,attrs:{id:"looped-card",card:e}})})),1):e._e()},o=[],d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card",class:{cardSelected:e.card.isClicked},on:{click:e.clickCard}},[s("div",{class:[!e.card.isHidden||e.card.isClicked?e.card.colour:e.card]},[s("p",[e._v(e._s(e.card.word))])])])},u=[],l={name:"card",props:["card"],methods:{clickCard:function(){oe.$emit("card-selected",this.card)},showCards:function(){this.card.isHidden=!this.card.isHidden},gameStateText:function(){return this.gameOn?"End turn":"Start game"}}},m=l,h=(s("0ab0"),s("2877")),f=Object(h["a"])(m,d,u,!1,null,null,null),p=f.exports,g={name:"grid",props:["cards","gameOn"],components:{card:p}},b=g,v=(s("9f4b"),Object(h["a"])(b,c,o,!1,null,null,null)),S=v.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"score-bar"}},[e.gameOn?s("score-card",{attrs:{redScore:e.redScore,blueScore:e.blueScore}}):e._e()],1)},_=[],w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"score-wrapper"}},[s("div",{attrs:{id:"redwrapper"}},[e.redScore>1?s("div",{staticClass:"redcards"}):e._e(),e.redScore>2?s("div",{staticClass:"redcards"}):e._e(),e.redScore>3?s("div",{staticClass:"redcards"}):e._e(),e.redScore>4?s("div",{staticClass:"redcards"}):e._e(),e.redScore>5?s("div",{staticClass:"redcards"}):e._e(),e.redScore>6?s("div",{staticClass:"redcards"}):e._e(),e.redScore>7?s("div",{staticClass:"redcards"}):e._e(),e.redScore>8?s("div",{staticClass:"redcards"}):e._e(),s("div",{staticClass:"redcards",attrs:{id:"redScoreCard"}},[e._v(e._s(e.redScore))])]),s("div",{attrs:{id:"bluewrapper"}},[e.blueScore>1?s("div",{staticClass:"bluecards"}):e._e(),e.blueScore>2?s("div",{staticClass:"bluecards"}):e._e(),e.blueScore>3?s("div",{staticClass:"bluecards"}):e._e(),e.blueScore>4?s("div",{staticClass:"bluecards"}):e._e(),e.blueScore>5?s("div",{staticClass:"bluecards"}):e._e(),e.blueScore>6?s("div",{staticClass:"bluecards"}):e._e(),e.blueScore>7?s("div",{staticClass:"bluecards"}):e._e(),s("div",{staticClass:"bluecards",attrs:{id:"blueScoreCard"}},[e._v(e._s(e.blueScore))])])])},O=[],k={name:"scoreCard",props:["scoreCard","blueScore","redScore"],components:{"score-bar":$},methods:{toggleGameState:function(){this.$parent.toggleGameState()}}},G=k,y=(s("6e59"),Object(h["a"])(G,w,O,!1,null,"7d432386",null)),A=y.exports,j={name:"scoreBar",props:["redScore","blueScore","gameOn"],components:{"score-card":A}},W=j,x=(s("4cbc"),Object(h["a"])(W,C,_,!1,null,null,null)),$=x.exports,T="https://codebreakers-server.herokuapp.com",R=T+"/api/",P="preplaycards",N="words",E="gamestatus",M={getCards:function(){return fetch(R+P).then((function(e){return e.json()}))},getWords:function(){return fetch(R+N).then((function(e){return e.json()}))},getGameStatus:function(){return fetch(R+E).then((function(e){return e.json()}))},updateGameStatus:function(e){var t=e._id;return fetch(R+E+"/"+t,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.gameOn?s("div",{attrs:{id:"spy-guess-button-wrapper"}},[s("button",{attrs:{id:"spy-guess-button"},on:{mousedown:e.displayColours,mouseup:e.hideColours}},[e._v("Codebreaker")])]):e._e()},H=[],F={name:"user",props:["cards","gameOn"],methods:{displayColours:function(){this.cards.map((function(e){return e.isHidden=!1}));oe.$emit("display-to-app",this.cards)},hideColours:function(){this.cards.map((function(e){return e.isHidden=!0}));oe.$emit("hide-to-app",this.cards)}}},I=F,J=(s("3607"),Object(h["a"])(I,B,H,!1,null,null,null)),U=J.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{attrs:{role:"navigation"}},[s("div",{attrs:{id:"menuToggle"}},[s("input",{attrs:{type:"checkbox"}}),s("span"),s("span"),s("span"),s("ul",{attrs:{id:"menu"}},[e.gameOn||e.teamAssigned1?e._e():s("li",{on:{click:e.teamAssigner}},[e._v("Team Assigner")]),s("li",{on:{click:e.startGame}},[e._v("Start New Game")]),e.gameOn?s("li",{on:{click:e.endGame}},[e._v("End Current Game")]):e._e(),e.gameOn||e.assassinClicked?e._e():s("li",{on:{click:e.resumeGame}},[e._v("Resume Game")]),e._m(0),s("li",{staticClass:"round"},[e._v("ROUND "+e._s(e.round))]),s("li",{staticClass:"red-wins"},[e._v(e._s(e.teamAssigned1)+" RED "+e._s(e.redWins))]),s("li",{staticClass:"blue-wins"},[e._v(e._s(e.teamAssigned2)+" BLUE "+e._s(e.blueWins))])])])])},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"https://drive.google.com/file/d/1zjeiIJAANL_MXi7rqyp3CIOMCvqUtO-v/view?usp=sharing",target:"_blank"}},[s("li",[e._v("Show Rules")])])}],D={name:"menu-button",props:["gameOn","redWins","blueWins","round","redScore","blueScore","assassinClicked","teamAssigned1","teamAssigned2"],methods:{teamAssigner:function(){this.$parent.teamAssigner()},startGame:function(){this.$parent.startGame()},endGame:function(){this.$parent.endGame()},resumeGame:function(){this.$parent.resumeGame()}}},L=D,z=(s("507d"),Object(h["a"])(L,V,q,!1,null,"c410cf06",null)),X=z.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return 0!=e.team.length?r("div",{staticClass:"modal",class:e.team},[e.wonGame?e._e():r("img",{attrs:{src:s("ee26")}}),e.wonGame?r("h1",[e._v("Congratulations! Good job "+e._s(e.team)+" team!")]):e.wonGame?e._e():r("h1",[e._v("Oh no! Better luck next time "+e._s(e.team)+" team!")]),r("button",{attrs:{id:"new-game"},on:{click:e.gameCompleted}},[e._v("New Game")])]):e._e()},Q=[],Y={name:"display-result",props:["team","wonGame"],methods:{gameCompleted:function(){this.$parent.endGame()}}},Z=Y,ee=(s("d7c3"),Object(h["a"])(Z,K,Q,!1,null,null,null)),te=ee.exports,se={name:"App",components:{grid:S,"score-bar":$,user:U,"score-card":A,"menu-button":X,"result-display":te},data:function(){return{gameOn:!1,cards:[],words:[],turn:"Red",redScore:9,blueScore:8,round:0,team:"",wonGame:!1,wonRound:!1,gameStatus:{},assassinClicked:!1,redWins:0,blueWins:0,teamAssigned1:"",teamAssigned2:""}},mounted:function(){var e=this;this.fetchCards(),this.fetchGameStatus(),de.on("connect",(function(){console.log("connected")})),de.on("disconnect",(function(){console.log("disconnected")})),de.on("test",(function(e){de.emit("game-status",this.gameStatus)})),de.on("updated-game",(function(e){oe.$emit("change",e)})),oe.$on("change",(function(t){e.redScore=t.redScore,e.blueScore=t.blueScore,e.turn=t.turn,e.cards=t.cards,e.gameOn=t.gameOn,e.team=t.team,e.wonGame=t.wonGame,e.assassinClicked=t.assassinClicked,e.redWins=t.redWins,e.blueWins=t.blueWins,e.round=t.round})),oe.$on("display-to-app",(function(t){e.cards=t})),oe.$on("hide-to-app",(function(t){e.cards=t})),oe.$on("card-selected",(function(t){return e.clickCard(t)}))},computed:{gameStateText:function(){return this.gameOn?"End turn":"Start game"}},methods:{teamAssigner:function(){var e=Math.random()<.5;!0===e?(this.teamAssigned1="Team 1 - ",this.teamAssigned2="Team 2 - "):!1===e&&(this.teamAssigned1="Team 2 - ",this.teamAssigned2="Team 1 - ")},clickCardHelper:function(){this.addVictoryAllCards(this.team),this.saveNewMove(),this.saveNewGameStatus(),this.wonRound=!0},clickCard:function(e){this.addPointsToRightTeam(e),"Black"===e.colour?(this.clickCardHelper(),this.team=this.turn,this.assassinClicked=!0,this.wonGame=!1):0===this.redScore||0===this.blueScore?(this.clickCardHelper(),this.team=e.colour,this.wonGame=!0):(this.checkIfWrongColour(e),this.saveNewMove());var t=this.cards.indexOf(e);this.cards[t].isClicked=!0,this.saveNewGameStatus(),this.updateForAllPlayers()},updateForAllPlayers:function(){de.emit("game-status",{gameOn:this.gameOn,cards:this.cards,redScore:this.redScore,blueScore:this.blueScore,turn:this.turn,team:this.team,wonGame:this.wonGame,redWins:this.redWins,blueWins:this.blueWins,round:this.round,assassinClicked:this.assassinClicked})},endGame:function(){this.turn="Red",this.team="",this.wonGame=!1,this.wonRound=!1,this.gameOn=!1,this.saveNewMove(),this.saveNewGameStatus(),this.updateForAllPlayers()},checkIfWrongColour:function(e){e.colour===this.turn||e.isClicked||this.nextTurn()},addPointsToRightTeam:function(e){return"Blue"!==e.colour||e.isClicked?"Red"!==e.colour||e.isClicked?void 0:(this.redScore-=1,this.redScore):(this.blueScore-=1,this.blueScore)},addVictoryAllCards:function(e){this.wonRound&&"Blue"===this.team?this.blueWins=this.blueWins+1:this.wonRound&&"Red"===this.team&&(this.redWins=this.redWins+1)},addVictoryAssassin:function(e){this.assassinClicked&&"Red"===e?this.blueWins=this.blueWins+1:this.assassinClicked&&"Blue"===e&&(this.redWins=this.redWins+1)},nextTurn:function(){"Red"===this.turn?(this.turn="Blue",this.updateForAllPlayers()):(this.turn="Red",this.updateForAllPlayers()),this.saveNewMove()},shuffle:function(e){var t=e.sort((function(){return.5-Math.random()}));return t},fetchCards:function(){var e=this,t=M.getWords(),s=M.getCards(),r=[t,s];Promise.all(r).then((function(t){e.words=e.shuffle(t[0]),e.cards=e.shuffle(e.createCard(t[1]))}))},resumeGame:function(){this.gameOn=!0,this.cards=this.gameStatus.cards,this.turn=this.gameStatus.turn,this.redScore=this.gameStatus.redScore,this.blueScore=this.gameStatus.blueScore,this.updateForAllPlayers()},createCard:function(e){var t=this;return this.shuffle(this.words),e.map((function(e,s){return Object(i["a"])(Object(i["a"])({},e),{},{word:t.words[s].word,isClicked:!1,isHidden:!0})}))},toggleGameState:function(){return this.gameOn?this.nextTurn():this.startGame()},startGame:function(){this.cards=this.shuffle(this.createCard(this.cards)),this.saveNewGameStatus(),this.gameOn=!0,this.turn="Red",this.round=this.round+1,this.redScore=9,this.blueScore=8,this.assassinClicked=!1,this.updateForAllPlayers()},fetchGameStatus:function(){var e=this;M.getGameStatus().then((function(t){e.gameStatus=t[0]}))},saveNewGameStatus:function(){var e=Object(i["a"])(Object(i["a"])({},this.gameStatus),{},{gameOn:this.gameOn,cards:this.cards,round:this.round,redScore:this.redScore,blueScore:this.blueScore,assassinClicked:this.assassinClicked,turn:this.turn});M.updateGameStatus(e),this.gameStatus=e},saveNewMove:function(){var e=Object(i["a"])(Object(i["a"])({},this.gameStatus),{},{cards:this.cards,turn:this.turn,redScore:this.redScore,blueScore:this.blueScore,team:this.team,wonGame:this.wonGame,assassinClicked:this.assassinClicked});M.updateGameStatus(e)}}},re=se,ne=(s("034f"),Object(h["a"])(re,n,a,!1,null,null,null)),ae=ne.exports,ie=s("8055"),ce=s.n(ie);r["a"].config.productionTip=!1;var oe=new r["a"],de=ce()(T);new r["a"]({render:function(e){return e(ae)}}).$mount("#app")},"5fe0":function(e,t,s){},"6e59":function(e,t,s){"use strict";var r=s("5fe0"),n=s.n(r);n.a},"85ec":function(e,t,s){},"9f4b":function(e,t,s){"use strict";var r=s("c48a"),n=s.n(r);n.a},c432:function(e,t,s){},c48a:function(e,t,s){},d7c3:function(e,t,s){"use strict";var r=s("0ebb"),n=s.n(r);n.a},ee26:function(e,t,s){e.exports=s.p+"img/assassin.2db803f8.png"},f152:function(e,t,s){}});
//# sourceMappingURL=app.6c6f438c.js.map