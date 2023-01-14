const background = document.createElement("div");
background.classList.add("background");
export function renderBackground(){  
    for(let i=0;i<4;i++){
        const layerContainer = document.createElement("div");
        layerContainer.classList.add("layer-container");
        const layer = document.createElement("img");
        layer.classList.add("layer");
        switch(i){
            case 0: 
            layer.classList.add("layer-nohouse");
            layer.src='/src/Assets/images/layer-nohouse.png';
            break;

            case 1:
            layer.classList.add("layer-house");
            layer.src='/src/Assets/images/layer-house.png';
            break;

            case 2:
            layer.classList.add("layer-clouds");
            layer.src='/src/Assets/images/layer-clouds.png';
            break;

            case 3:
            layer.classList.add("layer-forest");
            layer.src='/src/Assets/images/layer-forest.png';
        }
        layerContainer.appendChild(layer);
        background.appendChild(layerContainer);
    }
    
    document.body.prepend(background);
    
}