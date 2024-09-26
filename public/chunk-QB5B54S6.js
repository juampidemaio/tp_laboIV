import{$ as s,D as d,E as g,Fa as F,Ga as H,L as _,M as r,N as b,R as u,T as c,V as i,W as o,X as x,Y as h,Z as m,_ as l,a as N,aa as M,b as R,ba as f,c as $,ca as q,t as D,ta as y,u as A,ua as O,w as L,wa as G,xa as B,y as v,z as S}from"./chunk-OJRWWAHY.js";var K=$(H());function Y(n,e){if(n&1&&(i(0,"span"),s(1),o()),n&2){let t=e.$implicit;r(),f("",t," ")}}function W(n,e){if(n&1){let t=h();i(0,"button",9),m("click",function(){let p=d(t).$implicit,P=l();return g(P.manejarClickLetra(p))}),s(1),o()}if(n&2){let t=e.$implicit,a=l();c("disabled",a.letrasUsadas.includes(t)||a.juegoTerminado),r(),f(" ",t," ")}}function X(n,e){n&1&&(i(0,"p"),s(1,"\xA1Felicidades, ganaste!"),o())}function Z(n,e){if(n&1&&(i(0,"p"),s(1),o()),n&2){let t=l(2);r(),f("Lo siento, perdiste. La palabra era: ",t.palabraSeleccionada,"")}}function ee(n,e){if(n&1&&(i(0,"div",10),u(1,X,2,0,"p",11)(2,Z,2,1,"p",11),o()),n&2){let t=l();r(),c("ngIf",t.ganaste),r(),c("ngIf",!t.ganaste)}}function te(n,e){if(n&1){let t=h();i(0,"button",12),m("click",function(){d(t);let p=l();return g(p.reiniciarJuego())}),s(1,"Reiniciar juego"),o()}}var I=class n{abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");palabras=["ANGULAR","REACT","VUE","JAVASCRIPT","TYPESCRIPT"];palabrasUsadas=new Set;palabraSeleccionada="";palabraMostrada=[];puntaje=0;letrasUsadas=[];intentosFallidos=0;maxIntentos=6;juegoTerminado=!1;ganaste=!1;imagenesAhorcado=["ahorcado0.png","ahorcado1.png","ahorcado2.png","ahorcado3.png","ahorcado4.png","ahorcado5.png","ahorcado6.png"];imagenActual=this.imagenesAhorcado[0];ngOnInit(){this.inicializarJuego(),this.puntaje=0}inicializarJuego(){if(this.palabrasUsadas.size===this.palabras.length){K.default.fire({icon:"success",title:"\xA1Juego Completado!",text:"usaste todas las palabras, sos muy bueno",timer:2e3,showConfirmButton:!1});return}this.palabraSeleccionada=this.obtenerPalabraAleatoria(),this.palabraMostrada=Array(this.palabraSeleccionada.length).fill("_"),this.letrasUsadas=[],this.intentosFallidos=0,this.imagenActual=this.imagenesAhorcado[0],this.juegoTerminado=!1,this.ganaste=!1}obtenerPalabraAleatoria(){let e=this.palabras[Math.floor(Math.random()*this.palabras.length)];for(;this.palabrasUsadas.has(e);)e=this.palabras[Math.floor(Math.random()*this.palabras.length)];return this.palabrasUsadas.add(e),e}manejarClickLetra(e){if(!(this.letrasUsadas.includes(e)||this.juegoTerminado))if(this.letrasUsadas.push(e),this.palabraSeleccionada.includes(e)){for(let t=0;t<this.palabraSeleccionada.length;t++)this.palabraSeleccionada[t]===e&&(this.palabraMostrada[t]=e);this.palabraMostrada.includes("_")||(this.ganaste=!0,this.puntaje++,this.juegoTerminado=!0)}else this.intentosFallidos++,this.imagenActual=this.imagenesAhorcado[this.intentosFallidos],this.intentosFallidos>=this.maxIntentos&&(this.juegoTerminado=!0)}reiniciarJuego(){this.inicializarJuego()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=v({type:n,selectors:[["app-ahorcado"]],decls:11,vars:7,consts:[[1,"juego-ahorcado"],[1,"figura-ahorcado"],["alt","Ahorcado",3,"src"],[1,"contenedor-palabra"],[4,"ngFor","ngForOf"],[1,"teclado"],[3,"disabled","click",4,"ngFor","ngForOf"],["class","juego-terminado",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click","disabled"],[1,"juego-terminado"],[4,"ngIf"],[3,"click"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1),x(2,"img",2),i(3,"p"),s(4),o()(),i(5,"div",3),u(6,Y,2,1,"span",4),o(),i(7,"div",5),u(8,W,2,2,"button",6),o(),u(9,ee,3,2,"div",7)(10,te,2,0,"button",8),o()),t&2&&(r(2),c("src",a.imagenActual,_),r(2),q("Intentos fallidos: ",a.intentosFallidos,"/",a.maxIntentos,""),r(2),c("ngForOf",a.palabraMostrada),r(2),c("ngForOf",a.abecedario),r(),c("ngIf",a.juegoTerminado),r(),c("ngIf",a.juegoTerminado))},dependencies:[y,O],styles:[".hangman-game[_ngcontent-%COMP%]{text-align:center;font-family:Arial,sans-serif}.hangman-game[_ngcontent-%COMP%]   .hangman-figure[_ngcontent-%COMP%]{margin-bottom:20px}.hangman-game[_ngcontent-%COMP%]   .hangman-figure[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}.hangman-game[_ngcontent-%COMP%]   .word-container[_ngcontent-%COMP%]{margin-bottom:20px}.hangman-game[_ngcontent-%COMP%]   .word-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;margin:0 5px}.hangman-game[_ngcontent-%COMP%]   .keyboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,40px);gap:40px;justify-content:center;margin-top:20px}.hangman-game[_ngcontent-%COMP%]   .game-over[_ngcontent-%COMP%]{margin-top:20px;padding:10px 20px;font-size:18px;background-color:#4caf50;color:#fff;border:none;cursor:pointer}button[_ngcontent-%COMP%]{font-size:25px;text-align:center;padding:10px 30px;background-color:#09c709c7;border:1px solid #020000;cursor:pointer}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}"]})};var C=class n{constructor(e){this.http=e}apiUrl="https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple";deckApiUrl="https://deckofcardsapi.com/api/deck/new/draw/?count=52";obtenerPreguntas(){return this.http.get(this.apiUrl)}obtenerCartas(){return this.http.get(this.deckApiUrl)}static \u0275fac=function(t){return new(t||n)(L(B))};static \u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})};function ne(n,e){if(n&1&&x(0,"img",6),n&2){let t=l(2);c("src",t.cartaActual.image,_)}}function ae(n,e){if(n&1){let t=h();i(0,"div")(1,"p"),s(2,"Carta actual:"),o(),u(3,ne,1,1,"img",4),i(4,"div",5)(5,"button",3),m("click",function(){d(t);let p=l();return g(p.adivinarMayor())}),s(6,"Mayor"),o(),i(7,"button",3),m("click",function(){d(t);let p=l();return g(p.adivinarMenor())}),s(8,"Menor"),o()()()}if(n&2){let t=l();r(3),c("ngIf",t.cartaActual)}}var T=class n{constructor(e){this.apiService=e}cartas=[];cartaActual=null;puntaje=0;juegoTerminado=!1;mensaje="";cargando=!1;ngOnInit(){this.iniciarJuego()}iniciarJuego(){this.puntaje=0,this.juegoTerminado=!1,this.mensaje="",this.cargando=!0,this.obtenerCartas()}obtenerCartas(){this.apiService.obtenerCartas().subscribe(e=>{this.cartas=e.cards,this.cartaActual=this.cartas.shift(),this.cargando=!1},e=>{console.error("Error al obtener las cartas:",e),this.mensaje="Error al obtener las cartas",this.cargando=!1})}adivinarMayor(){this.cargando=!0;let e=this.cartas.shift();this.convertirValor(this.cartaActual.value)<this.convertirValor(e.value)?(this.puntaje++,this.mensaje=`Correcto, ${e.value} es mayor que ${this.cartaActual.value}`):this.convertirValor(this.cartaActual.value)===this.convertirValor(e.value)?this.mensaje=`EMPATE, ${e.value} tiene el mismo valor que ${this.cartaActual.value}`:(this.mensaje=`Incorrecto, ${e.value} no es mayor que ${this.cartaActual.value}`,this.terminarJuego()),this.actualizarJuego(e),this.cargando=!1}adivinarMenor(){this.cargando=!0;let e=this.cartas.shift();this.convertirValor(this.cartaActual.value)>this.convertirValor(e.value)?(this.puntaje++,this.mensaje=`Correcto, ${e.value} es menor que ${this.cartaActual.value}`):this.convertirValor(this.cartaActual.value)===this.convertirValor(e.value)?this.mensaje=`EMPATE, ${e.value} tiene el mismo valor que ${this.cartaActual.value}`:(this.mensaje=`Incorrecto, ${e.value} no es menor que ${this.cartaActual.value}`,this.terminarJuego()),this.actualizarJuego(e),this.cargando=!1}convertirValor(e){return e==="ACE"?1:e==="JACK"?11:e==="QUEEN"?12:e==="KING"?13:parseInt(e,10)}actualizarJuego(e){this.juegoTerminado||(this.cartaActual=e,this.cartas.length===0&&this.terminarJuego())}terminarJuego(){this.juegoTerminado=!0,this.mensaje+=` El juego ha terminado. Puntuaci\xF3n final: ${this.puntaje}`}static \u0275fac=function(t){return new(t||n)(b(C))};static \u0275cmp=v({type:n,selectors:[["app-mayor-menor"]],decls:11,vars:3,consts:[[1,"game-container"],[4,"ngIf"],[1,"score-board"],[3,"click"],["alt","Carta actual",3,"src",4,"ngIf"],[1,"button-container"],["alt","Carta actual",3,"src"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"h1"),s(2,"Juego de Mayor o Menor"),o(),u(3,ae,9,1,"div",1),i(4,"p"),s(5),o(),i(6,"div",2)(7,"p"),s(8),o(),i(9,"button",3),m("click",function(){return a.iniciarJuego()}),s(10,"Reiniciar juego"),o()()()),t&2&&(r(3),c("ngIf",!a.juegoTerminado),r(2),M(a.mensaje),r(3),f("Puntuaci\xF3n: ",a.puntaje,""))},dependencies:[O],styles:[".game-container[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.game-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block}.game-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:center}.game-container[_ngcontent-%COMP%]   .score-board[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:0 10px;padding:15px;font-size:18px;background-color:#29af0873;color:#fff;border-radius:5px;border:none;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#245707}p[_ngcontent-%COMP%]{font-size:1.25em;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700;margin-top:40px}"]})};var w=$(H());function ie(n,e){if(n&1){let t=h();i(0,"button",3),m("click",function(){let p=d(t).$implicit,P=l();return g(P.seleccionarRespuesta(p))}),s(1),o()}if(n&2){let t=e.$implicit;r(),f(" ",t," ")}}var k=class n{constructor(e){this.preguntasService=e}preguntas=[];preguntaActual;opciones=[];respuestaSeleccionada=null;puntaje=0;ngOnInit(){this.cargarPreguntas()}cargarPreguntas(){this.preguntasService.obtenerPreguntas().subscribe(e=>{this.preguntas=e.results,this.siguientePregunta()})}siguientePregunta(){this.preguntas.length>0?(this.preguntaActual=this.preguntas.shift(),this.opciones=this.preguntaActual.incorrect_answers,this.opciones.push(this.preguntaActual.correct_answer),this.opciones=this.shuffleArray(this.opciones)):this.terminarJuego()}terminarJuego(){w.default.fire({icon:"info",title:"Fin del juego",text:`Tu puntaje final es: ${this.puntaje}`,confirmButtonText:"Reiniciar"}).then(()=>{this.restartGame()})}restartGame(){this.puntaje=0,this.respuestaSeleccionada=null,this.cargarPreguntas()}seleccionarRespuesta(e){this.respuestaSeleccionada=e,e===this.preguntaActual.correct_answer?(this.puntaje++,w.default.fire({icon:"success",title:"\xA1Respuesta correcta!",timer:1500,showConfirmButton:!1})):w.default.fire({icon:"error",title:"\xA1Respuesta incorrecta!",timer:1500,showConfirmButton:!1}),this.siguientePregunta()}shuffleArray(e){return e.sort(()=>Math.random()-.5)}static \u0275fac=function(t){return new(t||n)(b(C))};static \u0275cmp=v({type:n,selectors:[["app-preguntados"]],decls:9,vars:3,consts:[[1,"preguntados-game"],[1,"opciones"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"h2"),s(2,"Pregunta"),o(),i(3,"p"),s(4),o(),i(5,"div",1),u(6,ie,2,1,"button",2),o(),i(7,"p"),s(8),o()()),t&2&&(r(4),M(a.preguntaActual==null?null:a.preguntaActual.question),r(2),c("ngForOf",a.opciones),r(2),f("Puntaje: ",a.puntaje,""))},dependencies:[y],styles:[".preguntados-game[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:#f4f4f4;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a;max-width:600px;margin:20px auto}.preguntados-game[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;font-size:24px;margin-bottom:15px}.preguntados-game[_ngcontent-%COMP%]   .pregunta-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;padding:15px;margin-bottom:20px;box-shadow:0 2px 5px #0000001a;text-align:center}.preguntados-game[_ngcontent-%COMP%]   .pregunta[_ngcontent-%COMP%]{font-size:18px;color:#555}.preguntados-game[_ngcontent-%COMP%]   .opciones[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.preguntados-game[_ngcontent-%COMP%]   .opcion-button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;border-radius:5px;padding:10px 15px;font-size:16px;cursor:pointer;transition:background-color .3s ease}.preguntados-game[_ngcontent-%COMP%]   .opcion-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.preguntados-game[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]{margin-top:20px;font-size:18px;color:#333}"]})};function oe(n,e){if(n&1){let t=h();i(0,"div",5),m("click",function(){let p=d(t).index,P=l();return g(P.seleccionarCarta(p))}),x(1,"img",6),o()}if(n&2){let t=e.$implicit;r(),c("src",t.volteada?t.image:"cartaVolteada.png",_)}}var E=class n{constructor(e){this.apiService=e}cartas=[];secuencia=[];seleccionUsuario=[];rondaActual=1;mostrandoSecuencia=!1;mensaje="";ngOnInit(){this.iniciarJuego()}iniciarJuego(){this.apiService.obtenerCartas().subscribe(e=>{this.cartas=e.cards.slice(0,20).map(t=>R(N({},t),{volteada:!1})),this.rondaActual=1,this.secuencia=[],this.empezarRonda()})}empezarRonda(){if(this.mostrandoSecuencia=!0,this.seleccionUsuario=[],this.rondaActual===1)this.secuencia.push(Math.floor(Math.random()*this.cartas.length)),this.voltearCarta(this.secuencia[0],!0);else{let e=Math.floor(Math.random()*this.cartas.length);for(;this.secuencia.includes(e);)e=Math.floor(Math.random()*this.cartas.length);this.secuencia.push(e)}this.mostrarSecuencia()}mostrarSecuencia(){let e=0,t=setInterval(()=>{e<this.secuencia.length?(this.voltearCarta(this.secuencia[e],!1),setTimeout(()=>{this.voltearCarta(this.secuencia[e],!0)},1e3),e++):(clearInterval(t),this.mostrandoSecuencia=!1)},1500)}voltearCarta(e,t){e>=0&&e<this.cartas.length&&(this.cartas[e].volteada=t)}seleccionarCarta(e){this.mostrandoSecuencia||(this.seleccionUsuario.push(e),this.seleccionUsuario.length===this.secuencia.length&&this.verificarSeleccion())}verificarSeleccion(){for(let e=0;e<this.seleccionUsuario.length;e++)if(this.seleccionUsuario[e]!==this.secuencia[e]){this.mensaje="\xA1Te has equivocado! Reiniciando el juego...",this.resetearJuego();return}this.rondaActual++,this.mensaje=`\xA1Correcto! Iniciando ronda ${this.rondaActual}`,this.empezarRonda()}resetearJuego(){this.rondaActual=1,this.secuencia=[],this.seleccionUsuario=[],this.cartas.forEach(e=>e.volteada=!1),setTimeout(()=>{this.iniciarJuego()},2e3)}static \u0275fac=function(t){return new(t||n)(b(C))};static \u0275cmp=v({type:n,selectors:[["app-juego-cartas"]],decls:8,vars:2,consts:[[1,"cartas-grid"],["class","carta",3,"click",4,"ngFor","ngForOf"],[1,"botones-juego"],[3,"click"],[1,"mensaje-juego"],[1,"carta",3,"click"],["alt","Carta",3,"src"]],template:function(t,a){t&1&&(i(0,"div",0),u(1,oe,2,1,"div",1),o(),i(2,"div",2)(3,"button",3),m("click",function(){return a.iniciarJuego()}),s(4,"Empezar el juego"),o()(),i(5,"div",4)(6,"p"),s(7),o()()),t&2&&(r(),c("ngForOf",a.cartas),r(6),M(a.mensaje))},dependencies:[y],styles:[".cartas-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.carta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:150px;cursor:pointer}.botones-juego[_ngcontent-%COMP%]{margin-top:20px}.mensaje-juego[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;color:red}"]})};var re=[{path:"ahorcado",component:I},{path:"mayor-menor",component:T},{path:"preguntados",component:k},{path:"juego-cartas",component:E}],J=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=S({type:n});static \u0275inj=A({imports:[F.forChild(re),F]})};var Q=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=S({type:n});static \u0275inj=A({imports:[G,J]})};export{Q as JuegosModule};
