export function showHouse(show){
    const layerHouse = document.querySelector(".layer-house");
    const layerClouds = document.querySelector(".layer-clouds");
    const layerForest = document.querySelector(".layer-forest");
    if(!show){
        layerHouse.style.opacity="0";
        layerClouds.style.opacity="1";
        layerForest.style.opacity="1";
        layerHouse.style.display="none";
        layerClouds.style.display="block";
        layerForest.style.display="block";
    }
    else{
        layerHouse.style.opacity="1";
        layerClouds.style.opacity="0";
        layerForest.style.opacity="0";
        layerHouse.style.display="block";
        layerClouds.style.display="none";
        layerForest.style.display="none";
    }
}