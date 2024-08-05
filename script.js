document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display user agent
    document.getElementById('userAgent').textContent = navigator.userAgent;
  
    // Fetch and display location
    fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('location').textContent = `${data.city}, ${data.region}, ${data.country}`;
      })
      .catch(error => console.error('Error fetching location:', error));
  });
  
  function copyToClipboard() {
    let browserInfo = document.getElementById('browserInfo');
    let range = document.createRange();
    range.selectNode(browserInfo);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Information copied to clipboard!');
  }
  