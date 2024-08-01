let myData;
$.ajax({
    type: "GET",
    url: '/api/Users',
    success: function(result){
        myData = result
        console.log(result.length)
        for(i = 0; i < 8; i++){
            var imgpath = result[i]["profilePic"];
            document.getElementById(i+1).src = imgpath;
            let className = ".user" + (i + 1);
            console.log(className)
            document.querySelector(className).innerHTML = result[i]["firstName"] + " " + result[i]["lastName"];
        }
        var img = document.querySelector("#profile-img");
        img.src = result[10]["profilePic"];
        console.log("done")
    },
    error: function(xhr, resp, text){
        console.log(xhr.status, resp, text);
    }
})



var x = document.getElementById("container-img");
x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", myFunction1);
var elem = document.getElementById("profile-info");
    elem.style.animationFillMode= "forwards";
    elem.style.animationDelay= "0.5s";
    elem.style.animationDuration= "3s";
function myFunction(){
    elem.style.animationDirection = "normal";
    elem.style.animationName = "showUserInfo";
}
function myFunction1(){
    elem.style.animationName = "hideUserInfo";
}