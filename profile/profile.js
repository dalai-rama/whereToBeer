import { darkModeProfile, lightModeProfile, obtenerDatosBares, verUbicacion } from "../components/functions.js";

const BARES = await obtenerDatosBares();

// Definición de clase Usuario
class Usuario {
    constructor(nombre, edad, email, contraseña, avatar, portada) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.contraseña = contraseña;
        this.avatar = avatar;
        this.portada = portada;
    }
}

// Crear usuario de ejemplo
let usuario = new Usuario(
    "NombreDeUsuario",
    "23",
    "hernan@ejemlo.com",
    "contraseña123",
    "https://randomuser.me/api/portraits/lego/2.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xw27ExsCr46AoZ4T9xQ4_AHaEK%26pid%3DApi&f=1"
);

const profileMain = document.querySelector("#profileApp");

// Renderizar perfil de usuario
profileMain.innerHTML = `
    <div class="portada"><img class="portada" src="${usuario.portada}"></div>
    <img id="avatar" src="${usuario.avatar}" class="avatar">
    <h2 class="userMain" style="margin-bottom: 0px;"> ¡Hola ${usuario.nombre}! </h2>
    <h3 class="userMain"> ¿A qué lugar vas a ir hoy? </h3>
`;

// Función para crear tarjetas
function crearTarjeta(data) {
    const { id, nombre, puntuacion, descripcion, barrio, vipcomerce, imagen, ubicacion, direccion } = data;
    const tarjeta = document.createElement("div");
    tarjeta.classList.add(`divtarjeta${id}`);

    tarjeta.innerHTML = `
    <div class="tarjeta" id="id${id}">
        <h2>${nombre} </h2>
        <div class="rate">${puntuacion} ⭐</div>
        <div class="imagenTarjeta">
            <img src="../${imagen}" onclick="showCarousel()">
        </div>
        <p>${descripcion}</p>
        <h5>${direccion} - ${barrio}</h5>
        <h6>${vipcomerce ? "<b id='vipcommerse'>VIP COMMERSE</b> - Este local cuenta con descuentos exclusivos." : ""}</h6>
        <button class="remv" id="${id}" style="background-color: #844; margin-bottom: 0; font-size: 16px;">REMOVER DE FAVORITOS</button>
        <button style="margin-top: 5px" id="ub${id}">Ver Ubicación</button>
        <iframe id="if${id}" style="filter: invert(90%); display: none;" src="${ubicacion}" 
        width="100%" height="150" 
        style="border:0;" 
        allowfullscreen="" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `;
    return tarjeta;
}

// Cargar tarjetas al DOM
const main = document.querySelector("body");
function cargarTarjetas(value) {
    let newTarjeta = crearTarjeta(BARES[value]);
    main.appendChild(newTarjeta);
}

// Mostrar tarjetas guardadas
BARES.forEach((bar, index) => {
    if (localStorage[`bar${index}`]) cargarTarjetas(index);
});

// Remover favoritos
document.querySelectorAll(".remv").forEach(btn => {
    btn.addEventListener("mouseover", () => btn.classList.add("hover"));
    btn.addEventListener("mouseout", () => btn.classList.remove("hover"));
    btn.addEventListener("click", function() {
        removerFavorito(this.id);
    });
});

function removerFavorito(id) {
    Swal.fire({
        title: '¿Eliminar de Favoritos?',
        text: "Click en aceptar si quieres eliminar este lugar de tus Favoritos",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d66',
        confirmButtonText: 'Aceptar'
    }).then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem(`bar${id}`);
            const div = document.querySelector(`#id${id}`);
            div.remove();
            Swal.fire('Eliminado de Favoritos!', 'Ya no verás este lugar desde tu perfil', 'success');
        }
    });
}

// Modo claro/oscuro
localStorage.getItem("theme") === "light" ? lightModeProfile() : darkModeProfile();

document.querySelector("#dark-light").addEventListener("click", changeMode);

function changeMode() {
    localStorage.getItem("theme") === "dark" ? lightModeProfile() : darkModeProfile();
}

// Ver ubicación
BARES.forEach(bar => {
    const btnUb = document.querySelector(`#ub${bar.id}`);
    if (btnUb) {
        btnUb.addEventListener("click", () => verUbicacion(`if${bar.id}`));
    }
});