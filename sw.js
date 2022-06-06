
let assets = [  "./", 
                "./index.html", 
                "./styles.css", 
                "./script.js", 
                "./components/functions.js", 
                "./components/orderby.js", 
                "./profile/profile.html",
                "./profile/profile.js" ]

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("assets").then(cache =>{
            cache.addAll(assets);
        })
    )
})

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(res){
                return res;
            }else{
                return fetch(event.request)
            }
        })
    )
})