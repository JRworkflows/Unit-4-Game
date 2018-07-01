var totalVar = 0;
var chosenVar = 0;
var redRock = {
    number: Math.floor(Math.random()),
    // img: '../images/diamond.jpg'
}
document.getElementById("rockObject").onclick(function() {
    if (totalVar === chosenVar) {
        alert("you win")
    } else if (totalVar > chosenVar) {
        alert("you lose")
    }
})

document.getElementById("redRock").onclick(function() {
    totalVar += chosenVar
})

// write js to display/log score

// write js to display win/loss