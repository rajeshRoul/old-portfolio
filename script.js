// For animation behind profile pic
// this will rotate a png image behind profile pic
var profileAnimation = function(){
    let animationImage = document.getElementById('profile-animation');
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

// Display Skills Tools
var changeToolPic = function(){
    let image = document.getElementById('knowledge-icon-img');
    let tools = [
        "pics/tool-logos/html.png",
        "pics/tool-logos/css.png",
        "pics/tool-logos/express.png",
        "pics/tool-logos/javascript.png",
        "pics/tool-logos/node.svg",
        "pics/tool-logos/java.png"
    ];
    let i=0; 
    let flag = true;
    setInterval(function(){
        if(window.getComputedStyle(document.getElementById('knowledge-icon')).display != 'none'){
            if(flag){
                image.style.width = "180px";
                image.style.height = "120px";
                if(i >= tools.length){
                    i=0;
                }
                image.setAttribute("src", tools[i]);
                i += 1;
                flag = false;
            }else{
                image.style.width = 0;
                image.style.height = 0;
                flag = true;
            }
        }
        
    }, 3000);
}

// Form Submit function
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

// Header Option Function
function headerOption(){
    let headerButton = document.getElementById("header-option-button");
    let headerItems = document.getElementById("header-options-small-screen");
    headerButton.addEventListener('click', function(){
            headerItems.classList.toggle("header-options-hide");
            headerItems.classList.toggle("header-options-view");
    });
}

// Fill Bars Animation
function fillBars(){
    var bars = document.querySelectorAll(".skill-percent");
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
}

// Initialize big and small stars
function initializeStars(){
    let container = document.getElementById('section-profile');
    let count = 0;

    // Add Star Manually
    container.addEventListener('click', function(event){
        let big = document.createElement("div");
        big.classList.add('star');
        container.appendChild(big);
        // Get coordinate in percentage
        var rect = container.getBoundingClientRect();
        let top = container.clientHeight;
        let left = container.clientWidth;
        top = (event.clientY - rect.top)/top;
        left = event.clientX/left;
        top = top * 100;
        left = left * 100;
        big.style.top = top + "%";
        big.style.left = left + "%";
    })

    // Add Star in Intervals automatically
    let interval = setInterval(function(){
        let big = document.createElement("div");
        big.classList.add('star');
        let smallA = document.createElement("div");
        smallA.classList.add('star-small');
        let smallB = document.createElement("div");
        smallB.classList.add('star-small');
        container.appendChild(big);
        container.appendChild(smallA);
        container.appendChild(smallB);
        big.style.top = Math.floor(Math.random() * 100) + "%";
        big.style.left = Math.floor(Math.random() * 100) + "%";
        smallA.style.top = Math.floor(Math.random() * 100) + "%";
        smallA.style.left = Math.floor(Math.random() * 100) + "%";
        smallB.style.top = Math.floor(Math.random() * 100) + "%";
        smallB.style.left = Math.floor(Math.random() * 100) + "%";
        count++;
        if(count > 50){
            clearInterval(interval);
        }
    },100);
}


changeToolPic();
profileAnimation();
headerOption();
initializeStars();
fillBars();