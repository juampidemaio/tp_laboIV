import{$ as _,Aa as z,B as g,C as x,G as u,H as f,Ha as j,O as M,P as r,Q as T,U as d,W as c,Y as o,Z as i,_ as b,aa as l,ba as m,ca as s,da as V,ea as h,fa as W,p as S,v as k,w as v,wa as N,xa as y,z as E,za as F}from"./chunk-3ZODGITN.js";function D(n,e){if(n&1&&(o(0,"span"),s(1),i()),n&2){let t=e.$implicit;r(),h("",t," ")}}function G(n,e){if(n&1){let t=_();o(0,"button",9),l("click",function(){let p=u(t).$implicit,R=m();return f(R.handleLetterClick(p))}),s(1),i()}if(n&2){let t=e.$implicit,a=m();c("disabled",a.usedLetters.includes(t)||a.gameOver),r(),h(" ",t," ")}}function U(n,e){n&1&&(o(0,"p"),s(1,"\xA1Felicidades, ganaste!"),i())}function q(n,e){if(n&1&&(o(0,"p"),s(1),i()),n&2){let t=m(2);r(),h("Lo siento, perdiste. La palabra era: ",t.selectedWord,"")}}function H(n,e){if(n&1&&(o(0,"div",10),d(1,U,2,0,"p",11)(2,q,2,1,"p",11),i()),n&2){let t=m();r(),c("ngIf",t.won),r(),c("ngIf",!t.won)}}function K(n,e){if(n&1){let t=_();o(0,"button",12),l("click",function(){u(t);let p=m();return f(p.restartGame())}),s(1,"Reiniciar juego"),i()}}var A=class n{alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");words=["ANGULAR","REACT","VUE","JAVASCRIPT","TYPESCRIPT"];usedWords=new Set;selectedWord="";displayedWord=[];usedLetters=[];wrongAttempts=0;maxAttempts=6;gameOver=!1;won=!1;hangmanImages=["ahorcado0.png","ahorcado1.png","ahorcado2.png","ahorcado3.png","ahorcado4.png","ahorcado5.png","ahorcado6.png"];currentImage=this.hangmanImages[0];ngOnInit(){this.initializeGame()}initializeGame(){if(this.usedWords.size===this.words.length){alert("\xA1Has usado todas las palabras!");return}this.selectedWord=this.getRandomWord(),this.displayedWord=Array(this.selectedWord.length).fill("_"),this.usedLetters=[],this.wrongAttempts=0,this.currentImage=this.hangmanImages[0],this.gameOver=!1,this.won=!1}getRandomWord(){let e;do e=this.words[Math.floor(Math.random()*this.words.length)];while(this.usedWords.has(e));return this.usedWords.add(e),e}handleLetterClick(e){if(!(this.usedLetters.includes(e)||this.gameOver))if(this.usedLetters.push(e),this.selectedWord.includes(e)){for(let t=0;t<this.selectedWord.length;t++)this.selectedWord[t]===e&&(this.displayedWord[t]=e);this.displayedWord.includes("_")||(this.won=!0,this.gameOver=!0)}else this.wrongAttempts++,this.currentImage=this.hangmanImages[this.wrongAttempts],this.wrongAttempts>=this.maxAttempts&&(this.gameOver=!0)}restartGame(){this.initializeGame()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["app-ahorcado"]],decls:11,vars:7,consts:[[1,"hangman-game"],[1,"hangman-figure"],["alt","Ahorcado",3,"src"],[1,"word-container"],[4,"ngFor","ngForOf"],[1,"keyboard"],[3,"disabled","click",4,"ngFor","ngForOf"],["class","game-over",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click","disabled"],[1,"game-over"],[4,"ngIf"],[3,"click"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"div",1),b(2,"img",2),o(3,"p"),s(4),i()(),o(5,"div",3),d(6,D,2,1,"span",4),i(),o(7,"div",5),d(8,G,2,2,"button",6),i(),d(9,H,3,2,"div",7)(10,K,2,0,"button",8),i()),t&2&&(r(2),c("src",a.currentImage,M),r(2),W("Intentos fallidos: ",a.wrongAttempts,"/",a.maxAttempts,""),r(2),c("ngForOf",a.displayedWord),r(2),c("ngForOf",a.alphabet),r(),c("ngIf",a.gameOver),r(),c("ngIf",a.gameOver))},dependencies:[N,y],styles:[".hangman-game[_ngcontent-%COMP%]{text-align:center;font-family:Arial,sans-serif}.hangman-game[_ngcontent-%COMP%]   .hangman-figure[_ngcontent-%COMP%]{margin-bottom:20px}.hangman-game[_ngcontent-%COMP%]   .hangman-figure[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}.hangman-game[_ngcontent-%COMP%]   .word-container[_ngcontent-%COMP%]{margin-bottom:20px}.hangman-game[_ngcontent-%COMP%]   .word-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;margin:0 5px}.hangman-game[_ngcontent-%COMP%]   .keyboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,40px);gap:40px;justify-content:center;margin-top:20px}.hangman-game[_ngcontent-%COMP%]   .game-over[_ngcontent-%COMP%]{margin-top:20px;padding:10px 20px;font-size:18px;background-color:#4caf50;color:#fff;border:none;cursor:pointer}button[_ngcontent-%COMP%]{font-size:25px;text-align:center;padding:10px 30px;background-color:#09c709c7;border:1px solid #020000;cursor:pointer}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}"]})};var I=class n{http=E(z);constructor(){}getCartas(){return this.http.get("https://deckofcardsapi.com/api/deck/new/draw/?count=10").pipe(S(e=>e.cards))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};function Y(n,e){if(n&1&&b(0,"img",6),n&2){let t=m(2);c("src",t.cartaActual.image,M)}}function B(n,e){if(n&1){let t=_();o(0,"div")(1,"p"),s(2,"Carta actual:"),i(),d(3,Y,1,1,"img",4),o(4,"div",5)(5,"button",3),l("click",function(){u(t);let p=m();return f(p.adivinarMayor())}),s(6,"Mayor"),i(),o(7,"button",3),l("click",function(){u(t);let p=m();return f(p.adivinarMenor())}),s(8,"Menor"),i()()()}if(n&2){let t=m();r(3),c("ngIf",t.cartaActual)}}var O=class n{constructor(e){this.apiService=e}cartas=[];cartaActual=null;puntaje=0;juegoTerminado=!1;mensaje="";cargando=!1;ngOnInit(){this.iniciarJuego()}iniciarJuego(){this.puntaje=0,this.juegoTerminado=!1,this.mensaje="",this.cargando=!0,this.apiService.getCartas().subscribe({next:e=>{this.cartas=e,this.cartaActual=this.cartas.shift(),this.cargando=!1},error:e=>{console.error("Error al obtener las cartas:",e),this.mensaje="Error al obtener las cartas",this.cargando=!1}})}adivinarMayor(){this.cargando=!0;let e=this.cartas.shift();this.convertirValor(this.cartaActual.value)<this.convertirValor(e.value)?(this.puntaje++,this.mensaje=`Correcto, ${e.value} es mayor que ${this.cartaActual.value}`):(this.mensaje=`Incorrecto, ${e.value} no es mayor que ${this.cartaActual.value}`,this.terminarJuego()),this.actualizarJuego(e),this.cargando=!1}adivinarMenor(){this.cargando=!0;let e=this.cartas.shift();this.convertirValor(this.cartaActual.value)>this.convertirValor(e.value)?(this.puntaje++,this.mensaje=`Correcto, ${e.value} es menor que ${this.cartaActual.value}`):(this.mensaje=`Incorrecto, ${e.value} no es menor que ${this.cartaActual.value}`,this.terminarJuego()),this.actualizarJuego(e),this.cargando=!1}convertirValor(e){return e==="ACE"?1:e==="JACK"?11:e==="QUEEN"?12:e==="KING"?13:parseInt(e)}actualizarJuego(e){this.juegoTerminado||(this.cartaActual=e,this.cartas.length===0&&this.terminarJuego())}terminarJuego(){this.juegoTerminado=!0,this.mensaje+=` El juego ha terminado. Puntuaci\xF3n final: ${this.puntaje}`}static \u0275fac=function(t){return new(t||n)(T(I))};static \u0275cmp=g({type:n,selectors:[["app-mayor-menor"]],decls:11,vars:3,consts:[[1,"game-container"],[4,"ngIf"],[1,"score-board"],[3,"click"],["alt","Carta actual",3,"src",4,"ngIf"],[1,"button-container"],["alt","Carta actual",3,"src"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"h1"),s(2,"Juego de Mayor o Menor"),i(),d(3,B,9,1,"div",1),o(4,"p"),s(5),i(),o(6,"div",2)(7,"p"),s(8),i(),o(9,"button",3),l("click",function(){return a.iniciarJuego()}),s(10,"Reiniciar juego"),i()()()),t&2&&(r(3),c("ngIf",!a.juegoTerminado),r(2),V(a.mensaje),r(3),h("Puntuaci\xF3n: ",a.puntaje,""))},dependencies:[y],styles:[".game-container[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.game-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block}.game-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:center}.game-container[_ngcontent-%COMP%]   .score-board[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:0 10px;padding:15px;font-size:18px;background-color:#29af0873;color:#fff;border-radius:5px;border:none;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#245707}p[_ngcontent-%COMP%]{font-size:1.25em;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700;margin-top:40px}"]})};var w=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=g({type:n,selectors:[["app-preguntados"]],decls:2,vars:0,template:function(t,a){t&1&&(o(0,"p"),s(1,"preguntados works!"),i())}})};var X=[{path:"ahorcado",component:A},{path:"mayor-menor",component:O},{path:"preguntados",component:w}],P=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=v({imports:[j.forChild(X),j]})};var L=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=x({type:n});static \u0275inj=v({imports:[F,P]})};export{L as JuegosModule};
