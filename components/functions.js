// MOSTRAR MAPA CON BOTON VER UBICACIÓN

export function verUbicacion(data){
    let mostrar = document.getElementById(data);
    mostrar.style.display == "none" ? mostrar.style.display = "flex" : mostrar.style.display = "none";

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