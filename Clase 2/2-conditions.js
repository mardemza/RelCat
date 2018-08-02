if (users.length > 0) {
  console.log("Tiene elementos");
} else {
  console.log("No hay elementos");
}

users.push({ name: "Florencia", surname: "Pron" });
users.push({ name: "Ingrid", surname: "Weyler" });

if (users.length == 0) {
  console.log("No tiene elementos");
} else if (users.length == 4) {
  console.log("Tiene 4 elementos");
} else {
  console.log("Tiene " + users.length + " elementos");
}

for (var i = 0; i < 5; i++) {
  console.log("Number: " + (i + 1));
}

for (var i = 0; i < users.length; i++) {
  var user = users[i];
  console.log(user.name);
}

users.forEach(function(user) {
  console.log(user.name);
});
//-- Esto es un comentario

/*
Otro
Comentario
*/

var input = "VAL";
switch (input) {
  case "VAL1":
    console.log(input);
    break;
  case "VAL2":
    console.log(input);
    break;
  default:
    console.log("MUNDO");
}


var a = 3;
while(a > 0){
  console.log(a);
  a--;
}

var b = 3;
do {
  console.log(b);
  b--;
}
while(b > 0)
