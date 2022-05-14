const bares = [
    {
        nombre: "Inexistente",
        descripcion:"Un bar inexistente utilizado para probar el comportamiento de la página web",
        imagen:"public/descarga.jpg",
        direccion:"Notengo Idea 1123",
        barrio: "Ejemplo",
        ubicacion:"",
        puntuacion: "3/5",
        categorias: {
            bar: true,
            cafeteria: true
        },
        id: 1
    
    },
    {
        nombre: "Desarmadero",
        descripcion:"Un barsito en Villa Crespo, tienen varias canillas de cerveza artesanal entre las que se incluyen las producidas por ellos mismos.",
        imagen:"public/descarga2.jpg",
        direccion:"Jose Ignacio Gorriti 4295",
        barrio: "Palermo",
        ubicacion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3957263480143!2d-58.426340685176854!3d-34.59415356449821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca795cae367b%3A0x96a078708e4bb085!2sDesarmadero%20Bar!5e0!3m2!1ses!2sar!4v1651965830859!5m2!1ses!2sar",
        puntuacion: "4/5",
        categorias: {
            cerveceria: true,
            patioComida: true
        },
        id: 2
    
    },
    {
        nombre: "El Emergente",
        descripcion:"Centro cultural con un escenario por donde pasan varios artistas de la escena local.",
        imagen:"public/descarga 3.jpg",
        direccion:"Figueroa 1030 y Gallo 333",
        barrio: "Almagro",
        ubicacion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1992093391755!2d-58.422803991967726!3d-34.59912380891913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7cb36091e9%3A0x14a4ef26384273e1!2sEl%20Emergente%20Almagro!5e0!3m2!1ses-419!2sar!4v1651966675048!5m2!1ses-419!2sar",
        puntuacion: "4/5",
        categorias: {
            centroCultural: true,
        },
        id: 3
    
    },
]




// MOSTRAR MAPA CON BOTON VER UBICACIÓN

function verUbicacion(id){
    let mostrar = document.getElementById(`${id}`);
    mostrar.style.display == "none" ? mostrar.style.display = "flex" : mostrar.style.display = "none";

}


// CREAR TARJETAS DE BARES CON DATA DE ARRAY BARES 

const main = document.getElementById("mainCenter")

function crearTarjeta(data){
    const tarjeta = document.createElement("div");
    
    tarjeta.innerHTML = `
    <div class="tarjeta">
        <h2>${data.nombre} </h2>
        <div class="rate">${data.puntuacion} ⭐</div>
        <div class="imagenTarjeta">
            <img src="/${data.imagen}">
        </div>
        <p>${data.descripcion}</p>
        <h5>${data.direccion}  -  ${data.barrio}</h5>
        <button onclick="verUbicacion(${data.id})"> Ver Ubicación </button>
        <iframe id="${data.id}" style="filter: invert(90%); display: none;" src="${data.ubicacion}" 
        width="100%" height="150" 
        style="border:0;" 
        allowfullscreen="" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    `
    return tarjeta;
}


// CARGAR TARJETAS AL MAIN

function cargarTarjetas(){
    for( let i=0; i < bares.length; i ++){
        let newTarjeta = crearTarjeta(bares[i])
        main.appendChild(newTarjeta)
    }

}

cargarTarjetas()


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
    
    switch (id) {
        case "btn-todas":
        for(let i = 0; i < bares.length; i++){
            tarjetas[i].style.display="flex";
        }
        break;


        case "btn-bares":
            console.log("HOLA BARES")
            for(let i = 0; i < bares.length; i++){
                bares[i].categorias?.bar ? tarjetas[i].style.display="flex" : tarjetas[i].style.display="none";
        }

            break;

        case "btn-cervecerias":
            console.log("HOLA CERVEZA")
            for(let i = 0; i < bares.length; i++){
                bares[i].categorias?.cerveceria ? tarjetas[i].style.display="flex" : tarjetas[i].style.display="none";
        }

            break;
            
        case "btn-centroCultural":
            console.log("HOLA CENTRO CULTURAL")
            for(let i = 0; i < bares.length; i++){
                bares[i].categorias?.centroCultural ? tarjetas[i].style.display="flex" : tarjetas[i].style.display="none";
        }

            break;
                
        case "btn-boliches":
            console.log("HOLA BOLICHE")
            for(let i = 0; i < bares.length; i++){
                bares[i].categorias?.boliche ? tarjetas[i].style.display="flex" : tarjetas[i].style.display="none";
        }

            break;
            
        case "btn-patioDeComidas":
            console.log("HOLA PATIODECOMIDA")
            for(let i = 0; i < bares.length; i++){
                bares[i].categorias?.patioComida ? tarjetas[i].style.display="flex" : tarjetas[i].style.display="none";
        }
        
            break;            
        
            case "btn-cafeterias":
                console.log("HOLA CAFETERIA")
                for(let i = 0; i < bares.length; i++){
                    bares[i].categorias?.cafeteria ? tarjetas[i].style.display="flex" : tarjetas[i].style.display="none";
            }
            
        default:
            break;
    }

}







