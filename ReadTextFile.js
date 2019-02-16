$(document).ready(function() {

  $("#btnLoad").on("click", onMouseClick);
});

function onMouseClick() {
  $.ajax("sample.txt", {
    success: setContent,
    type: "GET",
    datatype: "text"
  });
}

function setContent(data, status, jqxhr) {
  $("#divFile").text(data);
}
