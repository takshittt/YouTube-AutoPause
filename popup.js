document.addEventListener('DOMContentLoaded', function() {
    // Load saved settings
    chrome.storage.sync.get({
      autoPause: true,
      autoPlay: true
    }, function(items) {
      document.getElementById('autoPause').checked = items.autoPause;
      document.getElementById('autoPlay').checked = items.autoPlay;
    });
  
    // Save settings when changed
    document.getElementById('autoPause').addEventListener('change', function(e) {
      chrome.storage.sync.set({
        autoPause: e.target.checked
      });
    });
  
    document.getElementById('autoPlay').addEventListener('change', function(e) {
      chrome.storage.sync.set({
        autoPlay: e.target.checked
      });
    });
  });