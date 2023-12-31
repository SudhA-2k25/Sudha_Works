const audio = document.getElementById('audio');
const playlist = document.getElementById('playlist');


playlist.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        audio.src = e.target.getAttribute('href');
        audio.play();
    }
});
