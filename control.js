let nextPlayerId = 0;
let numplayers = 4;
getCourses();
class Player{
    constructor(tee, name, nextPlayerId) {
        this.tee = tee;
        this.name = name;
        this.id = nextPlayerId;
    }
        updateTotal(){
            
        }
        getScorecard(){
            let playerbox = $(".playerbox");
            playerbox.append(`<div class="nameLine">${this.name}</div>`)
            playerbox.append(`<div class="encapsulate">
            <div class="spacing">Yards</div>
            <div class="spacing">Par</div>
            <div class="spacing2">Handycap </div>
            <div class="spacing">Score </div>
            <div class="spacing">Total </div>

            </div>` )
        for(let i in holes){
            let hole = holes[i].teeBoxes[this.tee];
            playerbox.append(`<div class="encapsulate">
            <div class="spacing">${hole.yards}</div>
            <div class="spacing">${hole.par}</div>
            <div class="spacing2">${hole.hcp}</div>
            <input class="spacing"></input>
            <div class="spacing">0</div>
            </div>`)
         
            
        }
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


