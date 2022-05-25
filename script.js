import {darkMode, lightMode, verUbicacion} from "./components/functions.js"

let bares = [];

const obtenerDatosBares = async ()=>{
    let bares = await fetch("../bares.json")
    .then(res => res.json())
    .then((res)=>{
        return res;
    })
    return bares
}

let baresNuevos = await obtenerDatosBares() 
bares = bares.concat(baresNuevos)

// CREAR TARJETAS DE BARES CON DATA DE ARRAY BARES 

const main = document.getElementById("mainCenter")

function crearTarjeta(data){
    data.forEach((data)=>{
    const tarjeta = document.createElement("div");
    
     tarjeta.innerHTML = `
    <div class="tarjeta">
        <h2>${data.nombre} </h2>
        <div class="rate">${data.puntuacion} ⭐</div>
        <div class="imagenTarjeta">
            <img src="/${data.imagen}" onclick="showCarousel()">
        </div>
        <p>${data.descripcion}</p>
        <h5>${data.direccion}  -  ${data.barrio}</h5>
        <h6>${ data.vipcomerce ? "<b id='vipcommerse'>VIP COMMERSE</b> - Este local cuenta con descuentos exclusivos." : ""} </h6>
        <button style="margin-bottom: 0; font-size: 16px;" id="fv${data.id}" > AGREGAR A FAVORITOS </button>
        <button style="margin-top: 5px" id="ub${data.id}"> Ver Ubicación </button>
        <iframe id="if${data.id}" style="filter: invert(90%); display: none;" src="${data.ubicacion}" 
        width="100%" height="150" 
        style="border:0;" 
        allowfullscreen="" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>

    `
    main.appendChild(tarjeta);

})
}

crearTarjeta(bares);

// verUbicacion - declarar boton y añadir addeventlistener

for( let bar of bares){
    let btnUb = document.querySelector(`#ub${bar.id}`)
    btnUb.addEventListener("click", function(){verUbicacion("if"+bar.id)})
}

// FILTRO DE CATEGORÍAS
// botones, pense no declararlos pero quizas sirvan en un futuro.

    const btnTodas = document.querySelector("#btn-todas").addEventListener("click", filtrarPorCategoria);
    const btnBar = document.querySelector("#btn-bares").addEventListener("click", filtrarPorCategoria);
    const btnCerv = document.querySelector("#btn-cervecerias").addEventListener("click", filtrarPorCategoria);
    const btnCC = document.querySelector("#btn-centroCultural").addEventListener("click", filtrarPorCategoria);
    const btnBoliche = document.querySelector("#btn-boliches").addEventListener("click", filtrarPorCategoria);
    const btnPatioDeComidas = document.querySelector("#btn-patioDeComidas").addEventListener("click", filtrarPorCategoria);
    const btnCafeteria = document.querySelector("#btn-cafeterias").addEventListener("click", filtrarPorCategoria);

// Acá comienza la magía. Filtro que cambia el style de las tarjetas.

function filtrarPorCategoria(i){
    let id = i.srcElement.attributes.id.value;
    let tarjetas = document.querySelectorAll(".tarjeta");

// TO DO. falta agregar una funcion que deje en focus la categoría seleccionada.
function recorrer(prop){
        for(let i=0; i < bares.length; i++){
        bares[i].categorias?.[prop] ? tarjetas[i].style.display="flex" : tarjetas[i].style.display="none";
    }
}
 
    switch (id) {
        case "btn-todas":
        for(let i = 0; i < bares.length; i++){
            tarjetas[i].style.display="flex";
        }
        break;


        case "btn-bares":
            console.log("HOLA BARES")
            recorrer("bar")
            break;

        case "btn-cervecerias":
            console.log("HOLA CERVEZA")
            recorrer("cerveceria")
            break;
            
        case "btn-centroCultural":
            console.log("HOLA CENTRO CULTURAL")
            recorrer("centroCultural")
            break;
                
        case "btn-boliches":
            console.log("HOLA BOLICHE")
            recorrer("boliche")
            break;
            
        case "btn-patioDeComidas":
            console.log("HOLA PATIODECOMIDA")
            recorrer("patioComida")
            break;            
        
            case "btn-cafeterias":
                console.log("HOLA CAFETERIA")
                recorrer("cafeteria")
                break;
        default:
            break;
    }

}

// FILTRO POR CATEGORIAS CON JQUERY


// SEARCHBAR

const searchBar = document.getElementById("search-bar")
searchBar.addEventListener("keyup", searching)

// JavaScript code

export function searching() {
    let tarjetas = document.querySelectorAll(".tarjeta");
	let input = document.getElementById('search-bar').value;
    console.log(input)
	input=input.toLowerCase();
	
	for (let i = 0; i < bares.length; i++) {
		if (!bares[i].nombre.toLowerCase().includes(input) ) {
			tarjetas[i].style.display="none";
		}
		else {
			tarjetas[i].style.display="flex";				
		}
	}

}



// DARK/LIGHT THEME
localStorage.getItem("theme")=="light" ? lightMode() : darkMode();

let darkLight = document.querySelector("#dark-light")
darkLight.addEventListener("click", changeMode );

function changeMode(){
    if(localStorage.getItem("theme")== "dark" ){
        lightMode()

    } else {
        darkMode()

    }
}

// AÑADIR A FAVORITOS

bares.forEach(bar =>{
    const btnFav = document.getElementById(`fv${bar.id}`)
    btnFav.addEventListener("click", function(){agregarAFav(bar.id)})
})


function agregarAFav(id){

Swal.fire({
    title: '¿Te gusto este lugar?',
    text: "Pone aceptar si querés agregar a tus Favoritos",
    icon: 'info',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d66',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
        
    localStorage.setItem(`bar${bares[id].id}`,`${bares[id].id}` )
      Swal.fire(
        'Agregado a Favoritos!',
        'Podrás ver este lugar desde tu perfil',
        'success'
      )
    }
  })
}

// FUNCION CAROUSEL BS
