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
    let i=0, bgi = 0;
    let flag = true;
    let bg = ["radial-gradient(var(--color-primary-light) 33%, var(--color-secondary) 66%, var(--color-primary) 100%)",
"radial-gradient(var(--color-primary) 33%, var(--color-primary-light) 66%, var(--color-secondary) 100%)",
"radial-gradient(var(--color-secondary) 33%, var(--color-primary) 66%, var(--color-primary-light) 100%)"]
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
        if(bgi>2){
            bgi=0;
        }
        document.getElementById("section-profile").style.backgroundImage = bg[bgi];
        bgi++;
    }, 1500);
}

function myFunction()
{
    var elements = document.getElementsByClassName("formVal");
    var formData = new FormData(); 
    for(var i=0; i<elements.length; i++)
    {
        formData.append(elements[i].name, elements[i].value);
    }
    var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function()
        {
            if(xmlHttp.readyState == 4)
            {
                if(xmlHttp.status == 200){
                    document.getElementById('message-form').reset();
                    document.getElementById('result-status').classList.toggle('result-stat-class');
                    setTimeout(function(){
                        document.getElementById('result-status').classList.toggle('result-stat-class');
                    }, 6000);
                }else{
                    window.alert('Error in sending Message\nPlease try after sometime or try a different way to contact');
                }
                
            }
        }
        xmlHttp.open("post", "https://script.google.com/macros/s/AKfycbwW6ynkMq3Y-hGSqeqFth4F_NhTMiUWAgOdJjUXtw/exec"); 
        xmlHttp.send(formData); 
}

changeToolPic();
profileAnimation();

let headerButton = document.getElementById("header-option-button");
let headerItems = document.getElementById("header-options-small-screen");
headerButton.addEventListener('click', function(){
        headerItems.classList.toggle("header-options-hide");
        headerItems.classList.toggle("header-options-view");
});


var bars = document.querySelectorAll(".skill-percent");

// bars[0].style.width = '10%';
var isFilled = [];

for(let i=0; i<bars.length; i++){
    isFilled.push(false);
    bars[i].style.width = '0%';
}

function initialize(index){
    bars[index].style.width = "0%";
    isFilled[index] = false;
}

function fillBar(index, width){
    let count = 0;
    let interval = setInterval(function(){
        count++;
        bars[index].style.width = count + "%";
        if(count >= width){
            clearInterval(interval);
        }
    }, 20);
}

window.addEventListener("scroll", function(){
    for(let i=0; i < bars.length; i++){
        let coor = bars[i].getBoundingClientRect();
        if(!isFilled[i] && window.innerHeight > coor.y){
            let width = bars[i].getAttribute("data-value");
            fillBar(i, width);
            isFilled[i] = true;
        }else if(window.innerHeight < coor.y){
            initialize(i);
        }
    }
});