(function() {
  var list = [];

   // -- Promise y Ajax
   var get = function(url) {
    return new Promise(function(resolve, reject) {
      // if (false) {
      //   resolve("OK");
      // } else {
      //   reject("Pincho");
      // }

      var req = new XMLHttpRequest();
      req.open("GET", url);

      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };

      req.send();
    });
  };

  // -- Get Products
  function getProducts(search, order, column, func) {
    // --- Logica que retorna
    // var promise =

    get("/products.json").then(
      function(data) {
        var resp = JSON.parse(data);
        func(resp.list);
      },
      function(error) {
        console.log("Error: " + error);
      }
    );
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

  getProducts(
    null,
    "asc",
    "title",
    function(listlocal) {
      // -- Imprimir Listado
      console.log(listlocal);
      list = listlocal;
      // -- Callback de getProduct
      getProduct(1, function(prd) {
        // -- Imprimir un solo producto
        console.log(prd);
      });
    });

})();
