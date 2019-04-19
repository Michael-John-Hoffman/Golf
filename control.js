let nextPlayerId = 0;
let numplayers = 4;
getCourses();
class Player{
    constructor(tee, name, nextPlayerId) {
        this.tee = tee;
        this.name = name;
        this.id = nextPlayerId;
    }
        
        getScorecard(){
            let scorecard = $(`<div class="scorecard"><div>`);
            let playerbox = $(".playerbox");
            scorecard.append(`<div class="nameLine">${this.name}</div>`)
            scorecard.append(`<div class="encapsulate">
            <div class="spacing3">Yards</div>
            <div class="spacing3">Par</div>
            <div class="spacing3">Handycap </div>
            <div class="spacing3" >Score </div>
            <div class="spacing3">Total </div>

            </div>` )
        for(let i in holes){
            let hole = holes[i].teeBoxes[this.tee];
            scorecard.append(`<div class="encapsulate">
            <div class="spacing4">${hole.yards}</div>
            <div class="spacing2">${hole.par}</div>
            <div class="spacing">${hole.hcp}</div>
            <input class="spacing2"></input>
            <div class="spacing scoreAdd" >0</div>
            </div>`)
        }
        $("input").change(function(e) {
            console.log(this.value);
        })
        playerbox.append(scorecard);
    }
}


var holes = {};
async function getCourses(){
    let coursesRequest = await fetch ("https://golf-courses-api.herokuapp.com/courses").then(res => res.json());
    let courseId = coursesRequest.courses[0].id;
    let courseRequest = await fetch(`https://golf-courses-api.herokuapp.com/courses/${courseId}`).then(res => res.json());
    holes = courseRequest.data.holes;
}


function addPlayer(tee){
    console.log('add player is firing?', tee)
    let name = $(".playerinput").val();
    $(".playerinput").val("");
    let player = new Player(tee, name, nextPlayerId);
    player.getScorecard();
    console.log(holes);
    nextPlayerId++;
    if($(".nameLine").length === 4){
        $(".playerinput, .dropdown").hide()
    }

}

function deletePlayer(id){
    playgen.delplayer(id);
    placePlayers();
}


