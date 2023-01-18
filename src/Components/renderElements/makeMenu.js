import { navIndicators } from './renderNav';
import { showHouse } from '../bgVisibility';
import '/src/styles/menu.css';
import '/src/styles/background.css';
import vultureBolognese from "/src/Assets/images/meals/vulture-bolognese.png";
import pigeonBurger from '/src/Assets/images/meals/pigeon-burger.png';
import ostrichSoup from '/src/Assets/images/meals/ostrich-soup.png';
import titSandwich from '/src/Assets/images/meals/tit-sandwich.png';
import bisonSteak from '/src/Assets/images/meals/bison-steak.png';
import snakeSushi from '/src/Assets/images/meals/snake-sushi.png';
import lasagna from '/src/Assets/images/meals/lasagna.png';
import platter from '/src/Assets/images/meals/platter.png';


export function makeMenu(){
    navIndicators("menu");
    if(document.body.children.length===3)document.body.children[2].remove();
    showHouse(false);
    menuCont();
}

function menuCont(){
    const layerClouds = document.querySelector(".layer-clouds");
    const layerForest = document.querySelector(".layer-forest");
    const menuDiv = document.createElement("div");
    const buttonLeft = document.createElement("div");
    const buttonRight = document.createElement("div");
    const menuGrid = document.createElement("div");

    buttonLeft.innerText = "Elements of the sky";
    buttonRight.innerText = "Elements of the forest";

    menuDiv.classList.add("menu-div");
    buttonLeft.classList.add("menu-btn");
    buttonRight.classList.add("menu-btn");
    menuGrid.classList.add("menu-grid");

    menuDiv.appendChild(buttonLeft);
    menuDiv.appendChild(buttonRight);
    menuDiv.appendChild(menuGrid);
    document.body.appendChild(menuDiv);

    buttonLeft.addEventListener("mouseover", ()=>{
        buttonLeft.classList.add("menu-btn-hover-sky");
        layerClouds.classList.add("layer-clouds-select");
    })
    buttonLeft.addEventListener("mouseleave", ()=>{
        buttonLeft.classList.remove("menu-btn-hover-sky");
        layerClouds.classList.remove("layer-clouds-select");
    })
    buttonRight.addEventListener("mouseover", ()=>{
        buttonRight.classList.add("menu-btn-hover-forest");
        layerForest.classList.add("layer-forest-select");
    })
    buttonRight.addEventListener("mouseleave", ()=>{
        buttonRight.classList.remove("menu-btn-hover-forest");
        layerForest.classList.remove("layer-forest-select");
    })
    buttonLeft.addEventListener("click", (e)=>{
        buttonRight.style.background = 'none'
        buttonLeft.style.background = 'rgba(19, 87, 170, 0.136)'
        generateMenuItems("sky", menuGrid);
    })
    buttonRight.addEventListener("click", (e)=>{
        buttonLeft.style.background = 'none'
        buttonRight.style.background ='rgba(3, 65, 0, 0.136)';
        generateMenuItems("forest", menuGrid);
    })
    
}

function generateMenuItems(element, grid){
    grid.innerHTML = "";
    let meals;
    element==="sky"?meals = skyMeals:meals = forestMeals;
    for(let i=0;i<meals.length;i++){
        const layer = document.createElement("div");
        let name = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");
        layer.classList.add("menu-layer");
        name.classList.add("menu-name");
        if(element==="forest")name.classList.add("menu-name-forest");
        description.classList.add("menu-description");
        img.classList.add("menu-img");
        for(let [key, value] of Object.entries(meals[i])){
            name.innerText =  value.name;
            description.innerText = value.description;
            img.src = value.img;
        }
        layer.appendChild(name);
        layer.appendChild(description);
        layer.appendChild(img);
        grid.appendChild(layer)
        layer.addEventListener("mouseover",()=>{
            element==="sky"?layer.style.background='rgba(19, 87, 170, 0.136)':layer.style.background='rgba(3, 65, 0, 0.136)';
            menuImg(img, layer)
        });
        layer.addEventListener("mouseleave", ()=>{
            img.style.display="none";
            layer.style.background="none";
        })
console.log("fart")
    }
}
function menuImg(img, layer){
    img.style.display="block";
    layer.addEventListener("mousemove", (e)=>{
        img.style.top= `${e.layerY + 100}px`;
    })

}

const skyMeals = [
    [{
        name: "Vulture Bolognese",
        description: "Authentic Italian cuisine, unauthenticated with vulture meat.",
        img: vultureBolognese
    }],
    [{
        name: "Pigeon Burger",
        description: "For pigeon population control.",
        img: pigeonBurger
    }],
    [{
        name: "Ostrich Soup",
        description: "Tastes pretty bad but now you can say you tried it",
        img: ostrichSoup
    }],
    [{
        name: "Tit sandwich",
        description: "Sandwich made from a pair of forest tits.",
        img: titSandwich
    }]
];

const forestMeals = [
    [{
        name: "Bison steak with bear sauce",
        description: "Chef won't tell us what the hell bear sauce is",
        img: bisonSteak
    }],
    [{
        name: "Snake sushi",
        description: "I think it's safe to eat",
        img: snakeSushi
    }],
    [{
        name: "Monkey lasagna",
        description: "Are you really going to eat monkey you monster?",
        img: lasagna
    }],
    [{
        name: "Roadkill platter",
        description: "technically forest animals... fried, on a platter",
        img: platter
    }]
];

