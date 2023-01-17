import '/src/styles/home.css';
import { navIndicators } from './renderNav';
import { showHouse } from '../bgVisibility'
export function makeHome(from){
    showHouse(true);
    if(document.body.children.length===3){
        document.body.children[2].remove();
    }
    if(document.querySelector(".about-section")===null){
        const aboutSection = document.createElement("div");
        aboutSection.classList.add("about-section");
        for(let i=0;i<3;i++){
            const p = document.createElement("p");
            p.classList.add("about-paragraph")
            switch(i){
                case 0: 
                p.innerText=
                `Established before your grandma was even born, we are the world's most exclusive game food restaurant.`;
                break;
                case 1:
                p.innerText=
                `When eating, be careful not to swallow the bullets or you could join the Darwin Awards Hall of Fame gallery above the toilets.`;
                break;
                case 2:
                p.innerText=
                `\nThank you for visiting.`;
            }
            aboutSection.appendChild(p);
        }
        document.body.appendChild(aboutSection);    
    }
    if(!from){
        navIndicators("home")
    }
 
}