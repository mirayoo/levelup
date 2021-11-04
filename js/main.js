//INPUT SLIDER

var swiper = new Swiper(".reviewSwiper", {
    slidesPerView: 3,
    spaceBetween: 48,
    speed: 600,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//INPUT FILTER

(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));

$(document).ready(function() {
  $("#telephone").inputFilter(function(value) {
    return /^\d*$/.test(value);
  });
});

//COUNTDOWN

var date = new Date(new Date().valueOf() + 1 * 1 * 30 * 60 * 1000);

$("#countdown")
  .countdown(date, function(event) {
    if (event.elapsed) {
      $(this).html(event.strftime('Акция завершена'));
    } else {
    $(this).html(
      event.strftime('%M:%S')
    );
  }
});