function rankSort() {
    const MAIN = document.getElementById("mainCenter");
    let items = Array.prototype.slice.call(document.querySelectorAll(".tarjeta"))
    
    items.sort((a, b)=>{
        return (a.children[1].innerHTML > b.children[1].innerHTML) ? -1 : (a.children[1].innerHTML < b.children[1].innerHTML) ? 1 : 0;
     });
     for (let i = 0; i < items.length; i++) {
         MAIN.appendChild(items[i]);
     }
 }

function vipSort(){
    const MAIN = document.getElementById("mainCenter");
    let items = Array.prototype.slice.call(document.querySelectorAll(".tarjeta"))
    
    items.sort((a, b)=>{
        return (a.children[5].innerText == "" && b.children[5].innerText != "") ? 1 : (b.children[5].innerText == "" && a.children[5].innerText != "") ? -1 : 0;
     });
     for (let i = 0; i < items.length; i++) {
         MAIN.appendChild(items[i]);
     }
 }


 export{
     rankSort,
     vipSort
 }