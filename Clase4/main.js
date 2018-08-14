(function() {
  var form = document.querySelector("#myForm");
  var mail = document.querySelector("#mail");
  var btn = document.querySelector("#btnSend");
  var register = document.querySelector("#register");

  btn.onclick = function() {
    var pattern = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    if (!pattern.test(mail.value)) {
      alert("Muchachos revisen el correo");
      return;
    }

    if (!register.checked){
        alert("Compadre acepte los terminos");
        return;
    }
    form.submit();
  };

  var list = ["Volvo", "Saab", "Fiat", "Audi"];
  var areaslist = document.querySelector("#areaslist");
  var areas = document.querySelector("#areas");

  list.forEach(function(item){
    var el = document.createElement("option");
    el.textContent = item;
    areaslist.appendChild(el);
  });

  areas.onkeypress = function (){

  } 
})();
