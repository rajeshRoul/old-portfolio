let animationImage = document.getElementById('profile-animation');

// For animation behind profile pic
// this will rotate a png image behind profile pic
var profileAnimation = function(){
    let angle = 0;
    let flag = true;
    setInterval(function(){
        if(flag){
            angle += 5;
        }else{
            angle -= 5;
        }
        
        if(angle >= 355){
            flag = false
        }else if(angle <= 5){
            flag = true;
        }
        animationImage.setAttribute("style", "transform: rotate(" + angle + "deg)");
    }, 200);
}

var changeToolPic = function(){
    let tools = [
        "pics/tool-logos/html.png",
        "pics/tool-logos/css.png",
        "pics/tool-logos/express.png",
        "pics/tool-logos/javascript.png",
        "pics/tool-logos/node.svg",
        "pics/tool-logos/java.png"
    ]
    let image = document.getElementById('knowledge-icon');
    let i=0;
    let flag = true;
    setInterval(function(){
        if(flag){
            image.style.width = "220px";
            // image.style.height = "160px";
            if(i >= tools.length){
                i=0;
            }
            image.setAttribute("src", tools[i]);
            i += 1;
            flag = false;
        }else{
            image.style.width = 0;
            // image.style.height = 0;
            flag = true;
        }
        
    }, 1500);
}

changeToolPic();
profileAnimation();

let headerButton = document.getElementById("header-option-button");
let headerItems = document.getElementById("header-options-small-screen");
headerButton.addEventListener('click', function(){
        headerItems.classList.toggle("header-options-hide");
        headerItems.classList.toggle("header-options-view");
})