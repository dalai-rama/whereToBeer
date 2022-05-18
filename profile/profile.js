let Usuario = class{
    constructor(nombre,edad,email,contraseña, avatar){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.contraseña = contraseña;
        this.avatar = avatar;
    }
}

//let localStorage1 = localStorage.setItem("clave", "valor")
// mandar valores al localstorage

//let localStorage2 = localStorage.getItem("clave", "valor")
// obtener valores del localsotrage

let usuario = new Usuario("Hernan", "23", "hernan@ejemlo.com", "contraseña123", "https://randomuser.me/api/portraits/lego/2.jpg");

const profileMain = document.querySelector("#profileApp");

profileMain.innerHTML = `
<h2> ¡Hola ${usuario.nombre}! </h2>
<img id="avatar" src="${usuario.avatar}" style="height: 150px; border-radius: 50%;">
<h3 style="color: white;"> ¿Qué lugar vas a conocer hoy? </h3>

`

