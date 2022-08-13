function sampleMenu(item) {
  var elem = document.getElementById('msg');
  elem.innerHTML = item.innerText;
  event.preventDefault();
}

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('YouTubeVideoPlayerAPI', {
    videoId: 'W3M8vhIxXQU',   // YouTube 影片ID
    width: '1080',            // 播放器寬度 (px)
    height: '720',           // 播放器高度 (px)
    playerVars: {
      autoplay: 0,            // 自動播放影片
      controls: 0,            // 顯示播放器
      showinfo: 0,            // 隱藏影片標題
      modestbranding: 1,      // 隱藏YouTube Logo
      fs: 0,                  // 隱藏全螢幕按鈕
      cc_load_policty: 0,     // 隱藏字幕
      iv_load_policy: 3,      // 隱藏影片註解
      autohide: 0             // 影片播放時，隱藏影片控制列
    },
    events: {
      onReady: function(e) {
        e.target.mute();      //播放時靜音
      }
    }
  });
 }