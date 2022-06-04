let d = document;
let n = navigator;
let k = 'AIzaSyCY-PY3Iym_pLYMe-hSbL0KyQHh_57z-04-'

// UBICACION DEL USUARIO EN TIEMPO REAL

export function getUserLocation(){
    options = {
        enableHighAccuracy : true,
        timeout: 5000,
        maximumAge: 0
    };

    const succes = (position)=>{
        let coords = position.coords;
        
    }
    
    const error = (err) =>{
        alert(`ERROR(${err.code}): ${err.message}`);
};

    n.geolocation.watchPosition(succes, error, options);
}

// MOSTRAR EN MAPA UBICACIONES DE LOS BARES

export function showLocationMap(position){
    let lat = position.coord.lat;
    let long = position.coord.lng;
    const barPosition = {lat: lat, lng: long};

    marker.setPosition(barPosition);
    map.setCenter(barPosition);

}