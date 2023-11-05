input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (postes.length > 0) {
        teamIndex = randint(0, postes.length - 1)
        choosenTeam = postes.removeAt(teamIndex)
        basic.showNumber(choosenTeam)
    } else {
        basic.showIcon(IconNames.Happy)
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
function initTeams () {
    postes = []
    for (let teamIndex = 0; teamIndex <= teamCount - 1; teamIndex++) {
        for (let index = 0; index < 5; index++) {
            postes.push(teamIndex + 1)
        }
    }
    control.waitMicros(1000)
    basic.showIcon(IconNames.SmallSquare)
}
let choosenTeam = 0
let teamIndex = 0
let postes: number[] = []
let teamCount = 0
teamCount = 6
initTeams()
basic.forever(function () {
	
})
