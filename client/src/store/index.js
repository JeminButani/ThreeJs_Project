import { proxy } from "valtio"; 

const state = proxy({
    // This is the state object that will be used to store the data that will be used in the app.
    intro: true,
    color: '#000',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./react.png",
    fullDecal: "./react.png",
});

export default state;