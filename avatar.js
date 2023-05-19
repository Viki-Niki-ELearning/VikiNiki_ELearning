list = [
  "dog.png", "pig.png", "avatar_beuke.png"
]

$(function () {
  const ELEM = $(`img`);
  ELEM.on("click", kattintas);


  function kattintas() {
    let aktELEM = $(event.target).attr("img");
    $(event.target).attr("src", "pig.png");
 }
});
