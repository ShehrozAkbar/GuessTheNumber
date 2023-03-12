let rand = Math.trunc(Math.random() * 20) + 1;

let myscore = 20;
let highestScore = 0;

//Check click event handler

document.querySelector(".check").addEventListener("click", function () {
  let guessedVal = Number(document.querySelector(".gussed").value);

  // this is empty field state
  if (!guessedVal) {
    document.querySelector(".resultstate").textContent = "No Number 🥲";
  }
  // this is a winning state
  else if (guessedVal === rand) {
    document.querySelector(".resultstate").textContent = "Hurray you Win 🥳";
    // doing some CSS changes
    document.querySelector("body", "html").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "100px";
    // just showing the actual number to the user
    document.querySelector(".number").textContent = rand;

    document.querySelector(".gussed").style.visibility = "hidden";
    document.querySelector(".check").style.visibility = "hidden";
    // setting the highest score
    if (myscore > highestScore) {
      highestScore = myscore;
      document.querySelector(".highest").textContent = highestScore;
    }
  }
  // this is the wrong state optimised
  else if (guessedVal !== rand) {
    if (myscore > 1) {
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
      document.querySelector(".gussed").style.visibility = "hidden";
      document.querySelector(".check").style.visibility = "hidden";
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
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "50px";

  document.querySelector(".gussed").value = "";
  document.querySelector(".resultstate").textContent = "Try the Number again🤓";
  myscore = 20;
  document.querySelector(".score").textContent = myscore;
  rand = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  // showing the field and button again
  document.querySelector(".gussed").style.visibility = "visible";
  document.querySelector(".check").style.visibility = "visible";
});
