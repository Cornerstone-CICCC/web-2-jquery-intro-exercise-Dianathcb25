// 1
$("#toggleButton").on("click", function() {
  $(this).next("p").slideToggle()
})
// 2
$("#colorButton").on("click", function() {
  $(this).next("div").css({backgroundColor: "yellow"})
})
// 3
$("#addClassButton").on("click", function() {
$(this).next().next("div").addClass("new-class")
})

$("#removeClassButton").on("click", function() {
$(this).next("div").removeClass("new-class")
})

// 4
$("#fadeInButton").on("click", function() {
$(this).next().next('div').fadeToggle()
})

$("#fadeOutButton").on("click", function() {
$(this).next('div').fadeToggle()
})

// 5
$("#slideUpButton").on("click", function() {
$("#slideDiv").slideUp()
})

$("#slideDownButton").on("click", function() {
$(this).next('div').slideDown()
})