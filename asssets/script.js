$(function () {
  var currentHour = dayjs().hour()
  for (let i = 9; i < 18; i++) {
    var getText = localStorage.getItem(`hour${i}`)
    $(`#hour-${i}`).children()[1].value = getText
    if (i > currentHour) {
      $(`#hour-${i}`).addClass("future");
    }
    if (i < currentHour) {
      $(`#hour-${i}`).addClass("past");
    }
    if (i == currentHour) {
      $(`#hour-${i}`).addClass("present");
    }
  }
  $(".saveBtn").click(function (event) {


    var text = ($(this).siblings()[1].value);

    var hour = ($(this).parent().attr("id").split("-")[1]);
    console.log(hour)
    localStorage.setItem(`hour${hour}`, text)
    console.log(currentHour)
  });
});

document.getElementById('currentDay').textContent = dayjs().format('dddd, MMM YYYY'); 