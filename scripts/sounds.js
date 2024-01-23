MyGame.sounds.manager = function () {
    allSounds = [];

    function play(fx, loop) {
        sound = new Audio(fx);
        sound.volume = MyGame.data.volume;
        if (loop) {
            sound.loop = loop;
            allSounds.push({ src: fx, sound: sound });
        }
        sound.play();
    }

    function clearSound(src) {
        for (let sound in allSounds) {
            if (allSounds[sound].src == src) {
                allSounds[sound].sound.pause();
                allSounds.splice(sound, 1);
            }
        }
    }

    function playAll() {
        for (let sound in allSounds) {
            allSounds[sound].sound.play();
        }
    }

    function pauseAll() {
        for (let sound in allSounds) {
            allSounds[sound].sound.pause();
        }
    }

    function clearAll() {
        pauseAll();
        allSounds = [];
    }

    let api = {
        play: play,
        playAll: playAll,
        clearAll: clearAll,
        pauseAll: pauseAll,
        clearSound: clearSound,
    }

    return api;
};