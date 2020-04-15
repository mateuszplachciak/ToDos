$("ul").on("click", "li", function () {
  $(this).toggleClass("complete");
});

$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});
$("input[type='text']").on("keypress", function (event) {
  if (event.which == 13) {
    var content = $(this).val();
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span>" + content + "</li>"
    );
    $(this).val("");
  }
});
$("#plus").click(function () {
  $("input").fadeToggle();
});
