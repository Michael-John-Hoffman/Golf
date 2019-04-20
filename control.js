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
            let gridBox = $(`<div class="gridBox"></div>`);
            let gridBox2 = $('<div class="gridBox2"></div>')
            let playerbox = $(".playerbox");
            scorecard.append(`<div class="nameLine">${this.name}</div>`)
            gridBox.append(`<div class="encapsulate">
            <div class="spacing3">Yards</div>
            <div class="spacing3">Par</div>
            <div class="spacing3">Handycap </div>
            <div class="spacing3" >Score </div>

            </div>` )
            let totalYards = 0;
            let totalPar = 0;
            let totalHcp = 0;
            let totalTotal = 0;
            for(let i = 0; i < 9; i++){
                let hole = holes[i].teeBoxes[this.tee];
                gridBox.append(`<div class="encapsulate">
                <div class="spacing4">${hole.yards}</div>
                <div class="spacing2">${hole.par}</div>
                <div class="spacing">${hole.hcp}</div>
                <input type="number" value="0" class="spacing2"></input>
                </div>`)
                totalYards += hole.yards;
                totalPar += hole.par;
                totalHcp += hole.hcp;
            }
            
            gridBox.append(`<div class="encapsulate">
            <div class="spacing4">${totalYards}</div>
            <div class="spacing2">${totalPar}</div>
            <div class="spacing">${totalHcp}</div>
            <div class="spacing2 totalScore"></div>
            </div>`)
            gridBox2.append(`<div class="encapsulate">
            <div class="spacing3">Yards</div>
            <div class="spacing3">Par</div>
            <div class="spacing3">Handycap </div>
            <div class="spacing3" >Score </div>

            </div>` )

            let totalYards2 = 0;
            let totalPar2 = 0;
            let totalHcp2 = 0;
            for(let i = 9; i < holes.length; i++){
                let hole = holes[i].teeBoxes[this.tee];
                gridBox2.append(`<div class="encapsulate">
                <div class="spacing4">${hole.yards}</div>
                <div class="spacing2">${hole.par}</div>
                <div class="spacing">${hole.hcp}</div>
                <input type="number" value="0" class="spacing2"></input>
                </div>`)
                totalYards2 += hole.yards;
                totalPar2 += hole.par;
                totalHcp2 += hole.hcp;
            }
            
            gridBox2.append(`<div class="encapsulate">
            <div class="spacing4">${totalYards2}</div>
            <div class="spacing2">${totalPar2}</div>
            <div class="spacing">${totalHcp2}</div>
            <div class="spacing2 totalScore"></div>
            </div>`)

            scorecard.append(gridBox)
            scorecard.append(gridBox2)
            playerbox.append(scorecard);
            gridBox2.find("input").last().change(e => {
                window.setTimeout(() => {
                    let sum = parseInt(gridBox2.find(".totalScore").text()) - totalPar2
                    showModal(sum)
                    

                }, 1000)
            })
            $("input").change(function(e) {
                let total = 0;
                let scores = $(this).parent().parent().find("input").toArray()
                for(let i = 0; i < scores.length; i++){
                    total += parseInt(scores[i].value)
                    
                }
                $(this).parent().parent().find(".totalScore").text(total)

            })
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

function showModal(sum) {
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    if(sum <= 0){
        $(".modal-title").text("Good Job")
    } else{
        $(".modal-title").text("You should practice more")
    }
}
