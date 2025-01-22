let settings = {
    autoPause: true,
    autoPlay: true
  };
  
  chrome.storage.sync.get({
    autoPause: true,
    autoPlay: true
  }, function(items) {
    settings = items;
  });
  
  chrome.storage.onChanged.addListener(function(changes) {
    if (changes.autoPause) {
      settings.autoPause = changes.autoPause.newValue;
    }
    if (changes.autoPlay) {
      settings.autoPlay = changes.autoPlay.newValue;
    }
  });
  
  document.addEventListener('visibilitychange', function() {
    const video = document.querySelector('video');
    
    if (video) {
      if (document.hidden) {
        if (!video.paused && settings.autoPause) {
          video.pause();
        }
      } else {
        if (video.paused && settings.autoPlay) {
          video.play();
        }
      }
    }
  });