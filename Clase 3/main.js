function send() {
  console.log("Hacer envio de formulario");

  var form = document.querySelector("#myForm");
  console.log(form);

  var inputs = document.querySelectorAll(".form-control");
  console.log(inputs);
}

var check = function(el) {
  console.log(el);
  var username = document.querySelector("#username");
  var btn = document.querySelector("#btn");

  
  //   if (username.value.indexOf(" ") != -1) {
  //     btn.disabled = true;
  //   } else {
  //     btn.disabled = false;
  //   }

  //   btn.disabled = username.value.indexOf(" ") != -1 ? true : false;

  btn.disabled = username.value.indexOf(" ") != -1;
  btn.textContent =
    username.value.indexOf(" ") != -1 ? "NO PUEDE CONTENER ESPACIOS" : "Enviar";
};


(function(){
    var pass = document.querySelector('#pass');
    
    // pass.addEventListener('change',chan);

    pass.onchange = function(){
        console.log(pass.value);
    };
})();

(function(){
    var isDebug = true;
    if (window.console && console.log) {
        var oldlog = console.log;
        console.log = function () {
            if (typeof isDebug != "undefined") {
                Array.prototype.unshift.call(arguments, 'PRD |  Debug: ');
                oldlog.apply(this, arguments);
                this.trace();
            }
        }
    }
})();

// arguments 'PRD | Debug'