//update low sec slider
var lowSecSlider = document.getElementById("low-sec-slider");
var lowSecLabel = document.getElementById("low-sec-label");


lowSecSlider.oninput = function() {
  if(lowSecSlider.value >= 60)
  {
    var min = Math.floor(lowSecSlider.value / 60);
    var seconds = lowSecSlider.value - min * 60;
    lowSecLabel.innerHTML = min + " minutes" + " " + seconds + " seconds";
  }
  else {
    lowSecLabel.innerHTML = lowSecSlider.value + " seconds"
  }

}

//update high sec slider
var highSecSlider = document.getElementById("high-sec-slider");
var highSecLabel = document.getElementById("high-sec-label");


highSecSlider.oninput = function() {
  if(highSecSlider.value >= 60)
  {
    var min = Math.floor(highSecSlider.value / 60);
    var seconds = highSecSlider.value - min * 60;
    highSecLabel.innerHTML = min + " minutes" + " " + seconds + " seconds";
  }
  else {
    highSecLabel.innerHTML = highSecSlider.value + " seconds"
  }

}

//update rounds slider
var roundsSlider = document.getElementById("rounds-slider");
var roundsLabel = document.getElementById("rounds-label");


roundsSlider.oninput = function() {
  roundsLabel.innerHTML = this.value;
//for audio display

}

  function startTimer() {
  	let lowIntensitySec = parseInt(document.getElementById("low-sec-slider").value);
  	let highIntensitySec = parseInt(document.getElementById("high-sec-slider").value);
    let rounds = parseInt(document.getElementById("rounds-slider").value);
    var lowIntensityVar = lowIntensitySec;
    var highIntensityVar = highIntensitySec;
    var isLow = true;
    var firstRun = true;
    var roundsCounter = 0;
    var lowCounter = 0;
    var highCounter = 0;
    let interval = 0.01
    var intervalID;
    //update slider values


    function updateTimer()
    {

      document.getElementById("rounds-left").innerHTML="Rounds Remaining: " +(rounds-roundsCounter);
      if(roundsCounter < rounds){
        if(isLow == true)
        {
          document.getElementById("intensity").style.color = "green";
          document.getElementById("countdown").style.borderColor = "green";
          document.getElementById("intensity").innerHTML="REST";
          if(lowCounter<lowIntensityVar)
          {
            document.getElementById("countdown").innerHTML=lowCounter.toFixed(2); + " seconds";
            lowCounter += interval;
          }
          else {
            isLow = false;
            lowCounter = 0;
          }
        }
        else
        {
          document.getElementById("intensity").style.color = "red";
          document.getElementById("countdown").style.borderColor = "red";
          document.getElementById("intensity").innerHTML="WORK";

          if(highCounter<highIntensityVar)
          {
            document.getElementById("countdown").innerHTML=highCounter.toFixed(2); + "high";
            highCounter += interval;
          }
          else {
            highCounter = 0;
            isLow = true;
            roundsCounter ++;
          }
        }
    }
  }
    intervalID = setInterval(updateTimer,10);

}
