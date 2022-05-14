let formulario = document.getElementById("form");

formulario.innerHTML = `
<h3>Nombre del Lugar</h3>
<input type="name" placeholder="¿Como se llama el establecimiento?"></input>
<h3> Breve descripción del Lugar</h3>
<input type="textarea" placeholder="Breve descripción (max. 140 cáracteres)" maxlength="140"></input>
<h3> Dirección del lugar </h3>
<input type="textarea" placeholder="Ingrese la dirección exacta"></input>
<h3> Barrio donde se encuentra el establecimiento </h3>
<input type="textarea"></input>
<h3> Categorías</h3>
<input type="checkbox"> Bar </input>
<input type="checkbox"> Cervecería </input>
<input type="checkbox"> Boliche </input>
<input type="checkbox"> Centro Cultural </input>
<input type="checkbox"> Patio de Comidas </input>
<h3> Imagenes del lugar (máximo 3)</h3>
<input type="file" accept="image/*"></input>
`

