const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const botones = document.getElementById("botones");


// ---------------------
// FUNCIÓN PARA LIMPIAR
// ---------------------

function limpiar() {
    titulo.style.opacity = 0;
    mensaje.style.opacity = 0;
    botones.innerHTML = "";

    setTimeout(() => {
        titulo.innerHTML = "";
        mensaje.innerHTML = "";
    }, 500);
}

// ---------------------
// FUNCIÓN PARA MOSTRAR
// ---------------------

function mostrarEscena(tituloTexto, mensajeTexto, botonesHTML) {

    limpiar();

    setTimeout(() => {

        titulo.innerHTML = tituloTexto;
        mensaje.innerHTML = mensajeTexto;
        botones.innerHTML = botonesHTML;

        titulo.style.opacity = 1;
        mensaje.style.opacity = 1;

    }, 600);

}

// ---------------------
// ESCENA 1
// ---------------------

setTimeout(() => {

    titulo.innerHTML = "Hola, guapo ❤️";
    titulo.style.opacity = 1;

}, 1500);

setTimeout(() => {

    mensaje.innerHTML = "Ya te había dicho hoy que estás muy lindo?";
    mensaje.style.opacity = 1;

}, 3200);

setTimeout(() => {

    botones.innerHTML = `
        <button onclick="escena2()">Claro</button>
        <button onclick="escena2()">El que es pinta es pinta</button>
        <button onclick="escena2()">Siempre</button>
    `;

}, 4700);

// ---------------------
// ESCENA 2
// ---------------------

function escena2() {

    mostrarEscena(

        "Hoy tengo algo preparado para ti.",

        `Pero todavía no te voy a decir qué es.
        <br><br>
        😌`,

        `<button onclick="escena3()">Continuemos</button>`

    );

}

// ---------------------
// ESCENA 3
// ---------------------

function escena3(){

    mostrarEscena(

        "🎵",

        "Antes de empezar...",

        `<button onclick="iniciarMusica()">▶ Reproducir</button>`

    );

}
function iniciarMusica(){

    const musica = document.getElementById("bgMusic");

    musica.volume = 0.6;

    musica.play();

    limpiar();

    setTimeout(()=>{

        titulo.innerHTML="🎵";
        titulo.style.opacity=1;

    },700);

    setTimeout(()=>{

        mensaje.innerHTML=`
        Antes de empezar...
        <br><br>
        ¿Sabías que Stranger Things está inspirada en el supuesto Proyecto Montauk?
        Una leyenda urbana de los años 80 que afirmaba que el gobierno estadounidense 
        secuestraba niños en una base militar secreta de Long Island para realizar 
        experimentos de control mental, viajes en el tiempo y portales dimensionales.
        `;
        mensaje.style.opacity=1;

    },1800);

    setTimeout(()=>{

        botones.innerHTML=`
        <button onclick="escena4()">Vea pues 👀</button>
        `;

    },4500);

}

// ---------------------
// ESCENA 4
// ---------------------

function escena4(){

    mostrarEscena(

        "otro dato curioso 🐝",

        `¿Sabías que las abejas tienen cinco ojos,
        se comunican mediante un baile
        y la miel nunca caduca?`,

        `<button onclick="escena5()">
        eso no lo sabia mi amor, mi novia linda, preciosa que la amo mucho, la mujer más hermosa del universo.
        </button>`

    );

}


function escena5(){

    mostrarEscena(

        "Bueno...",

        "Ahora sí.",

        `<button onclick="escena6()">➡️</button>`

    );

}

// ---------------------
// ESCENA 11
// ---------------------

function escena6(){

    mostrarEscena(

        "✨",

        "Sin más rodeos...",

        `<button onclick="escena7()">➡️</button>`

    );

}

// ---------------------
// ESCENA 12
// ---------------------

function escena7(){

    mostrarEscena(

        "🎯",

        "Comencemos con esto.",

        `<button onclick="reto()">LISTOOO</button>`

    );

}
// ---------------------
// RETO
// ---------------------

function reto(){

    mostrarEscena(

        "🙃",

        `Tengo una invitación para ti.
        <br><br>
        Pero no pienso decirte cuál es.
        <br><br>
        Vas a tener que descubrirla.`,

        `<button onclick="pregunta1()">Acepto el reto</button>`

    );

}

function pregunta1(){

    mostrarEscena(

        "Primera pregunta",

        "¿Qué crees que tengo preparado para ti?",

        `
        <button onclick="roblox()">Jugar Roblox</button>
        <button onclick="pelicula()">Ver una película</button>
        <button onclick="freefire()">Jugar Fri Fairi</button>
        `
    );

}
function roblox(){

    mostrarEscena(

        "😌",

        "Hoy no jugaremos Roblox.",

        `<button onclick="pregunta1()">Intentar otra vez</button>`

    );

}

function freefire(){

    mostrarEscena(

        "Me pone la mira en el pecho?",

        "No",

        `<button onclick="pregunta1()">Intentar otra vez</button>`

    );

}

function pelicula(){

    mostrarEscena(

        "🎉",

        "siiiii",

        `<button onclick="pelicula2()">Continuar</button>`

    );

}

