function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "Devoloper",
    "Designer",
    "Photographer",
    
    
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

function createSnow() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Snowfall duration
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Random sizes
    snowflake.innerText = "❄";
    document.body.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }
  
  setInterval(createSnow, 200);

  const musicButton = document.getElementById("toggle-music");
  const musicAudio = document.getElementById("christmas-music");
  
  let isPlaying = false;
  
  musicButton.addEventListener("click", () => {
    if (isPlaying) {
      musicAudio.pause();
      musicButton.textContent = "🎵"; // Change icon back
    } else {
      musicAudio.play();
      musicButton.textContent = "⏸️"; // Change icon to pause
    }
    isPlaying = !isPlaying;
  });