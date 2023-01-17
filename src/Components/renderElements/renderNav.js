import "/src/styles/nav.css";
import { makeContacts } from "./makeContacts";
import { makeHome } from "./makeHome";
import { makeMenu } from "./makeMenu";
export function renderNav(){
    const nav = document.createElement("nav");
    const title = document.createElement("div");
    const navOptions = document.createElement("div");
    title.classList.add("title")
    navOptions.classList.add("nav-options");
    for(let i=0;i<3;i++){
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        switch(i){
            case 0: 
            p.innerText="The Hunter's Inn"; 
            p2.innerText="Home";
            p2.addEventListener("click", ()=>{makeHome(false)});
            break;
            case 1: 
            p.innerText="de natura ad laminam";
            p2.innerText="Menu";
            p2.addEventListener("click", makeMenu);
            break;
            case 2:
            p2.innerText="Contacts";
            p2.addEventListener("click", makeContacts);
        };
        if(i<2)title.appendChild(p);
        navOptions.appendChild(p2);
    }
    nav.appendChild(title);
    nav.appendChild(navOptions);
    document.body.appendChild(nav);
    createIndicators(navOptions)
};

export function createIndicators(container){
    const div = document.createElement("div");
    const right = document.createElement("p");
    const left = document.createElement("p");
    div.classList.add("indicators");
    right.textContent="|";
    left.innerText="|";
    div.appendChild(right);
    div.appendChild(left);
    container.appendChild(div);
    window.addEventListener("resize", windowResize)
}
export function navIndicators(element){
    const div = document.querySelector(".indicators");
    const [length, [yPos, xPos]] = getPos(element);
    div.style.width = length;
    div.style.top = `${yPos}px`;
    div.style.left = `${xPos - 15}px`;
}
function getPos(element){
    const [home, menu, contacts] = document.querySelectorAll(".nav-options > p");
    const title = document.querySelector(".title > p")
    switch(element){
        case "home":
        return [`${home.scrollWidth + 25}px`, [home.offsetTop, home.offsetLeft]];
        case "menu":
        return [`${menu.scrollWidth + 25}px`, [menu.offsetTop, menu.offsetLeft]];
        case "contacts":
        return [`${contacts.scrollWidth + 25}px`,[contacts.offsetTop, contacts.offsetLeft] ];
        case "title":
        return [`${title.scrollWidth + 30}px`,[title.offsetTop + 10, title.offsetLeft]];
    }
}
function windowResize(){
   switch(document.body.children[2].className){
    case "about-section": navIndicators("home"); break;
    case "menu-div": navIndicators("menu"); break;
    case "contact-div": navIndicators("contacts");
   }
}
