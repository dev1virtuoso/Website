var options = {
  weekday: 'long',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC'
};

var options1 = {
  weekday: 'long',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

function displayUTCTime() {
  var currentTime = new Date();
  var utcTime = currentTime.toLocaleString('en-US', options);
  document.getElementById("utc-time").innerHTML = utcTime;
}

setInterval(displayUTCTime, 1000);

function displayLocalTime() {
  var currentTime = new Date();
  var localTime = currentTime.toLocaleString(undefined, options1);
  document.getElementById("local-time").innerHTML = localTime;
}

setInterval(displayLocalTime, 1000);

setInterval(displayLocalTime, 1000);

var intervalIds = {};
    var timerElements = {};

    function startTimer(id) {
      var startTime = Date.now();
      intervalIds[id] = setInterval(updateTime, 1);

      function updateTime() {
        var currentTime = Date.now();
        var elapsedTime = currentTime - startTime;
        var minutes = Math.floor(elapsedTime / 60000);
        var seconds = Math.floor(elapsedTime / 1000) % 60;
        var milliseconds = elapsedTime % 1000;
        timerElements[id].textContent = pad(minutes) + ":" + pad(seconds) + "." + padMilliseconds(milliseconds);
      }

      function pad(value) {
        return value.toString().padStart(2, "0");
      }

      function padMilliseconds(value) {
        return value.toString().padStart(3, "0");
      }

      document.getElementById("start-btn-" + id).disabled = true;
      document.getElementById("stop-btn-" + id).disabled = false;
    }

    function stopTimer(id) {
      clearInterval(intervalIds[id]);

      document.getElementById("stop-btn-" + id).disabled = true;
      document.getElementById("start-btn-" + id).disabled = false;
    }

    window.addEventListener("DOMContentLoaded", function() {
      timerElements["timer-display1"] = document.getElementById("timer-display1");
      timerElements["timer-display2"] = document.getElementById("timer-display2");
      timerElements["timer-display3"] = document.getElementById("timer-display3");
      timerElements["timer-display4"] = document.getElementById("timer-display4");

      document.getElementById("start-btn-1").addEventListener("click", function() { startTimer("timer-display1"); });
      document.getElementById("stop-btn-1").addEventListener("click", function() { stopTimer("timer-display1"); });
      document.getElementById("start-btn-2").addEventListener("click", function() { startTimer("timer-display2"); });
      document.getElementById("stop-btn-2").addEventListener("click", function() { stopTimer("timer-display2"); });
      document.getElementById("start-btn-3").addEventListener("click", function() { startTimer("timer-display3"); });
      document.getElementById("stop-btn-3").addEventListener("click", function() { stopTimer("timer-display3"); });
      document.getElementById("start-btn-4").addEventListener("click", function() { startTimer("timer-display4"); });
      document.getElementById("stop-btn-4").addEventListener("click", function() { stopTimer("timer-display4"); });
    });

document.getElementById('conversion-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var m3u8Url = document.getElementById('m3u8-url').value;

  convertM3U8ToMP4(m3u8Url);
});

function convertM3U8ToMP4(m3u8Url) {
  var a = document.createElement('a');
  a.style.display = 'none';
  document.body.appendChild(a);

  fetch('/convert?m3u8Url=' + encodeURIComponent(m3u8Url))
    .then(response => response.blob())
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = 'output.mp4';
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('An error occurred during conversion:', error);
      alert('An error occurred during conversion. Please try again.');
    });
}

function calculatePi() {
  var decimalPlaces = document.getElementById("decimal-places").value;
  var iterations = Math.pow(10, decimalPlaces);

  var pi = 0;
  var sign = 1;
  var denominator = 1;

  for (var i = 0; i < iterations; i++) {
    pi += sign * (4 / denominator);
    sign = -sign;
    denominator += 2;
  }

  document.getElementById("piresult").innerHTML = pi.toFixed(decimalPlaces);
}

function getPi() {
  var decimalPlaces = parseInt(document.getElementById("decimal-places").value);

  var charactersToShow = decimalPlaces + 1;

  var piValue = Math.PI.toFixed(decimalPlaces).slice(0, charactersToShow);

  document.getElementById("piresult").innerHTML = piValue;
}

function generateRandomCode() {
  var length = parseInt(document.getElementById("length").value);
  var characters = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+={}[]|:;.,?/~`";
  var code = "";
  
  var startTime = new Date(); 
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    
    var endTime = new Date();
    var elapsedTime = endTime - startTime; 
    
    document.getElementById("grcresult").innerHTML = code;
    document.getElementById("time").innerHTML = elapsedTime;
  }

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var expression = document.getElementById('display').value;
  var result = eval(expression);
  document.getElementById('display').value = result;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}