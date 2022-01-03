var lengthOfArray = document.querySelectorAll(".drum").length;

for(var i = 0;i<lengthOfArray;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        playSounds(this.textContent);
        animation(this.textContent);
    });
}

for(var i = 0;i<lengthOfArray;i++){
    document.querySelectorAll(".drum")[i].addEventListener("keydown",function(evt){
        playSounds(evt.key);
        animation(evt.key);
    });
}


function playSounds(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
    
        default:
            break;
    }
}

function animation(cls){
    document.querySelector("."+cls).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+cls).classList.remove("pressed");
    },100)
    
}