let homeCourtScore = document.getElementById('home__score')
let guestCourtScore = document.getElementById('guest__score')
let homeScore = 0
let guestScore = 0

function homePlus1() {
    homeScore += 1
    homeCourtScore.textContent = homeScore
    console.log(homeScore)
}

function homePlus2() {
    homeScore += 2
    homeCourtScore.textContent = homeScore
    console.log(homeScore)
}

function homePlus3() {
    homeScore += 3
    homeCourtScore.textContent = homeScore
    console.log(homeScore)
}



function guestPlus1() {
    guestScore += 1
    guestCourtScore.textContent = guestScore
    console.log(guestScore)
}

function guestPlus2() {
    guestScore += 2
    guestCourtScore.textContent = guestScore
    console.log(guestScore)
}

function guestPlus3() {
    guestScore += 3
    guestCourtScore.textContent = guestScore
    console.log(guestScore)
}



function newGame(){
    homeCourtScore.textContent = 0
    homeScore = 0
    guestCourtScore.textContent = 0
    guestScore = 0
}