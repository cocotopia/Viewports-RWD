console.log('hello world');

function resizeProfilling(mediaWidth) {
    if (mediaWidth.matches) {
        document.querySelector('p').innerText = "menor de 1024px";
    } else {
        document.querySelector('p').innerText = "mayor de 1024px";
    }
}

var windowMedia = window.matchMedia("(max-width: 1023px)")
resizeProfilling(windowMedia);
windowMedia.addListener(resizeProfilling);