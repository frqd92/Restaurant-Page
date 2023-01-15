import layerClouds from "/src/Assets/images/layer-clouds.png";
import layerForest from "/src/Assets/images/layer-forest.png";
import layerHouse from "/src/Assets/images/layer-house.png";
import layerNoHouse from "/src/Assets/images/layer-nohouse.png";


const background = document.createElement("div");
background.classList.add("background");
export function renderBackground(){  
    console.log(layerClouds)
    for(let i=0;i<4;i++){
        const layerContainer = document.createElement("div");
        layerContainer.classList.add("layer-container");
        const layer = document.createElement("img");
        layer.classList.add("layer");
        switch(i){
            case 0: 
            layer.classList.add("layer-nohouse");
            layer.src=layerNoHouse;
            break;

            case 1:
            layer.classList.add("layer-house");
            layer.src=layerHouse;
            break;

            case 2:
            layer.classList.add("layer-clouds");
            layer.src=layerClouds;
            break;

            case 3:
            layer.classList.add("layer-forest");
            layer.src=layerForest;
        }
        layerContainer.appendChild(layer);
        background.appendChild(layerContainer);
    }
    
    document.body.prepend(background);
    
}