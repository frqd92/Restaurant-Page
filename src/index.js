//--------------------------------------------------------------------------------//

const nav = document.querySelector("nav");
const navOptions = document.querySelector(".nav-options");
const enterBtn = document.createElement("button");
window.onload = ()=>{
    navOptions.style.display="none";
    document.body.classList.add("body-enter")
    nav.appendChild(enterBtn);
    enterBtn.innerText="Enter Inn";
    enterBtn.classList.add("enter-btn")
    enterBtn.addEventListener("click", enterSite)
}

//--------------------------------------------------------------------------------//

const layerHouse = document.querySelector(".layer-house");
const layerClouds = document.querySelector(".layer-clouds");
const layerForest = document.querySelector(".layer-forest");
const layerNoHouse = document.querySelector(".layer-nohouse");
const menuItems = document.querySelectorAll(".nav-options p") 
function enterSite(){
    enterBtn.style.opacity="0";
    setTimeout(()=>{
        nav.classList.add("nav-enter");
     
    },300)
    setTimeout(()=>{
        navOptions.style.display="flex";
        enterBtn.remove();
    }, 660)
    setTimeout(()=>{
        for(let i=0;i<3;i++){
            itemAppear(i);
        }
    }, 600)
    setTimeout(()=>{
        layerHouse.style.opacity="1";
    }, 1800)
    setTimeout(()=>{
        layerClouds.style.opacity="1";
        layerForest.style.opacity="1";
        layerNoHouse.style.opacity="0";
    },1850)
    function itemAppear(i){
        setTimeout(()=>{
            menuItems[i].style.opacity="1";
        },200 + (200*i))
    }

}