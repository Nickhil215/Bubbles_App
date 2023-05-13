// // Function to generate a random color
function getRandomColor() {
   
    const ramdom=Math.floor(Math.random()*16777215);
    // console.log(ramdom);
    const ramdomcode="#" + ramdom.toString(16);
    console.log(ramdomcode);
    return ramdomcode;
  }
  

  
  // Function to handle the ball click event
  function handleBallClick(event) {
    var ball = event.target;
    var arrow = ball.nextElementSibling;
  
    // Move the arrow towards the ball
    var ballRect = ball.getBoundingClientRect();
    var arrowRect = arrow.getBoundingClientRect();
    var distance = ballRect.left - arrowRect.left+75;
  
    // Animate the arrow to move towards the ball
    arrow.style.transition = "transform 1s";
    arrow.style.transform = "translateX(" + distance + "px)";
  
    // Change the color of the ball after the arrow touches it
    setTimeout(function() {
        var randomColor = getRandomColor();
        ball.style.backgroundColor = randomColor;
      }, 1000);
  }
  
  // Function to reset the arrow position and ball colors
  function resetBubbles() {
    var arrows = document.querySelectorAll(".sec-items .icon");
    var balls = document.getElementsByClassName("clr_ball");
  
    // Reset arrow positions
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].style.transition = "none";
      arrows[i].style.transform = "none";
    }
  
    // Reset ball colors
    balls[0].style.backgroundColor = 'yellow'
    balls[1].style.backgroundColor = 'blue'
    balls[2].style.backgroundColor = 'red'
    balls[3].style.backgroundColor = 'green'
  }
  
  
  // Get all the color balls
  var balls = document.getElementsByClassName("clr_ball");
  
  // Add event listeners to each ball
  for (var i = 0; i < balls.length; i++) {
    balls[i].addEventListener("click", handleBallClick);
  }
  
  // Get the reset button
  var resetButton = document.querySelector("button");
  
  // Add event listener to the reset button
  resetButton.addEventListener("click", resetBubbles);
  