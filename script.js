const bares = [
    {
        nombre: "Inexistente",
        descripcion:"Un bar inexistente utilizado para probar el comportamiento de la página web",
        imagen:"public/descarga.jpg",
        direccion:"Notengo Idea 1123",
        ubicacion:"",
        id: 1
    
    },
    {
        nombre: "Desarmadero",
        descripcion:"Un barsito en Villa Crespo, tienen varias canillas de cerveza artesanal entre las que se incluyen las producidas por ellos mismos.",
        imagen:"public/descarga2.jpg",
        direccion:"Jose Ignacio Gorriti 4295",
        ubicacion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3957263480143!2d-58.426340685176854!3d-34.59415356449821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca795cae367b%3A0x96a078708e4bb085!2sDesarmadero%20Bar!5e0!3m2!1ses!2sar!4v1651965830859!5m2!1ses!2sar",
        id: 2
    
    },
    {
        nombre: "El Emergente",
        descripcion:"Centro cultural con un escenario por donde pasan varios artistas de la escena local.",
        imagen:"public/descarga 3.jpg",
        direccion:"Figueroa 1030 y Gallo 333",
        ubicacion:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1992093391755!2d-58.422803991967726!3d-34.59912380891913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7cb36091e9%3A0x14a4ef26384273e1!2sEl%20Emergente%20Almagro!5e0!3m2!1ses-419!2sar!4v1651966675048!5m2!1ses-419!2sar",
        id: 3
    
    },
]

function verUbicacion(id){
    let mostrar = document.getElementById(`${id}`);
     if (mostrar.style.display == "none"){
        console.log("ave")
        mostrar.style.display = "flex";
    } else {
        console.log("toro")
        mostrar.style.display = "none"
    } 

}

const main = document.getElementById("mainCenter")

function crearTarjeta(data){
    let tarjeta = document.createElement("div")
    tarjeta.innerHTML = `
    <div class="tarjeta">
        <h2>${data.nombre} </h2>
        <div class="imagenTarjeta">
            <img src="/${data.imagen}">
        </div>
        <p>${data.descripcion}</p>
        <p>${data.direccion}</p>
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

function cargarTarjetas(){
    for( let i=0; i < bares.length; i ++){
        let newTarjeta = crearTarjeta(bares[i])
        main.appendChild(newTarjeta)
    }

}

cargarTarjetas()







