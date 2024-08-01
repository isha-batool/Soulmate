var imgpath;
var mydata;
$.ajax({
    type: "GET",
    url: '/api/Users',
    success: function(result, xhr){
        mydata = result;
        result.sort(function(){
            return 0.5 - Math.random();
        })
        console.log(result)
        var sel = document.querySelectorAll(".slide");
        for(var i = 0; i < result.length; i++)
        {
            imgpath = result[i]["profilePic"];
            document.getElementById(i+1).src = imgpath;
        }
        var activeSlide = document.querySelector(".active")
        var child = activeSlide.childNodes[1];
        var sliced  = child.src.slice(22, child.src.length);
        sliced = "../" + sliced;
        console.log(sliced)
        let index = searchSrc(sliced);
        document.querySelector(".name-info").innerHTML = mydata[index]["firstName"] + " " + mydata[index]["lastName"];
        document.querySelector(".age-info").innerHTML = mydata[index]["dob"];
        document.querySelector(".city-info").innerHTML = mydata[index]["city"];
        document.querySelector(".cast-info").innerHTML = mydata[index]["cast"];
        document.querySelector(".religion-info").innerHTML = mydata[index]["religion"];
        document.querySelector(".profession-info").innerHTML = mydata[index]["profession"];
    },
    error: function(xhr, resp, text){
        console.log(xhr.status, resp, text);
    }
})
function searchSrc(src){
    console.log(src)
    for(i = 0; i < mydata.length; i++){
        if(mydata[i]["profilePic"] === src){
            return i;
        }
    }
    return -1;

}
const slider = document.querySelector('.container')
const container = document.querySelectorAll('.slide')

document.getElementById('left').addEventListener('click', function(){
    toPrevious()
})

document.getElementById('right').addEventListener('click', function(){
    toNext()
})

let current = 0
let prev = 15
let next = 1
const toPrevious= ()=>{
    if(current > 0){
        toSlide(current-1)
    }
    else{
        toSlide(container.length-1)
    }
}

const toNext = ()=>{
    if(current < 15){
        toSlide(current+1)
    }
    else{
        toSlide(0)
    }
}

const toSlide = (number)=>{
    current = number
    prev = current - 1
    next = current + 1
    for(let i = 0; i < container.length; i++){
        container[i].classList.remove('active')
        container[i].classList.remove('prev')
        container[i].classList.remove('next')
    }

    if(next == 16){
        next = 0;
    }
    if(prev == -1){
        prev = 15
    }
    container[current].classList.add('active')
    var activeSlide = document.querySelector(".active")
    var child = activeSlide.childNodes[1];
    var sliced  = child.src.slice(22, child.src.length);
    sliced = "../" + sliced;
    console.log(sliced)
    let index = searchSrc(sliced);
    document.querySelector(".name-info").innerHTML = mydata[index]["firstName"] + " " + mydata[index]["lastName"];
    document.querySelector(".age-info").innerHTML = mydata[index]["dob"];
    document.querySelector(".city-info").innerHTML = mydata[index]["city"];
    document.querySelector(".cast-info").innerHTML = mydata[index]["cast"];
    document.querySelector(".religion-info").innerHTML = mydata[index]["religion"];
    document.querySelector(".profession-info").innerHTML = mydata[index]["profession"];
    container[next].classList.add('next')
    container[prev].classList.add('prev')
}
//
