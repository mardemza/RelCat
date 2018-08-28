(function() {
  $(function() {
    $("#btnSearch").click(function() {
      $(".modal").modal();
    });

    $("#btnEnter").click(function() {
      $("#btnSearch").text($("#name").val());

      $("#name").val("");
      $(".modal").modal("hide");
    });

    $("#datepicker")
      .datepicker({
        autoclose: true,
        todayHighlight: true,
        format: "YYYY-MM-DD hh:mm A",
      })
      .datepicker("update", new Date());
  });
})();
