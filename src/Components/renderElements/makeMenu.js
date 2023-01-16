import { navIndicators } from './renderNav';


export function makeMenu(){
    const layerHouse = document.querySelector(".layer-house");
    const layerClouds = document.querySelector(".layer-clouds");
    const layerForest = document.querySelector(".layer-forest");

    navIndicators("menu")
    if(document.body.children.length===3){
        document.body.children[2].remove();
    }
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");
    document.body.appendChild(menuDiv);

    document.querySelector(".nav-enter").style.opacity="0.3";
    layerHouse.style.opacity="0";
    layerClouds.style.opacity="1";
    layerForest.style.opacity="1";
    layerHouse.style.display="none";
    layerClouds.style.display="block";
    layerForest.style.display="block";
    
    

}