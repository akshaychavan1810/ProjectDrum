<script>
  var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "High Tom":
      var tom1 = new Audio("audio/hightom.mp3");
      tom1.play();
      break;

    case "Mid Tom":
      var tom2 = new Audio("audio/midtom.mp3");
      tom2.play();
      break;

    case "Low Tom":
      var tom3 = new Audio('audio/lowtom.mp3');
      tom3.play();
      break;

    case "Bass Drum":
      var tom4 = new Audio('audio/bassdrum.mp3');
      tom4.play();
      break;

    case "Snare":
      var snare = new Audio('audio/snare.mp3');
      snare.play();
      break;

    case "Crash":
      var crash = new Audio('audio/crash.mp3');
      crash.play();
      break;

    case "Kick-bass":
      var kick = new Audio('audio/kick.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

</script>