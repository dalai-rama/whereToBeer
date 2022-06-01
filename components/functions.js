// MOSTRAR MAPA CON BOTON VER UBICACIÓN
export function verUbicacion(data){
    let mostrar = document.getElementById(data);
    mostrar.style.display == "none" ? mostrar.style.display = "flex" : mostrar.style.display = "none";

}

// ORDERNAR POR PROP
export function sortUs(prop) {
    let items = Array.prototype.slice.call(document.querySelectorAll(".tarjeta"))
    
    items.sort((a, b)=>{
        let atr = prop 
        return (a[atr] > b[atr]) ? -1 : (a[atr] < b[atr]) ? 1 : 0;
     });
     for (let i = 0; i < bares.length; i++) {
         MAIN.appendChild(items[i]);
     }
 }

// OBTENER BARES ASYNC
export const obtenerDatosBares = async ()=>{
    let bares = await fetch("/bares.json")
    .then(res => res.json())
    return bares;
}

// CREAR TARJETAS DE BARES 
export function crearTarjeta(data){
    const main = document.getElementById("mainCenter")
    
    data.forEach((data)=>{
    const {
        nombre, 
        puntuacion, 
        imagen, 
        descripcion, 
        direccion, 
        id, 
        ubicacion, 
        vipcomerce, 
        barrio} = data;
    const tarjeta = document.createElement("div");
    
     tarjeta.innerHTML = `
    <div class="tarjeta" id="${id}">
        <h2>${nombre} </h2>
        <div class="rate" title="Este puntaje esta deliberado al azar, ndea">${puntuacion} ⭐</div>
        <div class="imagenTarjeta">
            <img src="/${imagen}" onclick="showCarousel()">
        </div>
        <p>${descripcion}</p>
        <h5>${direccion}  -  ${barrio}</h5>
        <h6>${vipcomerce ? "<b id='vipcommerse'>VIP COMMERSE</b> - Este local cuenta con descuentos exclusivos." : ""} </h6>
        <button style="margin-bottom: 0; font-size: 16px;" id="fv${id}" > AGREGAR A FAVORITOS </button>
        <button style="margin-top: 5px" id="ub${id}"> Ver Ubicación </button>
        <iframe id="if${id}" style="filter: invert(90%); display: none;" src="${ubicacion}" 
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

// DISPLAY MENU RESPONSIVE
export function menuResponsive(){
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    let respmenu = document.querySelector(".respmenu");
    let orderBy = document.querySelector(".resp-input")

    main.classList.add("hid");
    header.classList.add("hid");
    respmenu.classList.add("show");
    orderBy.style.display="none"

    function removeEfx(){
        main.classList.remove("hid");
        header.classList.remove("hid");
        respmenu.classList.remove("show")
        orderBy.style.display="flex"
    }

    document.querySelector("#ext").addEventListener("click", ()=>{removeEfx()});
    document.querySelector("#btn-todas").addEventListener("click", ()=>{removeEfx()});
    document.querySelector("#btn-bares").addEventListener("click", ()=>{removeEfx()});
    document.querySelector("#btn-cervecerias").addEventListener("click", ()=>{removeEfx()});
    document.querySelector("#btn-centroCultural").addEventListener("click", ()=>{removeEfx()});
    document.querySelector("#btn-boliches").addEventListener("click", ()=>{removeEfx()});
    document.querySelector("#btn-patioDeComidas").addEventListener("click", ()=>{removeEfx()});
    document.querySelector("#btn-cafeterias").addEventListener("click", ()=>{removeEfx()});

}


// DARK && LIGHT THEMES
export function lightMode(){
    let body = document.querySelector("body")
    let a = document.querySelector("a")
    let lftm = document.querySelector("#leftMain")
    let rtm = document.querySelector("#rightMain")
    let nav = document.querySelector("nav")
    let form = document.querySelector("form")
    let tarjetas = document.querySelectorAll(".tarjeta")
    let categs = document.querySelectorAll(".categorias")
    let sbar = document.querySelector('input[type="search"]')
    let resInput = document.querySelector(".resp-input")

    resInput.classList.add("lightmode")
    sbar.classList.add("lightmode")
    for(let i=0; i < categs.length; i++ ){
        categs[i].classList.add("lightmode")
    }
    for(let i=0; i < tarjetas.length; i++ ){
        tarjetas[i].classList.add("lightmode")
    }
    form.classList.add("lightmode")
    nav.classList.add("lightmode")
    rtm.classList.add("lightmode")
    lftm.classList.add("lightmode")
    a.classList.add("lightmode")
    body.classList.add("lightmode")
    
    localStorage.setItem("theme", "light")
}

export function darkMode(){
    let body = document.querySelector("body")
    let a = document.querySelector("a")
    let lftm = document.querySelector("#leftMain")
    let rtm = document.querySelector("#rightMain")
    let nav = document.querySelector("nav")
    let form = document.querySelector("form")
    let tarjetas = document.querySelectorAll(".tarjeta")
    let categs = document.querySelectorAll(".categorias")
    let sbar = document.querySelector('input[type="search"]')
    let resInput = document.querySelector(".resp-input")

    resInput.classList.remove("lightmode")
    sbar.classList.remove("lightmode")
    for(let i=0; i < categs.length; i++ ){
        categs[i].classList.remove("lightmode")
    }
    for(let i=0; i < tarjetas.length; i++ ){
        tarjetas[i].classList.remove("lightmode")
    }
    form.classList.remove("lightmode")
    nav.classList.remove("lightmode")
    rtm.classList.remove("lightmode")
    lftm.classList.remove("lightmode")
    a.classList.remove("lightmode")
    body.classList.remove("lightmode")
    
    localStorage.setItem("theme", "dark")
}

// profile themes
export function lightModeProfile(){
    let body = document.querySelector("body")
    let a = document.querySelector("a")
    let nav = document.querySelector("nav")
    let tarjetas = document.querySelectorAll(".tarjeta")
    let userMain = document.querySelectorAll(".userMain")


    for( let main of userMain){
        main.classList.add("lightmode")
    }

    for(let i=0; i < tarjetas.length; i++ ){
        tarjetas[i].classList.add("lightmode")
    } 
    nav.classList.add("lightmode")
    a.classList.add("lightmode")
    body.classList.add("lightmode")
    
    localStorage.setItem("theme", "light")
}

export function darkModeProfile(){
    let body = document.querySelector("body")
    let a = document.querySelector("a")
    let nav = document.querySelector("nav")
    let tarjetas = document.querySelectorAll(".tarjeta")
    let userMain = document.querySelectorAll(".userMain")
    


    for( let main of userMain){
        main.classList.remove("lightmode")
    }
    for(let i=0; i < tarjetas.length; i++ ){
        tarjetas[i].classList.remove("lightmode")
    } 
    nav.classList.remove("lightmode")
    a.classList.remove("lightmode")
    body.classList.remove("lightmode")
    
    localStorage.setItem("theme", "dark")
}