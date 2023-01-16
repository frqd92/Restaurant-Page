import { navIndicators } from './renderNav';
export function makeMenu(){
    navIndicators("menu")
    if(document.body.children.length===3){
        document.body.children[2].remove();
    }
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");
    document.body.appendChild(menuDiv);

}