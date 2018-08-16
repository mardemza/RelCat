(function() {
  // -- Timeout
  var count = document.querySelector("#count");

  var sumCount = function() {
    var num = parseInt(count.textContent);
    count.textContent = num + 1;
  };

  var timer = setInterval(sumCount, 1000);

  setTimeout(function() {
    clearInterval(timer);
  }, 5000);
})();

(function() {
  var datehora = document.querySelector("#datehora");
  var mydate = function() {
    var date = new Date();
    return (
      date.getDay() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " " +
      date.toLocaleTimeString()
    );
  };

  var myfunc = function() {
    datehora.textContent = mydate();
  };

  setInterval(myfunc, 1000);
})();

(function() {
  var list = [];

  // -- Get Products
  function getProducts(search, order, column, func, func2) {
    // --- Logica que retorna
    // var promise =
    list = [
      { id: 1, title: "Limon" },
      { id: 2, title: "Naranja" },
      { id: 3, title: "Mandarina" },
      { id: 4, title: "Manzana" }
    ];

    try {
      func(list);
    } catch (er) {
      if (func2) {
        func2("Ocurrio un error inesperado");
      }
    }
  }

  // -- Get Product
  function getProduct(id, func) {
    var product = list.find(function(prd) {
      return prd.id == id;
    });
    if (func) {
      func(product);
    }
  }

  // -- Callback de getProducts con error
  getProducts(null, "asc", "title", undefined, function(error) {
    console.log(error);
  });

  getProducts(
    null,
    "asc",
    "title",
    function(listlocal) {
      // -- Imprimir Listado
      console.log(listlocal);
      // -- Callback de getProduct
      getProduct(1, function(prd) {
        // -- Imprimir un solo producto
        console.log(prd);
      });
    },
    function(error) {
      console.log(error);
    }
  );
})();
