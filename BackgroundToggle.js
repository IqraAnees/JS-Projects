//add a button tag in html with if mode
let modeBtn= document.querySelector("#mode");
let currMode = "Light";

modeBtn.addEventListener("click", () => {
    if(currMode === "Light") {
     currMode ="dark";
    document.querySelector("body").style.backgroundColor= "black";
    } else {
        currMode= "Light";
     document.querySelector("body").style.backgroundColor= "white";
    }
    console.log(currMode);
});