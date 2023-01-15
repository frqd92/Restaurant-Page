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
            break;
            case 1: 
            p.innerText="de natura ad laminam";
            p2.innerText="Menu";
            break;
            case 2:
            p2.innerText="Contacts";
        }
        if(i<2)title.appendChild(p);
        navOptions.appendChild(p2);

    }
    nav.appendChild(title);
    nav.appendChild(navOptions);
    document.body.appendChild(nav);

};

