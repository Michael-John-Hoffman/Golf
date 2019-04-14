



// loadDoc();

// function loadDoc(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystagechange = function(){
//         console.log(this);
//         if(this.readyState == 4 && this.status == 200) {
//             myresult = JSON.parse(this.response.Text);
//             console.log(myresult);
//             for(let i = 0; i < myresult.courses.length; i++){
//                 $(".courseselect").append(`<option value=${myresult.courses[i].id}"</option>`);
//             }
//             //$(".storetitle").html(myresult.weather[0].description);
//             //$("#myimage").attr("src", "https://openweathermap.org/img/w/" + myresult.weather)
//         }
//     };
//     xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
//     xhttp.send();
// }

// function loadCourse(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystagechange = function(){
//         if(this.readyState == 4 && this.status == 200) {
//             myresult = JSON.parse(this.response.Text);
//             console.log(myresult);
//             for(let i = 0; i < myresult.courses.length; i++){
//                 $(".courseselect").append(`<option value=${myresult.courses[i].id}"</option>`);
//             }
           
//         }
//     };
//     xhttp.open("GET", `https://golf-courses-api.herokuapp.com/courses/${courseid}`, true);
//     xhttp.send();
// }


//insisde tee_boxes [0] pro [1] champion [2] men [3] women