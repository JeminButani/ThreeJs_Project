import { proxy } from "valtio"; 

const state = proxy({
    // This is the state object that will be used to store the data that will be used in the app.
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png",
});

export default state;