var saveBtn = document.querySelector(".saveBtn");
var description = document.getElementsByClassName(".description");
const currentTime = dayjs().$H;
const today = dayjs(); 
$('#currentDay').text(dayjs().format('dddd MMMM D, YYYY'));
$(function () {
   const timeBlock = document.querySelectorAll(".time-block");
   timeBlock.forEach(block => {
      const timeBlockHour = block.getAttribute("id").split("-");

      if (parseInt(timeBlockHour[1]) < currentTime) {
         block.classList.add("past");
      } else if (parseInt(timeBlockHour[1]) > currentTime) {
         block.classList.add("future");
      } else {
         block.classList.add("present");
      }
   })
});
$(document).ready(function () {
   $(".saveBtn").on("click", function (event) {
      event.preventDefault();
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
   })
});
window.onload = function loadContent() {
   $("#hour-9 .description").val(localStorage.getItem("hour-9"));
   $("#hour-10 .description").val(localStorage.getItem("hour-10"));
   $("#hour-11 .description").val(localStorage.getItem("hour-11"));
   $("#hour-12 .description").val(localStorage.getItem("hour-12"));
   $("#hour-13 .description").val(localStorage.getItem("hour-13"));
   $("#hour-14 .description").val(localStorage.getItem("hour-14"));
   $("#hour-15 .description").val(localStorage.getItem("hour-15"));
   $("#hour-16 .description").val(localStorage.getItem("hour-16"));
   $("#hour-17 .description").val(localStorage.getItem("hour-17"));

}
