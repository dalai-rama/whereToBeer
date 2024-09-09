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
    let bares = await fetch("https://kaio-rama.github.io/whereToBeer/bares.json")
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
            <img src="/whereToBeer/${imagen}">
        </div>
        <p>${descripcion}</p>
        <h5>${direccion}  -  ${barrio}</h5>
        <h6>${vipcomerce ? "<b id='vipcommerse'>VIP COMMERCE</b> - Este local cuenta con descuentos exclusivos." : ""} </h6>
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

    let rmv = document.querySelectorAll(".categorias")
    rmv.forEach(o => { 
        o.addEventListener("click", ()=>{removeEfx()})
        
    });

}


// DARK && LIGHT THEMES
export function lightMode(){
    let themeArr = [
        document.querySelector("body"),
        document.querySelector("a"),
        document.querySelector("#leftMain"),
        document.querySelector("#rightMain"),
        document.querySelector("nav"),
        document.querySelector("form"),
        document.querySelector('input[type="search"]'),
        document.querySelector(".resp-input")
    ]

    document.querySelectorAll(".tarjeta").forEach(elm => themeArr.push(elm))
    document.querySelectorAll(".categorias").forEach(elm => themeArr.push(elm))

    themeArr.forEach( elm => {
        elm.classList.add("lightmode")
    })
    
    localStorage.setItem("theme", "light")
}

export function darkMode(){
    let themeArr = [
        document.querySelector("body"),
        document.querySelector("a"),
        document.querySelector("#leftMain"),
        document.querySelector("#rightMain"),
        document.querySelector("nav"),
        document.querySelector("form"),
        document.querySelector('input[type="search"]'),
        document.querySelector(".resp-input")
    ]

    document.querySelectorAll(".tarjeta").forEach(elm => themeArr.push(elm))
    document.querySelectorAll(".categorias").forEach(elm => themeArr.push(elm))

    themeArr.forEach( elm => {
        elm.classList.remove("lightmode");
    })
    
    localStorage.setItem("theme", "dark");
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