function pelicula2(){

    mostrarEscena(

        "🎬",

        `Perooo...
        <br><br>
        ¿Sabes cuál película vamos a ver?`,

        `<button onclick="pelicula3()">No lo sé</button>`

    );

}

function pelicula3(){

    mostrarEscena(

        "😌",

        `Entonces...
        <br><br>
        Deberás adivinarla.`,

        `<button onclick="pista1()">Comenzar</button>`

    );

}

function pista1(){

    mostrarEscena(

        "🕵️ PISTAS",

        `Primera pista...
        <br><br>
        La película salió en el año 2004.
        <br><br>
        Y pertenece al género de acción. ⚔️
        <br><br>
        ¿Ya tienes alguna idea? 🤔`,

        `<button onclick="pista2()">Mmm... todavía no</button>`

    );

}
function pista2(){

    mostrarEscena(

        "🕵️ PISTAS",

        `Vamos con otra pista...
        <br><br>
        🐎
        <br>
        🛡️
        <br>
        ⚔️
        <br>
        👑
        <br><br>
        Yyy... la última pista es...
        <br><br>
        Uno de sus actores es Brad Pitt. 😌
        <br><br>
        ¿Ya sabes cuál película es?`,

        `
        <button onclick="respuestaSi()">Sí</button>
        <button onclick="respuestaNo()">No</button>
        `

    );

}

function respuestaSi(){

    mostrarEscena(

        "Selecciona la opción correcta",

        "¿Cuál crees que es?",

        `
        <button onclick="incorrecta()">Gladiador</button>
        <button onclick="troya()">Troya</button>
        <button onclick="incorrecta()">300</button>
        `

    );

}

function respuestaNo(){

    mostrarEscena(

        "🤔",

        `Otra pista...
        <br><br>
        La historia gira alrededor de una guerra legendaria. ⚔️
        <br><br>
        ¿Ya lograste adivinar cuál es?`,

        `
        <button onclick="respuestaSi()">Sí</button>
        <button onclick="ultimaPista()">No</button>
        `

    );

}

function ultimaPista(){

    mostrarEscena(

        "😂",

        `Bueno...
        <br><br>
        Esta sí es la última pista.
        <br><br>
        La película dura más de tres horas. ⏳
        <br><br>
        Ahora sí...`,

        `
        <button onclick="incorrecta()">Gladiador</button>
        <button onclick="troya()">Troya</button>
        <button onclick="incorrecta()">300</button>
        `

    );

}

function incorrecta(){

    mostrarEscena(

        "❌",

        "Ups... esa no era. Inténtalo otra vez 😌",

        `<button onclick="respuestaSi()">Volver a intentar</button>`

    );

}

function troya(){

    mostrarEscena(

        "SUPER SIIII",

        `Verificando respuesta...
        <br><br>
        Desbloqueando recompensa...`,

        `<button onclick="sobre()">Continuar</button>`

    );

}

function sobre(){

    titulo.style.display = "none";
    mensaje.style.display = "none";
    botones.style.display = "none";

    const cinema = document.getElementById("cinema");

    cinema.classList.remove("oculto");

    setTimeout(() => {

        cinema.classList.add("abierto");

    }, 500);


}
function boleto(){

    const cinema = document.getElementById("cinema");
    cinema.style.display = "none";

    titulo.style.display = "block";
    mensaje.style.display = "block";
    botones.style.display = "block";

    mostrarEscena(

        "🎟️ INVITACIÓN VIP",

        `
        <strong>Para: El mejor novio del mundo ❤️</strong>
        <br>
        <strong>Película: ⚔️ TROYA </strong>
        <br>
        <strong>Fecha: Hoy</strong>
        <br>
        <strong>Hora: 7:00 PM</strong>
        <br>
        <strong>Lugar: Nuestra sala de cine virtual 🍿 </strong>
        <br><br>
        <strong>Incluye:</strong>
        <br>
        ❤️ Una cita conmigo.
        <br>
        🍿 Una muy buena película.
        <br>
        ✨ Muchos besitos virtuales.
        <br>
        <strong>Dress Code: Pijama obligatoria </strong>
        `,

        `<button onclick="mensajeFinal()">🍿 Nos vemos a las 7:00 PM en Discord</button>`

    );

}

function mensajeFinal(){

    mostrarEscena(

        "❤️",

        `
        Gracias por aceptar esta invitación.
        <br><br>

        Sé que no podemos vernos siempre...
        <br><br>

        Pero no quería dejar pasar la oportunidad
        de tener una cita contigo.
        <br><br>

        Así que hice todo esto para nosotros dos.
        <br><br>

        Te amo muchísimo ❤️
        `,

        `<button onclick="reiniciar()">Volver a leer</button>`

    );

}
function reiniciar(){
    location.reload();
}

document.addEventListener("click", function(e){

    if(e.target.id === "envelope"){

        boleto();

    }

});

// ==========================
// CREAR ESTRELLAS
// ==========================

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    star.style.opacity = Math.random();

    stars.appendChild(star);

}
