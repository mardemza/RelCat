var users = "Ariel";

console.log(users);

users = 23 + 32;

console.log(users + 34);

var user1 = {
  name: "Francisco",
  surname: "Vallejo"
};
var user2 = {
  name: "Ricardo",
  surname: "Pisarello"
};

users = [];

users.push(user1);

console.log(users.length);

users.push(user2);

console.log(users.length);
console.log(users[1].name);

// users = users.slice(0,1);
// console.log(users.length);


console.log(
    users.filter(function(val) {
      return val.name == "Ricardo";
    })
  );

console.log(
  users.find(function(val) {
    return val.name == "Ricardo";
  })
);

function myFunc() {
    console.log("Algo");
}
myFunc();

var myFunc1 = function (input) {
    console.log("Algo" + input);
}
myFunc1("asa");

(function (input) {
    console.log("Algo" + input);
})("papa");

var app = app || {};

(function () {
    var users = "Prueba 1";
    
    setTimeout(function(){
        console.log(users + "asas");
    },500);

    app.users = users;
    app.myfunc3 = function(){
        console.log("func 3");
    };
})();

(function () {
    var users = "Prueba 2";
    console.log(users);

    console.log(app.users);
    app.myfunc3();

    var app2 = {
        title: "RelCat",
        env: "PRD",
        getFull: function(){
            return this.title + " "+ this.env;
        }
    };

    console.log(app2.getFull());
})();


