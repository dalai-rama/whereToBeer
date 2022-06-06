import {darkMode,
        lightMode,
        verUbicacion, 
        obtenerDatosBares, 
        menuResponsive, 
        crearTarjeta, } from "./components/functions.js"

import {rankSort, vipSort} from "./components/orderby.js" 

let bares = await obtenerDatosBares();

if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register("sw.js")
}

// CREAR TARJETAS DE BARES CON DATA DE ARRAY BARES 
crearTarjeta(bares);

// verUbicacion - declarar boton y añadir addeventlistener
for( let bar of bares){
    let btnUb = document.querySelector(`#ub${bar.id}`)
    btnUb.addEventListener("click", ()=>{verUbicacion("if"+bar.id)})
}

// FILTRO DE CATEGORÍAS
const btnCat = document.querySelectorAll(".categorias")
    btnCat.forEach(btn => btn.addEventListener("click", filtrarPorCategoria))

function filtrarPorCategoria(i){
    let id = i.srcElement.attributes.id.value;
    let tarjetas = document.querySelectorAll(".tarjeta");

    function recorrer(prop){
        tarjetas.forEach(t=>t.style.display="none")
        for(let i=0; i < bares.length; i++){
            if(bares[i].categorias?.[prop]){
            tarjetas.forEach(t => { if(t.id == i){
                t.style.display="flex"
                }
            }) 
            } 
        }
    }
    
        switch (id) {
            case "btn-todas":
            for(let i = 0; i < bares.length; i++){
                tarjetas[i].style.display="flex";
            }
            break;

            case "btn-bares":
                recorrer("bar")
                break;

            case "btn-cervecerias":
                recorrer("cerveceria")
                break;
                
            case "btn-centroCultural":
                recorrer("centroCultural")
                break;
                    
            case "btn-boliches":
                recorrer("boliche")
                break;
                
            case "btn-patioDeComidas":
                recorrer("patioComida")
                break;            
            
            case "btn-cafeterias":
                recorrer("cafeteria")
                break;

            default:
                break;
        }

}

 // ORDENAR BARES POR RANKING
 let rankBtn = document.getElementById("order-ranked");
rankBtn.addEventListener("click", ()=>{rankSort()})

let vipBtn = document.getElementById("order-vip");
vipBtn.addEventListener("click", ()=> {vipSort()});

let selectOrder = document.getElementById("order-by");
    selectOrder.onchange = ()=>{ 
        if (selectOrder.value == "VipCommerce") { 
            vipSort();
        } else if(selectOrder.value == "MejorPuntuados") {
            rankSort();        
        } else {}
    }


// SEARCHBAR
const searchBar = document.getElementById("search-bar")
searchBar.addEventListener("keyup", searching)

// JavaScript code
function searching() {
    let tarjetas = document.querySelectorAll(".tarjeta");
	let input = document.getElementById('search-bar').value;
	input=input.toLowerCase();
	
	for (let i = 0; i < bares.length; i++) {
		if (!bares[i].nombre.toLowerCase().includes(input) && !bares[i].barrio.toLowerCase().includes(input)){
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

//MENU RESPONSIVE !! 
let btnWTB = document.querySelector(".wheretobeer");

if(window.screen.width <= 700){
    btnWTB.addEventListener("click", menuResponsive) 
    } else if(window.screen.width > 700){
    btnWTB.removeEventListener("click", menuResponsive);
  }