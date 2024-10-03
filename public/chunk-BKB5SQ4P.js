import{$ as l,A as I,E as g,F as d,Ha as F,Ia as Y,M as v,N as o,O as M,S as p,U as c,W as a,X as i,Y as C,Z as f,_ as m,a as R,aa as s,b as $,ba as j,c as L,ca as h,da as B,e as V,o as D,u as G,ua as y,v as S,va as b,x as q,xa as Q,ya as H,z as _,za as K}from"./chunk-MLYBMOTH.js";var Z=L(Y());function X(n,e){if(n&1&&(a(0,"span"),s(1),i()),n&2){let t=e.$implicit;o(),h("",t," ")}}function ee(n,e){if(n&1){let t=f();a(0,"button",9),m("click",function(){let u=g(t).$implicit,A=l();return d(A.manejarClickLetra(u))}),s(1),i()}if(n&2){let t=e.$implicit,r=l();c("disabled",r.letrasUsadas.includes(t)||r.juegoTerminado),o(),h(" ",t," ")}}function te(n,e){n&1&&(a(0,"p"),s(1,"\xA1Felicidades, ganaste!"),i())}function ne(n,e){if(n&1&&(a(0,"p"),s(1),i()),n&2){let t=l(2);o(),h("Lo siento, perdiste. La palabra era: ",t.palabraSeleccionada,"")}}function ae(n,e){if(n&1&&(a(0,"div",10),p(1,te,2,0,"p",11)(2,ne,2,1,"p",11),i()),n&2){let t=l();o(),c("ngIf",t.ganaste),o(),c("ngIf",!t.ganaste)}}function ie(n,e){if(n&1){let t=f();a(0,"button",12),m("click",function(){g(t);let u=l();return d(u.reiniciarJuego())}),s(1,"Reiniciar juego"),i()}}var O=class n{abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");palabras=["ANGULAR","REACT","VUE","JAVASCRIPT","TYPESCRIPT"];palabrasUsadas=new Set;palabraSeleccionada="";palabraMostrada=[];puntaje=0;letrasUsadas=[];intentosFallidos=0;maxIntentos=6;juegoTerminado=!1;ganaste=!1;imagenesAhorcado=["ahorcado0.png","ahorcado1.png","ahorcado2.png","ahorcado3.png","ahorcado4.png","ahorcado5.png","ahorcado6.png"];imagenActual=this.imagenesAhorcado[0];ngOnInit(){this.inicializarJuego(),this.puntaje=0}inicializarJuego(){if(this.palabrasUsadas.size===this.palabras.length){Z.default.fire({icon:"success",title:"\xA1Juego Completado!",text:"usaste todas las palabras, sos muy bueno",timer:2e3,showConfirmButton:!1});return}this.palabraSeleccionada=this.obtenerPalabraAleatoria(),this.palabraMostrada=Array(this.palabraSeleccionada.length).fill("_"),this.letrasUsadas=[],this.intentosFallidos=0,this.imagenActual=this.imagenesAhorcado[0],this.juegoTerminado=!1,this.ganaste=!1}obtenerPalabraAleatoria(){let e=this.palabras[Math.floor(Math.random()*this.palabras.length)];for(;this.palabrasUsadas.has(e);)e=this.palabras[Math.floor(Math.random()*this.palabras.length)];return this.palabrasUsadas.add(e),e}manejarClickLetra(e){if(!(this.letrasUsadas.includes(e)||this.juegoTerminado))if(this.letrasUsadas.push(e),this.palabraSeleccionada.includes(e)){for(let t=0;t<this.palabraSeleccionada.length;t++)this.palabraSeleccionada[t]===e&&(this.palabraMostrada[t]=e);this.palabraMostrada.includes("_")||(this.ganaste=!0,this.puntaje++,this.juegoTerminado=!0)}else this.intentosFallidos++,this.imagenActual=this.imagenesAhorcado[this.intentosFallidos],this.intentosFallidos>=this.maxIntentos&&(this.juegoTerminado=!0)}reiniciarJuego(){this.inicializarJuego()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["app-ahorcado"]],decls:11,vars:7,consts:[[1,"juego-ahorcado"],[1,"figura-ahorcado"],["alt","Ahorcado",3,"src"],[1,"contenedor-palabra"],[4,"ngFor","ngForOf"],[1,"teclado"],[3,"disabled","click",4,"ngFor","ngForOf"],["class","juego-terminado",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click","disabled"],[1,"juego-terminado"],[4,"ngIf"],[3,"click"]],template:function(t,r){t&1&&(a(0,"div",0)(1,"div",1),C(2,"img",2),a(3,"p"),s(4),i()(),a(5,"div",3),p(6,X,2,1,"span",4),i(),a(7,"div",5),p(8,ee,2,2,"button",6),i(),p(9,ae,3,2,"div",7)(10,ie,2,0,"button",8),i()),t&2&&(o(2),c("src",r.imagenActual,v),o(2),B("Intentos fallidos: ",r.intentosFallidos,"/",r.maxIntentos,""),o(2),c("ngForOf",r.palabraMostrada),o(2),c("ngForOf",r.abecedario),o(),c("ngIf",r.juegoTerminado),o(),c("ngIf",r.juegoTerminado))},dependencies:[y,b],styles:[".juego-ahorcado[_ngcontent-%COMP%]{text-align:center;font-family:Arial,sans-serif}.juego-ahorcado[_ngcontent-%COMP%]   .figura-ahorcado[_ngcontent-%COMP%]{margin-bottom:20px}.juego-ahorcado[_ngcontent-%COMP%]   .figura-ahorcado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}.juego-ahorcado[_ngcontent-%COMP%]   .contenedor-palabra[_ngcontent-%COMP%]{margin-bottom:20px}.juego-ahorcado[_ngcontent-%COMP%]   .contenedor-palabra[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;margin:0 5px}.juego-ahorcado[_ngcontent-%COMP%]   .teclado[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,40px);gap:40px;justify-content:center;margin-top:20px}.juego-ahorcado[_ngcontent-%COMP%]   .juego-terminado[_ngcontent-%COMP%]{margin-top:20px;padding:10px 20px;font-size:18px;background-color:#4caf50;color:#fff;border:none;cursor:pointer}button[_ngcontent-%COMP%]{font-size:25px;text-align:center;padding:10px 30px;background-color:#09c709c7;border:1px solid #020000;cursor:pointer}button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}"]})};var x=class n{constructor(e){this.http=e}imagenesApiUrl="https://api.pexels.com/v1/search?query=";apiKey="6ojPZ1Vpb0TxNCMimdqvCdGibmFuD9J0xCiS9wNtfyVLPqtfooBcqJ34";deckApiUrl="https://deckofcardsapi.com/api/deck/new/draw/?count=52";preguntas=[{pregunta:"\xBFQu\xE9 animal es conocido como el rey de la selva?",correct_answer:"Le\xF3n",incorrect_answers:["Tigre","Elefante","Jirafa"],imagen_clave:"lion"},{pregunta:"\xBFCu\xE1l es el mam\xEDfero terrestre m\xE1s grande?",correct_answer:"Elefante",incorrect_answers:["Rinoceronte","Hipop\xF3tamo","Jirafa"],imagen_clave:"elephant"},{pregunta:"\xBFQu\xE9 animal tiene una trompa?",correct_answer:"Elefante",incorrect_answers:["Jirafa","Tigre","Le\xF3n"],imagen_clave:"elephant"},{pregunta:"\xBFQu\xE9 ave es conocida por su capacidad de imitar sonidos?",correct_answer:"Loro",incorrect_answers:["Gaviota","Ping\xFCino","Avestruz"],imagen_clave:"parrot"},{pregunta:"\xBFQu\xE9 animal es famoso por su colorido plumaje?",correct_answer:"Pavo real",incorrect_answers:["Gallo","Gaviota","P\xE1jaro carpintero"],imagen_clave:"peacock"},{pregunta:"\xBFQu\xE9 animal vive en una colmena?",correct_answer:"Abeja",incorrect_answers:["Mariposa","Escarabajo","Mosquito"],imagen_clave:"bee"},{pregunta:"\xBFCu\xE1l es el pez m\xE1s grande del oc\xE9ano?",correct_answer:"Tibur\xF3n ballena",incorrect_answers:["Tibur\xF3n tigre","Delf\xEDn","Mero"],imagen_clave:"whale_shark"},{pregunta:"\xBFQu\xE9 animal es conocido por su caparaz\xF3n duro?",correct_answer:"Tortuga",incorrect_answers:["Rana","Lagarto","Cocodrilo"],imagen_clave:"turtle"}];obtenerImagenes(e){let t=new H({Authorization:this.apiKey});return this.http.get(`${this.imagenesApiUrl}${e}`,{headers:t})}obtenerPreguntas(){return D(this.preguntas)}obtenerCartas(){return this.http.get(this.deckApiUrl)}static \u0275fac=function(t){return new(t||n)(q(K))};static \u0275prov=G({token:n,factory:n.\u0275fac,providedIn:"root"})};function oe(n,e){if(n&1&&C(0,"img",6),n&2){let t=l(2);c("src",t.cartaActual.image,v)}}function re(n,e){if(n&1){let t=f();a(0,"div")(1,"p"),s(2,"Carta actual:"),i(),p(3,oe,1,1,"img",4),a(4,"div",5)(5,"button",3),m("click",function(){g(t);let u=l();return d(u.adivinarMayor())}),s(6,"Mayor"),i(),a(7,"button",3),m("click",function(){g(t);let u=l();return d(u.adivinarMenor())}),s(8,"Menor"),i()()()}if(n&2){let t=l();o(3),c("ngIf",t.cartaActual)}}var w=class n{constructor(e){this.apiService=e}cartas=[];cartaActual=null;puntaje=0;juegoTerminado=!1;mensaje="";cargando=!1;ngOnInit(){this.iniciarJuego()}iniciarJuego(){this.puntaje=0,this.juegoTerminado=!1,this.mensaje="",this.cargando=!0,this.obtenerCartas()}obtenerCartas(){this.apiService.obtenerCartas().subscribe(e=>{this.cartas=e.cards,this.cartaActual=this.cartas.shift(),this.cargando=!1},e=>{console.error("Error al obtener las cartas:",e),this.mensaje="Error al obtener las cartas",this.cargando=!1})}adivinarMayor(){this.cargando=!0;let e=this.cartas.shift();this.convertirValor(this.cartaActual.value)<this.convertirValor(e.value)?(this.puntaje++,this.mensaje=`Correcto, ${e.value} es mayor que ${this.cartaActual.value}`):this.convertirValor(this.cartaActual.value)===this.convertirValor(e.value)?this.mensaje=`EMPATE, ${e.value} tiene el mismo valor que ${this.cartaActual.value}`:(this.mensaje=`Incorrecto, ${e.value} no es mayor que ${this.cartaActual.value}`,this.terminarJuego()),this.actualizarJuego(e),this.cargando=!1}adivinarMenor(){this.cargando=!0;let e=this.cartas.shift();this.convertirValor(this.cartaActual.value)>this.convertirValor(e.value)?(this.puntaje++,this.mensaje=`Correcto, ${e.value} es menor que ${this.cartaActual.value}`):this.convertirValor(this.cartaActual.value)===this.convertirValor(e.value)?this.mensaje=`EMPATE, ${e.value} tiene el mismo valor que ${this.cartaActual.value}`:(this.mensaje=`Incorrecto, ${e.value} no es menor que ${this.cartaActual.value}`,this.terminarJuego()),this.actualizarJuego(e),this.cargando=!1}convertirValor(e){return e==="ACE"?1:e==="JACK"?11:e==="QUEEN"?12:e==="KING"?13:parseInt(e,10)}actualizarJuego(e){this.juegoTerminado||(this.cartaActual=e,this.cartas.length===0&&this.terminarJuego())}terminarJuego(){this.juegoTerminado=!0,this.mensaje+=` El juego ha terminado. Puntuaci\xF3n final: ${this.puntaje}`}static \u0275fac=function(t){return new(t||n)(M(x))};static \u0275cmp=_({type:n,selectors:[["app-mayor-menor"]],decls:11,vars:3,consts:[[1,"juego-contenedor"],[4,"ngIf"],[1,"puntaje"],[3,"click"],["alt","Carta actual",3,"src",4,"ngIf"],[1,"boton-contenedor"],["alt","Carta actual",3,"src"]],template:function(t,r){t&1&&(a(0,"div",0)(1,"h1"),s(2,"Juego de Mayor o Menor"),i(),p(3,re,9,1,"div",1),a(4,"p"),s(5),i(),a(6,"div",2)(7,"p"),s(8),i(),a(9,"button",3),m("click",function(){return r.iniciarJuego()}),s(10,"Reiniciar juego"),i()()()),t&2&&(o(3),c("ngIf",!r.juegoTerminado),o(2),j(r.mensaje),o(3),h("Puntuaci\xF3n: ",r.puntaje,""))},dependencies:[b],styles:[".juego-contenedor[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.juego-contenedor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block}.juego-contenedor[_ngcontent-%COMP%]   .boton-contenedor[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:center}.juego-contenedor[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:0 10px;padding:15px;font-size:18px;background-color:#29af0873;color:#fff;border-radius:5px;border:none;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#245707}p[_ngcontent-%COMP%]{font-size:1.25em;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700;margin-top:40px}"]})};var T=L(Y());function se(n,e){if(n&1&&(a(0,"div"),C(1,"img",5),i()),n&2){let t=l(2);o(),c("src",t.imagenActual,v)}}function ce(n,e){if(n&1){let t=f();a(0,"li")(1,"button",6),m("click",function(){let u=g(t).$implicit,A=l(2);return d(A.seleccionarRespuesta(u))}),s(2),i()()}if(n&2){let t=e.$implicit;o(2),j(t)}}function le(n,e){if(n&1&&(a(0,"div",2)(1,"h2"),s(2),i(),p(3,se,2,1,"div",3),a(4,"ul"),p(5,ce,3,1,"li",4),i(),a(6,"p"),s(7),i()()),n&2){let t=l();o(2),j(t.preguntaActual==null?null:t.preguntaActual.pregunta),o(),c("ngIf",t.imagenActual),o(2),c("ngForOf",t.opciones),o(2),h("Puntaje: ",t.puntaje,"")}}function ue(n,e){if(n&1&&(a(0,"div",7)(1,"p"),s(2,"\xA1El juego ha terminado!"),i(),a(3,"p"),s(4),i()()),n&2){let t=l();o(4),h("Puntaje final: ",t.puntaje,"")}}var k=class n{constructor(e){this.apiService=e}preguntas=[];preguntaActual;opciones=[];imagenActual="";puntaje=0;juegoIniciado=!1;preguntasSubscription;ngOnInit(){this.cargarPreguntas()}cargarPreguntas(){this.preguntasSubscription=this.apiService.obtenerPreguntas().subscribe(e=>{console.log("Preguntas cargadas:",e),this.preguntas=e,this.juegoIniciado=!0,this.preguntas.length>0?this.siguientePregunta():this.terminarJuego()})}siguientePregunta(){this.preguntas.length>0?(this.preguntaActual=this.preguntas.shift(),this.opciones=[...this.preguntaActual.incorrect_answers,this.preguntaActual.correct_answer],this.opciones=this.shuffleArray(this.opciones),this.cargarImagen(this.preguntaActual.imagen_clave)):this.terminarJuego()}cargarImagen(e){console.log("Buscando imagen para el tema:",e),this.apiService.obtenerImagenes(e).subscribe(t=>{t.photos&&t.photos.length>0?this.imagenActual=t.photos[0].src.medium:this.imagenActual=""},t=>{console.error("Error al cargar imagen:",t),this.imagenActual=""})}seleccionarRespuesta(e){e===this.preguntaActual.correct_answer?(this.puntaje++,T.default.fire({icon:"success",title:"\xA1Respuesta correcta!",timer:1500,showConfirmButton:!1})):T.default.fire({icon:"error",title:"\xA1Respuesta incorrecta!",timer:1500,showConfirmButton:!1}),this.siguientePregunta()}terminarJuego(){T.default.fire({icon:"info",title:"Fin del juego",showCancelButton:!0,text:`Tu puntaje final es: ${this.puntaje}`,confirmButtonText:"Reiniciar",cancelButtonText:"Salir"}).then(e=>{e.isConfirmed?this.restartGame():e.isDismissed&&console.log("Juego finalizado por el usuario.")})}restartGame(){this.puntaje=0,this.imagenActual="",this.preguntaActual=null,this.opciones=[],this.juegoIniciado=!1,this.cargarPreguntas()}shuffleArray(e){return e.sort(()=>Math.random()-.5)}ngOnDestroy(){this.preguntasSubscription&&this.preguntasSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||n)(M(x))};static \u0275cmp=_({type:n,selectors:[["app-preguntados"]],decls:2,vars:2,consts:[["class","pregunta-contenedor",4,"ngIf"],["class","fin-juego-contenedor",4,"ngIf"],[1,"pregunta-contenedor"],[4,"ngIf"],[4,"ngFor","ngForOf"],["alt","Imagen relacionada",1,"imagen-pregunta",3,"src"],[3,"click"],[1,"fin-juego-contenedor"]],template:function(t,r){t&1&&p(0,le,8,4,"div",0)(1,ue,5,1,"div",1),t&2&&(c("ngIf",r.juegoIniciado),o(),c("ngIf",!r.juegoIniciado))},dependencies:[y,b],styles:[".preguntados-game[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:#f4f4f4;padding:30px;border-radius:8px;box-shadow:0 4px 12px #0003;max-width:600px;margin:20px auto;transition:transform .3s ease}.preguntados-game[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.preguntados-game[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;font-size:26px;margin-bottom:15px;font-family:Arial,sans-serif;text-align:center}.preguntados-game[_ngcontent-%COMP%]   .pregunta-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:20px;margin-bottom:20px;box-shadow:0 2px 10px #0000001a;text-align:center;transition:background-color .3s ease}.preguntados-game[_ngcontent-%COMP%]   .pregunta-container[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.preguntados-game[_ngcontent-%COMP%]   .imagen-pregunta[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:5px;margin:10px 0}.preguntados-game[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;margin:0}.preguntados-game[_ngcontent-%COMP%]   .opciones[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.preguntados-game[_ngcontent-%COMP%]   .opcion-button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;border-radius:8px;padding:12px;font-size:18px;cursor:pointer;transition:background-color .3s ease,transform .2s ease}.preguntados-game[_ngcontent-%COMP%]   .opcion-button[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:translateY(-2px)}.preguntados-game[_ngcontent-%COMP%]   .puntaje[_ngcontent-%COMP%]{margin-top:20px;font-size:20px;color:#333;font-weight:700}"]})};function pe(n,e){if(n&1){let t=f();a(0,"div",5),m("click",function(){let u=g(t).index,A=l();return d(A.seleccionarCarta(u))}),C(1,"img",6),i()}if(n&2){let t=e.$implicit;o(),c("src",t.volteada?t.image:"cartaVolteada.png",v)}}function me(n,e){if(n&1){let t=f();a(0,"button",7),m("click",function(){g(t);let u=l();return d(u.empezarRonda())}),s(1," Empezar el juego "),i()}}function ge(n,e){if(n&1){let t=f();a(0,"button",7),m("click",function(){g(t);let u=l();return d(u.resetearJuego())}),s(1," Reiniciar juego "),i()}}var E=class n{constructor(e){this.apiService=e}cartas=[];secuencia=[];seleccionUsuario=[];rondaActual=1;mostrandoSecuencia=!1;mensaje="";juegoIniciado=!1;ngOnInit(){this.iniciarJuego()}iniciarJuego(){this.apiService.obtenerCartas().subscribe(e=>{this.cartas=e.cards.slice(0,20).map(t=>$(R({},t),{volteada:!1})),this.rondaActual=1,this.secuencia=[],this.mensaje="",this.juegoIniciado=!1})}empezarRonda(){this.mostrandoSecuencia=!0,this.seleccionUsuario=[],this.juegoIniciado=!0;let e;if(this.rondaActual===1)e=Math.floor(Math.random()*this.cartas.length);else do e=Math.floor(Math.random()*this.cartas.length);while(this.secuencia.includes(e));this.secuencia.push(e),this.mostrarSecuencia()}mostrarSecuencia(){return V(this,null,function*(){this.mostrandoSecuencia=!0;for(let e=0;e<this.secuencia.length;e++)this.voltearCarta(this.secuencia[e],!0),yield this.delay(1500),this.voltearCarta(this.secuencia[e],!1),yield this.delay(500);this.mostrandoSecuencia=!1})}delay(e){return new Promise(t=>setTimeout(t,e))}voltearCarta(e,t){e>=0&&e<this.cartas.length&&(this.cartas[e].volteada=t)}seleccionarCarta(e){this.mostrandoSecuencia||(this.seleccionUsuario.push(e),this.seleccionUsuario.length===this.secuencia.length&&this.verificarSeleccion())}verificarSeleccion(){return V(this,null,function*(){for(let e=0;e<this.seleccionUsuario.length;e++)if(this.seleccionUsuario[e]!==this.secuencia[e]){this.mensaje="\xA1Te has equivocado! Reiniciando el juego...",this.resetearJuego();return}this.rondaActual++,this.mensaje=`\xA1Correcto! Iniciando ronda ${this.rondaActual}`,yield this.delay(1500),this.empezarRonda()})}resetearJuego(){this.rondaActual=1,this.secuencia=[],this.seleccionUsuario=[],this.cartas.forEach(e=>e.volteada=!1),setTimeout(()=>{this.iniciarJuego()},2e3)}static \u0275fac=function(t){return new(t||n)(M(x))};static \u0275cmp=_({type:n,selectors:[["app-juego-cartas"]],decls:8,vars:4,consts:[[1,"cartas-grid"],["class","carta",3,"click",4,"ngFor","ngForOf"],[1,"botones-juego"],[3,"click",4,"ngIf"],[1,"mensaje-juego"],[1,"carta",3,"click"],["alt","Carta",3,"src"],[3,"click"]],template:function(t,r){t&1&&(a(0,"div",0),p(1,pe,2,1,"div",1),i(),a(2,"div",2),p(3,me,2,0,"button",3)(4,ge,2,0,"button",3),i(),a(5,"div",4)(6,"p"),s(7),i()()),t&2&&(o(),c("ngForOf",r.cartas),o(2),c("ngIf",!r.juegoIniciado),o(),c("ngIf",r.juegoIniciado),o(3),j(r.mensaje))},dependencies:[y,b],styles:[".cartas-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;justify-items:center}.carta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:150px;cursor:pointer}.botones-juego[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px}.botones-juego[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:15px 30px;font-size:1.2rem;background-color:#4caf50;color:#fff;border:none;border-radius:5px;transition:background-color .3s,color .3s;cursor:pointer}.botones-juego[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#388e3c;color:#e0e0e0}.mensaje-juego[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;color:red;text-align:center}"]})};var de=[{path:"ahorcado",component:O},{path:"mayor-menor",component:w},{path:"preguntados",component:k},{path:"juego-cartas",component:E}],J=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=S({imports:[F.forChild(de),F]})};var W=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=S({imports:[Q,J]})};export{W as JuegosModule};
