function sampleMenu(item) {
  var elem = document.getElementById('msg');
  elem.innerHTML = item.innerText;
  event.preventDefault();
}

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'W3M8vhIxXQU',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}