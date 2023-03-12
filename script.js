let rand = Math.trunc(Math.random() * 20) + 1;

let myscore = 20;
let highestScore = 0;

//Check click event handler

document.querySelector(".check").addEventListener("click", function () {
  let guessedVal = Number(document.querySelector(".gussed").value);

  // setting the hint elements
  document.querySelector(".hint-msg").style.display = "none";
  document.querySelector(".hint-btn").style.display = "block";

  // this is empty field state
  if (!guessedVal) {
    document.querySelector(".resultstate").textContent = "No Number 🥲";
  }
  // this is a winning state
  else if (guessedVal === rand) {
    // setting the hint elements
    document.querySelector(".hint-btn").style.display = "none";

    document.querySelector(".resultstate").textContent = "Hurray you Win 🥳";
    // doing some CSS changes
    document.querySelector("body", "html").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "100px";
    // just showing the actual number to the user
    document.querySelector(".number").textContent = rand;

    document.querySelector(".gussed").style.display = "none";
    document.querySelector(".check").style.display = "none";
    // setting the highest score
    if (myscore > highestScore) {
      highestScore = myscore;
      document.querySelector(".highest").textContent = highestScore;
    }
  }
  // this is the wrong state optimised
  else if (guessedVal !== rand) {
    if (myscore > 10) {
      //     5           15
      if (guessedVal >= rand - 5 && guessedVal < rand) {
        document.querySelector(".resultstate").textContent =
          "Low, but closer 📉";
      } else if (guessedVal <= rand + 5 && guessedVal > rand) {
        document.querySelector(".resultstate").textContent =
          "High, but closer 📈";
      } else {
        document.querySelector(".resultstate").textContent =
          guessedVal > rand ? "Too High 📈" : "Too Low 📉";
      }
      myscore--;
      document.querySelector(".score").textContent = myscore;
    } else {
      document.querySelector(".resultstate").textContent =
        "You Lost 😕,Try again‼";
      document.querySelector("body").style.backgroundColor = "#ff6347";
      document.querySelector(".gussed").style.display = "none";
      document.querySelector(".check").style.display = "none";
    }
  }
  // this is the wrong state

  // else if (guessedVal > rand) {
  //   if (myscore > 1) {
  //     document.querySelector(".resultstate").textContent = "Too High 📈";
  //     myscore--;
  //     document.querySelector(".score").textContent = myscore;
  //   } else {
  //     document.querySelector(".resultstate").textContent =
  //       "You Lost 😕,Try again‼";
  //     document.querySelector("body").style.backgroundColor = "#ff6347";
  //     document.querySelector(".gussed").style.visibility = "hidden";
  //     document.querySelector(".check").style.visibility = "hidden";
  //   }
  // }
  // // this is the wrong state too
  // else if (guessedVal < rand) {
  //   if (myscore > 1) {
  //     document.querySelector(".resultstate").textContent = "Too Low 📉";
  //     myscore--;
  //     document.querySelector(".score").textContent = myscore;
  //   } else {
  //     document.querySelector(".resultstate").textContent =
  //       "You Lost 😕,Try again‼";
  //     document.querySelector("body").style.backgroundColor = "#ff6347";
  //     document.querySelector(".gussed").style.visibility = "hidden";
  //     document.querySelector(".check").style.visibility = "hidden";
  //   }
  // }
  else {
    console.log("Thats an Error");
  }
});

// Again button event handler to reset everything

document.querySelector(".reset").addEventListener("click", function () {
  // setting the hint elements again
  document.querySelector(".hint-msg").style.display = "none";
  document.querySelector(".hint-btn").style.display = "block";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "50px";

  document.querySelector(".gussed").value = "";
  document.querySelector(".resultstate").textContent = "Try the Number again🤓";
  myscore = 20;
  document.querySelector(".score").textContent = myscore;
  rand = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  // showing the field and button again
  document.querySelector(".gussed").style.display = "block";
  document.querySelector(".check").style.display = "block";
});

document.querySelector(".hint-btn").addEventListener("click", function () {
  let guessedVal = Number(document.querySelector(".gussed").value);

  document.querySelector(".hint-msg").style.display = "block";
  document.querySelector(".hint-btn").style.display = "none";

  if (!rand) {
    document.querySelector(".hint-msg").textContent =
      "Enter a value first to get the hint.";
  } else if (rand === 1) {
    document.querySelector(".hint-msg").textContent =
      "How many planets support life?";
  } else if (rand === 2) {
    document.querySelector(".hint-msg").textContent =
      "How many foot a normal human have?";
  } else if (rand === 3) {
    document.querySelector(".hint-msg").textContent =
      "How wheels does a riqshaw have?";
  } else if (rand === 4) {
    document.querySelector(".hint-msg").textContent =
      "How wheels does a car have?";
  } else if (rand === 5) {
    document.querySelector(".hint-msg").textContent =
      "How many fingers a normal human hand have?";
  } else if (rand === 6) {
    document.querySelector(".hint-msg").textContent = "whats half a dozen?";
  } else if (rand === 7) {
    document.querySelector(".hint-msg").textContent =
      "How many days are in a week?";
  } else if (rand === 8) {
    document.querySelector(".hint-msg").textContent =
      "How many legs does spider have?";
  } else if (rand === 9) {
    document.querySelector(".hint-msg").textContent =
      "How many players does a baseball team have?";
  } else if (rand === 10) {
    document.querySelector(".hint-msg").textContent =
      "How many years are in a decade?";
  } else if (rand === 11) {
    document.querySelector(".hint-msg").textContent =
      "How many players are in a cricket team?";
  } else if (rand === 12) {
    document.querySelector(".hint-msg").textContent =
      "whats a double of half a dozen?";
  } else if (rand === 13) {
    document.querySelector(".hint-msg").textContent =
      "The United States of America originally consisted of what number of colonies when they declared independence from Great Britain in 1776?";
  } else if (rand === 14) {
    document.querySelector(".hint-msg").textContent =
      "how many cards a standard deck of playing cards contains?";
  } else if (rand === 15) {
    document.querySelector(".hint-msg").textContent =
      "How many players are in a rugby team?";
  } else if (rand === 16) {
    document.querySelector(".hint-msg").textContent =
      "How many ounces are in one pound?";
  } else if (rand === 17) {
    document.querySelector(".hint-msg").textContent =
      "what number consider unlucky in italy?";
  } else if (rand === 18) {
    document.querySelector(".hint-msg").textContent =
      "A golf course typically consists of how many holes?";
  } else if (rand === 19) {
    document.querySelector(".hint-msg").textContent =
      "how many stripes are there on the flag of South Korea?";
  } else if (rand === 20) {
    document.querySelector(".hint-msg").textContent =
      "How many amino acids that make up proteins in the human body?";
  } else if (rand === 20) {
    document.querySelector(".hint-msg").textContent =
      "there is an error in the system...";
  }
});
