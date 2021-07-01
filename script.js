window.addEventListener('popstate',()=>{
//alert("sonething has changed")
cleanup()

console.log("popstate working after set ")
let url = window.location.href;
let target = url.substring(url.indexOf('#') +1)
//console.log(target);
let doc = document.getElementById(target)
doc.classList.remove("hidden")
})



function cleanup(){
    all = ["help","about","contact","home"]

    all.map((individual)=>{
         document.getElementById(individual).className = "content hidden "
           
         }
        
    )
}






