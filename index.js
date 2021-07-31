var buttons = document.querySelectorAll(".drum").length;
// console.log(buttons);

for(var i=0; i<buttons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick(){
    
    var key = this.innerHTML;
    makeSound(key);
    buttonPress(key);
}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonPress(event.key);
})

function makeSound(key){
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
            console.log(key);
            break;
    }
}

function buttonPress(currentkey){
    var pressedkey = document.querySelector("."+currentkey);
    pressedkey.classList.add("pressed");

    setTimeout(function(){
        pressedkey.classList.remove("pressed");
    }, 100);
}