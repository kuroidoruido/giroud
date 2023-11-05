input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (postes.length > 0) {
        teamIndex = randint(0, postes.length - 1)
        choosenTeam = postes.removeAt(teamIndex)
        basic.showString("" + (choosenTeam))
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.A, function () {
    if (teamCount > 4) {
        teamCount = teamCount - 1
        basic.showNumber(teamCount)
        initTeams()
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    if (teamCount < 8) {
        teamCount = teamCount + 1
        initTeams()
        basic.showNumber(teamCount)
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
function initTeams () {
    postes = []
    postePossible = [
    "A",
    "B",
    "C",
    "D",
    "E"
    ]
    for (let teamIndex = 0; teamIndex <= teamCount - 1; teamIndex++) {
        for (let poste of postePossible) {
            postes.push("" + (teamIndex + 1) + poste)
        }
    }
    control.waitMicros(1000)
    basic.showIcon(IconNames.SmallSquare)
}
let postePossible: string[] = []
let choosenTeam = ""
let teamIndex = 0
let postes: string[] = []
let teamCount = 0
teamCount = 6
initTeams()
basic.forever(function () {
	
})
