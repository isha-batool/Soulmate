$.ajax({
    type: 'GET',
    url: "/api/Users",
    success: function(result){
        var imgpath;

        for(i = 0; i < result.length; i++)
        {
            imgpath = result[i]["profilePic"]
            document.getElementById(i + 1).src = imgpath
            document.getElementById("div" + (i+1)).querySelector("h4").innerText = result[i]["firstName"] + " " + result[i]["lastName"]
            console.log(imgpath)
        }
        var j = result.length - 1;
        for(;j < 21; j++){
            console.log("removing")
            document.getElementById("div"+j).remove()
        }
    },
    error(xhr, rsvp, text){
        console.log(xhr, rsvp, text)
    }

})
var x = document.querySelector('.btn1');
x.addEventListener('click', function (){
    console.log("button pressed")
})