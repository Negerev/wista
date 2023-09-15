function browserVideo () {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    // let isSafari = navigator.vendor.match(/apple/i) && !navigator.userAgent.match(/crios/i) && !navigator.userAgent.match(/fxios/i) && !navigator.userAgent.match(/Opera|OPT\//);
    const videos = document.querySelectorAll('.transparent-video');
    if (isSafari) {
        videos.forEach( video => {
            let src = video.getAttribute("data-src");
            src = src.replace("webm", "mov");
            video.setAttribute("src", src);
        })
    } else {
        videos.forEach(video => {
            let src = video.getAttribute("data-src");
            video.setAttribute("src", src);
        })
    }
        
}

module.exports = browserVideo;