$(document).ready(function(){

$('#text').focus();
$("#add").on("click", add);
$(".toDoList").on("click",".edit", edit);
$(".toDoList").on("click", ".remove" ,removeItem);
$(".toDoList").on("dblclick",".toDoItem",markAsDone);
$("#clear").on("click",clearList);
$(".toDoList").on('hover','.white',function() {
    $(".white").removeClass("butt");
 });


});



var total = 0;

function add (){
  var toDo = $("#top input").val();
  $(".toDoList").prepend("<li class='white'> <span class='toDoItem'>" + toDo + "</span> <a href='#' class='edit butt'> Edit </a> <a href='#' class='butt remove'> Remove </a> </li>");
  $(".toDoList a").css({"color":"red","font-size":"10px","padding-right":"20px","display":"inline-block","float":"right"});
  $("#text").val("");
  $('#text').focus();
  adjustValue(1);
}

function edit(event){
  event.preventDefault();
  var editToDoText = $("#text").val();
  $('#text').focus();
  $(this).parent().find(".toDoItem").text(editToDoText);
  $("#text").val("");
}

function removeItem(){
 $(this).parent().remove();
 adjustValue(-1);
}

function markAsDone(){
  $(this).addClass("strike");
  adjustValue(-1);
}

function adjustValue(n){
  total += n;
  $("#theTotal").text(total);
}

function clearList(){
  $(".toDoList .toDoItem, .white").remove();
  total = 0;
  $("#theTotal").text(0);
}

function clearDone(){


}

