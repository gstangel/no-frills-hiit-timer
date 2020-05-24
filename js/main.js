//point to slider elements on html
var lowSecSlider = document.getElementById("low-sec-slider");
var lowSecLabel = document.getElementById("low-sec-label");

//logic to convert from seconds to min and sec
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

//logic to convert from seconds to min and sec for high sec slider
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
//audio effects
let starting321 = new Audio("starting321.mp3");
let highIntensity = new Audio("high-intensity.mp3");
let lowIntensity = new Audio("low-intensity.mp3");
let workoutComplete = new Audio("workout-complete.mp3");
//fuction to control timer logic as well as play audio effects
function startTimer() {
//point to html elements
  	let lowIntensitySec = parseInt(document.getElementById("low-sec-slider").value);
  	let highIntensitySec = parseInt(document.getElementById("high-sec-slider").value);
    let rounds = parseInt(document.getElementById("rounds-slider").value);
    var lowIntensityVar = lowIntensitySec;
    var highIntensityVar = highIntensitySec;
    //bool to determine which cycle
    var isLow = true;
    //counters for intervals
    var soundPlayed = false;
    var roundsCounter = 0;
    var lowCounter = 0;
    var highCounter = 0;
    //timer update seconds
    let interval = 0.01

    function updateTimer()
    {
      document.getElementById("rounds-left").innerHTML="Rounds Remaining: " +(rounds-roundsCounter);
      //logic to determine if rounds have been completed
      if(roundsCounter < rounds){
        if(isLow == true)
        {
          if(soundPlayed == false)
          {
            soundPlayed = true;
            lowIntensity.play();

          }

          document.getElementById("intensity").style.color = "green";
          document.getElementById("countdown").style.borderColor = "green";
          document.getElementById("intensity").innerHTML="REST";
          if(lowCounter<lowIntensityVar)
          {
            document.getElementById("countdown").innerHTML=lowCounter.toFixed(2); + " seconds";
            lowCounter += interval;
          }
          else {
            soundPlayed = false;
            isLow = false;
            lowCounter = 0;
          }
        }
        else
        {
          //play high intensity sound
          if(soundPlayed == false)
          {
            soundPlayed = true;
            highIntensity.play();

          }
          //update html elements
          document.getElementById("intensity").style.color = "red";
          document.getElementById("countdown").style.borderColor = "red";
          document.getElementById("intensity").innerHTML="WORK";
          //logic for timer
          if(highCounter<highIntensityVar)
          {
            document.getElementById("countdown").innerHTML=highCounter.toFixed(2); + "high";
            highCounter += interval;
          }
          //loop back to low intensity
          else {
            soundPlayed = false;
            highCounter = 0;
            isLow = true;
            roundsCounter ++;
          }
        }
    }
    else {
      if(soundPlayed == false)
      {
        workoutComplete.play();
        soundPlayed = true;
      }

    }
  }
  function startTimer()
  {
    setInterval(updateTimer,10);
  }

  //play starting sound
  starting321.play();
  //timeout for starting sound to complete
  setTimeout(startTimer, 4500);


}
