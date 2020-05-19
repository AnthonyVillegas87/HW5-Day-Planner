var timeSlots = $(".row");
var holdHour = -1;

var myStorage = window.localStorage


const clock = document.getElementById("currentDay");
setInterval(() => {
    const now = moment();
    const humanReadable = now.format('MMMM Do YYYY, h:mm:ss a');

    currentDay.textContent = humanReadable;
    var currentHour = now.format("H");
    if (currentHour != holdHour) {
        holdHour = currentHour;
        for(var i = 1; i <= 10; i++){
            var block = $("#inputBlock" + i);
            var time = (i + 7);
            block.removeClass();
            block.addClass("description");
            if(time < currentHour){
                block.addClass("past");
                

            } else if(time > currentHour){
                block.addClass("future");
            } else {
                block.addClass("present");
            }

        }
    }
}, 1000);

$(".saveBtn").on("click",function(){
    var button = $(this);
    var id = button.attr("id");
    var input = $("#input" + id);
    var inputVal = input.val();
    myStorage.setItem("input" + id,inputVal);
});



function renderAddEvent() {
    
    for(var i = 1; i <= 10; i++){
        $("#input" + i).val(myStorage.getItem("input" + i));
    }
}
renderAddEvent();







 






  
