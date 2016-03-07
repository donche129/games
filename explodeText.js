//Donald Cherestal coding challenge #2

function explode(bombs, force) {
  //input validation
  var goodInput = true;
  for (var i = 0; i < bombs.length; i++) {
    if ((bombs[i] !== "B") && (bombs[i] !== ".")) {
      goodInput = false;
      alert("only B or . is allowed ");
      i = bombs.length + 1;
    }
  }

  if (bombs.length > 50 || bombs.length === 0) {
    alert("bombs should be between 1 and 50 char long");
    goodInput = false;
  }

  if (force > 10 || force === 0) {
    alert("force should be between 1 and 10");
    goodInput = false;
  }

  //for replacing text in string 
  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
  }

  //code for animation
  if (goodInput === true) {
    console.log(bombs);
    var animation = bombs;
    var empty = bombs;

    for (var i = 0; i < bombs.length; i++) {
      if (bombs[i] === "B") {
        animation = setCharAt(animation, i, ".");

        if (animation[i - force] === ">" && i-force >= 0) {
          animation = setCharAt(animation, i - force, "X");
        } else {
          animation = setCharAt(animation, i - force, "<");
        }

        if (animation[i + force] === "<" && i+force <= animation.length - 1) {
          animation = setCharAt(animation, i + force, "X");
        } else {
          animation = setCharAt(animation, i + force, ">");
        }
      }

      empty = setCharAt(empty, i, ".");
    }

    console.log(animation);
	
    while (animation !== empty) {
      var nextFrame = animation;
	  
      for (var i = 0; i < animation.length; i++) {
		if (animation[i] === "<") {
		  nextFrame = setCharAt(nextFrame, i, ".");
          if (i - force >= 0) {
			if (animation[i-force] === ">") {
				nextFrame = setCharAt(nextFrame, i-force, "X");
			} else nextFrame = setCharAt(nextFrame, i-force, "<");
          }
        } else if (animation[i] === ">") {
		  nextFrame = setCharAt(nextFrame, i, ".");
          if (i + force <= animation.length - 1) {
			if (animation[i+force*2] === "<" || animation[i+force*2] === "X") {
				nextFrame = setCharAt(nextFrame, i+force, "X");
			} else nextFrame = setCharAt(nextFrame, i+force, ">");
          }
        } else if (animation[i] === "X") {
			nextFrame = setCharAt(nextFrame, i, ".")
			
		}
      }
	  
      animation = nextFrame;
      console.log(animation);
    }
  }
}

//test case
explode("..B.B..", 1);
