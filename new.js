document.getElementById('playCard').addEventListener('click', function() {
    var audio = document.getElementById('audio-player');
    // audio.play();
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});



// document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('click', function() {
//         var audio = document.getElementById('audio-player');
//         var newAudioSrc = this.getAttribute('data-audio');
        
//         // Update the source of the audio player
//         var audioSource = document.getElementById('audio-source');
//         // var audioSource = document.getElementById('audio-source');
//         audioSource.src = newAudioSrc;
        
//         // Reload and play the audio
//         audio.load();
//         audio.play();
//     });
// });
