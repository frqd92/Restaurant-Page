import { makeHome } from "./renderElements/makeHome";
import { navIndicators } from "./renderElements/renderNav";
export function enterSite(){
    const layerHouse = document.querySelector(".layer-house");
    const menuItems = document.querySelectorAll(".nav-options p");
    const nav = document.querySelector("nav");
    const navOptions = document.querySelector(".nav-options");
    document.querySelector(".enter-btn").style.opacity="0";
    makeHome(true);

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
    }, 1000);

    function itemAppear(i){
        setTimeout(()=>{
            menuItems[i].style.opacity="1";
        },200 + (200*i));
    }
    setTimeout(()=>{navIndicators("title")}, 700)
}