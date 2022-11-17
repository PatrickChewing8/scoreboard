let homeScoreBtn1 = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreBy1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreBy2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreBy3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreBy6() {
    homeScore += 6
    homeScoreEl.textContent = homeScore
}

let awayScoreBtn1 = document.getElementById("away-score-btn-1")
let awayScoreEl = document.getElementById("away-score")
let awayScore = 0

function increaseAwayScoreBy1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}
function increaseAwayScoreBy2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}
function increaseAwayScoreBy3() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}
function increaseAwayScoreBy6() {
    awayScore += 6
    awayScoreEl.textContent = awayScore
}