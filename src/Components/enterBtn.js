
import { makeHome } from "./renderElements/makeHome";
export function enterSite(){
    const layerHouse = document.querySelector(".layer-house");
    const layerClouds = document.querySelector(".layer-clouds");
    const layerForest = document.querySelector(".layer-forest");
    const layerNoHouse = document.querySelector(".layer-nohouse");
    const menuItems = document.querySelectorAll(".nav-options p");
    const nav = document.querySelector("nav");
    const navOptions = document.querySelector(".nav-options");

    document.querySelector(".enter-btn").style.opacity="0";
    makeHome();
    setTimeout(()=>{
        nav.classList.add("nav-enter");
    },300);
    setTimeout(()=>{
        navOptions.style.display="flex";
        document.querySelector(".enter-btn").remove();
    }, 660);
    setTimeout(()=>{
        for(let i=0;i<3;i++){
            itemAppear(i);
        }
    }, 600);
    setTimeout(()=>{
        layerHouse.style.opacity="1";
    }, 1800);
    setTimeout(()=>{
        layerClouds.style.opacity="1";
        layerForest.style.opacity="1";
        layerNoHouse.style.opacity="0";
    },1850);
    function itemAppear(i){
        setTimeout(()=>{
            menuItems[i].style.opacity="1";
        },200 + (200*i));
    }

}