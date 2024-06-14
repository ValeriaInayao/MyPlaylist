document.addEventListener("DOMContentLoaded", function() {
    const playPauseBtns = document.querySelectorAll('.playPauseBtn');
    const audios = document.querySelectorAll('.audio');

    playPauseBtns.forEach((btn, index) => {
        const audio = audios[index];

        btn.addEventListener("click", function() {
            if (audio.paused) {
                // Pause all audios
                audios.forEach(aud => {
                    aud.pause();
                    aud.currentTime = 0;
                });
                // Reset all buttons
                playPauseBtns.forEach(button => button.textContent = "Reproducir");

                audio.play();
                btn.textContent = "Pausar";
            } else {
                audio.pause();
                btn.textContent = "Reproducir";
            }
        });

        audio.addEventListener("ended", function() {
            btn.textContent = "Reproducir";
        });
    });
});
