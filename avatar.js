$(function () {
  list = ["kepek/dog.png", "kepek/pig.png", "kepek/avatar_beuke.png"];

  const ELEM = $(`.avatar`);
  ELEM.on("click", kattintas);

  function kattintas() {
    let id = event.target.id;
    let aktELEM = $(".megjelen");
    aktELEM.attr("src", list[id]);
  }
});
