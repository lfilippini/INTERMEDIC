$(document).ready(function () {
  $("a.desplegable").toggle(
    function () {
      $(this).parent().find("nav.menu").slideDown('');
    },
    function () {
      $(this).parent().find("nav.menu").slideUp('');
    }
  );
  $(window).resize(function () {
    if ($(this).width() > 1024) {
      $("a.desplegable").parent().find("nav.menu").show();
    } else {
      $("a.desplegable").parent().find("nav.menu").hide();
    }
  });
});

$(document).ready(function () {
  $("#abrir-1").click(function () {
    //$(".popup").show();
    $("#popup-1").fadeIn();
  });
  $("#cerrar-1").click(function () {
    //$(".popup").hide();
    $("#popup-1").fadeOut();
  });
});

$(document).ready(function () {
  $("#abrir-2").click(function () {
    //$(".popup").show();
    $("#popup-2").fadeIn();
  });
  $("#cerrar-2").click(function () {
    //$(".popup").hide();
    $("#popup-2").fadeOut();
  });
});

$(document).ready(function () {
  $("#abrir-3").click(function () {
    //$(".popup").show();
    $("#popup-3").fadeIn();
  });
  $("#cerrar-3").click(function () {
    //$(".popup").hide();
    $("#popup-3").fadeOut();
  });
});

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}