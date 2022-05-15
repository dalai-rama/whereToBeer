let Usuario = class{
    constructor(nombre,edad,email,contraseña){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.contraseña = contraseña;
    }
}

//let localStorage1 = localStorage.setItem("clave", "valor")
// mandar valores al localstorage

//let localStorage2 = localStorage.getItem("clave", "valor")
// obtener valores del localsotrage

let usuario = new Usuario("Hernan", "23", "hernan@ejemlo.com", "contraseña123");

const profileMain = document.querySelector("#profileApp");

profileMain.innerHTML = `
<h2> ¡Hola ${usuario.nombre}! </h2>
<div id="avatar"> img.avtr </div>
<h3> ¿Qué lugar vas a conocer hoy? </h3>
`

