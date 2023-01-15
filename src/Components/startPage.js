import { enterSite } from "./enterBtn";
export function startPage(){
    const nav = document.querySelector("nav");
    const navOptions = document.querySelector(".nav-options");
    const enterBtn = document.createElement("button");

    navOptions.style.display="none";
    document.body.classList.add("body-enter")
    nav.appendChild(enterBtn);
    enterBtn.innerText="Enter Inn";
    enterBtn.classList.add("enter-btn")
    enterBtn.addEventListener("click", enterSite)
}
