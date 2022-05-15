export function changeMode(){
    if(localStorage.getItem("theme")== "dark" ){
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
} else {

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
}

// MOSTRAR MAPA CON BOTON VER UBICACIÓN

export function verUbicacion(id){
    const mostrar = document.getElementById(`${id}`);
    mostrar.style.display == "none" ? mostrar.style.display = "flex" : mostrar.style.display = "none";

}

// SEARCHBAR
// JavaScript code

export function searching() {
    let tarjetas = document.querySelectorAll(".tarjeta");
	let input = document.getElementById('search-bar').value;
	input=input.toLowerCase();
	
	for (i = 0; i < bares.length; i++) {
		if (!bares[i].nombre.toLowerCase().includes(input) ) {
			tarjetas[i].style.display="none";
		}
		else {
			tarjetas[i].style.display="flex";				
		}
	}

    // (!bares[i].barrio.toLowerCase().includes(input))
}

