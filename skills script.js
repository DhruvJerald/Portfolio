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
  