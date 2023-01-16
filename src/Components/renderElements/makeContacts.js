import '/src/styles/contacts.css'
import { navIndicators } from './renderNav';
export function makeContacts(){
    if(document.body.children.length===3){
        document.body.children[2].remove();
    }
    const contactDiv = document.createElement("div");
    const p = document.createElement("p");
    const link = document.createElement("a");
    p.innerText = `Click the button below to contact us or to make reservations`;
    contactDiv.classList.add("contact-div")
    link.classList.add("contact-link");
    link.innerText=`Book Your Table`;
    link.href=`https://github.com/frqd92/Restaurant-Page`;
    link.target="blank";
    contactDiv.appendChild(p)
    contactDiv.appendChild(link);
    document.body.appendChild(contactDiv);
    navIndicators("contacts")
}

