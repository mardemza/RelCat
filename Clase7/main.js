$(function() {
  $("body .inner").each(function(index, item) {
    $(item).html("Hola Mundo " + index);
  });

  setInterval(function() {
    $(".fecha").html(new Date());
  }, 1000);

  // -- Init
  $(".opencontainer").hide();
  var getCount = function() {
    var count = $(".products ul li").length;
    $(".products span strong").html(count);
  };
  getCount();

  // -- Agrego el vento Click para remover
  //   $(".delete").click(function() {
  //     $(this)
  //       .parent()
  //       .remove();

  //       getCount();
  //   });

  // -- Crear evento ON
  $(document).on("click", ".delete", function() {
    $(this)
      .parent()
      .hide(500, function() {
        $(this).remove();
        getCount();
      });
  });

  // -- Agrego el vento Click para Agregar
  $(".btnAdd").click(function() {
    var index = $(".products ul li").length + 1;
    $(".products ul").append(
      "<li>Producto " +
        index +
        "<button class='open'>Abrir</button><button class='delete'>Borrar</button></li>"
    );
    $(".products ul li").show(500);

    getCount();
  });

  // -- Crear evento ON para Editar
  $(document).on("click", ".products .open", function() {
    // $.ajax({
    //   url: "/detail.html",
    //   method: "GET",
    //   data: { id: 1 },
    //   success: function(result) {
    //     $(".opencontainer")
    //       .html(result)
    //       .show(500);
    //   }
    // });

    $.get("/detail.html").then(function(result) {
        // var doc = document.createElement("div");
        // doc.innerHTML = result;
        // var title = $(doc).find('.btnCerrar')[0];
      
        // $(".opencontainer")
        // .html(title)
        // .show(500);

        $(".opencontainer")
        .html(result)
        .show(500);
    });
  });

  // -- Cerrar detalle
  $(document).on("click", ".btnCerrar", function() {
    $(".opencontainer").hide(500, function() {
      $(this).html("");
    });
  });
});
