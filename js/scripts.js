$(document).ready(function(){
  $("#appPage").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var descInput = $("#description").val();
    var dateInput = $("#date").val();
    var timeInput = $("#time").val();

    $(".name").text(nameInput);
    $(".description").text(descInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);
    $("#output").show();
  });
});
