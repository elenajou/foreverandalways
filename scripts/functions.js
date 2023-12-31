function playMusic() {
  document.getElementById("my_audio").play();
}

document.getElementById("msg-btn").click();
console.log("clicked");

/* Redirects the page to fridge.html on closing the confirmation modal. */
$("#abrirCarta").on("hidden.bs.modal", function () {
  $('.main-container').toggleClass("hide");

  setTimeout(() => {
    $('#logo-caption').toggleClass("hide");
    $('#logo-caption').toggleClass("addFadeup");
  }, 1000);
  setTimeout(typeWriter, 2000);
  setTimeout(() => {
    $('#introduccion').toggleClass("hide");
    $('#introduccion').toggleClass("addFadeup");
  }, 5000);
  setTimeout(() => {
    $('#detalles').toggleClass("hide");
    $('#detalles').toggleClass("addFadeup");
  }, 6000);
  setTimeout(() => {
    $('#firma').toggleClass("hide");
    $('#firma').toggleClass("addFadeup");
  }, 7000);
  setTimeout(() => {
    $('#logo-caption').toggleClass("addFloat");
    $('#mensaje').toggleClass("addFloat");
    $('#introduccion').toggleClass("addFloat");
    $('#detalles').toggleClass("addFloat");
    $('#vestimenta').toggleClass("addFloat");
    $('#firma').toggleClass("addFloat");
  }, 10000);
});
