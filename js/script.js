console.log("こんにちは");
document.getElementsByTagName("h1")[0].style.color="#00f";

var color = "#0f0";
var wSpace = "100px"

$("#txt").css("color",color);

$("#txt").fadeOut(2000);
$("#txt").fadeIn(2000);

$("#txt").animate({"margin-top":wSpace,
                   "margin-left":wSpace
},2000);

$(".title").html("ooooo");

$("#btn").on("click",function(){
    $(".title").fadeOut(1000);
    $("#txt").fadeOut(1000);
});